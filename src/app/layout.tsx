import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Contoh impor font
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Konfigurasi Font (sesuaikan dengan pilihan Anda)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Nama variabel CSS untuk font sans-serif
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Pilih bobot yang diperlukan
  variable: "--font-serif", // Nama variabel CSS untuk font serif
});

export const metadata: Metadata = {
  title: "Moonlight Nail Polish - Exquisite Nail Art Sanctuary", // Judul default
  description: "Experience luxurious, private nail care and stunning artistry at Moonlight Nail Polish. Book your appointment today.", // Deskripsi default
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      {/* Definisikan variabel warna CSS di sini atau di globals.css */}
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="min-h-screen">
          {" "}
          {/* Pastikan konten mendorong footer ke bawah */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
