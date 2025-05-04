import HeroSection from "@/components/sections/HeroSection";
import AboutSnippet from "@/components/sections/AboutSnippet";
import ServiceHighlights from "@/components/sections/ServiceHighlights";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import BookingCTA from "@/components/sections/BookingCTA";
// Mungkin ada komponen lain jika diperlukan

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section: Visual Utama & Pesan Pembuka */}
      <HeroSection />

      {/* 2. About Snippet: Pengantar Singkat tentang USP */}
      <AboutSnippet />

      {/* 3. Service Highlights: Menampilkan Layanan Unggulan */}
      <ServiceHighlights />

      {/* 4. Gallery Preview: Menampilkan Karya Terbaik (Mini) */}
      <GalleryPreview />

      {/* 5. Testimonials: Bukti Sosial */}
      <Testimonials />

      {/* 6. Booking Call to Action (CTA): Ajakan Terakhir untuk Memesan */}
      <BookingCTA />
    </>
  );
}
