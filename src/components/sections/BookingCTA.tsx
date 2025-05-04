import React from "react";
import Button from "@/components/ui/Button";

const BookingCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      {" "}
      {/* Gunakan warna primer atau sekunder */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready for Your Moment of Indulgence?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">Secure your private appointment at Moonlight Nails and experience the difference of personalized luxury nail care.</p>
        <Button href="/booking" variant="light" size="lg">
          {" "}
          {/* Variant 'light' untuk kontras di background gelap */}
          Book Your Appointment Now
        </Button>
        {/* <button className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-full transition duration-300">
          Book Your Appointment Now
        </button> */}
      </div>
    </section>
  );
};

export default BookingCTA;
