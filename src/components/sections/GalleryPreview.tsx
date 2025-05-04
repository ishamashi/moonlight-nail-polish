import React from "react";
import Image from "next/image";
// import Link from "next/link";
import Button from "@/components/ui/Button"; // Asumsi ada komponen Button

// Contoh data gambar
const galleryImages = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "Elegant nude nail art" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Bold geometric nail design" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "Delicate floral nail art" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "Sparkling glitter nails" },
];

const GalleryPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-primary text-3xl md:text-4xl font-bold mb-4">A Glimpse of Our Artistry</h2>
        <p className="text-secondary max-w-2xl mx-auto mb-12">Explore a selection of nail designs crafted with precision and passion at Moonlight Nails.</p>

        {/* Ganti dengan Carousel atau Grid yang lebih interaktif */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative aspect-square rounded-lg overflow-hidden shadow-sm group">
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="transition duration-500 group-hover:scale-110 group-hover:opacity-90" />
              {/* Overlay saat hover (opsional) */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div> */}
            </div>
          ))}
        </div>

        <Button href="/gallery" variant="primary" size="lg">
          View Full Gallery
        </Button>
        {/* <Link href="/gallery" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300">
          View Full Gallery
        </Link> */}
      </div>
    </section>
  );
};

export default GalleryPreview;
