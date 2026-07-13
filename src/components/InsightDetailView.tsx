import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { INSIGHTS_ARTICLES } from '../data/articles';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function InsightDetailView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = INSIGHTS_ARTICLES.find(a => a.id === id);

  useDocumentMeta({
    title: article ? `${article.title}` : 'Insight Not Found',
    description: article ? `${article.desc}` : 'The requested insight article could not be found.',
    canonicalPath: article ? `/insights/${article.id}` : '/insights',
    image: article?.image,
  });

  if (!article) {
    return (
      <div className="pt-32 px-6 max-w-7xl mx-auto text-center min-h-[50vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-serif text-lumio-ink mb-4">Insight Not Found</h1>
        <button 
          onClick={() => navigate('/insights')}
          className="btn btn-primary cursor-pointer"
        >
          Back to Insights
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-white pt-24"
    >
      <div className="max-w-3xl mx-auto px-6 py-20">
        <button 
          onClick={() => navigate('/insights')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-lumio-accent mb-12 hover:translate-x-[-4px] transition-transform cursor-pointer text-left"
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
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
        </div>

        <div className="prose prose-lumio max-w-none text-lumio-ink">
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="text-base md:text-lg leading-relaxed text-lumio-ink-soft mb-6">
                  {children}
                </p>
              ),
              h1: ({ children }) => (
                <h1 className="text-3xl md:text-4xl font-serif text-lumio-ink mt-10 mb-4 leading-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl md:text-3xl font-serif text-lumio-ink mt-8 mb-4 leading-tight">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl md:text-2xl font-serif text-lumio-ink mt-8 mb-3 leading-tight">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-lg md:text-xl font-bold text-lumio-ink mt-6 mb-2">
                  {children}
                </h4>
              ),
              strong: ({ children }) => {
                // If a paragraph consists entirely of a bold line, let's treat it as a subheader for better visual hierarchy!
                const text = String(children);
                if (text.startsWith('What Is') || text.startsWith('Why It Works') || text.startsWith('Three Things') || text.startsWith('Who Should') || text.startsWith('Mistake') || text.startsWith('The One Thing') || text.startsWith('The Difference') || text.startsWith('The Numbers') || text.startsWith('How to Find') || text.startsWith('Fix 1') || text.startsWith('Fix 2') || text.startsWith('Fix 3') || text.startsWith('The Bigger Picture') || text.startsWith('Why Cultural') || text.startsWith('The Key Insight') || text.startsWith('Three Practical') || text.startsWith('The Long-Term') || text.startsWith('How Google') || text.startsWith('What Low-Quality') || text.startsWith('Start With') || text.startsWith('Timing Is') || text.startsWith('The Platforms') || text.startsWith('What to Actually') || text.startsWith('What WeChat') || text.startsWith('The Two Types') || text.startsWith('How to Register') || text.startsWith('Your First 30 Days') || text.startsWith('Growing Your') || text.startsWith('The Bottom Line') || text.startsWith('The Community') || text.startsWith('What This Means') || text.startsWith('The Review') || text.startsWith('Turning Trust') || text.startsWith('Recent Newcomers') || text.startsWith('Established Community') || text.startsWith('Where the Two') || text.startsWith('Building a Strategy')) {
                  return <span className="block text-xl md:text-2xl font-serif text-lumio-ink mt-10 mb-4 font-normal">{children}</span>;
                }
                return <strong className="font-bold text-lumio-ink">{children}</strong>;
              },
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-6 text-lumio-ink-soft pl-4">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-6 text-lumio-ink-soft pl-4">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-base leading-relaxed">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <div className="bg-lumio-surface p-6 md:p-8 rounded-[1.5rem] border-l-4 border-lumio-accent my-8">
                  <p className="text-sm md:text-base text-lumio-ink-soft italic leading-relaxed">
                    {children}
                  </p>
                </div>
              ),
            }}
          >
            {article.content || ''}
          </ReactMarkdown>
        </div>

        <div className="mt-20 pt-12 border-t border-lumio-ink/10">
          <div className="bg-lumio-surface p-12 rounded-[2.5rem] border border-lumio-ink/5 text-center">
            <h4 className="text-2xl font-serif text-lumio-ink mb-4">Want insights like these for your brand?</h4>
            <p className="text-sm text-lumio-ink-muted mb-8 max-w-md mx-auto">
              Our strategy team can help you identify these exact growth levers in your own business.
            </p>
            <button 
              onClick={() => {
                navigate('/');
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
