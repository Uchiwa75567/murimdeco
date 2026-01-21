import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { logo } from '@/lib/media-data';
import { getOptimizedImage } from '@/lib/cloudinary';

const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'Catégories', href: '#categories' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Vidéos', href: '#videos' },
  { label: 'Réservation', href: '#reservation' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-lg backdrop-blur-md border-b border-white/20' : 'bg-white/20 backdrop-blur-lg'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img
              src={getOptimizedImage(logo.assetId, { height: 60 })}
              alt="MurimDeco"
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden heading-sm text-imperial-blue">MurimDeco</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="body-md font-medium text-foreground hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="default" 
              className="hidden md:flex bg-gold hover:bg-light-gold text-imperial-blue"
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Obtenir un Devis
            </Button>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="body-lg font-medium text-foreground hover:text-gold transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button 
                    className="mt-4 bg-gold hover:bg-light-gold text-imperial-blue"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Obtenir un Devis
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
