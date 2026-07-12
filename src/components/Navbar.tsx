import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GENERAL_SERVICES } from '../data/services';

interface NavbarProps {
  setActiveServiceId: (id: string) => void;
  setScrollContactPending: (pending: boolean) => void;
}

export function Navbar({ setActiveServiceId, setScrollContactPending }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On sub-pages, we always want the dark/solid nav style because they have white backgrounds
  const useDarkNav = isScrolled || location.pathname !== '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${useDarkNav ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/"
          onClick={() => { window.scrollTo(0, 0); }} 
          className={`text-2xl font-serif transition-colors duration-300 cursor-pointer ${useDarkNav ? 'text-lumio-ink' : 'text-white'}`}
        >
          Lumi<span className="text-lumio-accent">o</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/"
            onClick={() => { window.scrollTo(0,0); }}
            className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
              location.pathname === '/' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Home
          </Link>
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
                      setActiveServiceId(svc.id);
                      if (location.pathname === '/') {
                        const el = document.getElementById('services');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        navigate('/');
                        setTimeout(() => {
                          const el = document.getElementById('services');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 400);
                      }
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-lumio-ink-soft hover:bg-lumio-accent-light hover:text-lumio-accent rounded-lg transition-colors cursor-pointer"
                  >
                    {svc.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Link 
            to="/free-seo-audit"
            onClick={() => { window.scrollTo(0,0); }}
            className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
              location.pathname === '/free-seo-audit' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Free SEO Audit
          </Link>
          <Link 
            to="/Chinese-Consumer-Marketing"
            onClick={() => { window.scrollTo(0, 0); }}
            className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
              location.pathname === '/Chinese-Consumer-Marketing' 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Chinese Consumer Marketing
          </Link>
          <Link 
            to="/case-studies"
            onClick={() => { window.scrollTo(0,0); }}
            className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
              location.pathname.startsWith('/case-studies') 
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Case Studies
          </Link>
          <Link 
            to="/insights"
            onClick={() => { window.scrollTo(0, 0); }}
            className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
              location.pathname.startsWith('/insights')
                ? 'text-lumio-accent' 
                : useDarkNav ? 'text-lumio-ink-soft hover:text-lumio-ink' : 'text-white/80 hover:text-white'
            }`}
          >
            Insights
          </Link>
          <button 
            onClick={() => {
              if (location.pathname === '/') {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              } else {
                setScrollContactPending(true);
                navigate('/');
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
              <Link to="/" onClick={() => { setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer">Home</Link>
              <Link to="/free-seo-audit" onClick={() => { setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer">Free SEO Audit</Link>
              <Link to="/Chinese-Consumer-Marketing" onClick={() => { setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer">Chinese Consumer Marketing</Link>
              <Link to="/case-studies" onClick={() => { setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer">Case Studies</Link>
              <Link to="/insights" onClick={() => { setIsOpen(false); window.scrollTo(0,0); }} className="text-left py-2 font-medium text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer">Insights</Link>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  if (location.pathname === '/') {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setScrollContactPending(true);
                    navigate('/');
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
