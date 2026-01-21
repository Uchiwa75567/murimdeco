import { motion } from 'framer-motion';
import { Heart, Cake, Gift, PartyPopper, Rose, Building2 } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Mariages',
    icon: Heart,
    count: 24,
    slug: 'mariages'
  },
  {
    id: 2,
    name: 'Événements Corporatifs',
    icon: Building2,
    count: 18,
    slug: 'corporate'
  },
  {
    id: 3,
    name: 'Anniversaires',
    icon: Cake,
    count: 32,
    slug: 'anniversaires'
  },
  {
    id: 4,
    name: 'Célébrations',
    icon: PartyPopper,
    count: 15,
    slug: 'celebrations'
  },
  {
    id: 5,
    name: 'Événements Spéciaux',
    icon: Gift,
    count: 20,
    slug: 'special-events'
  },
  {
    id: 6,
    name: 'Campagnes',
    icon: Rose,
    count: 14,
    slug: 'campagnes'
  }
];

export function CategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-champagne-mist/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-imperial-blue mb-4">Catégories en Vedette</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos services de décoration d'événements spécialisés, conçus pour rendre chaque occasion extraordinaire
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.a
                key={category.id}
                href={`#${category.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-champagne-mist flex items-center justify-center group-hover:bg-gold transition-colors">
                  <IconComponent className="h-8 w-8 text-imperial-blue" />
                </div>
                <div className="body-sm font-semibold text-imperial-blue mb-1 group-hover:text-gold transition-colors">
                  {String(category.count).padStart(2, '0')}
                </div>
                <h3 className="body-md font-semibold text-foreground">{category.name}</h3>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
