'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const PARTICLE_COLORS = [
  'rgb(16, 185, 129, 0.3)', // emerald-500
  'rgb(5, 150, 105, 0.3)', // emerald-600
  'rgb(52, 211, 153, 0.3)', // emerald-400
  'rgb(110, 231, 183, 0.2)', // emerald-300
  'rgb(167, 243, 208, 0.2)', // emerald-200
];

// Custom hook for at detektere skærmstørrelse
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);
    
    updateMatch();
    media.addEventListener('change', updateMatch);
    
    return () => media.removeEventListener('change', updateMatch);
  }, [query]);

  return matches;
};

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    const getParticleCount = () => {
      if (isMobile) return 50;  // Færre partikler på mobil
      if (isTablet) return 100; // Medium antal på tablet
      return 150;               // Fuldt antal på desktop
    };

    const getParticleSize = (index: number) => {
      if (isMobile) {
        return Math.random() * 3 + (index % 3 === 0 ? 3 : 2);
      }
      return Math.random() * 4 + (index % 3 === 0 ? 4 : 2);
    };

    const newParticles = Array.from({ length: getParticleCount() }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: getParticleSize(i),
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }));
    setParticles(newParticles);
  }, [isMobile, isTablet]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (isMobile) return; // Deaktiver mouse interaction på mobile enheder
    
    const { clientX, clientY } = event;
    const bounds = 100;
    
    setParticles(prev => 
      prev.map(particle => {
        const deltaX = clientX - particle.x;
        const deltaY = clientY - particle.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < bounds) {
          const force = (bounds - distance) / bounds;
          return {
            ...particle,
            x: particle.x - (deltaX * force * 0.2),
            y: particle.y - (deltaY * force * 0.2),
          };
        }
        return particle;
      })
    );
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    const handleResize = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }))
      );
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseMove, isMobile]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            opacity: 0,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            opacity: isMobile ? 0.3 : [0.2, 0.4, 0.2],
            left: particle.x,
            top: particle.y,
          }}
          transition={{
            duration: isMobile ? 2 : 3,
            repeat: Infinity,
            ease: "linear",
            left: {
              duration: 0.5,
              ease: "linear"
            },
            top: {
              duration: 0.5,
              ease: "linear"
            }
          }}
          style={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            filter: isMobile ? 'blur(0.5px)' : 'blur(1px)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground; 