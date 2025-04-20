"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="transition-colors hover:text-pink-200">
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Trigger slightly after scroll starts
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 text-white shadow-md transition-all duration-300",
        isScrolled
          ? "bg-pink-500/80 backdrop-blur-md" // Adjust alpha for better frosted effect
          : "bg-pink-500"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          NailArt Studio
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
