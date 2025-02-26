'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Technology {
  name: string;
  imagePath: string;
  description: string;
}

const technologies: Technology[] = [
  {
    name: 'HTML5',
    imagePath: '/images/skills/html5.svg',
    description: 'Den grundlæggende byggesten i moderne webudvikling. Jeg sikrer semantisk korrekt markup der optimerer både brugeroplevelsen og søgemaskineoptimeringen for mine kunders websites.'
  },
  {
    name: 'CSS3', 
    imagePath: '/images/skills/css3.svg',
    description: 'Ekspert i moderne CSS-teknologier, herunder Flexbox, Grid og animationer. Jeg skaber responsive designs der sikrer en optimal visning på alle enheder og skærmstørrelser.'
  },
  {
    name: 'JavaScript',
    imagePath: '/images/skills/javascript.svg', 
    description: 'Omfattende erfaring med moderne JavaScript, hvilket gør det muligt at implementere avanceret funktionalitet og interaktive elementer der forbedrer brugeroplevelsen markant.'
  },
  {
    name: 'TypeScript',
    imagePath: '/images/skills/typescript.png',
    description: 'Bruger TypeScript i alle større projekter for at sikre robuste og fejlfrie løsninger. Dette giver mere vedligeholdelsesvenlig kode og reducerer potentielle fejl i produktionen.'
  },
  {
    name: 'React',
    imagePath: '/images/skills/react.svg',
    description: 'Specialiseret i React-udvikling med fokus på genbrugelige komponenter og optimeret performance. Dette muliggør skalerbare og vedligeholdelsesvenlige løsninger for mine kunder.'
  },
  {
    name: 'Next.js',
    imagePath: '/images/skills/nextjs.png',
    description: 'Ekspertise i Next.js framework, som jeg bruger til at bygge hurtige, SEO-venlige websites med server-side rendering og optimeret performance.'
  },
  {
    name: 'Node.js',
    imagePath: '/images/skills/nodejs.png',
    description: 'Erfaren i udvikling af robuste backend-systemer med Node.js. Bygger skalerbare server-side applikationer der håndterer alt fra API-endpoints til databaseoperationer.'
  },
  {
    name: 'Express',
    imagePath: '/images/skills/expressjs.png',
    description: 'Bruger Express.js til at bygge hurtige og effektive web-APIs. Implementerer sikker routing, middleware og error handling for pålidelige backend-løsninger.'
  },
  {
    name: 'MySQL',
    imagePath: '/images/skills/mysql.svg',
    description: 'Solid erfaring med MySQL-databaser. Designer og implementerer effektive databasestrukturer der sikrer optimal datahåndtering og -sikkerhed.'
  },
  {
    name: 'Prisma',
    imagePath: '/images/skills/prisma-2.svg',
    description: 'Anvender Prisma som moderne ORM til sikker og typesikker database-interaktion. Dette giver bedre udviklingsoplevelse og mere pålidelige database-operationer.'
  }
];

const libraries: Technology[] = [
  {
    name: 'TailwindCSS',
    imagePath: '/images/skills/tailwind.svg',
    description: 'Ekspert i Tailwind CSS til at skabe moderne og responsive designs. Med utility-first tilgangen bygger jeg hurtigt og effektivt brugergrænseflader der er nemme at vedligeholde og tilpasse.'
  },
  {
    name: 'Shadcn UI',
    imagePath: '/images/skills/shadcn.png',
    description: 'Bruger Shadcn UI komponenter til at skabe professionelle og tilgængelige brugergrænseflader. Dette sikrer en konsistent og moderne brugeroplevelse på tværs af alle projekter.'
  }
];

const CMS: Technology[] = [
  {
    name: 'WordPress',
    imagePath: '/images/icons/wordpress.svg',
    description: 'Ikke så ofte, men jeg har også erfaring med WordPress til at skabe dynamiske og vedligeholdelsesvenlige websites.'
  },
  {
    name: 'Sanity.io',
    imagePath: '/images/icons/sanity-symbol.svg',
    description: 'Jeg har brugt Sanity til at skabe dynamiske og vedligeholdelsesvenlige websites. Sammen med Nextjs er det et kraftfuldt værktøj til at skabe moderne og effektive løsninger.'
  },
  {
    name: 'Shopify',
    imagePath: '/images/icons/shopify.svg',
    description: 'Ikke meget erfaring med Shopify, men har testet det og kan hjælpe med at oprette en webshop.'
  }
];

const SkillCard = ({ name, imagePath, description }: Technology) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex gap-6 items-start p-6 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl"
  >
    <div className="flex-shrink-0 relative w-16 h-16">
      <Image
        src={imagePath}
        alt={`${name} logo`}
        fill
        className="object-contain"
      />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Teknologier
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mine primære værktøjer og teknologier til at skabe moderne digitale løsninger
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {technologies.map((tech, index) => (
            <SkillCard
              key={index}
              name={tech.name}
              imagePath={tech.imagePath}
              description={tech.description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Libraries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Frameworks og biblioteker jeg bruger til at optimere udviklingsprocessen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {libraries.map((lib, index) => (
            <SkillCard
              key={index}
              name={lib.name}
              imagePath={lib.imagePath}
              description={lib.description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            CMS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Content Management Systemer jeg har erfaring med
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CMS.map((cms, index) => (
            <SkillCard
              key={index}
              name={cms.name}
              imagePath={cms.imagePath}
              description={cms.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;