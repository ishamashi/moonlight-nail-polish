"use client"; // Tambahkan ini di baris paling atas

import React, { useState, useEffect } from "react"; // Impor useState & useEffect
import Link from "next/link";
// import Image from "next/image";
import Button from "@/components/ui/Button";
import { FiMenu, FiX } from "react-icons/fi"; // Impor ikon Menu (hamburger) dan X (close)

const Navbar: React.FC = () => {
  // State untuk mengontrol visibilitas menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fungsi untuk menutup menu (dipakai di link & tombol close)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Optional: Efek untuk menutup menu jika layar di-resize menjadi lebih besar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // 768px adalah breakpoint 'md' default Tailwind
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    // Cleanup listener saat komponen unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Gunakan relative positioning pada header agar menu mobile absolut bisa relatif ke sini
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md shadow-sm">
      {/* Navigasi Utama */}
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between relative z-50">
        {" "}
        {/* Tambah z-50 */}
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          {/* <Image src="/logo.svg" alt="Moonlight Nails Logo" width={40} height={40} /> */}
          <span className="font-serif text-2xl font-bold text-primary">Moonlight Nails</span>
        </Link>
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-foreground hover:text-primary transition duration-300">
            Home
          </Link>
          <Link href="/ai-stylist" className="text-foreground hover:text-primary transition duration-300">
            AI Stylist
          </Link>
          <Link href="/services" className="text-foreground hover:text-primary transition duration-300">
            Services
          </Link>
          <Link href="/gallery" className="text-foreground hover:text-primary transition duration-300">
            Gallery
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition duration-300">
            About
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition duration-300">
            Contact
          </Link>
          <Button href="/booking" variant="primary" size="sm">
            Book Now
          </Button>
        </div>
        {/* Tombol Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-foreground p-2 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            aria-label="Toggle mobile menu" // Untuk aksesibilitas
          >
            {/* Ganti ikon berdasarkan state */}
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile Overlay/Dropdown */}
      {/* Menggunakan transisi untuk animasi */}
      <div
        className={`
          absolute top-full left-0 right-0 z-40 bg-background shadow-lg md:hidden
          transition-all duration-300 ease-in-out transform origin-top
          ${isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"}
        `}
        // pointer-events-none saat tertutup agar tidak menghalangi elemen di bawahnya
      >
        <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-4">
          {/* Salin link dari menu desktop, sesuaikan styling jika perlu */}
          <Link href="/" className="block w-full text-center py-2 text-lg text-foreground hover:text-primary transition duration-300" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/ai-stylist" className="text-foreground hover:text-primary transition duration-300">
            AI Stylist
          </Link>
          <Link href="/services" className="block w-full text-center py-2 text-lg text-foreground hover:text-primary transition duration-300" onClick={closeMobileMenu}>
            Services
          </Link>
          <Link href="/gallery" className="block w-full text-center py-2 text-lg text-foreground hover:text-primary transition duration-300" onClick={closeMobileMenu}>
            Gallery
          </Link>
          <Link href="/about" className="block w-full text-center py-2 text-lg text-foreground hover:text-primary transition duration-300" onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/contact" className="block w-full text-center py-2 text-lg text-foreground hover:text-primary transition duration-300" onClick={closeMobileMenu}>
            Contact
          </Link>
          {/* Tombol Booking di mobile menu */}
          <div className="pt-4 w-full max-w-xs mx-auto">
            <Button href="/booking" variant="primary" size="md" className="w-full" onClick={closeMobileMenu}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
