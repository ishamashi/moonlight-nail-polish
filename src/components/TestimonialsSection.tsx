import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    review:
      "The nail art was stunning and exactly what I wanted! The artist was professional and friendly.",
  },
  {
    id: 2,
    name: "Samantha Lee",
    review:
      "I loved the home service option. It was so convenient, and the quality was top-notch!",
  },
  {
    id: 3,
    name: "Pooja Sharma",
    review:
      "Excellent service! My nails have never looked better. Highly recommended.",
  },
];

export function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id}>
          <CardHeader>
            <CardTitle>{testimonial.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {testimonial.review}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
