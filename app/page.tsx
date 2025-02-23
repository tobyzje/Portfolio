import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ParticleBackground from "./components/ParticleBackground";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <ParticleBackground />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}