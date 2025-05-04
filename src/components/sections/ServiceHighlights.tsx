import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
// import ServiceCard from '@/components/ui/ServiceCard'; // Atau buat inline

// Contoh data (idealnya datang dari CMS atau file data)
const highlightedServices = [
  { id: 1, title: "Signature Manicures", description: "Impeccable care for naturally beautiful nails.", image: "/images/service-manicure.jpg", link: "/services#manicure" },
  { id: 2, title: "Gel Polish Artistry", description: "Durable color and stunning designs that last.", image: "/images/service-gel.jpg", link: "/services#gel-polish" },
  { id: 3, title: "Luxury Pedicures", description: "Relax and rejuvenate with our pampering foot treatments.", image: "/images/service-pedicure.jpg", link: "/services#pedicure" },
];

const ServiceHighlights: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      {" "}
      {/* Warna latar sedikit berbeda */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Signature Services</h2>
        <p className="text-secondary max-w-2xl mx-auto mb-12">Experience the artistry and care that defines Moonlight Nails. Explore some of our most requested services.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightedServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden group text-left transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted text-sm mb-4">{service.description}</p>
                <Link href={service.link} className="text-primary hover:text-primary-dark font-medium text-sm transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          {/* Asumsi ada komponen Button atau gunakan <Link> biasa */}
          <Button href="/services" variant="secondary" size="lg">
            View All Services
          </Button>
          {/* <Link href="/services" className="inline-block bg-secondary hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            View All Services
           </Link> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
