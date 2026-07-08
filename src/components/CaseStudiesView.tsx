import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/projects';
import { CaseStudyCard } from './CaseStudyCard';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function CaseStudiesView() {
  useDocumentMeta({
    title: 'Client Case Studies & Marketing Growth Results',
    description: 'See real stories and measurable performance results across Amazon Ads, Meta Ads, Local SEO, and localized influencer marketing campaigns.',
    canonicalPath: '/case-studies',
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-3">Case Studies</span>
          <h1 className="text-3xl md:text-5xl font-serif text-lumio-ink mb-6 leading-tight">
            Proof in <span className="italic text-lumio-accent">Performance.</span>
          </h1>
          <p className="text-base text-lumio-ink-muted leading-relaxed">
            Explore how we've helped some of the most ambitious brands scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <CaseStudyCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
