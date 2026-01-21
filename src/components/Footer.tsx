import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/lib/contact-info';

// TikTok and Pinterest icons
const TikTokIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.08-.76-.15-1.92 0-2.75l1.08-4.59s-.28-.55-.28-1.37a3.46 3.46 0 0 1 2-3 1.39 1.39 0 0 1 1.58.67 1.41 1.41 0 0 1-.15 1.43 23 23 0 0 0-.93 2.35c-.21.88.44 1.59 1.31 1.59 1.57 0 2.78-1.66 2.78-4a3.1 3.1 0 0 0-3.29-3.2 4.31 4.31 0 0 0-4.48 4.35 3.52 3.52 0 0 0 .67 2.09.37.37 0 0 1 .09.35c-.08.32-.25 1-.29 1.15a.27.27 0 0 1-.39.19c-1.1-.51-1.78-2.11-1.78-3.4a5.52 5.52 0 0 1 5.82-5.49c3.06 0 5.44 2.18 5.44 5.09 0 3-1.9 5.46-4.53 5.46a2.34 2.34 0 0 1-2-1l-.55 2.08a9.63 9.63 0 0 1-1.1 2.34A12 12 0 1 0 12 0z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-imperial-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="heading-sm text-gold mb-4">MurimDeco</h3>
            <p className="body-sm text-white/80 mb-4">
              Transformez vos événements en expériences inoubliables avec nos décorations élégantes et notre service exceptionnel.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactInfo.socialMedia.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={contactInfo.socialMedia.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={contactInfo.socialMedia.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a 
                href={contactInfo.socialMedia.pinterest.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="heading-sm text-gold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#categories" className="body-sm text-white/80 hover:text-gold transition-colors">Mariages</a></li>
              <li><a href="#categories" className="body-sm text-white/80 hover:text-gold transition-colors">Événements Corporatifs</a></li>
              <li><a href="#categories" className="body-sm text-white/80 hover:text-gold transition-colors">Anniversaires</a></li>
              <li><a href="#categories" className="body-sm text-white/80 hover:text-gold transition-colors">Événements Spéciaux</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-sm text-gold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="body-sm text-white/80 hover:text-gold transition-colors">À Propos</a></li>
              <li><a href="#projects" className="body-sm text-white/80 hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#reservation" className="body-sm text-white/80 hover:text-gold transition-colors">Réservation</a></li>
              <li><a href="#testimonials" className="body-sm text-white/80 hover:text-gold transition-colors">Témoignages</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-sm text-gold mb-4">Contactez-Nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="body-sm text-white/80">{contactInfo.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="body-sm text-white/80 hover:text-gold transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="body-sm text-white/80 hover:text-gold transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="body-sm text-white/60">
            © {new Date().getFullYear()} MurimDeco. Tous Droits Réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
