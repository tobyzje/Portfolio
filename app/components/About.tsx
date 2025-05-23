'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHandshake, faMoneyBills } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faCode,
    title: 'Moderne Teknologier',
    description: 'Udvikler professionelle websites med de nyeste teknologier og best practices inden for webudvikling, hvilket sikrer hurtige, sikre og brugervenlige løsninger.'
  },
  {
    icon: faHandshake,
    title: 'Tæt Samarbejde',
    description: 'Lægger stor vægt på at forstå hver kundes unikke behov og forretningsmål, for at kunne levere målrettede digitale løsninger der skaber reel værdi.'
  },
  {
    icon: faMoneyBills,
    title: 'Billigt & Effektivt',
    description: 'Jeg arbejder med at levere høj kvalitet til en lavere pris, for at sikre, at kunden får den bedste værdi for deres penge.'
  }
];

const About = () => {
  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Om Mig
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Jeg er freelance webudvikler med fokus på at levere professionelle webløsninger af højeste kvalitet. Jeg kombinerer teknisk ekspertise med strategisk forståelse for at skabe digitale løsninger, der ikke bare ser godt ud, men også leverer målbare resultater for mine kunder. Med fokus på moderne teknologier og best practices sikrer jeg, at hver løsning er bygget til fremtiden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 bg-white/80 rounded-xl backdrop-blur-sm shadow-lg"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center transform rotate-45">
                  <FontAwesomeIcon 
                    icon={feature.icon} 
                    className="w-4 h-4 text-white transform -rotate-45" 
                  />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 