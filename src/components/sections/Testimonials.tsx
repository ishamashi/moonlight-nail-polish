import React from "react";
// import { FaQuoteLeft } from 'react-icons/fa'; // Contoh ikon

// Contoh data testimoni
const testimonials = [
  { id: 1, quote: "The best nail experience I've ever had! So private, relaxing, and the results are stunning.", author: "Amanda S." },
  { id: 2, quote: "Incredible attention to detail and artistry. My nails have never looked better. Highly recommend!", author: "Rina K." },
  { id: 3, quote: "A true hidden gem. Professional, clean, and [Nama Istri Anda] is so talented and kind.", author: "Dewi L." },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      {" "}
      {/* Atau warna aksen lembut */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>

        {/* Ganti dengan Slider atau layout yang lebih dinamis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md text-left relative">
              {/* Ikon kutipan (opsional) */}
              {/* <FaQuoteLeft className="absolute top-4 left-4 text-5xl text-primary opacity-10" /> */}
              <p className="italic text-secondary mb-4 z-10 relative">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold text-right text-primary">- {testimonial.author}</p>
            </div>
          ))}
        </div>
        {/* Tombol ke Halaman Testimoni Lengkap (jika ada) */}
        {/* <div className="mt-12">
           <Link href="/testimonials" className="...">View More Testimonials</Link>
         </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
