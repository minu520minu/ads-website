import React from 'react';
import { motion } from 'motion/react';
import { Project, ViewState } from '../types';

interface CaseDetailViewProps {
  project: Project;
  setView: (v: ViewState) => void;
}

export function CaseDetailView({ project, setView }: CaseDetailViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className={`py-12 md:py-16 px-6 md:px-12 ${project.bg}`}>
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => { setView('case-studies'); window.scrollTo(0, 0); }}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-lumio-ink/40 hover:text-lumio-accent transition-colors mb-6 cursor-pointer"
          >
            ← Back to All Cases
          </button>
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className={`text-[9px] font-bold uppercase tracking-[0.2em] block mb-2 ${project.accent}`}>
                {project.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-serif text-lumio-ink leading-tight mb-4">
                {project.client}: {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm border border-lumio-ink/5 rounded-full text-[10px] font-medium text-lumio-ink-soft">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white inline-flex flex-col justify-center max-w-md">
                <div className="text-[9px] font-bold uppercase tracking-widest text-lumio-ink/30 mb-1.5">Core Result</div>
                <div className={`text-lg md:text-xl font-serif italic leading-tight ${project.accent}`}>
                  {project.result}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              {project.image && (
                <div className="overflow-hidden rounded-[2.5rem] bg-white border border-lumio-ink/5 shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.client} 
                    className="w-full h-auto object-cover aspect-[5/4]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-24">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-lumio-accent">01. The Challenge</h4>
              <p className="text-lg text-lumio-ink-soft leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-lumio-accent">02. The Strategy</h4>
              <p className="text-lg text-lumio-ink-soft leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
 
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-lumio-accent">03. The Results</h4>
              <p className="text-lg text-lumio-ink-soft leading-relaxed font-normal">
                {project.resultsNarrative}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 self-start space-y-12 bg-lumio-surface p-12 rounded-[2rem] border border-lumio-ink/5 sticky top-32">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-lumio-ink/20 mb-4">Platforms Used</div>
              <div className="space-y-4">
                {project.tags.map(tag => (
                  <div key={tag} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-lumio-accent" />
                    <span className="text-sm font-medium text-lumio-ink-soft">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-lumio-ink/5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-lumio-ink/20 mb-6">Want results like these?</div>
              <button 
                onClick={() => {
                  setView('home');
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 500);
                }}
                className="btn btn-primary w-full py-4 uppercase tracking-widest text-[10px] cursor-pointer"
              >
                GET IN TOUCH AND LET'S BUILD YOUR STRATEGY
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lumio-ink text-white py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">See more cases.</h2>
          <button 
            onClick={() => { setView('case-studies'); window.scrollTo(0, 0); }}
            className="btn btn-primary px-12 cursor-pointer"
          >
            View All Case Studies
          </button>
        </div>
      </section>
    </motion.div>
  );
}
