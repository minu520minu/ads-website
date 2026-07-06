import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Award, Sparkles, TrendingUp, Check, Star } from 'lucide-react';
import { ViewState, Project } from '../types';
import { PROJECTS } from '../data/projects';
import { CLIENT_LOGOS } from '../data/services';
import { HeroSlideshow } from './HeroSlideshow';
import { CaseStudyCard } from './CaseStudyCard';
import { SectionTitle } from './SectionTitle';
import { ServicesTabs } from './ServicesTabs';
import { ContactForm } from './ContactForm';

interface HomeViewProps {
  setView: (v: ViewState) => void;
  setSelectedProject: (p: Project) => void;
  activeServiceId: string;
  setActiveServiceId: (id: string) => void;
}

export function HomeView({ setView, setSelectedProject, activeServiceId, setActiveServiceId }: HomeViewProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(PROJECTS.length);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const nextProject = () => {
    setShouldAnimate(true);
    setCurrentProjectIndex((prev) => prev + 1);
  };

  const prevProject = () => {
    setShouldAnimate(true);
    setCurrentProjectIndex((prev) => prev - 1);
  };

  const handleAnimationComplete = () => {
    if (currentProjectIndex >= PROJECTS.length * 2) {
      setShouldAnimate(false);
      setCurrentProjectIndex(currentProjectIndex - PROJECTS.length);
    } else if (currentProjectIndex < PROJECTS.length) {
      setShouldAnimate(false);
      setCurrentProjectIndex(currentProjectIndex + PROJECTS.length);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-lumio-ink">
        <HeroSlideshow />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-lumio-accent block mb-6 px-1">
                Growth Marketing Agency
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight mb-8 drop-shadow-2xl">
                Reach the market <br />
                <span className="italic font-light text-lumio-accent">others miss.</span>
              </h1>
              
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-10">
                <p className="text-sm md:text-base text-white/90 max-w-lg leading-relaxed font-light drop-shadow-lg">
                  Lumio is a performance marketing agency helping ambitious brands grow through paid media, SEO, and influencer marketing. We unlock access to high-spending consumer markets that remain untapped by your competitors.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="px-8 py-4 bg-lumio-accent text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-lumio-ink transition-all duration-300 shadow-xl shadow-lumio-accent/20 cursor-pointer">
                    Get in touch
                  </a>
                  <button 
                    onClick={() => { setView('case-studies'); window.scrollTo(0,0); }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    See our work
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Overlay */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-white/10 max-w-5xl">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif text-white">$100M<span className="text-lumio-accent font-light">+</span></div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Revenue Generated</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif text-white">4.8<span className="text-lumio-accent font-light">x</span></div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Average ROAS</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif text-white">25M<span className="text-lumio-accent font-light">+</span></div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Spend Managed</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif text-white">10M<span className="text-lumio-accent font-light">+</span></div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Monthly Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Ticker */}
      <section className="bg-white pt-24 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center gap-6">
          <div className="h-px bg-lumio-ink/5 flex-grow" />
          <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-lumio-ink/40 whitespace-nowrap">
            Our Clients
          </h2>
          <div className="h-px bg-lumio-ink/5 flex-grow" />
        </div>
        
        <div className="mask-fade overflow-hidden space-y-8 md:space-y-12">
          {/* Row 1 */}
          <div className="flex w-max gap-20 items-center animate-scroll whitespace-nowrap px-6">
            {[...CLIENT_LOGOS.slice(0, Math.ceil(CLIENT_LOGOS.length / 2)), ...CLIENT_LOGOS.slice(0, Math.ceil(CLIENT_LOGOS.length / 2))].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0">
                <span className="text-xl md:text-2xl font-serif font-bold text-lumio-ink/40 hover:text-lumio-accent transition-all duration-300 cursor-default uppercase tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Row 2 */}
          <div className="flex w-max gap-20 items-center animate-scroll whitespace-nowrap px-6 opacity-80" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
            {[...CLIENT_LOGOS.slice(Math.ceil(CLIENT_LOGOS.length / 2)), ...CLIENT_LOGOS.slice(Math.ceil(CLIENT_LOGOS.length / 2))].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0">
                <span className="text-xl md:text-2xl font-serif font-bold text-lumio-ink/40 hover:text-lumio-accent transition-all duration-300 cursor-default uppercase tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-lumio-surface">
        <SectionTitle 
          eyebrow="What we do" 
          title="Growth services built for ambitious brands" 
          description="From performance ads to cultural market expansion—every service is designed to drive measurable revenue."
        />
        <ServicesTabs 
          setView={setView} 
          activeId={activeServiceId} 
          setActiveId={setActiveServiceId} 
        />
      </section>

      {/* Featured Case Studies Preview */}
      <section id="work" className="section-padding bg-white pb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-3">Featured Work</span>
            <h2 className="text-3xl md:text-5xl font-serif text-lumio-ink leading-tight">
              Real stories, <span className="italic text-lumio-accent font-normal">Real results.</span>
            </h2>
          </div>
          <button 
            onClick={() => { setView('case-studies'); window.scrollTo(0, 0); }}
            className="text-sm font-bold text-lumio-accent flex items-center gap-2 hover:gap-3 transition-all pb-2 border-b-2 border-lumio-accent/20 cursor-pointer"
          >
            Read More <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="relative group/slider px-4 lg:px-0">
          <div className="overflow-hidden">
            <motion.div 
              animate={{ x: `calc(-${currentProjectIndex * 100}% - ${currentProjectIndex * 2}rem)` }}
              className="flex gap-8 md:hidden"
              transition={shouldAnimate ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
              onAnimationComplete={handleAnimationComplete}
            >
              {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, idx) => (
                <div key={`${project.id}-${idx}`} className="w-full shrink-0">
                  <CaseStudyCard 
                    project={project} 
                    setView={setView} 
                    setSelectedProject={setSelectedProject} 
                  />
                </div>
              ))}
            </motion.div>

            <motion.div 
              animate={{ x: `calc(-${currentProjectIndex * 50}% - ${currentProjectIndex * 1}rem)` }}
              className="hidden md:flex lg:hidden gap-8"
              transition={shouldAnimate ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
              onAnimationComplete={handleAnimationComplete}
            >
              {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, idx) => (
                <div key={`${project.id}-tablet-${idx}`} className="w-[calc(50%-1rem)] shrink-0">
                  <CaseStudyCard 
                    project={project} 
                    setView={setView} 
                    setSelectedProject={setSelectedProject} 
                  />
                </div>
              ))}
            </motion.div>

            <motion.div 
              animate={{ x: `calc(-${currentProjectIndex * (100 / 3)}% - ${currentProjectIndex * (32 / 3)}px)` }}
              className="hidden lg:flex gap-8"
              transition={shouldAnimate ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
              onAnimationComplete={handleAnimationComplete}
            >
              {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, idx) => (
                <div key={`${project.id}-desktop-${idx}`} className="w-[calc(33.333%-1.334rem)] shrink-0">
                  <CaseStudyCard 
                    project={project} 
                    setView={setView} 
                    setSelectedProject={setSelectedProject} 
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12 z-10 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <button 
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white shadow-xl border border-lumio-ink/5 flex items-center justify-center text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer"
            >
              <ChevronRight size={24} className="rotate-180" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 z-10 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <button 
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white shadow-xl border border-lumio-ink/5 flex items-center justify-center text-lumio-ink hover:text-lumio-accent transition-colors cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-lumio-surface py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionTitle 
              eyebrow="Why Lumio" 
              title="Built differently." 
              description="Most agencies are specialists pretending to go broad. We are specialists who know how to scale."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-lumio-accent-light flex items-center justify-center rounded-xl text-lumio-accent shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Senior talent only</h4>
                  <p className="text-[11px] text-lumio-ink-muted leading-relaxed">Account managed by experienced marketers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-lumio-accent-light flex items-center justify-center rounded-xl text-lumio-accent shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Cultural intelligence</h4>
                  <p className="text-[11px] text-lumio-ink-muted leading-relaxed">We understand nuances that make brands resonate in cultural communities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-lumio-accent-light flex items-center justify-center rounded-xl text-lumio-accent shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Results, not reports</h4>
                  <p className="text-[11px] text-lumio-ink-muted leading-relaxed">We measure ourselves by your revenue growth, not vanity metrics.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-lumio-accent-light flex items-center justify-center rounded-xl text-lumio-accent shrink-0">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Custom solutions</h4>
                  <p className="text-[11px] text-lumio-ink-muted leading-relaxed">We build tailored strategies uniquely aligned with your specific objectives</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-lumio-ink/5 relative z-10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={i < 5 ? 14 : 0} className="fill-lumio-accent text-lumio-accent" />)}
              </div>
              <p className="text-sm font-serif italic text-lumio-ink leading-relaxed mb-4">
                "It was great working with Lumio. They are very knowledgeable and well-versed in Amazon Ads, and they helped us achieve a really strong target TACOS"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-lumio-accent/10 flex items-center justify-center text-lumio-accent font-bold text-xs">O</div>
                <div>
                  <div className="text-[10px] font-bold text-lumio-ink uppercase tracking-wider">Operations Manager</div>
                  <div className="text-[9px] text-lumio-ink-muted uppercase tracking-widest">Performance CPG Brand</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-lumio-ink p-8 rounded-3xl shadow-2xl relative ml-0 md:ml-12 lg:ml-20 -mt-4 md:-mt-8 z-20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-lumio-accent text-lumio-accent" />)}
              </div>
              <p className="text-sm font-serif italic text-white leading-relaxed mb-4">
                "Lumio set up our WeChat presence, ran a CNY campaign, and connected us with local KOLs. Within 90 days we had closed three properties directly attributed to their work. The ROI was unlike anything we'd seen from traditional advertising"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lumio-accent font-bold text-xs border border-white/5">D</div>
                <div>
                  <div className="text-[10px] font-bold text-white uppercase tracking-wider">Director of Marketing</div>
                  <div className="text-[9px] text-white/50 uppercase tracking-widest">Luxury Real Estate Group</div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-lumio-accent/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
}
