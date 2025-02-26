'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-indigo-600 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ring til mig
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Jeg er altid klar til at høre om nye spændende projekter. 
            Ring til mig for en uforpligtende snak om dine idéer.
          </p>
          <motion.a
            href="tel:+4527572437"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            +45 27 57 24 37
          </motion.a>
          <p className="text-indigo-100 text-sm mt-4">
            Tilgængelig hverdage 9:00 - 17:00
          </p>
        </motion.div>
      </div>
    </section>
  );
} 