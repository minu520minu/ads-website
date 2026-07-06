import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ViewState } from '../types';
import { GENERAL_SERVICES } from '../data/services';

interface NavbarProps {
  currentView: ViewState;
  setView: (v: ViewState) => void;
  setActiveServiceId: (id: string) => void;
}

export function Navbar({ currentView, setView, setActiveServiceId }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On sub-pages, we always want the dark/solid nav style because they have white backgrounds
  const useDarkNav = isScrolled || currentView !== 'home';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${useDarkNav ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <button 
          onClick={() => { setView('home'); window.scrollTo(0, 0); }} 
          className={`text-2xl font-serif transition-colors duration-300 cursor-pointer ${useDarkNav ? 'text-lumio-ink' : 'text-white'}`}
        >
          Lumi<span className="text-lumio-accent">o</span>
        </button>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => { setView('home'); window.scrollTo(0,0); }}
            className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
              currentView === 'home' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Home
          </button>
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 cursor-pointer ${useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'}`}>
              Services <ChevronDown size={14} className="opacity-50" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-lumio-ink/5 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-2 space-y-1">
                {GENERAL_SERVICES.map(svc => (
                  <button 
                    key={svc.id}
                    onClick={() => {
                      setView('home');
                      setActiveServiceId(svc.id);
                      setTimeout(() => {
                        const el = document.getElementById('services');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-lumio-ink-soft hover:bg-lumio-accent-light hover:text-lumio-accent rounded-lg transition-colors cursor-pointer"
                  >
                    {svc.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button 
            onClick={() => { setView('free-seo-audit'); window.scrollTo(0,0); }}
            className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
              currentView === 'free-seo-audit' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Free SEO Audit
          </button>
          <button 
            onClick={() => { setView('chinese-marketing'); window.scrollTo(0, 0); }}
            className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
              currentView === 'chinese-marketing' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Chinese Market Marketing
          </button>
          <button 
            onClick={() => { setView('case-studies'); window.scrollTo(0,0); }}
            className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
              currentView === 'case-studies' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Case Studies
          </button>
          <button 
            onClick={() => { setView('insights'); window.scrollTo(0, 0); }}
            className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
              currentView === 'insights' || currentView === 'insight-detail' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Insights
          </button>
          <button 
            onClick={() => {
              if (currentView === 'home') {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              } else {
                setView('home');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 500);
              }
            }}
            className={`btn ${useDarkNav ? 'btn-primary' : 'bg-white text-lumio-ink hover:bg-lumio-accent hover:text-white'} text-sm py-2.5 transition-all duration-300 cursor-pointer`}
          >
            Let's talk
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden transition-colors duration-300 cursor-pointer ${useDarkNav ? 'text-lumio-ink' : 'text-white'}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-lumio-ink/5 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <button onClick={() => { setView('home'); setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer">Home</button>
              <button onClick={() => { setView('free-seo-audit'); setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer">Free SEO Audit</button>
              <button onClick={() => { setView('chinese-marketing'); setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer">Chinese Market Marketing</button>
              <button onClick={() => { setView('case-studies'); setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer">Case Studies</button>
              <button onClick={() => { setView('insights'); setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer">Insights</button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  if (currentView === 'home') {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setView('home');
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                  }
                }} 
                className="btn btn-primary w-full cursor-pointer"
              >
                Let's talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
