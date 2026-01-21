import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send } from 'lucide-react';
import { contactInfo } from '@/lib/contact-info';

interface FormData {
  client_name: string;
  client_email: string;
  client_phone: string;
  event_type: string;
  event_date: string;
  location: string;
  estimated_budget: number | string;
  message: string;
}

export function ReservationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    client_name: '',
    client_email: '',
    client_phone: '',
    event_type: '',
    event_date: '',
    location: '',
    estimated_budget: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email subject and body
    const subject = encodeURIComponent(`Demande de Réservation - ${formData.event_type}`);
    const body = encodeURIComponent(`
Bonjour MurimDeco,

Je souhaite obtenir un devis pour mon événement.

Détails de la demande:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nom: ${formData.client_name}
Email: ${formData.client_email}
Téléphone: ${formData.client_phone}

Type d'événement: ${formData.event_type}
Date de l'événement: ${formData.event_date}
Lieu: ${formData.location}
Budget estimé: ${formData.estimated_budget} FCFA

Message:
${formData.message || 'Aucun message supplémentaire'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cordialement,
${formData.client_name}
    `);

    // Open email client with pre-filled data
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

    // Show success message
    setTimeout(() => {
      alert('Votre demande a été préparée! Veuillez envoyer l\'email depuis votre client de messagerie.');
      setFormData({
        client_name: '',
        client_email: '',
        client_phone: '',
        event_type: '',
        event_date: '',
        location: '',
        estimated_budget: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="reservation" className="py-20 bg-gradient-to-br from-imperial-blue to-imperial-blue/90">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-white mb-4">Demander un Devis</h2>
            <p className="body-lg text-white/90 max-w-2xl mx-auto">
              Créons quelque chose d'extraordinaire ensemble. Partagez votre vision avec nous!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="body-md font-medium text-foreground mb-2 block">
                    Votre Nom *
                  </label>
                  <Input
                    required
                    value={formData.client_name}
                    onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="body-md font-medium text-foreground mb-2 block">
                    Adresse Email *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.client_email}
                    onChange={(e) => setFormData({ ...formData, client_email: e.target.value })}
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="body-md font-medium text-foreground mb-2 block">
                    Numéro de Téléphone *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.client_phone}
                    onChange={(e) => setFormData({ ...formData, client_phone: e.target.value })}
                    placeholder="+241 XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="body-md font-medium text-foreground mb-2 block">
                    Type d'Événement *
                  </label>
                  <Select
                    value={formData.event_type}
                    onValueChange={(value) => setFormData({ ...formData, event_type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type d'événement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mariage">Mariage</SelectItem>
                      <SelectItem value="Événement Corporatif">Événement Corporatif</SelectItem>
                      <SelectItem value="Anniversaire">Anniversaire</SelectItem>
                      <SelectItem value="Célébration">Célébration</SelectItem>
                      <SelectItem value="Baby Shower">Baby Shower</SelectItem>
                      <SelectItem value="Autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="body-md font-medium text-foreground mb-2 block">
                    Date de l'Événement *
                  </label>
                  <Input
                    required
                    type="date"
                    value={formData.event_date}
                    onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="body-md font-medium text-foreground mb-2 block">
                    Lieu *
                  </label>
                  <Input
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Ville ou lieu de l'événement"
                  />
                </div>
              </div>

              <div>
                <label className="body-md font-medium text-foreground mb-2 block">
                  Budget Estimé (FCFA) *
                </label>
                <Input
                  required
                  type="number"
                  value={formData.estimated_budget}
                  onChange={(e) => setFormData({ ...formData, estimated_budget: e.target.value })}
                  placeholder="500000"
                />
              </div>

              <div>
                <label className="body-md font-medium text-foreground mb-2 block">
                  Message Supplémentaire
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Parlez-nous de votre vision..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-light-gold text-imperial-blue text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer la Demande
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
