import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Nguema',
    role: 'Mariée',
    company: 'Mariage Nguema-Obiang',
    rating: 5,
    quote: 'MurimDeco a transformé notre lieu de mariage en un véritable rêve! La décoration était parfaite et chaque détail était magnifique. Hautement recommandé!',
    image: 'https://images.pexels.com/photos/30004322/pexels-photo-30004322.jpeg',
    event_type: 'Mariage'
  },
  {
    id: 2,
    name: 'Jean-Pierre Mboumba',
    role: 'Directeur Événementiel',
    company: 'GabonCorp SA',
    rating: 5,
    quote: 'La décoration de notre événement corporatif a dépassé toutes nos attentes. Professionnelle, élégante et parfaitement alignée avec notre marque. L\'équipe était incroyable!',
    image: 'https://images.unsplash.com/photo-1752118465028-4a135f89e474?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxOHx8cHJvZmVzc2lvbmFsJTIwYnVzaW5lc3MlMjBtYW4lMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwc21pbGluZyUyMGNvbmZpZGVudCUyMGNvcnBvcmF0ZSUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzfGVufDB8MXx8fDE3NjkwMDQ0OTl8MA&ixlib=rb-4.1.0&q=85',
    event_type: 'Événement Corporatif'
  },
  {
    id: 3,
    name: 'Sylvie Akendengue',
    role: 'Mère de famille',
    company: undefined,
    rating: 5,
    quote: "L'anniversaire de ma fille était magique grâce à MurimDeco! Les décorations étaient absolument magnifiques. Ça valait vraiment chaque centime!",
    image: 'https://images.pexels.com/photos/29995646/pexels-photo-29995646.jpeg',
    event_type: 'Anniversaire'
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-champagne-mist/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-imperial-blue mb-4">Ce Que Disent Nos Clients</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de ceux qui ont vécu notre service exceptionnel
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-gold"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="h-8 w-8 text-gold mb-4 mx-auto md:mx-0" />
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="body-lg text-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="heading-sm text-imperial-blue">{testimonial.name}</h4>
                      <p className="body-sm text-muted-foreground">
                        {testimonial.role} {testimonial.company && `• ${testimonial.company}`}
                      </p>
                      {testimonial.event_type && (
                        <span className="inline-block mt-2 px-3 py-1 bg-gold/20 text-gold body-sm rounded-full">
                          {testimonial.event_type}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white shadow-lg rounded-full p-3 hover:bg-champagne-mist transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-imperial-blue" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white shadow-lg rounded-full p-3 hover:bg-champagne-mist transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-imperial-blue" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
