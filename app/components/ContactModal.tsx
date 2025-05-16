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
import { MdEmail, MdPhone, MdCheckCircle, MdMessage } from 'react-icons/md';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Checkbox } from "@/components/ui/checkbox";
import { FaRegIdCard } from 'react-icons/fa';

export function ContactModal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
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
        message: '',
        consent: false
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
        <Button variant="outline" size="lg" className='text-lg bg-emerald-500 text-white hover:text-white hover:bg-emerald-600'>
          <MdEmail className="w-4 h-4" />
          Kontakt Mig
        </Button>
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
              <MdCheckCircle className="w-24 h-24 text-green-500" />
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
                    <label htmlFor="name" className="text-sm font-medium mb-2 flex items-center">
                      <FaRegIdCard className='w-4 h-4 mr-2' />
                      Fulde navn
                    </label>
                    <Input
                      id="name"
                      className='focus:ring-emerald-500 focus:ring-2 focus:ring-offset-0 focus:border-emerald-500'
                      value={formData.name}
                      placeholder='Dit navn'
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 flex items-center">
                      <MdEmail className='w-4 h-4 mr-2' />
                      E-Mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className='focus:ring-emerald-500 focus:ring-2 focus:ring-offset-0 focus:border-emerald-500'
                      value={formData.email}
                      placeholder='Din e-mail'
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 flex items-center">
                      <MdPhone className='w-4 h-4 mr-2' />
                      Telefon
                    </label>
                    <div className="flex">
                      <div className="bg-gray-50 rounded-l-lg border border-r-0 border-gray-200 px-3 flex items-center">
                        <span className="text-gray-500">+45</span>
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        className='focus:ring-emerald-500 focus:ring-2 focus:ring-offset-0 focus:border-emerald-500 rounded-l-none'
                        value={formData.phone}
                        placeholder='12345678'
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, '');
                          setFormData({ ...formData, phone: value });
                        }}
                        maxLength={8}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 flex items-center">
                      <MdMessage className='w-4 h-4 mr-2' />
                      Fortæl mig om dit projekt
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

                  <div className="flex items-start">
                    <Checkbox 
                      id="consent"
                      className="mt-1"
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, consent: checked === true })
                      }
                      disabled={isSubmitting}
                    />
                    <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                      Jeg accepterer at modtage et telefonisk opkald eller email
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-emerald-500 text-white hover:text-white hover:bg-emerald-600 flex items-center justify-center gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        Sender
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </>
                    ) : "Send Besked"}
                  </Button>
                </form>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Kontaktinformation</h3>
                <div className="grid gap-2 text-sm">
                  <div>
                    <span className="font-medium">Email: </span>
                    <span className='flex items-center'>
                      <MdEmail className="w-4 h-4 mr-2" />
                      <a href="mailto:info@tobiasstoklund.dk" className='hover:underline hover:text-emerald-500'>
                        info@tobiasstoklund.dk
                      </a>
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Telefon: </span>
                    <span className='flex items-center'>
                      <MdPhone className="w-4 h-4 mr-2" />
                      <a href="tel:+4527572437" className='hover:underline hover:text-emerald-500'>
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