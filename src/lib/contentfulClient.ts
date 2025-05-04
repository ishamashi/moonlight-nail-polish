// lib/contentfulClient.ts
import { createClient, type Asset, type EntrySkeletonType } from "contentful";

// --- Variabel Environment (Mengikuti Struktur Anda) ---
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error("NEXT_PUBLIC_CONTENTFUL_SPACE_ID and NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN must be defined in .env.local");
}

// --- Klien Contentful ---
// **PERINGATAN KEAMANAN:** Menggunakan NEXT_PUBLIC_ accessToken di sini akan mengeksposnya ke browser.
// Untuk fetching data di Server Component, sebaiknya gunakan token tanpa NEXT_PUBLIC_
export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: "master", // Biasanya 'master', cek di Contentful jika beda
});
console.log("Contentful client initialized (using NEXT_PUBLIC variables).");

// --- Helper Gambar ---
// Helper sederhana untuk mengambil URL gambar
export function getImageUrl(asset: Asset | undefined | null): string | undefined {
  if (!asset?.fields?.file?.url || typeof asset.fields.file.url !== "string") {
    return undefined;
  }
  const fileUrl = asset.fields.file.url;
  return fileUrl.startsWith("//") ? `https:${fileUrl}` : fileUrl;
}

// Helper untuk mendapatkan Alt Text/Deskripsi Gambar
// export function getImageAlt(asset: Asset | undefined | null, fallbackTitle?: string): string {
//   return asset?.fields?.description || asset?.fields?.title || fallbackTitle || "Service image";
// }

// --- Tipe Skeleton (Tambahkan untuk Service) ---

// Tipe Skeleton untuk Service Entry
export interface ServiceEntrySkeleton extends EntrySkeletonType {
  fields: {
    title: string; // Pastikan tipe sesuai Content Model
    slug: string;
    description: string; // Biarkan 'any' untuk Rich Text atau ganti jika tipe lain (e.g., string)
    duration?: string;
    price?: string;
    image?: Asset; // Tipe Asset untuk field Media Contentful
    // order?: number; // Field untuk pengurutan
  };
  contentTypeId: "nailServices"; // <-- PENTING: Ganti 'service' dengan ID Content Model Anda
}

// Definisikan juga tipe untuk TagEntry, AuthorEntry jika perlu
