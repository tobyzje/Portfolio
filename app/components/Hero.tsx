'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { ContactModal } from './ContactModal';

const Hero = () => {
  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <div className="max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 relative w-48 h-48"
          >
            <Image
              src="/images/profile/tobias.jpg"
              alt="Tobias Stoklund"
              fill
              className="rounded-full object-cover shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
              priority  
            />
          </motion.div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Tobias Stoklund
          </h1>
          <div className="mt-4 text-xl text-gray-600 sm:text-2xl">
            <TypeAnimation
              sequence={[
                'Frontend Udvikler',
                2000,
                'Webudvikler',
                2000,
                'UI/UX Designer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Selvlært webudvikler og grundlægger af NationsNetwork. 
            Specialiseret i at skabe moderne og effektive digitale løsninger 
            for virksomheder.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ContactModal />
            <a
              href="#projects"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-indigo-600"
            >
              Se Mine Projekter <span aria-hidden="true">→</span>
            </a>
          </div>
          
          {/* Sociale medier */}
          <div className="mt-8 flex justify-center space-x-6">
            <motion.a
              href="https://github.com/tobyzje"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
              <span className="sr-only">GitHub profil</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/tobias-stoklund-632033319/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
              <span className="sr-only">LinkedIn profil</span>
            </motion.a>
            <motion.a
              href="https://instagram.com/tobystoklund"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
              <span className="sr-only">Instagram profil</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll-ned indikator */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 mx-auto flex flex-col items-center cursor-pointer w-fit"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-gray-600 text-sm font-medium mb-2">Scroll Ned</span>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className="h-8 w-8 text-gray-600 hover:text-gray-900 transition-colors" 
        />
      </motion.div>
    </div>
  );
};

export default Hero; 