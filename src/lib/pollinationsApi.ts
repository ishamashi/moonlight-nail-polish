// lib/pollinationsApi.ts
import axios, { type AxiosResponse } from "axios"; // Menggunakan axios untuk konsistensi dan error handling

const POLLINATIONS_BASE_URL = "https://image.pollinations.ai/prompt/";

// Interface untuk parameter Pollinations AI (sesuai dokumentasi Anda)
export interface PollinationsParameters {
  model?: string; // e.g., "flux", "turbo", "dreamshaper"
  seed?: number;
  width?: number;
  height?: number;
  nologo?: boolean;
  private?: boolean;
  enhance?: boolean;
  safe?: boolean;
  // referrer?: string; // Jika Anda ingin menggunakannya
}

/**
 * Mengambil gambar dari Pollinations AI berdasarkan prompt dan parameter.
 * @param prompt Teks deskripsi untuk gambar.
 * @param params Parameter opsional untuk Pollinations AI.
 * @returns Promise yang resolve ke Blob gambar jika berhasil, atau null jika gagal.
 */
export async function queryPollinationsImage(
  prompt: string,
  params: PollinationsParameters = {} // Beri default object kosong
): Promise<Blob | null> {
  const encodedPrompt = encodeURIComponent("Not closeup nail art " + prompt + " Only one hand and No more than 5 fingers");
  const queryParams = new URLSearchParams();

  // Tambahkan parameter yang diberikan ke query string
  // Hanya tambahkan parameter yang memiliki nilai (bukan undefined)
  if (params.model) queryParams.append("model", params.model);
  if (params.seed !== undefined) queryParams.append("seed", String(params.seed));
  if (params.width !== undefined) queryParams.append("width", String(params.width));
  if (params.height !== undefined) queryParams.append("height", String(params.height));
  if (params.nologo !== undefined) queryParams.append("nologo", String(params.nologo));
  if (params.private !== undefined) queryParams.append("private", String(params.private));
  if (params.enhance !== undefined) queryParams.append("enhance", String(params.enhance));
  if (params.safe !== undefined) queryParams.append("safe", String(params.safe));

  const url = `${POLLINATIONS_BASE_URL}${encodedPrompt}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;

  console.log("Fetching image from Pollinations AI:", url);

  try {
    const response: AxiosResponse<Blob> = await axios.get(url, {
      responseType: "blob", // Mengharapkan data biner mentah
    });

    console.log("Pollinations AI response status:", response.status);
    console.log("Pollinations AI response headers:", response.headers);

    if (response.status === 200 && response.data && response.data.size > 0) {
      const contentType = response.headers["content-type"];
      console.log("Pollinations AI actual response content-type:", contentType);
      if (contentType && contentType.startsWith("image/")) {
        return response.data;
      } else {
        let errorDetail = `Pollinations AI returned status 200 but content-type is '${contentType}', not an image.`;
        try {
          const textContent = await response.data.text(); // Coba baca blob sebagai teks
          console.error("Pollinations AI non-image response content (status 200):", textContent);
          errorDetail += ` Content: ${textContent}`;
        } catch (e) {
          console.error("Could not read non-image response content as text from Pollinations.");
        }
        throw new Error(errorDetail);
      }
    } else {
      throw new Error(`Pollinations AI returned status ${response.status} or an empty image blob.`);
    }
  } catch (error) {
    let errorMessage = "An unexpected error occurred while fetching from Pollinations AI.";
    if (axios.isAxiosError(error)) {
      console.error("Axios error calling Pollinations AI:", error.message);
      errorMessage = `Pollinations AI API Call Error: ${error.message}`;
      if (error.response) {
        console.error("Pollinations AI Error Status:", error.response.status);
        console.error("Pollinations AI Error Headers:", error.response.headers);
        // Coba baca detail error, Pollinations mungkin mengirim teks/html error
        if (error.response.data instanceof Blob) {
          try {
            const errorText = await error.response.data.text();
            console.error("Pollinations AI Error Data (from Blob as Text):", errorText);
            errorMessage = `Pollinations AI Error ${error.response.status}: ${errorText.substring(0, 200)}...`; // Batasi panjang pesan
          } catch (e) {
            errorMessage = `Pollinations AI Error ${error.response.status}. Could not read error data.`;
          }
        } else {
          errorMessage = `Pollinations AI Error ${error.response.status}.`;
        }
      } else if (error.request) {
        errorMessage = "No response received from Pollinations AI server.";
      }
    } else if (error instanceof Error) {
      console.error("Non-Axios error during Pollinations AI call:", error);
      errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
}
