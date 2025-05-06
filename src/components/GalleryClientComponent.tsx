// components/GalleryClientComponent.tsx
"use client"; // Tanda ini penting!

import React, { useState, useMemo } from "react";
import Image from "next/image";
import type { GalleryImageData } from "@/lib/gallery"; // Impor tipe data

interface GalleryClientComponentProps {
  initialImages: GalleryImageData[];
}

const GalleryClientComponent: React.FC<GalleryClientComponentProps> = ({ initialImages }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Ekstrak semua tag unik dari data awal
  const uniqueTags = useMemo(() => {
    const allTags = initialImages.flatMap((image) => image.tags);
    return Array.from(new Set(allTags)).sort();
  }, [initialImages]);

  // Filter gambar berdasarkan tag yang dipilih
  const filteredImages = useMemo(() => {
    if (!selectedTag) {
      return initialImages;
    }
    return initialImages.filter((image) => image.tags.includes(selectedTag));
  }, [initialImages, selectedTag]);

  return (
    <>
      {/* 2. Filter Tags */}
      {uniqueTags.length > 0 && (
        <section className="py-8 border-b border-border sticky top-[80px] bg-background/95 backdrop-blur-sm z-30">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {/* Tombol "All" */}
              <button onClick={() => setSelectedTag(null)} className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 border ${selectedTag === null ? "bg-primary text-white border-primary" : "bg-gray-100 text-secondary border-border hover:border-primary hover:text-primary dark:bg-gray-800 dark:hover:border-primary"}`}>
                All Designs
              </button>
              {/* Tombol untuk setiap tag */}
              {uniqueTags.map((tag) => (
                <button key={tag} onClick={() => setSelectedTag(tag)} className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 border ${selectedTag === tag ? "bg-primary text-white border-primary" : "bg-gray-100 text-secondary border-border hover:border-primary hover:text-primary dark:bg-gray-800 dark:hover:border-primary"}`}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Grid Gambar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <p className="text-center text-muted text-lg py-16">{selectedTag ? `No images found for the tag "${selectedTag}".` : "The gallery is currently empty."}</p>
          ) : (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg shadow-md group relative block break-inside-avoid">
                  <Image src={image.url} alt={image.alt} width={500} height={500} style={{ width: "100%", height: "auto" }} className="transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90" />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-end justify-center p-4">
                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 truncate">{image.title}</p>
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default GalleryClientComponent;
