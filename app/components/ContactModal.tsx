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
import { Mail, Phone, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function ContactModal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Netværksfejl');
      }

      await response.json();
      
      setIsSuccess(true);
      toast.success('Besked sendt!', {
        description: 'Tak for din henvendelse. Jeg vender tilbage hurtigst muligt.',
      });
      
      // Nulstil formular
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Luk modalen efter 2 sekunder
      setTimeout(() => {
        setOpen(false);
        setIsSuccess(false);
      }, 2000);
      
    } catch {
      toast.error('Der opstod en fejl', {
        description: 'Din besked kunne ikke sendes. Prøv venligst igen senere.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className='text-lg bg-indigo-500 text-white hover:text-white hover:bg-indigo-600'>Kontakt Mig</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {isSuccess ? (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col items-center justify-center py-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CheckCircle2 className="w-24 h-24 text-green-500" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold mt-4"
            >
              Tak for din besked!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 mt-2"
            >
              Jeg vender tilbage hurtigst muligt
            </motion.p>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Kontakt Mig</DialogTitle>
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
                      className='focus:ring-indigo-500 focus:ring-2 focus:ring-offset-0 focus:border-indigo-500'
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
                      className='focus:ring-indigo-500 focus:ring-2 focus:ring-offset-0 focus:border-indigo-500'
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      className='focus:ring-indigo-500 focus:ring-2 focus:ring-offset-0 focus:border-indigo-500'
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                  
                  <Button type="submit" className="w-full bg-indigo-500 text-white hover:text-white hover:bg-indigo-600" disabled={isSubmitting}>
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
                      <a href="mailto:tobias@nationsnetwork.dk" className='hover:underline hover:text-indigo-500'>
                        tobias@nationsnetwork.dk
                      </a>
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Telefon: </span>
                    <span className='flex items-center'>
                      <Phone className="w-4 h-4 mr-2" />
                      <a href="tel:+4527572437" className='hover:underline hover:text-indigo-500'>
                        +45 27 57 24 37
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
} 