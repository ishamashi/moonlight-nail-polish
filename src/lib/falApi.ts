// lib/falApi.ts
import axios, { type AxiosResponse } from "axios";

const FAL_AI_ENDPOINT_URL = "https://router.huggingface.co/fal-ai/fal-ai/hidream-i1-full";
// SANGAT DISARANKAN: Simpan token ini di environment variable server-side (misal: FAL_AI_HF_TOKEN)
// dan buat API Route di Next.js untuk memanggil fungsi ini dari client.
// Menggunakan NEXT_PUBLIC_ akan mengekspos token ke browser.
const HUGGING_FACE_API_TOKEN = process.env.NEXT_PUBLIC_HUGGING_FACE_API_TOKEN; // GANTI DENGAN TOKEN ASLI ANDA atau Env Var

// if (!HUGGING_FACE_API_TOKEN) {
//   console.warn("HUGGING_FACE_API_TOKEN is not set or is using the placeholder value. " + "AI image generation features may not work. " + "Please set NEXT_PUBLIC_HUGGING_FACE_API_TOKEN in your .env.local file.");
// }

// Interface untuk parameter opsional yang bisa dikirim ke model Fal AI
// Sesuaikan ini berdasarkan dokumentasi model spesifik yang Anda gunakan di Fal AI
export interface FalAiParameters {
  guidance_scale?: number; // Example: 7.5
  negative_prompt?: string; // Example: "ugly, blurry, low quality"
  num_inference_steps?: number; // Example: 20-50
  width?: number; // Example: 512
  height?: number; // Example: 512
  scheduler?: string; // Example: "UniPCMultistepScheduler" (perlu tahu yang valid)
  seed?: number; // Example: 42
}

// Interface untuk payload request yang dikirim ke API Fal AI
interface FalAiRequestPayload {
  prompt: string; // Nama field yang diharapkan server berdasarkan error 422 sebelumnya
  parameters?: FalAiParameters;
  // sync_mode mungkin tidak diperlukan jika endpoint defaultnya sync
  // atau bisa ditambahkan jika ada di dokumentasi spesifik model/router
}

/**
 * Mengirim request ke Fal AI untuk menghasilkan gambar berdasarkan prompt.
 * @param userPrompt Teks deskripsi untuk gambar yang diinginkan.
 * @param parameters Parameter opsional untuk mengontrol proses generasi gambar.
 * @returns Promise yang resolve ke Blob gambar jika berhasil, atau null jika gagal.
 */
export async function queryFalAiImage(userPrompt: string, parameters?: FalAiParameters): Promise<Blob | null> {
  // Bentuk payload dengan field 'prompt' yang benar
  const payload: FalAiRequestPayload = { prompt: userPrompt };
  if (parameters && Object.keys(parameters).length > 0) {
    payload.parameters = parameters;
  }

  console.log("Sending image generation request to Fal AI. Payload:", JSON.stringify(payload, null, 2));

  try {
    const response: AxiosResponse<Blob> = await axios.post(FAL_AI_ENDPOINT_URL, payload, {
      headers: {
        Authorization: `Bearer ${HUGGING_FACE_API_TOKEN}`,
        "Content-Type": "application/json", // Sesuai spesifikasi request, payload adalah JSON
        Accept: "image/*", // Memberitahu server kita lebih suka respons gambar
      },
      responseType: "blob", // Mengharapkan data biner mentah (gambar) sebagai respons
    });

    console.log("Fal AI response status:", response.status);
    const contentType = response.headers["content-type"];
    console.log("Fal AI actual response content-type:", contentType);

    // Jika status 200 OK dan ada data blob, serta content-type adalah gambar
    if (response.status === 200 && response.data && response.data.size > 0) {
      if (contentType && contentType.startsWith("images/")) {
        return response.data; // Kembalikan blob gambar
      } else {
        // Kasus aneh: status 200 tapi content-type bukan gambar. Coba baca sebagai teks.
        let errorDetail = `AI generation returned status 200 but content-type is '${contentType}', not an image.`;
        try {
          const textContent = await response.data.text();
          console.error("Fal AI non-image response content (status 200):", textContent);
          errorDetail += ` Content: ${textContent}`;
        } catch (e) {
          console.error("Could not read non-image response content as text.");
        }
        throw new Error(errorDetail);
      }
    } else {
      // Respons kosong atau status bukan 200 (seharusnya ditangkap oleh blok catch di bawah, tapi sebagai jaga-jaga)
      throw new Error(`Fal AI returned status ${response.status} or an empty image blob. Content-Type: ${contentType}`);
    }
  } catch (error) {
    let errorMessage = "An unexpected error occurred while generating the image."; // Default error message

    if (axios.isAxiosError(error)) {
      console.error("Axios error calling Fal AI:", error.message);
      errorMessage = `Fal AI API Call Error: ${error.message}`; // Pesan error dasar dari Axios

      if (error.response) {
        // Server merespons dengan status error (4xx atau 5xx)
        console.error("Fal AI Error Status:", error.response.status);
        console.error("Fal AI Error Headers:", error.response.headers);

        let errorDetailString = "Could not extract specific error details from Fal AI response.";
        const responseData = error.response.data;

        if (responseData) {
          if (responseData instanceof Blob) {
            // Jika data error adalah Blob (mungkin karena content-type error adalah application/json atau teks)
            try {
              const errorText = await responseData.text();
              console.error("Fal AI Error Data (from Blob as Text):", errorText);
              try {
                // Coba parse sebagai JSON karena error 422 seringkali JSON
                const errorJson = JSON.parse(errorText);
                if (errorJson.detail) {
                  errorDetailString = typeof errorJson.detail === "string" ? errorJson.detail : JSON.stringify(errorJson.detail);
                } else if (errorJson.error) {
                  errorDetailString = typeof errorJson.error === "string" ? errorJson.error : JSON.stringify(errorJson.error);
                } else {
                  errorDetailString = errorText; // Jika bukan JSON yang dikenal, tampilkan teks mentah
                }
              } catch (jsonParseError) {
                errorDetailString = errorText; // Jika gagal parse JSON, tampilkan teks mentah
              }
            } catch (e) {
              errorDetailString = "Could not read error data from Blob.";
            }
          } else if (typeof responseData === "object") {
            // Jika data error sudah objek (axios berhasil parse JSON error)
            console.error("Fal AI Error Data (Parsed JSON):", responseData);
            if ((responseData as any).detail) {
              errorDetailString = typeof (responseData as any).detail === "string" ? (responseData as any).detail : JSON.stringify((responseData as any).detail);
            } else if ((responseData as any).error) {
              errorDetailString = typeof (responseData as any).error === "string" ? (responseData as any).error : JSON.stringify((responseData as any).error);
            } else {
              errorDetailString = JSON.stringify(responseData);
            }
          } else {
            // Format lain yang tidak dikenal
            console.error("Fal AI Error Data (Unknown Format):", responseData);
            errorDetailString = String(responseData);
          }
        }
        errorMessage = `Fal AI Error ${error.response.status}: ${errorDetailString}`;
      } else if (error.request) {
        // Request dibuat tapi tidak ada respons diterima (masalah jaringan, timeout, dll.)
        console.error("Fal AI No response received:", error.request);
        errorMessage = "No response received from Fal AI server. Please check your internet connection.";
      }
    } else {
      // Error JavaScript biasa, bukan dari Axios (misalnya, error di dalam logika kita sendiri)
      console.error("Non-Axios error during Fal AI call:", error);
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    }
    throw new Error(errorMessage); // Lempar error yang sudah diproses agar bisa ditangkap di komponen
  }
}
