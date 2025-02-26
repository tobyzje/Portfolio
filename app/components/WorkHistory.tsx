'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const workExperience = [
  {
    period: "2024 - Nu",
    company: "NationsNetwork",
    title: "Grundlægger & Webudvikler",
    description: "Etablerede og driver NationsNetwork, et webbureau specialiseret i skræddersyede digitale løsninger. Arbejder med WordPress, Shopify og custom web-applikationer.",
    technologies: ["React", "Next.js", "WordPress", "Shopify", "Tailwind CSS"]
  },
  {
    period: "2025 - 2025",
    company: "Praktikant",
    title: "Golf Rådgiver",
    description: "Arbejdede som praktikant som golf rådgiver i Golf Experten i Kolding.",
    technologies: ["Golf", "Golf Rådgiver", "Salg", "Kundeservice", "Kunderelationer", "Eventplanlægning", "Salg af fysiske produkter"]
  },
  {
    period: "2020 - Nu",
    company: "Selvlært Udvikler",
    title: "Selvlært",
    description: "Dedikerede mig til intensiv selvlæring inden for webudvikling, med fokus på moderne frontend-teknologier og best practices.",
    technologies: ["React", "JavaScript", "CSS", "Responsive Design", "Nextjs", "Tailwind CSS", "Framer Motion", "Sanity", "Shopify", "WordPress"]
  }
];

export function WorkHistory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Min Arbejdshistorik
          </h2>

          <div className="relative">
            {/* Vertikal linje */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200" />

            {workExperience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center md:items-start mb-12 last:mb-0`}
              >
                {/* Tidspunkt cirkel */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg" />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <div className="flex items-center mb-3 text-indigo-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{experience.period}</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Building2 className="w-5 h-5 mr-2 text-gray-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {experience.company}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 font-medium mb-2">{experience.title}</p>
                    <p className="text-gray-600 mb-4">{experience.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 