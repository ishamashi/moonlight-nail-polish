// src/app/booking/page.tsx
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button"; // Pastikan path benar
import { FiCalendar, FiClock, FiInfo, FiCheckCircle, FiNavigation } from "react-icons/fi"; // Impor ikon yang relevan
// import { FaWhatsapp } from 'react-icons/fa'; // Jika ingin ikon WA

// Metadata SEO
export const metadata: Metadata = {
  title: "Book Your Appointment | Moonlight Nails - Jimbaran, Bali",
  description: "Schedule your exclusive nail care experience at Moonlight Nails in Jimbaran, Bali. Learn our simple booking process via WhatsApp and review our policies.",
  // keywords: "book nail appointment jimbaran, schedule manicure bali, private nail booking bali, luxury nail care appointment",
};

const BookingPage: React.FC = () => {
  // Ganti dengan detail kontak asli Anda (sesuaikan dengan halaman Kontak)
  const whatsappNumber = "6289604220504"; // Nomor untuk link WhatsApp (tanpa + atau 0 di depan)
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const artistName = "Natasya"; // Nama artis

  return (
    <div className="bg-background text-foreground">
      {/* 1. Header Halaman */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center bg-gradient-to-br from-primary via-black to-primary border-b border-border">
        {/* Gaya header mirip About */}
        <div className="container mx-auto px-4 relative z-10">
          <FiCalendar className="h-12 w-12 mx-auto mb-4 text-white" /> {/* Ubah warna ikon agar kontras */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">Secure Your Private Session</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            {" "}
            {/* Teks lebih terang di bg gelap */}
            Reserve your exclusive time at Moonlight Nails in Jimbaran for a personalized and luxurious nail care experience.
          </p>
        </div>
      </section>

      {/* 2. Proses Pemesanan via WhatsApp */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {" "}
          {/* Batasi lebar agar lebih fokus */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Booking via WhatsApp: Simple & Personal</h2>
          <div className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-md border border-border space-y-6">
            <p className="text-lg text-secondary">To ensure a personalized consultation and find the perfect time slot for you, we handle all bookings directly via WhatsApp. It&apos;s the quickest way to discuss your desired service, nail art ideas, and confirm availability with {artistName}.</p>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">How to Book:</h3>
              <ol className="list-decimal list-inside space-y-3 text-secondary marker:text-primary marker:font-semibold">
                <li>
                  Click the &quot;Book via WhatsApp&quot; button below or message us directly at{" "}
                  <a href={`tel:+${whatsappNumber}`} className="font-semibold text-primary hover:text-accent underline decoration-dotted">
                    +62 6289604220504
                  </a>{" "}
                  (tap to call).
                </li>
                <li>
                  Please provide the following information in your message:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                    <li>Your Full Name</li>
                    <li>
                      Desired Service(s) (e.g., Gel Manicure, Custom Nail Art) - Feel free to{" "}
                      <Link href="/services" className="text-primary hover:text-accent underline">
                        browse our services
                      </Link>{" "}
                      first.
                    </li>
                    <li>Your preferred Date(s) and Time(s) (provide a few options if possible).</li>
                    <li>Any specific requests or reference photos for nail art.</li>
                  </ul>
                </li>
                <li>{artistName} or our team will reply promptly to discuss details, confirm availability, and finalize your appointment slot.</li>
                <li>Once confirmed, you will receive the full studio address in Jimbaran and any deposit details (if applicable).</li>
              </ol>
            </div>

            {/* Tombol CTA WhatsApp */}
            <div className="text-center pt-6">
              <Button href={whatsappLink} variant="primary" size="lg" rel="noopener noreferrer" className="inline-flex items-center">
                {/* <FaWhatsapp className="mr-2 h-5 w-5" /> */}
                Book via WhatsApp Now
              </Button>
              <p className="text-xs text-muted mt-3">
                We aim to respond within 1 hour during operating hours.
                {/* Ganti [X] dengan waktu respons Anda */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Kebijakan Penting */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10 text-center">Important Policies</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kebijakan 1: By Appointment Only & Privasi */}
            <div className="flex items-start space-x-4 p-4 border-l-4 border-primary bg-background rounded-r-lg shadow-sm">
              <FiCheckCircle className="text-primary w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">By Appointment & Privacy</h3>
                <p className="text-sm text-secondary">Moonlight Nails operates strictly by appointment to ensure each client receives our full attention in a private, undisturbed setting. The full studio address in Jimbaran will be provided only upon booking confirmation.</p>
              </div>
            </div>

            {/* Kebijakan 2: Pembatalan / Reschedule */}
            <div className="flex items-start space-x-4 p-4 border-l-4 border-primary bg-background rounded-r-lg shadow-sm">
              <FiInfo className="text-primary w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Cancellation / Reschedule</h3>
                <p className="text-sm text-secondary">
                  We understand plans can change. Please provide at least <strong className="font-semibold">24 hours notice</strong> if you need to cancel or reschedule your appointment. Failure to do so may result in [sebutkan konsekuensi jika ada, misal: &apos;forfeiture of deposit&apos; atau &apos;a cancellation fee&apos;].
                </p>
              </div>
            </div>

            {/* Kebijakan 3: Keterlambatan */}
            <div className="flex items-start space-x-4 p-4 border-l-4 border-primary bg-background rounded-r-lg shadow-sm">
              <FiClock className="text-primary w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Late Arrivals</h3>
                <p className="text-sm text-secondary">To ensure we stay on schedule for all clients, arriving more than 15 minutes late may require your service to be shortened or rescheduled. Please contact us if you anticipate a delay.</p>
              </div>
            </div>

            {/* Kebijakan 4: Deposit (Jika Ada) */}
            <div className="flex items-start space-x-4 p-4 border-l-4 border-primary bg-background rounded-r-lg shadow-sm">
              {/* <FiDollarSign className="text-primary w-8 h-8 mt-1 flex-shrink-0"/> */}
              <FiNavigation className="text-primary w-8 h-8 mt-1 flex-shrink-0" /> {/* Contoh ikon lain */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Booking Confirmation</h3>
                <p className="text-sm text-secondary">Your appointment is secured once confirmed via WhatsApp. A deposit may be required for certain services or durations, details of which will be provided during the booking process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pertanyaan? (Link ke Kontak) */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-3">Have Questions Before Booking?</h3>
          <p className="text-muted max-w-xl mx-auto mb-6">If you have general inquiries not related to scheduling a specific appointment, feel free to reach out via our contact page.</p>
          <Button href="/contact" variant="secondary" size="md">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
