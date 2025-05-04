// src/app/about/page.tsx
import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button"; // Pastikan path benar
// import { FiAward, FiHeart, FiShield, FiMapPin } from 'react-icons/fi'; // Opsional: Ikon untuk values

// Metadata SEO yang Dioptimalkan
export const metadata: Metadata = {
  title: "About Moonlight Nails | Luxury Private Nail Salon in Jimbaran, Bali",
  description: "Discover the story behind Moonlight Nails, your exclusive sanctuary for luxury nail art in Jimbaran, Bali. Meet the artist and learn about our commitment to personalized, private nail care.",
  // Tambahkan keywords jika dirasa perlu (meskipun Google kurang mengandalkannya sekarang)
  // keywords: "nail salon jimbaran, luxury nails bali, private nail studio bali, nail artist jimbaran, manicure pedicure jimbaran, hygienic nail salon bali",
};

const AboutPage: React.FC = () => {
  const artistName = "Natasya"; // GANTI DENGAN NAMA ASLI

  return (
    <div className="bg-background text-foreground">
      {/* 1. Header Halaman */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center bg-gradient-to-br from-primary via-black to-primary border-b border-border">
        {/* Latar belakang halus (opsional) */}
        {/* <Image src="/images/subtle-pattern.png" alt="" layout="fill" objectFit="cover" className="opacity-5 -z-10"/> */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">Our Story: The Essence of Moonlight Nails</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">Crafting moments of beauty and serenity in the heart of Jimbaran, Bali.</p>
        </div>
      </section>

      {/* 2. Perkenalan & Filosofi */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Kolom Gambar Artis (Sebaiknya Foto Profesional) */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg order-1 md:order-2 max-w-md mx-auto md:max-w-none">
            <Image
              src="/images/artist-photo.jpg" // GANTI DENGAN FOTO ISTRI ANDA
              alt={`${artistName}, expert nail artist at Moonlight Nails, Jimbaran`}
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              style={{ objectFit: "cover" }}
              className="transition duration-500 hover:scale-105"
              priority // Prioritaskan load gambar utama ini
            />
          </div>

          {/* Kolom Teks Filosofi & Perkenalan Artis */}
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">Meet {artistName}: The Heart & Soul Behind the Artistry</h2>
            <div className="prose lg:prose-lg max-w-none text-secondary space-y-4">
              {" "}
              {/* Gunakan plugin typography jika diinstal */}
              <p>Moonlight Nails wasn&apos;t just built as another nail salon in Jimbaran; it was born from a passion for meticulous artistry and a desire to create a truly personal escape. {artistName}, founder and lead artist, envisioned a space where luxury nail care meets unparalleled privacy and tranquility.</p>
              <p>With 2 years of dedicated experience and a keen eye for detail honed through [sebutkan pelatihan atau pengalaman spesifik jika ada, misal: &apos;extensive training in advanced nail techniques&apos;], {artistName}&apos;s approach is centered on understanding your unique style and translating it into beautiful, long-lasting nail art.</p>
              <p>&quot;My goal,&quot; says {artistName}, &quot;is for every client to leave not only with stunning nails but feeling refreshed, confident, and truly cared for during their private nail appointment here in Bali.&quot;</p>
            </div>
            {/* Link ke Galeri mungkin? */}
            <div className="mt-8">
              <Link href="/gallery" className="text-primary hover:text-accent font-semibold transition duration-300">
                View Our Work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pengalaman & Suasana Privat */}
      <section className="py-16 md:py-24 bg-gray-50 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Your Private Nail Sanctuary in Jimbaran</h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto mb-12">Step away from the everyday hustle and immerse yourself in the calm ambiance of Moonlight Nails. Located conveniently in Jimbaran, Bali, our studio is designed as an intimate retreat, operating strictly by appointment to guarantee your exclusive time and undivided attention.</p>
          {/* Mungkin gambar kecil suasana interior */}
          {/* <div className="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-md">
                <Image src="/images/salon-interior-snippet-2.jpg" alt="Serene and private nail studio interior in Jimbaran" width={800} height={450} style={{objectFit: 'cover'}}/>
             </div> */}
          <p className="text-lg text-secondary max-w-3xl mx-auto mt-8">Experience the difference of truly personalized luxury nail services in a serene Bali setting.</p>
        </div>
      </section>

      {/* 4. Komitmen & Nilai */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Item Komitmen 1: Higienitas */}
            <div className="border border-border bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              {/* <FiShield size={32} className="mx-auto mb-4 text-accent"/> */}
              <h3 className="text-xl font-semibold mb-2">Impeccable Hygiene</h3>
              <p className="text-sm text-secondary">Your safety is paramount. We adhere to the strictest sanitation protocols, using hospital-grade disinfectants and single-use tools where possible. A clean standard for nail salons in Bali.</p>
            </div>
            {/* Item Komitmen 2: Kualitas Produk */}
            <div className="border border-border bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              {/* <FiAward size={32} className="mx-auto mb-4 text-accent"/> */}
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-secondary">We exclusively use reputable, high-quality, and often non-toxic nail polishes, gels, and treatments to ensure beautiful, lasting results and nail health.</p>
            </div>
            {/* Item Komitmen 3: Layanan Personal */}
            <div className="border border-border bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              {/* <FiHeart size={32} className="mx-auto mb-4 text-accent"/> */}
              <h3 className="text-xl font-semibold mb-2">Personalized Artistry</h3>
              <p className="text-sm text-secondary">From consultation to final touch, we tailor every service to your preferences and needs, ensuring your vision comes to life. Expert nail art in Jimbaran.</p>
            </div>
            {/* Item Komitmen 4: Privasi */}
            <div className="border border-border bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              {/* <FiMapPin size={32} className="mx-auto mb-4 text-accent"/> */}
              <h3 className="text-xl font-semibold mb-2">Utmost Privacy</h3>
              <p className="text-sm text-secondary">Our appointment-only system guarantees a quiet, undisturbed experience in our private nail studio, allowing you to fully relax and unwind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Akhir */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl text-primary font-bold mb-4">Ready for Your Moonlight Moment?</h3>
          <p className="text-muted max-w-xl mx-auto mb-8">Discover the art of luxury nail care in a truly private setting. We invite you to explore our services and book your exclusive appointment at our Jimbaran studio.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
            <Button href="/booking" variant="primary" size="lg">
              Book Your Appointment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
