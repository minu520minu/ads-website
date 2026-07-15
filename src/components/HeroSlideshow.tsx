import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react'; // Add AnimatePresence here
import { HERO_SLIDES } from '../data/services';

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  
  // We no longer need prevIndex!

  // Preload all slideshow images on initial mount
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      if (slide.type === 'image') {
        const img = new Image();
        img.src = slide.url;
      }
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Grab the current slide data
  const currentSlide = HERO_SLIDES[index];

  return (
    <div className="absolute inset-0 w-full h-full bg-lumio-ink overflow-hidden">
      {/* AnimatePresence handles the crossfade automatically when the key changes */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index} // Changing this key tells Framer Motion to trigger the exit/initial animations
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }} // This tells the OLD slide to fade out smoothly
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {currentSlide.type === 'image' && (
            <img 
              src={currentSlide.url} 
              alt={currentSlide.label} 
              className="w-full h-full object-cover bg-lumio-ink"
              referrerPolicy="no-referrer"
            />
          )}
          
          {/* Multi-layered overlay */}
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