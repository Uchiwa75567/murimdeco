import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { homepageVideo } from '@/lib/media-data';
import { getOptimizedVideo, getVideoThumbnail } from '@/lib/cloudinary';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Auto-play was prevented:', error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={getVideoThumbnail(homepageVideo.assetId, { width: 1920, height: 1080 })}
          className="w-full h-full object-cover"
        >
          <source 
            src={getOptimizedVideo(homepageVideo.assetId, { quality: 'auto', format: 'auto' })} 
            type="video/mp4" 
          />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="heading-xl text-white mb-4">
              Décorations d'Événements Élégantes
            </h1>
            <p className="body-lg text-white/90 mb-6">
              Transformez vos espaces en expériences inoubliables avec MurimDeco
            </p>
            <div className="flex items-center space-x-2 mb-8">
              <span className="body-md text-white/80">Créons ensemble votre événement de rêve</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-light-gold text-imperial-blue text-lg px-8"
                onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Réserver Maintenant
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/50 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm rounded-2xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir Nos Réalisations
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="body-sm text-white/80 uppercase tracking-wider">Découvrez</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
