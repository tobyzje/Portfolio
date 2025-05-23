'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const workExperience = [
  {
    period: "2024 - Nu",
    company: "Freelance Webudvikler",
    title: "Webudvikler & UI/UX Designer",
    description: "Arbejder som selvstændig freelance webudvikler med fokus på skræddersyede digitale løsninger. Speciale i React, Next.js og moderne webteknologier.",
    technologies: ["React", "Next.js", "WordPress", "Shopify", "Tailwind CSS"]
  },
  {
    period: "2020 - Nu",
    company: "Selvlært Udvikler",
    title: "Selvlært",
    description: "Dedikerede mig til intensiv selvlæring inden for webudvikling, med fokus på moderne frontend-teknologier og best practices.",
    technologies: ["React", "JavaScript", "CSS", "Responsive Design", "Nextjs", "Tailwind CSS", "Framer Motion", "Sanity", "Shopify", "WordPress"]
  },
  {
    period: "27. Juni 2002",
    company: "Det hele startede her",
    title: "Født",
    description: "Jeg er født på Grindsted Sygehus den 27. Juni 2002.",
    technologies: ["Født", "Grindsted Sygehus", "Forældre", "Søster"]
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
            Min Karriere
          </h2>

          <div className="relative">
            {/* Vertikal linje */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-emerald-200" />

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
                {/* Tidspunkt cirkel med pulserende animation */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg" />
                </motion.div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transition-all"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div 
                      className="flex items-center mb-3 text-emerald-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{experience.period}</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Building2 className="w-5 h-5 mr-2 text-gray-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {experience.company}
                      </h3>
                    </motion.div>
                    
                    <p className="text-gray-600 font-medium mb-2">{experience.title}</p>
                    <p className="text-gray-600 mb-4">{experience.description}</p>
                    
                    {/* {experience.hasRecommendation && (
                      <motion.div 
                        className="mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full flex items-center justify-center gap-2 text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                          onClick={() => window.open('/documents/golf-experten-udtalelse.pdf', '_blank')}
                        >
                          <Download className="w-4 h-4" />
                          Download Udtalelse
                        </Button>
                      </motion.div>
                    )} */}
                    
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium"
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgb(16 185 129 / 0.2)"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 