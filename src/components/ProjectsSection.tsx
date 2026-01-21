import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Heart } from 'lucide-react';
import { allGalleryImages } from '@/lib/media-data';
import { getOptimizedImage } from '@/lib/cloudinary';

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'anniversaire' | 'rose'>('all');

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? allGalleryImages 
    : allGalleryImages.filter(img => {
        if (activeTab === 'anniversaire') {
          return img.category.includes('anniversaire');
        }
        if (activeTab === 'rose') {
          return img.category === 'octobre_rose';
        }
        return true;
      });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-imperial-blue mb-4">Notre Portfolio</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre magnifique collection de décorations d'événements
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-champagne-mist p-1 flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-md body-md font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-imperial-blue shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Tous les Projets
            </button>
            <button
              onClick={() => setActiveTab('anniversaire')}
              className={`px-6 py-2 rounded-md body-md font-medium transition-all ${
                activeTab === 'anniversaire'
                  ? 'bg-white text-imperial-blue shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Anniversaires
            </button>
            <button
              onClick={() => setActiveTab('rose')}
              className={`px-6 py-2 rounded-md body-md font-medium transition-all ${
                activeTab === 'rose'
                  ? 'bg-white text-imperial-blue shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Octobre Rose
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={getOptimizedImage(project.assetId, { width: 600, height: 450, crop: 'fill' })}
                    alt={project.title || project.description || 'MurimDeco Project'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Eye className="h-4 w-4 mr-2" />
                        Voir
                      </Button>
                      <Button size="icon" variant="ghost" className="text-white hover:text-gold">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="heading-sm text-foreground mb-2">
                    {project.title || project.description || 'Projet MurimDeco'}
                  </h3>
                  <p className="body-sm text-muted-foreground capitalize">
                    {project.category.replace(/_/g, ' ')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
