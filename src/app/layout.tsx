import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google'; // Contoh font
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Konfigurasi font (rekomendasi)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-playfair-display' });

export const metadata: Metadata = {
  title: 'Moonlight Nail Polish - Your Private Escape',
  description: 'Exquisite nail art and premium services in a luxurious, private setting.',
  // Tambahkan metadata lain (keywords, open graph, etc.)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <Navbar /> {/* Navbar bisa jadi Server/Client tergantung kebutuhan */}
        <main className="min-h-screen"> {/* Atau class lain untuk layout */}
          {children}
        </main>
        <Footer /> {/* Footer seringkali bisa jadi Server Component */}
      </body>
    </html>
  );
}