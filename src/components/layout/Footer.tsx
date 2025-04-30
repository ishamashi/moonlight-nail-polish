// src/components/layout/Footer.tsx
import React from 'react';

// Komponen ini adalah Server Component
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-light mt-12"> {/* Warna background netral, margin atas */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6"> {/* Kontainer dan padding */}
        <div className="text-center text-sm text-neutral-medium"> {/* Teks di tengah, kecil, warna netral */}
          © {currentYear} Moonlight Nail Polish. All Rights Reserved.
          {/* Anda bisa menambahkan link atau info lain di sini jika perlu */}
          {/* <div className="mt-2">
            <Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;