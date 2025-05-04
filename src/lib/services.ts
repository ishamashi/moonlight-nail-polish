// lib/services.ts
import { contentfulClient, getImageUrl, type ServiceEntrySkeleton } from "./contentfulClient"; // Pastikan path impor benar
import type { Document as RichTextDocument } from "@contentful/rich-text-types";

// Tipe Data untuk Service yang Sudah Diproses (Tetap Sama)
export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  description: RichTextDocument | string;
  duration?: string;
  price?: string;
  imageUrl?: string;
  imageAlt?: string;
}

// Fungsi untuk Mengambil Semua Layanan (Sorted) - Kode inti sama
export async function getAllServicesData(): Promise<ServiceData[]> {
  console.log("Fetching all services from Contentful...");
  try {
    const entries = await contentfulClient.getEntries<ServiceEntrySkeleton>({
      // Gunakan Skeleton yang diimpor
      content_type: "nailServices", // Pastikan ID ini cocok dengan Skeleton dan Contentful
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //   order: ["fields.order"] as any, // Urutkan berdasarkan field 'order'
      include: 1,
    });
    console.log(`Fetched ${entries.items.length} services.`);

    return entries.items.map((item): ServiceData => {
      const fields = item.fields;
      return {
        id: item.sys.id,
        slug: fields.slug ?? "",
        title: fields.title ?? "Untitled Service",
        description: fields.description ?? "No description available.",
        duration: fields.duration,
        price: fields.price,
        imageUrl: getImageUrl(fields.image), // Gunakan helper dari client
        imageAlt: fields.title, // Gunakan helper dari client
        // order: fields.order,
      };
    });
  } catch (error) {
    console.error("Error fetching services from Contentful:", error);
    return [];
  }
}

// Fungsi getServiceData(slug: string) bisa ditambahkan di sini jika perlu halaman detail
