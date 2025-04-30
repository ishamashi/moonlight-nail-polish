// src/components/layout/Navbar.tsx
import Link from 'next/link';
import React from 'react';

// Komponen ini secara default adalah Server Component
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50"> {/* Latar putih, shadow halus, sticky */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Kontainer responsif */}
        <div className="flex justify-between items-center h-16"> {/* Flexbox untuk layout */}
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-serif font-bold text-primary-dark hover:text-accent-gold transition-colors">
              Moonlight Nails
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-6 lg:space-x-8"> {/* Sembunyikan di mobile, tampilkan di sm ke atas */}
            <Link href="/" className="text-foreground hover:text-accent-gold transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-accent-gold transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-accent-gold transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Gallery
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent-gold transition-colors px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link href="/booking" className="bg-accent-gold text-white hover:bg-opacity-90 transition-colors px-4 py-2 rounded-md text-sm font-medium shadow-sm">
              Book Now {/* Tombol CTA */}
            </Link>
             <Link href="/contact" className="text-foreground hover:text-accent-gold transition-colors px-3 py-2 rounded-md text-sm font-medium">
               Contact
             </Link>
          </div>

          {/* Mobile Menu Button Placeholder (Tambahkan logic jika perlu) */}
          <div className="sm:hidden"> {/* Tampilkan hanya di mobile */}
            {/* Ganti dengan ikon burger menu nanti */}
            <button className="text-foreground p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-gold">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Placeholder (Panel yang muncul saat tombol di klik) */}
      {/* <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          // Links untuk mobile di sini
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;