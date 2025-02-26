'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Throttle scroll event
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return (...args: any[]) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  const handleScroll = useCallback(throttle(() => {
    const currentScrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercentage = (currentScrollY / (documentHeight - windowHeight)) * 100;

    if (currentScrollY > 500 || scrollPercentage > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, 150), []); // Throttle to 150ms

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    if (isScrolling) return; // Prevent multiple clicks while scrolling
    setIsScrolling(true);

    const duration = 800; // Øget varighed for mere smooth animation
    const start = window.scrollY;
    const startTime = performance.now();

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4); // Mere smooth easing funktion

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start * (1 - easeOutQuart(progress)));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.5, 
            y: 20,
            transition: {
              duration: 0.2
            }
          }}
          onClick={scrollToTop}
          disabled={isScrolling}
          className={`fixed bottom-8 right-8 bg-indigo-600/90 backdrop-blur-sm text-white p-4 rounded-full shadow-lg transition-all duration-300 border border-white/10 z-50 group
            ${isScrolling ? 'cursor-not-allowed opacity-50' : 'hover:bg-indigo-500 hover:shadow-indigo-500/25 hover:shadow-xl'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isScrolling ? {
              y: [0, -4, 0],
              transition: {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            } : {}}
          >
            <ChevronUp 
              className={`h-6 w-6 transition-transform duration-300 group-hover:stroke-2`}
            />
          </motion.div>
          <span className="sr-only">Tilbage til toppen</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 