import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Gunakan jika Anda memiliki gambar statis di public
import { Button } from '@/components/ui/button'; // Asumsi Anda menggunakan Shadcn UI Button atau komponen serupa

// Komponen Placeholder (Anda perlu membuatnya atau mengintegrasikan library)
const GalleryPreview = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
    {/* Ganti dengan komponen Image Next.js dan source gambar asli */}
    <div className="aspect-square bg-stone-200 rounded-lg animate-pulse"></div>
    <div className="aspect-square bg-stone-200 rounded-lg animate-pulse"></div>
    <div className="aspect-square bg-stone-200 rounded-lg animate-pulse md:col-span-1 col-span-2"></div>
    {/* Tambahkan lebih banyak placeholder jika perlu */}
  </div>
);

const TestimonialCard = ({ quote, author }: { quote: string; author: string }) => (
  <blockquote className="p-6 bg-white rounded-lg shadow-sm">
    <p className="italic text-stone-700 mb-4">"{quote}"</p>
    <footer className="text-right font-medium text-amber-700">- {author}</footer>
  </blockquote>
);

export default function Home(): JSX.Element {
  // --- Konfigurasi Kontak (Sesuaikan!) ---
  const whatsappNumber: string = "6289604220504"; // Ganti dengan nomor WA bisnis Anda
  const whatsappMessage: string = encodeURIComponent(
    "Halo Moonlight Nail Polish, saya tertarik untuk memesan sesi nail art eksklusif. Bisa informasikan ketersediaan jadwal?"
  );
  const whatsappUrl: string = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-stone-50 text-stone-800 font-sans"> {/* Default Font Sans */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* === Hero Section === */}
        {/* Idealnya dengan gambar latar berkualitas tinggi atau video loop halus */}
        <section className="relative text-center py-24 md:py-40 min-h-[60vh] flex flex-col items-center justify-center">
          {/* Opsional: Background Image/Video di sini */}
          {/* <div className="absolute inset-0 bg-black opacity-30 z-0"></div> */}
          {/* <Image src="/path/to/hero-image.jpg" layout="fill" objectFit="cover" alt="Elegant nail art background" className="z-0 opacity-80"/> */}

          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-stone-900 mb-4 tracking-tight">
              Moonlight Nail Polish
            </h1>
            <p className="text-lg md:text-xl text-stone-700 max-w-xl mx-auto mb-8">
              Your private sanctuary for exquisite, bespoke nail artistry. By appointment only.
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-10 py-3 transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Book Your Private Session
              </Link>
            </Button>
          </div>
        </section>

        {/* === Introduction / Philosophy Section === */}
        <section className="py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-800 mb-6">
              The Essence of Elegance
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              At Moonlight Nail Polish, we believe true luxury lies in personalized attention and impeccable detail. Experience a serene escape where your vision comes to life through masterful artistry, using only the finest, health-conscious products.
            </p>
          </div>
        </section>

        {/* === Services Overview === */}
        <section className="py-16 md:py-24 bg-white rounded-xl shadow-sm">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-800 mb-12 text-center">
            Discover Our Services
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {/* Contoh Kartu Layanan (buat komponen terpisah jika kompleks) */}
            <div className="text-center p-6 border border-stone-200 rounded-lg hover:shadow-md transition-shadow duration-300">
              {/* Ganti dengan Icon yang relevan */}
              <div className="text-amber-600 mb-4 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 1.776a15.993 15.993 0 001.778-3.39m-1.778 3.39a16.01 16.01 0 00-3.39 1.62m-3.39-1.62a15.993 15.993 0 013.39-1.777m0 0a15.995 15.995 0 003.39 1.777M11.976 15.122c0-.16.018-.319.051-.474m-1.94 2.405a8.25 8.25 0 00-3.389-1.62m4.065 2.157a8.25 8.25 0 003.39 1.62m-3.39-1.62c.16-.033.315-.08.47-.141m-2.44-.666a8.25 8.25 0 00-3.39-1.62m3.39 1.62a8.25 8.25 0 012.44-.667m0 0c.161.033.315.08.47.141m0 0a7.5 7.5 0 003.949-4.366m-3.949 4.366a7.5 7.5 0 01-3.949-4.366m0 0a7.5 7.5 0 00-3.949 4.366m3.949-4.366c-.161-.033-.315-.08-.47-.141m2.44.667a8.25 8.25 0 003.39 1.62M14.53 12.122a3 3 0 015.78-1.128 2.25 2.25 0 002.4-2.245 4.5 4.5 0 01-8.4 2.245c0 .399.078.78.22 1.128zm0 0a15.998 15.998 0 01-3.388 1.62m5.043.025a15.994 15.994 0 00-1.622 3.39m-3.421-1.776a15.993 15.993 0 01-1.778 3.39m1.778-3.39a16.01 16.01 0 013.39-1.62m3.39 1.62a15.993 15.993 0 00-3.39 1.777m0 0a15.995 15.995 0 01-3.39-1.777M12.024 9.122c0 .16-.018.319-.051.474m1.94-2.405a8.25 8.25 0 013.389 1.62m-4.065-2.157a8.25 8.25 0 01-3.39-1.62m3.39 1.62c-.16.033-.315.08-.47.141m2.44.666a8.25 8.25 0 013.39 1.62m-3.39-1.62a8.25 8.25 0 00-2.44-.667m0 0c-.161-.033-.315-.08-.47-.141m0 0a7.5 7.5 0 01-3.949 4.366m3.949-4.366a7.5 7.5 0 003.949 4.366m0 0a7.5 7.5 0 01-3.949 4.366m-3.949-4.366c.161.033.315.08.47.141m-2.44-.667a8.25 8.25 0 01-3.39-1.62" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-serif text-stone-800 mb-2">Bespoke Nail Art</h3>
              <p className="text-stone-600 text-sm">Unique designs crafted to match your personal style.</p>
            </div>
             {/* Kartu Layanan 2 */}
             <div className="text-center p-6 border border-stone-200 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="text-amber-600 mb-4 inline-block"> {/* Ganti Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /> {/* Contoh ikon spa/perawatan */}
                 </svg>
              </div>
              <h3 className="text-xl font-semibold font-serif text-stone-800 mb-2">Luxury Manicure & Pedicure</h3>
              <p className="text-stone-600 text-sm">Pamper yourself with premium treatments for hands and feet.</p>
            </div>
             {/* Kartu Layanan 3 */}
             <div className="text-center p-6 border border-stone-200 rounded-lg hover:shadow-md transition-shadow duration-300">
               <div className="text-amber-600 mb-4 inline-block"> {/* Ganti Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.31h5.518a.562.562 0 01.329 1.004l-4.523 3.573a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-3.642a.563.563 0 00-.652 0l-4.725 3.643a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.523-3.572a.562.562 0 01.329-1.004h5.518a.563.563 0 00.475-.31L11.48 3.5z" /> {/* Contoh ikon bintang/kualitas */}
                 </svg>
               </div>
               <h3 className="text-xl font-semibold font-serif text-stone-800 mb-2">Gel & Extensions</h3>
               <p className="text-stone-600 text-sm">Durable and flawless gel polish or extensions for lasting beauty.</p>
            </div>
          </div>
           {/* Tombol Lihat Semua Layanan */}
          <div className="text-center mt-12">
             <Link href="/services" className="font-medium text-amber-600 hover:text-amber-700 transition duration-300">
               View All Services & Pricing →
             </Link>
          </div>
        </section>

        {/* === Gallery Preview === */}
        <section className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-800 mb-12 text-center">
            A Glimpse of Artistry
          </h2>
          <div className="max-w-5xl mx-auto px-6">
            {/* Pastikan komponen ini menampilkan gambar High-Res */}
            <GalleryPreview />
          </div>
          <div className="text-center mt-12">
            <Link href="/gallery" className="font-medium text-amber-600 hover:text-amber-700 transition duration-300">
              Explore Full Gallery →
            </Link>
          </div>
        </section>

        {/* === Testimonials Section === */}
        <section className="py-16 md:py-24 bg-stone-100">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-800 mb-12 text-center">
            Words of Delight
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
            {/* Idealnya fetch data testimoni atau gunakan slider */}
            <TestimonialCard
              quote="Absolutely stunning work! The attention to detail is incredible, and the private setting is so relaxing. Felt truly pampered."
              author="Sarah K."
            />
            <TestimonialCard
              quote="Finally found my go-to nail artist! Professional, uses high-quality products, and interprets my ideas perfectly. Highly recommend Moonlight Nail Polish."
              author="Amanda L."
            />
          </div>
           {/* Opsional: Link ke halaman testimoni jika banyak */}
           {/* <div className="text-center mt-12">
             <Link href="/testimonials" className="font-medium text-amber-600 hover:text-amber-700 transition duration-300">
               Read More Testimonials →
             </Link>
           </div> */}
        </section>

        {/* === Booking CTA Section === */}
        <section className="py-20 md:py-32 text-center bg-gradient-to-b from-stone-50 to-white">
           <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-stone-800 mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg text-stone-600 mb-10">
              Secure your exclusive appointment at Moonlight Nail Polish today. We operate strictly by appointment to ensure a personalized and private experience for every client.
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-10 py-3 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Book via WhatsApp
              </Link>
            </Button>
           </div>
        </section>

        {/* === Footer === */}
        <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Moonlight Nail Polish. All Rights Reserved.</p>
           {/* Tambahkan link Privacy Policy, Terms, Social Media jika perlu */}
           <div className="mt-2">
              <Link href="/privacy-policy" className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
              {/* <span className="mx-2">|</span> */}
              {/* <Link href="/terms" className="hover:text-amber-600 transition-colors">Terms of Service</Link> */}
           </div>
        </footer>

      </div>
    </div>
  );
}