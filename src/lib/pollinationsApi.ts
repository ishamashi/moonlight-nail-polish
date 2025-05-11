// lib/pollinationsApi.ts
import axios, { type AxiosResponse } from "axios";

const POLLINATIONS_BASE_URL = "https://image.pollinations.ai/prompt/";

export interface PollinationsParameters {
  model?: string;
  seed?: number;
  width?: number;
  height?: number;
  nologo?: boolean;
  private?: boolean;
  enhance?: boolean;
  safe?: boolean;
}

export async function queryPollinationsImage(prompt: string, params: PollinationsParameters = {}): Promise<Blob | null> {
  const encodedPrompt = encodeURIComponent("Not closeup nail art " + prompt + " Only one hand and No more than 5 fingers");
  const queryParams = new URLSearchParams();

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
      responseType: "blob",
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
          const textContent = await response.data.text();
          console.error("Pollinations AI non-image response content (status 200):", textContent);
          errorDetail += ` Content: ${textContent}`;
          // Perbaikan: Ganti 'e' menjadi '_textParseError' atau nama lain dengan underscore
        } catch (_textParseError) {
          // Variabel 'e' di baris 66 diganti
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
        if (error.response.data instanceof Blob) {
          try {
            const errorText = await error.response.data.text();
            console.error("Pollinations AI Error Data (from Blob as Text):", errorText);
            errorMessage = `Pollinations AI Error ${error.response.status}: ${errorText.substring(0, 200)}...`;
            // Perbaikan: Ganti 'e' menjadi '_blobReadError' atau nama lain dengan underscore
          } catch (_blobReadError) {
            // Variabel 'e' di baris 88 diganti
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
