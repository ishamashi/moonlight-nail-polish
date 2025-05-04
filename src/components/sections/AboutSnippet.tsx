import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutSnippet: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      {" "}
      {/* Atau warna latar sedikit berbeda */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Teks */}
        <div className="prose lg:prose-lg max-w-none">
          {" "}
          {/* Plugin Typography Tailwind */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">A Sanctuary of Beauty & Serenity</h2>
          <p className="text-secondary mb-6">Discover a unique nail experience where artistry meets tranquility. At Moonlight Nails, we believe in personalized care, using only premium products within a calm, private setting designed for your ultimate relaxation.</p>
          <p className="text-secondary mb-6">Led by Natasya, our passion is crafting beautiful, long-lasting nail art tailored to your individual style. We are committed to the highest standards of hygiene and client comfort.</p>
          <Link href="/about" className="text-primary hover:text-accent font-semibold transition duration-300">
            Learn More About Us →
          </Link>
        </div>

        {/* Kolom Gambar (Opsional tapi bagus) */}
        <div className="hidden md:block relative aspect-square rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/salon-interior-snippet.jpg" // Ganti dengan gambar interior/suasana
            alt="Serene interior of Moonlight Nail Polish salon"
            layout="fill"
            objectFit="cover"
            className="transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
