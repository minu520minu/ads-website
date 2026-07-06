import React from 'react';
import { motion } from 'motion/react';
import { Article, ViewState } from '../types';
import { INSIGHTS_ARTICLES } from '../data/articles';

interface InsightsViewProps {
  setView: (v: ViewState) => void;
  setSelectedArticle: (a: Article) => void;
}

export function InsightsView({ setView, setSelectedArticle }: InsightsViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <section className="px-6 md:px-12 py-24 bg-[#FBFBFA] border-b border-lumio-ink/5">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lumio-accent block mb-6">Market Intelligence</span>
          <h1 className="text-4xl md:text-5xl font-serif text-lumio-ink leading-[1.1] mb-6">
            Insights on <span className="italic text-lumio-accent font-normal">Growth & Dominance.</span>
          </h1>
          <p className="text-base text-lumio-ink-soft max-w-2xl leading-relaxed">
            Deep dives into advertising strategies, cultural shifts, and the technical mechanisms behind high-performance brands.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 gap-y-16">
            {INSIGHTS_ARTICLES.map((article, i) => (
              <div 
                key={i} 
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedArticle(article);
                  setView('insight-detail');
                  window.scrollTo(0, 0);
                }}
              >
                <div className="bg-lumio-surface aspect-[4/3] rounded-[1.5rem] mb-6 overflow-hidden border border-lumio-ink/5 transition-all group-hover:border-lumio-accent/20">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="text-[9px] font-bold text-lumio-accent uppercase tracking-widest mb-3">{article.category}</div>
                <h3 className="text-xl font-serif text-lumio-ink mb-3 group-hover:text-lumio-accent transition-colors">{article.title}</h3>
                <p className="text-[11px] text-lumio-ink-soft leading-relaxed mb-4 line-clamp-2">{article.desc}</p>
                <div className="flex items-center gap-4 text-[9px] font-bold text-lumio-ink/30 uppercase tracking-widest">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
