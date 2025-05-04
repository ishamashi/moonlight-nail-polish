// components/ServiceCard.tsx
import React from "react";
import Image from "next/image";
// import Link from "next/link"; // Jika ingin kartu bisa diklik ke halaman detail
import type { ServiceData } from "@/lib/services"; // Impor tipe data
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // Jika menggunakan Rich Text

interface ServiceCardProps {
  service: ServiceData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div
      // Link wrapper jika ingin kartu bisa diklik (opsional)
      // <Link href={`/services/${service.slug}`}>
      key={service.id}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:shadow-xl hover:-translate-y-1 group"
    >
      {/* Gambar Layanan */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-100">{service.imageUrl ? <Image src={service.imageUrl} alt={service.imageAlt || service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} className="transition duration-500 ease-in-out group-hover:scale-105" /> : <div className="w-full h-full flex items-center justify-center text-muted">No Image</div>}</div>

      {/* Konten Teks */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="font-serif text-2xl font-semibold text-primary mb-3">{service.title}</h2>

        {/* Render Deskripsi (Handle Rich Text atau String) */}
        <div className="text-muted text-base mb-4 flex-grow prose prose-sm max-w-none">
          {/* Jika Anda YAKIN description selalu string: */}
          {typeof service.description === "string" && <p>{service.description}</p>}

          {/* Jika Anda menggunakan Rich Text: (Perlu install @contentful/rich-text-react-renderer) */}
          {/* {typeof service.description !== 'string' && service.description && documentToReactComponents(service.description)} */}

          {/* Placeholder jika Rich Text dan renderer belum siap */}
          {typeof service.description !== "string" && !React.isValidElement(service.description) && (
            <p>Description content.</p> // Tampilkan pesan generik
          )}
        </div>

        {/* Detail Durasi & Harga */}
        <div className="mt-auto pt-4 border-t border-border text-sm text-foreground space-y-1">
          {service.duration && (
            <div className="flex items-center">
              <span className="font-medium mr-1">Duration:</span> {service.duration}
            </div>
          )}
          {service.price && (
            <div className="flex items-center">
              <span className="font-medium mr-1">Price:</span> {service.price}
            </div>
          )}
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ServiceCard;
