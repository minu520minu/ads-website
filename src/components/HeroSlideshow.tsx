import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES } from '../data/services';

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {HERO_SLIDES[index].type === 'image' && (
            <img 
              src={HERO_SLIDES[index].url} 
              alt={HERO_SLIDES[index].label} 
              className="w-full h-full object-cover bg-lumio-ink"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          )}
          {/* Multi-layered overlay for premium feel - Dynamic based on photo contrast needs */}
          <div className={`absolute inset-0 backdrop-blur-[1px] ${[0, 3, 4].includes(index) ? 'bg-lumio-ink/60' : 'bg-lumio-ink/25'}`} />
          <div className={`absolute inset-0 bg-gradient-to-b via-transparent ${
            [0, 3, 4].includes(index) 
              ? 'from-lumio-ink/50 to-lumio-ink/80' 
              : 'from-lumio-ink/20 to-lumio-ink/40'
          }`} />
          {[0, 3, 4].includes(index) && (
            <div className="absolute inset-0 bg-gradient-to-tr from-lumio-ink/40 via-transparent to-transparent" />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
