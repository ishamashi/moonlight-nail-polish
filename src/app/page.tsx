import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { SuggestNailArtDesignForm } from '@/components/SuggestNailArtDesignForm';
import { Gallery } from '@/components/Gallery';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Moonlight Nail Polish
        </h1>
        <p className="text-muted-foreground text-lg">
          Experience the luxury of bespoke nail art.
        </p>
      </section>

      {/* Nail Art Gallery */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          Nail Art Gallery
        </h2>
         <Gallery />
      </section>

      {/* AI Design Suggestion */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          AI Design Suggestion
        </h2>
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Get Inspired</CardTitle>
            <CardDescription>
              Tell us your preferences and let our AI suggest the perfect nail
              art design.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SuggestNailArtDesignForm />
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          Testimonials
        </h2>
        <TestimonialsSection />
      </section>

      {/* Service Information Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          Our Services
        </h2>
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Experience the best nail art services</CardTitle>
            <CardDescription>
              We offer a range of services, including bespoke nail art design
              and convenient home service options.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>
                <strong>Bespoke Nail Art:</strong> Custom designs tailored to
                your unique style.
              </li>
              <li>
                <strong>Home Service:</strong> Enjoy our luxurious nail art
                services in the comfort of your own home.
              </li>
              <li>
                <strong>Pricing:</strong> Our services start from $50. Contact us
                for a detailed quote.
              </li>
            </ul>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">
              Contact us for bookings and inquiries.
            </p>
            <Button>Book Appointment</Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center text-muted-foreground py-8">
        <p>&copy; 2024 Moonlight Nail Polish. All rights reserved.</p>
      </footer>
    </div>
  );
}
