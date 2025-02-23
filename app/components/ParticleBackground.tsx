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
  'rgb(79, 70, 229, 0.4)', // indigo-600 med højere opacity
  'rgb(99, 102, 241, 0.4)', // indigo-500 med højere opacity
  'rgb(129, 140, 248, 0.4)', // indigo-400 med højere opacity
  'rgb(165, 180, 252, 0.3)', // indigo-300 med medium opacity
  'rgb(199, 210, 254, 0.3)', // indigo-200 med medium opacity
];

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Opret flere partikler
    const newParticles = Array.from({ length: 250 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + (i % 3 === 0 ? 6 : 3), // Større partikler
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    const bounds = 150; // Større påvirkningsområde
    
    setParticles(prev => 
      prev.map(particle => {
        const deltaX = clientX - particle.x;
        const deltaY = clientY - particle.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < bounds) {
          const force = (bounds - distance) / bounds;
          return {
            ...particle,
            x: particle.x - (deltaX * force * 0.3), // Mere bevægelse
            y: particle.y - (deltaY * force * 0.3),
          };
        }
        return particle;
      })
    );
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseMove]);

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
            opacity: [0.3, 0.6, 0.3], // Højere opacity værdier
            left: particle.x,
            top: particle.y,
          }}
          transition={{
            duration: 3, // Længere animation
            repeat: Infinity,
            ease: "easeInOut",
            left: {
              duration: 0.7,
              ease: "easeOut"
            },
            top: {
              duration: 0.7,
              ease: "easeOut"
            }
          }}
          style={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            filter: 'blur(1px)', // Mere blur for blødere look
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground; 