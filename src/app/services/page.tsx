// app/services/page.tsx
import React from "react";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ServiceCard"; // Impor komponen kartu
import { getAllServicesData } from "@/lib/services"; // Impor fungsi data

export const metadata: Metadata = {
  title: "Our Services | Moonlight Nail Polish",
  description: "Explore our menu of luxurious manicure, pedicure, gel polish, nail art, and extension services. Book your private appointment for exquisite nail care.",
};

// Revalidate data secara periodik (opsional, bagus untuk data yang jarang berubah)
// Contoh: Revalidate setiap 1 jam (3600 detik)
export const revalidate = 3600;

// Komponen Halaman Layanan - ASYNC
export default async function ServicesPage() {
  // Ambil data saat komponen dirender di server
  const allServices = await getAllServicesData();

  return (
    <div className="bg-background">
      {/* 1. Bagian Header Halaman (tetap sama) */}
      <section className="py-16 md:py-24 text-center border-b bg-gray-50 border-border">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Our Service Menu</h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">Discover the range of personalized nail treatments designed for your beauty and relaxation, offered in our exclusive private setting.</p>
        </div>
      </section>

      {/* 2. Daftar Layanan (Grid) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Kondisi jika tidak ada layanan */}
          {allServices.length === 0 ? (
            <p className="text-center text-muted text-lg">No services available at this moment. Please check back later.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {/* Map dan render ServiceCard */}
              {allServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. Catatan Tambahan / CTA (tetap sama) */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h3 className="font-serif text-3xl font-bold mb-4">Ready to Experience Moonlight Nails?</h3>
          <p className="text-muted max-w-xl mx-auto mb-8">All services are performed with the highest standards of hygiene using premium quality products. We operate strictly by appointment to ensure your privacy and comfort.</p>
          <Button href="/booking" variant="primary" size="lg">
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
