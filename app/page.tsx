import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ParticleBackground from "./components/ParticleBackground";
import { CallToAction } from '@/app/components/CallToAction';
import { WorkHistory } from '@/app/components/WorkHistory';
import Footer from './components/Footer';
import { generateMetadata } from '@/app/components/SEO';

export const metadata = generateMetadata({
  title: "Tobias Stoklund - Webudvikler & Digital Iværksætter",
  description: "Professionel webudvikler og grundlægger af NationsNetwork. Specialiseret i at skabe moderne og effektive digitale løsninger for virksomheder.",
  url: "https://tobiasstoklund.dk",
  image: "https://tobiasstoklund.dk/images/profile/tobias.jpg"
});

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <ParticleBackground />
      <Hero />
      <CallToAction />
      <About />
      <WorkHistory />
      <Skills />
      <Footer />
    </main>
  );
}