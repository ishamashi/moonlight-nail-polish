// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Jika menggunakan App Router di masa depan
  ],
  theme: {
    extend: {
      colors: {
        // Warna Dasar (Dominan)
        background: '#FFFFFF', // Atau off-white seperti '#F8F8F8'
        foreground: '#333333', // Teks utama, bisa abu tua
        'primary-dark': '#1A1A1A', // Hitam / Charcoal untuk kontras / latar
        
        // Warna Aksen (Mewah & Privat)
        'accent-gold': '#D4AF37', // Contoh Emas
        'accent-rose': '#B76E79', // Contoh Rose Gold (sesuaikan)
        'accent-purple': '#4A0E4E', // Contoh Deep Purple
        'accent-burgundy': '#800020', // Contoh Burgundy
        'accent-blush': '#F1D4D4', // Contoh Soft Blush (muted)

        // Mungkin warna netral tambahan
        'neutral-light': '#EAEAEA',
        'neutral-medium': '#CCCCCC',
      },
      fontFamily: {
        // Ganti dengan font pilihan Anda
        // Misalnya, gunakan font serif elegan untuk judul & sans-serif bersih untuk body
        // Pastikan font diimpor (misal via Google Fonts di _document.tsx atau globals.css)
        sans: ['var(--font-inter)', 'sans-serif'], // Contoh: Inter untuk body text
        serif: ['var(--font-playfair-display)', 'serif'], // Contoh: Playfair Display untuk judul
      },
      // Tambahan lain: spacing, borderRadius, boxShadow untuk kesan halus
      borderRadius: {
        'lg': '0.75rem', // Sedikit lebih besar untuk kesan lembut
        'xl': '1rem',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
export default config;