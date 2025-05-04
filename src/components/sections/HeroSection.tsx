import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button"; // Asumsi ada komponen Button

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image/Video */}
      <Image
        src="/images/hero-background.jpg" // Ganti dengan gambar berkualitas tinggi Anda
        alt="Elegant nail art design"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority // Prioritaskan loading gambar hero
        className="-z-10" // Taruh di belakang konten
      />
      {/* Overlay Gelap untuk Kontras Teks */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-black to-primary bg-opacity-40 z-0"></div>

      {/* Konten Teks & CTA */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight text-shadow-md">
          {/* Ganti dengan Headline Anda */}
          Moonlight Nails: Your Private Escape for Exquisite Nail Art
        </h1>
        <p className="text-lg md:text-xl mb-8 text-shadow">
          {/* Ganti dengan Sub-headline Anda */}
          Indulge in bespoke nail services within a serene and private sanctuary. By appointment only.
        </p>
        {/* Asumsi Anda punya komponen Button atau gunakan <button> biasa */}
        <Button href="/booking" variant="primary" size="lg">
          Book Your Appointment
        </Button>
        {/* <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Book Your Appointment
        </button> */}
      </div>
      {/* Optional: Subtle animation or scroll indicator */}
    </section>
  );
};

export default HeroSection;
