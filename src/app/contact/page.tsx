// src/app/contact/page.tsx
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button"; // Pastikan path benar
import { FiPhone, FiMail, FiClock, FiMapPin, FiInstagram, FiMessageSquare } from 'react-icons/fi'; // Impor ikon
// Import WhatsApp icon if needed, e.g., from 'react-icons/fa' or 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa';

// Metadata SEO
export const metadata: Metadata = {
  title: "Contact Us | Moonlight Nails - Jimbaran, Bali",
  description: "Get in touch with Moonlight Nails, your private luxury nail salon in Jimbaran, Bali. Contact us for inquiries or book your appointment today.",
  // keywords: "contact nail salon jimbaran, book appointment nails bali, moonlight nails contact, nail studio jimbaran contact",
};

const ContactPage: React.FC = () => {
  // Ganti dengan detail kontak asli Anda
  const phoneNumber = "+6289604220504"; // Format internasional lebih baik
  const whatsappNumber = "6289604220504"; // Nomor untuk link WhatsApp (tanpa + atau 0 di depan)
  const emailAddress = "hello@moonlightnailsbali.com"; // Ganti dengan email bisnis Anda
  const instagramUsername = "moonlight.nailspolished"; // Ganti dengan username IG
  const locationArea = "Jimbaran, South Kuta, Bali"; // Deskripsi area

  return (
    <div className="bg-background text-foreground">
      {/* 1. Header Halaman - Gaya Mirip About */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center bg-gradient-to-br from-primary via-black to-primary border-b border-border">
        <div className="container mx-auto px-4 relative z-10">
          <FiMessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" /> {/* Ikon yang relevan */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions or to schedule your private nail experience in Jimbaran.
          </p>
        </div>
      </section>

      {/* 2. Detail Kontak & Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

            {/* Kolom Kiri: Detail Kontak */}
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6">
                Contact Information
              </h2>

              {/* Item Kontak: Telepon */}
              <div className="flex items-start space-x-4">
                <FiPhone className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
                  <a href={`tel:${phoneNumber}`} className="text-secondary hover:text-primary transition duration-300 block">{phoneNumber}</a>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition duration-300 mt-1 inline-flex items-center"
                  >
                     Chat on WhatsApp <FaWhatsapp className="ml-2" />
                  </a>
                </div>
              </div>

              {/* Item Kontak: Email */}
              <div className="flex items-start space-x-4">
                <FiMail className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <a href={`mailto:${emailAddress}`} className="text-secondary hover:text-primary transition duration-300">{emailAddress}</a>
                </div>
              </div>

              {/* Item Kontak: Jam Operasional */}
              <div className="flex items-start space-x-4">
                <FiClock className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Operating Hours</h3>
                  <p className="text-secondary">Strictly <strong className="font-semibold">By Appointment Only</strong></p>
                  {/* Anda bisa menambahkan rentang waktu umum jika mau, misal: "Appointments available Tuesday - Saturday, 10 AM - 6 PM" */}
                </div>
              </div>

              {/* Item Kontak: Lokasi */}
              <div className="flex items-start space-x-4">
                <FiMapPin className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-secondary">{locationArea}</p>
                  <p className="text-xs text-muted mt-1">(Full address provided upon booking confirmation for privacy)</p>
                </div>
              </div>

               {/* Item Kontak: Sosial Media */}
               <div className="flex items-start space-x-4">
                <FiInstagram className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Follow Us</h3>
                  <a
                    href={`https://instagram.com/${instagramUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition duration-300"
                  >
                    @{instagramUsername}
                  </a>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Formulir Kontak */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md border border-border">
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6">
                Send Us a Message
              </h2>
              {/* Ganti action dengan endpoint Anda atau gunakan library form handler (React Hook Form, Formik) */}
              <form action="#" method="POST" className="space-y-6">
                {/* Field Nama */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    autoComplete="name"
                    className="block w-full px-4 py-2 border border-border rounded-md shadow-sm bg-background focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>

                {/* Field Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    className="block w-full px-4 py-2 border border-border rounded-md shadow-sm bg-background focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>

                 {/* Field Telepon (Opsional) */}
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number <span className="text-xs text-muted">(Optional)</span></label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full px-4 py-2 border border-border rounded-md shadow-sm bg-background focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>

                {/* Field Pesan */}
                 <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full px-4 py-2 border border-border rounded-md shadow-sm bg-background focus:ring-primary focus:border-primary sm:text-sm"
                  ></textarea>
                </div>

                {/* Tombol Submit */}
                <div>
                  {/* Ganti type="submit" dengan onClick jika menggunakan handler JS */}
                   <Button type="submit" variant="primary" className="w-full">
                    Send Inquiry
                   </Button>
                 </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Peta (Opsional) */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
           <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
             Our Location Area
           </h2>
           {/* Ganti dengan iframe Google Maps atau komponen peta kustom */}
           <div className="relative aspect-video overflow-hidden rounded-lg border border-border shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15772.19582849075!2d115.1601888401649!3d-8.785034500482576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24454ac7cae79%3A0xd5e9e96b16d908f0!2sJimbaran%2C%20South%20Kuta%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1678888888888!5m2!1sen!2sid" // <-- GANTI URL EMBED MAPS ANDA (fokus di Jimbaran)
                width="100%"
                height="100%"
                style={{ border:0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Moonlight Nails Location Area in Jimbaran, Bali"
              ></iframe>
            </div>
            <p className="text-center text-sm text-muted mt-4">
              Located in the beautiful Jimbaran area, South Kuta, Bali.
            </p>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;