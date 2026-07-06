import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (v: ViewState) => void;
  setActiveServiceId: (id: string) => void;
}

export function Footer({ setView, setActiveServiceId }: FooterProps) {
  return (
    <footer className="bg-lumio-ink pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <button onClick={() => { setView('home'); window.scrollTo(0,0); }} className="text-2xl font-serif text-white mb-6 cursor-pointer">
            Lumi<span className="text-lumio-accent">o</span>
          </button>
          <p className="text-sm text-white/40 leading-relaxed max-w-xs">
            Growth marketing for ambitious brands—including the Chinese consumer market others miss.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-6">Services</h4>
          <ul className="space-y-4">
            {[
              { name: 'Paid Media', id: 'paid' },
              { name: 'SEO', id: 'seo' },
              { name: 'Influencer', id: 'influencer' },
              { name: 'Chinese Market Marketing', id: 'chinese' }
            ].map(link => (
              <li key={link.name}>
                <button 
                  onClick={() => {
                    if (link.id === 'chinese') { 
                      setView('chinese-marketing'); 
                      window.scrollTo(0, 0); 
                    } else if (link.id === 'seo') {
                      setView('free-seo-audit');
                      window.scrollTo(0, 0);
                    } else {
                      setView('home');
                      setActiveServiceId(link.id);
                      setTimeout(() => {
                        const el = document.getElementById('services');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-sm text-white/60 hover:text-lumio-accent transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-6">Company</h4>
          <ul className="space-y-4">
            {['About', 'Case Studies', 'Insights'].map(link => (
              <li key={link}>
                {link === 'Insights' ? (
                  <button 
                    onClick={() => { setView('insights'); window.scrollTo(0, 0); }}
                    className="text-sm text-white/60 hover:text-lumio-accent transition-colors cursor-pointer"
                  >
                    {link}
                  </button>
                ) : link === 'Case Studies' ? (
                  <button 
                    onClick={() => { setView('case-studies'); window.scrollTo(0, 0); }}
                    className="text-sm text-white/60 hover:text-lumio-accent transition-colors cursor-pointer"
                  >
                    {link}
                  </button>
                ) : link === 'About' ? (
                  <button 
                    onClick={() => { setView('about'); window.scrollTo(0, 0); }}
                    className="text-sm text-white/60 hover:text-lumio-accent transition-colors cursor-pointer"
                  >
                    {link}
                  </button>
                ) : (
                  <a href="/" className="text-sm text-white/60 hover:text-lumio-accent transition-colors cursor-pointer">{link}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/60 hover:bg-lumio-accent hover:text-white transition-all cursor-pointer">
                <Instagram size={18} />
              </a>
            </div>
          <a href="mailto:hello@lumio.ca" className="text-sm text-white/60 hover:text-lumio-accent flex items-center gap-2 cursor-pointer">
            <Mail size={16} /> hello@lumio.ca
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-medium text-white/20">© 2026 LUMIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="/privacy" onClick={(e) => e.preventDefault()} className="text-[10px] font-medium text-white/20 hover:text-white transition-colors cursor-pointer">PRIVACY POLICY</a>
        </div>
      </div>
    </footer>
  );
}
