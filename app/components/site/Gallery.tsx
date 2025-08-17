import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Quote, Star } from "lucide-react";

const whatsappUrl = `https://wa.me/919818387498?text=Hi%20LionCubs%20Fitness!%20Interested%20in%20a%20free%20demo%20class.`;

const testimonials = [
  {
    name: "Priya Sharma",
    child: "Aarav (6 years)",
    image: "/supercubs.webp",
    text: "Aarav was very shy before joining LionCubs. Now he's confident, active, and always excited for his sessions!",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    child: "Ananya (4 years)",
    image: "/supercubs.webp",
    text: "The Bond & Bloom sessions are amazing! Ananya and I have such fun together while staying fit.",
    rating: 5
  },
  {
    name: "Meera Patel",
    child: "Rohan (8 years)",
    image: "/supercubs.webp",
    text: "The quarterly fitness reports help us track Rohan's progress. The coaches are very professional!",
    rating: 5
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center",
    alt: "Children playing football"
  },
  {
    src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=200&fit=crop&crop=center",
    alt: "Kids doing gymnastics"
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
    alt: "Sports training session"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center",
    alt: "Children playing football"
  },
  {
    src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=200&fit=crop&crop=center",
    alt: "Kids doing gymnastics"
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
    alt: "Sports training session"
  },

];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Gallery Section */}
        <div className="mb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Action Gallery</h2>
            <p className="mt-3 text-muted-foreground">
              See the fun and excitement in our fitness sessions!
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-2">
            {galleryImages.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-60 w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="p-2">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">What Parents Say</h2>
            <p className="mt-3 text-muted-foreground">
              Real stories from real families in our LionCubs community
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between p-2 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border border-gray-300"
                    />
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        Parent of {testimonial.child}
                      </p>
                    </div>
                  </div>

                  {/* Star Ratings */}
                  <div className="flex items-center gap-1 mt-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-4">
                  <Quote className="size-6 text-accent mb-3 opacity-75" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold">Ready to Join the LionCubs Family?</h3>
          <p className="mt-3 text-muted-foreground mb-6">
            Book your free demo class today and see the difference!
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <Button variant="hero" size="lg">
              Book Free Demo Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}