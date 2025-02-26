'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';

export function ContactModal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Her implementerer du email-logikken
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulerer en API-kald
      
      toast.success('Besked sendt!', {
        description: 'Tak for din henvendelse. Jeg vender tilbage hurtigst muligt.',
      });
      
      // Nulstil formular
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch {
      toast.error('Der opstod en fejl', {
        description: 'Din besked kunne ikke sendes. Prøv venligst igen senere.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className='text-lg bg-indigo-500 text-white hover:text-white hover:bg-indigo-600'>Kontakt Os</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Kontakt Os</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-8 py-4">
          <div className="grid gap-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Navn
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Besked
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  disabled={isSubmitting}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sender..." : "Send Besked"}
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Kontaktinformation</h3>
            <div className="grid gap-2 text-sm">
              <div>
                <span className="font-medium">Email: </span>
                <span className='flex items-center'>
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:tobias@nationsnetwork.dk">
                    tobias@nationsnetwork.dk
                  </a>
                </span>
              </div>
              <div>
                <span className="font-medium">Telefon: </span>
                <span className='flex items-center'>
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+4527572437">
                    +45 27 57 24 37
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 