// lib/falApi.ts
import axios, { type AxiosResponse } from "axios";

const FAL_AI_ENDPOINT_URL = "https://router.huggingface.co/fal-ai/fal-ai/hidream-i1-full";
const HUGGING_FACE_API_TOKEN = process.env.NEXT_PUBLIC_HUGGING_FACE_API_TOKEN;

// Interface untuk parameter opsional
export interface FalAiParameters {
  guidance_scale?: number;
  negative_prompt?: string;
  num_inference_steps?: number;
  width?: number;
  height?: number;
  scheduler?: string;
  seed?: number;
}

// Interface untuk payload request
interface FalAiRequestPayload {
  prompt: string;
  parameters?: FalAiParameters;
}

// Definisikan tipe untuk struktur error JSON yang mungkin dari Fal AI
// Ini membantu menghindari 'any' dan memberikan sedikit type safety
interface FalAiErrorDetailItem {
  loc: string[];
  msg: string;
  type: string;
}
interface FalAiErrorResponse {
  detail?: FalAiErrorDetailItem[] | string; // 'detail' bisa string atau array objek
  error?: string; // Field 'error' alternatif
  // Mungkin ada field lain, sesuaikan jika perlu
}

export async function queryFalAiImage(userPrompt: string, parameters?: FalAiParameters): Promise<Blob | null> {
  const payload: FalAiRequestPayload = { prompt: userPrompt };
  if (parameters && Object.keys(parameters).length > 0) {
    payload.parameters = parameters;
  }

  console.log("Sending image generation request to Fal AI. Payload:", JSON.stringify(payload, null, 2));

  try {
    const response: AxiosResponse<Blob> = await axios.post(FAL_AI_ENDPOINT_URL, payload, {
      headers: {
        Authorization: `Bearer ${HUGGING_FACE_API_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "image/*",
      },
      responseType: "blob",
    });

    console.log("Fal AI response status:", response.status);
    const contentType = response.headers["content-type"];
    console.log("Fal AI actual response content-type:", contentType);

    if (response.status === 200 && response.data && response.data.size > 0) {
      // Perbaikan: Cek content type dengan benar (sebelumnya 'images/' salah, harusnya 'image/')
      if (contentType && contentType.startsWith("image/")) {
        return response.data;
      } else {
        let errorDetail = `AI generation returned status 200 but content-type is '${contentType}', not an image.`;
        try {
          const textContent = await response.data.text();
          console.error("Fal AI non-image response content (status 200):", textContent);
          errorDetail += ` Content: ${textContent}`;
          // Perbaikan: Gunakan variabel error yang berbeda atau prefix dengan underscore jika tidak digunakan
        } catch (_textParseError) {
          // Variabel 'e' diganti menjadi '_textParseError'
          console.error("Could not read non-image response content as text.");
        }
        throw new Error(errorDetail);
      }
    } else {
      throw new Error(`Fal AI returned status ${response.status} or an empty image blob. Content-Type: ${contentType}`);
    }
  } catch (error) {
    let errorMessage = "An unexpected error occurred while generating the image.";

    if (axios.isAxiosError(error)) {
      console.error("Axios error calling Fal AI:", error.message);
      errorMessage = `Fal AI API Call Error: ${error.message}`;

      if (error.response) {
        console.error("Fal AI Error Status:", error.response.status);
        console.error("Fal AI Error Headers:", error.response.headers);

        let errorDetailString = "Could not extract specific error details from Fal AI response.";
        const responseData = error.response.data; // responseData bisa Blob atau sudah objek JSON

        if (responseData) {
          if (responseData instanceof Blob) {
            try {
              const errorText = await responseData.text();
              console.error("Fal AI Error Data (from Blob as Text):", errorText);
              try {
                const errorJson = JSON.parse(errorText) as FalAiErrorResponse; // Gunakan tipe FalAiErrorResponse
                if (errorJson.detail) {
                  errorDetailString = typeof errorJson.detail === "string" ? errorJson.detail : JSON.stringify(errorJson.detail);
                } else if (errorJson.error) {
                  errorDetailString = errorJson.error;
                } else {
                  errorDetailString = errorText;
                }
                // Perbaikan: Gunakan variabel error yang berbeda atau prefix dengan underscore
              } catch (_jsonParseError) {
                // Variabel 'jsonParseError' diganti menjadi '_jsonParseError'
                errorDetailString = errorText;
              }
              // Perbaikan: Gunakan variabel error yang berbeda atau prefix dengan underscore
            } catch (_blobReadError) {
              // Variabel 'e' diganti menjadi '_blobReadError'
              errorDetailString = "Could not read error data from Blob.";
            }
          } else if (typeof responseData === "object" && responseData !== null) {
            // Jika data error sudah objek (axios berhasil parse JSON error)
            console.error("Fal AI Error Data (Parsed JSON):", responseData);
            const typedResponseData = responseData as FalAiErrorResponse; // Gunakan tipe FalAiErrorResponse
            if (typedResponseData.detail) {
              errorDetailString = typeof typedResponseData.detail === "string" ? typedResponseData.detail : JSON.stringify(typedResponseData.detail);
            } else if (typedResponseData.error) {
              errorDetailString = typedResponseData.error;
            } else {
              errorDetailString = JSON.stringify(typedResponseData);
            }
          } else {
            console.error("Fal AI Error Data (Unknown Format):", responseData);
            errorDetailString = String(responseData);
          }
        }
        errorMessage = `Fal AI Error ${error.response.status}: ${errorDetailString}`;
      } else if (error.request) {
        console.error("Fal AI No response received:", error.request);
        errorMessage = "No response received from Fal AI server. Please check your internet connection.";
      }
    } else {
      console.error("Non-Axios error during Fal AI call:", error);
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    }
    throw new Error(errorMessage);
  }
}
