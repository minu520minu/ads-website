import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GENERAL_SERVICES } from '../data/services';

interface ServicesTabsProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

export function ServicesTabs({ activeId, setActiveId }: ServicesTabsProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row border border-lumio-ink/10 rounded-2xl overflow-hidden bg-white shadow-sm min-h-[550px]">
      {/* Left Sidebar Navigation */}
      <div className="w-full lg:w-64 bg-lumio-surface border-r border-lumio-ink/5 flex flex-col shrink-0">
        {GENERAL_SERVICES.map((svc) => (
          <button
            key={svc.id}
            onClick={() => setActiveId(svc.id)}
            className={`w-full flex items-center justify-between px-6 py-5 text-left border-b border-lumio-ink/5 last:border-0 transition-all duration-200 group cursor-pointer ${
              activeId === svc.id 
                ? 'bg-lumio-accent text-white' 
                : 'text-lumio-ink hover:bg-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`font-semibold text-xs tracking-tight ${activeId === svc.id ? 'text-white' : 'text-lumio-ink-soft group-hover:text-lumio-ink'}`}>
                {svc.title}
              </span>
              {svc.badge && (
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                  activeId === svc.id ? 'bg-white/20 text-white' : 'bg-lumio-teal-light text-lumio-teal'
                }`}>
                  {svc.badge}
                </span>
              )}
            </div>
            {activeId === svc.id ? (
              <ChevronDown size={12} className="opacity-80" />
            ) : (
              <span className="text-[10px] opacity-20 text-lumio-ink font-bold">›</span>
            )}
          </button>
        ))}
        <div className="flex-grow bg-lumio-surface" />
      </div>

      {/* Right Content Area */}
      <div className="flex-grow p-8 md:p-12 lg:px-16 lg:py-12 bg-white">
        <AnimatePresence mode="wait">
          {GENERAL_SERVICES.map((svc) => (
            svc.id === activeId && (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-lumio-accent mb-4">
                  {svc.title}
                </div>
                
                <h3 className="text-2xl md:text-4xl font-serif text-lumio-ink mb-6 leading-tight tracking-tight">
                  {svc.tagline}
                </h3>
                
                <p className="text-lumio-ink-muted leading-relaxed mb-8 max-w-2xl text-[14px]">
                  {svc.description}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-10">
                  {svc.items.map((item) => (
                    <div key={item.name} className="p-4 bg-lumio-surface rounded-xl border border-lumio-ink/5">
                      <div className="font-bold text-[13px] text-lumio-ink mb-1">{item.name}</div>
                      <div className="text-[11px] text-lumio-ink-muted leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-10">
                  {svc.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-3 text-[14px] text-lumio-ink-soft">
                      <div className="w-1 h-1 rounded-full bg-lumio-accent shrink-0" />
                      {hl}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-lumio-ink/5">
                  {svc.id === 'chinese' && (
                    <button 
                      onClick={() => { navigate('/Chinese-Consumer-Marketing'); window.scrollTo(0,0); }}
                      className="text-xs font-bold text-lumio-accent flex items-center gap-2 hover:gap-3 transition-all cursor-pointer text-left"
                    >
                      Get Your Free Chinese Market Audit <ArrowRight size={14} />
                    </button>
                  )}
                  {svc.id === 'seo' && (
                    <button 
                      onClick={() => { navigate('/free-seo-audit'); window.scrollTo(0,0); }}
                      className="text-xs font-bold text-lumio-accent flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-4 decoration-lumio-accent/20 cursor-pointer text-left"
                    >
                      Get your Free SEO Audit <ArrowRight size={14} />
                    </button>
                  )}
                  {svc.id === 'paid' && (
                    <a href="#contact" className="text-xs font-bold text-lumio-accent flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                      Scale Your Customer Acquisition <ArrowRight size={14} />
                    </a>
                  )}
                  {svc.id === 'influencer' && (
                    <a href="#contact" className="text-xs font-bold text-lumio-accent flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                      Find The Right Creators <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
