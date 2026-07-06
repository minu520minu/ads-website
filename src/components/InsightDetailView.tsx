import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Article, ViewState } from '../types';

interface InsightDetailViewProps {
  article: Article;
  setView: (v: ViewState) => void;
}

export function InsightDetailView({ article, setView }: InsightDetailViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-white pt-24"
    >
      <div className="max-w-3xl mx-auto px-6 py-20">
        <button 
          onClick={() => setView('insights')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-lumio-accent mb-12 hover:translate-x-[-4px] transition-transform cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to Insights
        </button>
        
        <div className="text-[10px] font-bold text-lumio-accent uppercase tracking-[0.2em] mb-6">{article.category}</div>
        <h1 className="text-4xl md:text-6xl font-serif text-lumio-ink leading-[1.1] mb-6">{article.title}</h1>
        <p className="text-xl text-lumio-ink-soft font-sans mb-10 leading-relaxed italic">{article.desc}</p>
        
        <div className="flex items-center gap-6 pb-12 border-b border-lumio-ink/5 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-lumio-surface border border-lumio-ink/5 flex items-center justify-center text-lumio-accent font-bold text-xs">L</div>
            <div>
              <div className="text-[10px] font-bold text-lumio-ink uppercase tracking-wider">Lumio Strategy Team</div>
              <div className="text-[9px] text-lumio-ink-muted uppercase tracking-widest">{article.date}</div>
            </div>
          </div>
          <div className="h-4 w-px bg-lumio-ink/10" />
          <div className="text-[9px] font-bold text-lumio-ink/30 uppercase tracking-widest">{article.readTime} Read</div>
        </div>

        <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-16 border border-lumio-ink/5 shadow-inner bg-lumio-surface">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        <div className="prose prose-lumio max-w-none">
          <p className="text-lg leading-relaxed text-lumio-ink-soft mb-8">
            This article explores the critical nuances of {article.title.toLowerCase()}. In today’s rapidly evolving market, {article.category === 'Market Strategy' ? 'understanding structural momentum' : 'mastering platform dynamics'} is no longer optional—it is the baseline for scaled growth.
          </p>
          <h3 className="text-2xl font-serif text-lumio-ink mt-12 mb-6">The Core Thesis</h3>
          <p className="text-base leading-relaxed text-lumio-ink-muted mb-8">
            Most brands fail to scale because they treat every customer segment with a monolithic strategy. By decoupling growth channels and tailoring {article.category.toLowerCase()} to specific cultural and behavioral segments, we unlock a competitive advantage that competitors simply cannot replicate with automated generic playbooks.
          </p>
          <div className="bg-lumio-surface p-10 rounded-[2rem] border border-lumio-ink/5 my-12">
            <h4 className="text-base font-bold text-lumio-ink mb-4">Strategic Takeaway</h4>
            <p className="text-sm text-lumio-ink-soft italic leading-relaxed">
              "Performance is not just about spend; it's about the precision of the message matching the context of the platform."
            </p>
          </div>
          <p className="text-base leading-relaxed text-lumio-ink-muted mb-8">
             We will continue to track the performance data across our client portfolio to provide further updates on these {article.category.toLowerCase()} trends.
          </p>
        </div>

        <div className="mt-20 pt-12 border-t border-lumio-ink/10">
          <div className="bg-lumio-surface p-12 rounded-[2.5rem] border border-lumio-ink/5 text-center">
            <h4 className="text-2xl font-serif text-lumio-ink mb-4">Want insights like these for your brand?</h4>
            <p className="text-sm text-lumio-ink-muted mb-8 max-w-md mx-auto">
              Our strategy team can help you identify these exact growth levers in your own business.
            </p>
            <button 
              onClick={() => {
                setView('home');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }, 500);
              }}
              className="btn btn-primary px-10 py-4 uppercase tracking-widest text-[10px] cursor-pointer"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
