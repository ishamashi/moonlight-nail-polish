// app/ai-stylist/page.tsx
import React from "react";
import type { Metadata } from "next";
import { FiStar } from "react-icons/fi"; // Ikon yang relevan
import AiStylistClientComponent from "@/components/AiStylistClientComponent"; // Komponen Client yang akan kita buat

export const metadata: Metadata = {
  title: "AI Nail Stylist | Moonlight Nails - Jimbaran, Bali",
  description: "Get personalized nail art recommendations with our AI Nail Stylist. Describe your dream nails and let our AI generate unique design ideas for your next appointment at Moonlight Nails, Jimbaran.",
  // keywords: "ai nail art, nail design generator, personalized nails bali, ai stylist jimbaran",
};

// Server Component untuk struktur utama dan data statis
export default function AiStylistPage() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Header Halaman */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center bg-gradient-to-br from-primary via-black to-primary border-b border-border">
        {/* Sesuaikan gradient dengan branding */}
        <div className="container mx-auto px-4 relative z-10">
          <FiStar className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">Moonlight AI Nail Stylist</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">Describe your perfect nail art, and let our AI spark your imagination with unique design concepts.</p>
        </div>
      </section>

      {/* Render Client Component untuk bagian interaktif */}
      <AiStylistClientComponent />
    </div>
  );
}
