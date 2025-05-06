// app/gallery/page.tsx
import React from "react";
import type { Metadata } from "next";
import { getAllGalleryImages } from "@/lib/gallery"; // Impor fungsi fetch data
import GalleryClientComponent from "@/components/GalleryClientComponent"; // Impor komponen client baru
import { FiCamera } from "react-icons/fi";

// Metadata bisa tetap di sini atau dibuat fungsi generateMetadata
// export const metadata: Metadata = {
//   title: "Gallery | Moonlight Nails - Jimbaran, Bali",
//   description: "Explore the nail artistry of Moonlight Nails. A gallery of beautiful manicure, pedicure, and nail art designs from our private studio in Jimbaran, Bali.",
//   // keywords: "nail art gallery bali, jimbaran nails photos, manicure designs bali, pedicure gallery",
// };

// Revalidate data secara periodik (opsional)
export const revalidate = 3600; // Contoh: 1 jam

// Ini adalah Server Component ASYNC
export default async function GalleryPage() {
  // Fetch data di Server Component
  const initialImages = await getAllGalleryImages();

  return (
    <div className="bg-background text-foreground">
      {/* 1. Header Halaman (Tetap di Server Component karena statis) */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center bg-gradient-to-br from-accent via-black to-accent border-b border-border">
        {/* Sesuaikan gradient */}
        <div className="container mx-auto px-4 relative z-10">
          <FiCamera className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">Our Artistry Gallery</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">A showcase of nail designs crafted with passion and precision at Moonlight Nails, Jimbaran.</p>
        </div>
      </section>

      {/* Render Client Component dan lemparkan data awal */}
      <GalleryClientComponent initialImages={initialImages} />

      {/* Anda bisa menambahkan bagian lain di sini jika perlu (yang tidak interaktif) */}
    </div>
  );
}
