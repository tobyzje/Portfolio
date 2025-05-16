'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter
} from '@/components/ui/dialog';
import { FaCalendarAlt, FaUserTie, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import Head from 'next/head';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Mit eget portfolio bygget med Next.js, Tailwind CSS og Framer Motion. Fokus på moderne design og performance.',
    image: '/images/projects/portfolio.jpg',
    link: 'https://tobiasstoklund.dk',
    year: '2024',
    role: 'Design & Udvikling',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'AM MultiService',
    description: 'En komplet hjemmeside bygget med Next.js, Tailwind CSS.',
    image: '/images/projects/am-multiservice.jpg',
    link: 'https://am-multiservice.tobiasstoklund.dk/',
    year: '2025',
    role: 'Design & Udvikling',
    technologies: ['Next.js', 'Tailwind CSS']
  },
];

const Projects = () => {

  return (
    <section className="py-20 bg-white/70 backdrop-blur-sm">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: projects.map((project, idx) => ({
            '@type': 'CreativeWork',
            position: idx + 1,
            name: project.title,
            description: project.description,
            url: project.link !== '#' ? project.link : 'https://tobiasstoklund.dk',
            image: project.image,
            author: {
              '@type': 'Person',
              name: 'Tobias Stoklund',
            },
            dateCreated: project.year,
          }))
        }) }} />
      </Head>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Seneste Projekter
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Her er et udvalg af mine seneste projekter, hvor jeg har haft fokus på moderne webteknologier, brugervenlighed og skræddersyede løsninger.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-2 line-clamp-2">{project.description}</p>
                    <span className="inline-block mt-2 text-emerald-600 font-medium group-hover:underline">Læs mere</span>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-full md:p-0 p-0 bg-white border-0 shadow-2xl rounded-2xl overflow-hidden">
                <DialogHeader className="p-8 pb-0 bg-gradient-to-r from-emerald-50 to-white">
                  <DialogTitle className="text-3xl font-bold text-gray-900 mb-2 text-left">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="md:flex gap-8 p-8 pt-4">
                  <div className="relative w-full md:w-2/5 h-56 md:h-72 rounded-xl overflow-hidden shadow-lg border border-emerald-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between mt-6 md:mt-0">
                    <div>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold flex items-center gap-2">
                          <FaCalendarAlt className="text-emerald-500" /> <b>År:</b> {project.year}
                        </span>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold flex items-center gap-2">
                          <FaUserTie className="text-emerald-500" /> <b>Rolle:</b> {project.role}
                        </span>
                      </div>
                      <div className="mb-4">
                        <span className="text-xs text-gray-400 font-semibold mb-1 flex items-center gap-2">
                          <FaCode className="text-emerald-400" /> Teknologier
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium border border-emerald-100 flex items-center gap-1">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 text-base leading-relaxed">{project.description}</p>
                    </div>
                    <DialogFooter className="mt-4">
                      {project.link && project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-colors text-lg shadow-lg flex items-center gap-2"
                        >
                          Besøg siden <FaExternalLinkAlt className="ml-1" />
                        </a>
                      )}
                    </DialogFooter>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 