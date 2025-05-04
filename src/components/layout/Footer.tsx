import React from "react";
import Link from "next/link";
// import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Contoh ikon sosial

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Kolom 1: Logo & About */}
        <div>
          <h4 className="font-serif text-xl font-semibold mb-4 text-white">Moonlight Nails</h4>
          <p className="text-sm mb-4">Your private sanctuary for exquisite nail artistry and relaxation.</p>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            {/* <Link href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300"><FaInstagram size={24} /></Link> */}
            {/* <Link href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300"><FaWhatsapp size={24} /></Link> */}
            <a href="#" className="hover:text-primary transition duration-300">
              IG
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              WA
            </a>
          </div>
        </div>

        {/* Kolom 2: Quick Links */}
        <div>
          <h5 className="font-semibold mb-4 text-white">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-primary transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary transition duration-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-primary transition duration-300">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition duration-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Contact Info */}
        <div>
          <h5 className="font-semibold mb-4 text-white">Get In Touch</h5>
          <ul className="space-y-2 text-sm">
            {/* Sesuaikan dengan info kontak */}
            <li>
              <span className="font-semibold">Hours:</span> By Appointment Only
            </li>
            <li>
              <span className="font-semibold">Phone/WA:</span> +62 896-0422-0504
            </li>
            <li>
              <span className="font-semibold">Email:</span> info@moonlightnails.com
            </li>
            <li>
              <span className="font-semibold">Area:</span> Jimbaran, Bali, Indonesia
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6">© {currentYear} Moonlight Nail Polish. All Rights Reserved. Website by Alchecode.</div>
    </footer>
  );
};

export default Footer;
