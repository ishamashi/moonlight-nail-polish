// lib/gallery.ts
import {
  contentfulClient,
  getImageUrl,
//   getImageAlt,
  type GalleryEntrySkeleton, // Impor Skeleton Gallery
} from "./contentfulClient"; // Pastikan path benar
import type { Asset } from "contentful";

// --- Tipe Data untuk Item Gambar Individual ---
// Setiap objek mewakili satu gambar, dengan referensi ke entri asalnya & tag
export interface GalleryImageData {
  id: string; // ID unik untuk gambar (bisa kombinasi entryId + assetId)
  entryId: string; // ID dari entri Gallery asal
  assetId: string; // ID dari Asset gambar
  url: string; // URL gambar
  alt: string; // Alt text gambar
  title: string; // Judul dari entri Gallery asal
  tags: string[]; // Tag dari entri Gallery asal
}

// --- Fungsi untuk Mengambil Semua Gambar Galeri (Flattened) ---
export async function getAllGalleryImages(): Promise<GalleryImageData[]> {
  console.log("Fetching all gallery items from Contentful...");
  try {
    const entries = await contentfulClient.getEntries<GalleryEntrySkeleton>({
      content_type: "galleryNailart", // <-- PASTIKAN ID INI BENAR
      include: 1, // Include linked assets (gambar)
      order: ["-sys.createdAt"], // Urutkan entri terbaru dulu (opsional)
    });
    console.log(`Fetched ${entries.items.length} gallery entries.`);

    // Proses dan "ratakan" gambar dari semua entri
    const allImages: GalleryImageData[] = [];

    entries.items.forEach((item) => {
      const entryId = item.sys.id;
      const fields = item.fields;
      const entryTitle = fields.title ?? "Untitled";
      const entryTags = fields.tags ?? [];

      // Iterasi melalui array 'images' di setiap entri
      (fields.images ?? []).forEach((imageAsset: Asset) => {
        const imageUrl = getImageUrl(imageAsset);
        const imageAlt = entryTitle;
        const assetId = imageAsset.sys.id;

        // Hanya tambahkan jika URL gambar valid
        if (imageUrl) {
          allImages.push({
            id: `${entryId}-${assetId}`, // Buat ID unik per gambar
            entryId: entryId,
            assetId: assetId,
            url: imageUrl,
            alt: imageAlt,
            title: entryTitle, // Simpan judul entri asal
            tags: entryTags, // Simpan tag entri asal
          });
        }
      });
    });

    console.log(`Processed ${allImages.length} individual gallery images.`);
    return allImages;
  } catch (error) {
    console.error("Error fetching gallery items from Contentful:", error);
    return [];
  }
}
