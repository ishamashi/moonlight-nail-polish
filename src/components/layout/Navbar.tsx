import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Navbar: React.FC = () => {
  // State untuk menu mobile (akan ditambahkan nanti)
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background bg-opacity-90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <Image src="/logo.svg" alt="Moonlight Nails Logo" width={40} height={40} /> */}
          <span className="font-serif text-2xl font-bold text-primary">Moonlight Nails</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-foreground hover:text-primary transition duration-300">
            Home
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
          {/* Ganti dengan ikon hamburger */}
          <button /* onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} */ className="text-foreground">Menu</button>
        </div>
      </nav>

      {/* Menu Mobile (Dropdown/Sidebar) - akan dibuat terpisah */}
      {/* {isMobileMenuOpen && ( ... )} */}
    </header>
  );
};

export default Navbar;
