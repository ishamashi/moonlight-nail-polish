// lib/aiImageService.ts
import { queryFalAiImage, type FalAiParameters } from "./falApi"; // Impor dari Fal AI lib
import { queryPollinationsImage, type PollinationsParameters } from "./pollinationsApi"; // Impor dari Pollinations AI lib

// Definisikan tipe untuk penyedia layanan AI
export type AiProvider = "fal" | "pollinations";

// Interface gabungan untuk parameter, bisa lebih spesifik jika perlu
// Untuk sekarang, kita akan bedakan di dalam fungsi
export interface CommonAiParameters {
  fal?: FalAiParameters;
  pollinations?: PollinationsParameters;
}

/**
 * Fungsi abstraksi untuk menghasilkan gambar dari penyedia AI yang dipilih.
 * @param provider Penyedia AI yang akan digunakan ('fal' atau 'pollinations').
 * @param prompt Teks deskripsi gambar.
 * @param parameters Parameter spesifik untuk penyedia AI yang dipilih.
 * @returns Promise yang resolve ke Blob gambar atau null.
 */
export async function generateAiImage(provider: AiProvider, prompt: string, parameters?: CommonAiParameters): Promise<Blob | null> {
  console.log(`Attempting to generate image using ${provider} AI...`);

  if (provider === "fal") {
    // Panggil Fal AI
    // Pastikan token Fal AI sudah dikonfigurasi di environment variables
    if (!process.env.NEXT_PUBLIC_HUGGING_FACE_API_TOKEN && provider === "fal") {
      console.error("Fal AI (Hugging Face) API Token is not configured.");
      throw new Error("Fal AI (Hugging Face) API Token is not configured. Cannot generate image.");
    }
    return queryFalAiImage(prompt, parameters?.fal);
  } else if (provider === "pollinations") {
    // Panggil Pollinations AI
    return queryPollinationsImage(prompt, parameters?.pollinations);
  } else {
    console.error(`Unsupported AI provider: ${provider}`);
    throw new Error(`Unsupported AI provider: ${provider}`);
  }
}
