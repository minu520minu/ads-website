import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function FreeSeoAuditView() {
  const [submitted, setSubmitted] = useState(false);

  useDocumentMeta({
    title: 'Free Professional SEO Audit in 48 Hours',
    description: 'Get a comprehensive, completely free search engine optimization (SEO) audit of your website in 48 hours. No credit card required. Learn what is blocking your Google rank.',
    canonicalPath: '/free-seo-audit',
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-[#FBFBFA] min-h-screen pt-24"
    >
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#FBFBFA] border-b border-lumio-ink/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center mb-6">
              <span className="bg-lumio-teal-light text-lumio-teal text-[10px] font-bold px-3 py-1.5 rounded tracking-[0.2em] uppercase">FREE SEO AUDIT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-lumio-ink leading-[1.1] mb-8">
              Find out why Google isn't <span className="italic text-lumio-accent font-normal leading-normal">sending you customers.</span>
            </h1>
            <p className="text-base text-lumio-ink-muted leading-relaxed mb-10 max-w-xl">
              Get a comprehensive SEO audit of your website in 48 hours — completely free, no strings attached. We'll show you exactly what's holding your rankings back and what to fix first.
            </p>
            
            <div className="flex flex-wrap gap-8 mb-16">
              {[
                'Delivered within 48 hours',
                'No credit card required',
                'No obligation to buy'
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-lumio-ink-soft">
                  <div className="w-2 h-2 rounded-full bg-lumio-teal shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-10 border-t border-lumio-ink/5">
              <div>
                <div className="text-3xl font-serif text-lumio-ink">68<span className="text-lumio-accent">%</span></div>
                <div className="text-[10px] uppercase tracking-widest text-lumio-ink/30 mt-2">Clicks go to top 5</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-lumio-ink">3.5<span className="text-lumio-accent">×</span></div>
                <div className="text-[10px] uppercase tracking-widest text-lumio-ink/30 mt-2">More traffic than paid</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-lumio-ink">53<span className="text-lumio-accent">%</span></div>
                <div className="text-[10px] uppercase tracking-widest text-lumio-ink/30 mt-2">Total organic traffic</div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="bg-lumio-surface p-10 rounded-[2.5rem] border border-lumio-ink/10 shadow-sm relative overflow-hidden">
               <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-serif text-lumio-ink mb-2">Get your free audit</h3>
                    <p className="text-xs text-lumio-ink-muted mb-8 italic">Delivered to your inbox within 48 hours.</p>
                    
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-lumio-ink/10 text-sm focus:border-lumio-accent outline-none bg-white font-sans" required />
                        <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-lumio-ink/10 text-sm focus:border-lumio-accent outline-none bg-white font-sans" required />
                      </div>
                      <input type="email" placeholder="Business Email" className="w-full px-4 py-3 rounded-xl border border-lumio-ink/10 text-sm focus:border-lumio-accent outline-none bg-white font-sans" required />
                      <input type="url" placeholder="Website URL (e.g. https://yourbrand.com)" className="w-full px-4 py-3 rounded-xl border border-lumio-ink/10 text-sm focus:border-lumio-accent outline-none bg-white font-sans" required />
                      <select className="w-full px-4 py-3 rounded-xl border border-lumio-ink/10 text-sm focus:border-lumio-accent outline-none bg-white font-sans appearance-none text-lumio-ink-muted text-gray-500">
                        <option>Select Business Type</option>
                        <option>E-commerce</option>
                        <option>Local Business</option>
                        <option>SaaS / Tech</option>
                        <option>Professional Services</option>
                        <option>Other</option>
                      </select>
                      <button 
                        type="submit"
                        className="btn btn-primary w-full py-4 uppercase tracking-widest text-xs font-bold cursor-pointer"
                      >
                        Request Free Audit →
                      </button>
                      <p className="text-[10px] text-center text-lumio-ink/30 italic">
                        🔒 Your information is secure and only used for your audit.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-lumio-teal-light text-lumio-teal rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-lumio-ink mb-4">Request Received</h3>
                    <p className="text-sm text-lumio-ink-muted leading-relaxed">
                      We've received your request. A senior SEO specialist is reviewing your site now. You'll receive your PDF audit via email within 48 business hours.
                    </p>
                  </motion.div>
                )}
               </AnimatePresence>
            </div>
            
            {/* Decorative Polish */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumio-accent/10 rounded-full blur-[120px] -z-10" />
          </div>
        </div>

        {/* Gradient backdrop similar to Chinese Market page */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lumio-accent/5 to-transparent pointer-events-none" />
      </section>

      {/* Audit Features */}
      <section className="py-16 bg-lumio-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            eyebrow="What's Inside" 
            title="A real audit. Not an automated report." 
            description="Every audit is manually reviewed by a senior specialist to provide context that crawler tools miss."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { num: '01', title: 'Technical SEO Health', desc: 'Site speed, Core Web Vitals, crawlability, and indexation analysis.', tag: 'Technical' },
              { num: '02', title: 'On-Page Analysis', desc: 'Title tags, metadata, header structure, and keyword optimization.', tag: 'On-Page' },
              { num: '03', title: 'Keyword Gap Analysis', desc: 'Identify high-value keywords your competitors are winning but you are not.', tag: 'Keywords' },
              { num: '04', title: 'Backlink Profile Review', desc: 'Quality and authority assessment of your current link relationships.', tag: 'Authority' },
              { num: '05', title: 'Competitive Benchmarking', desc: 'See exactly how you stack up against your top 3 rivals.', tag: 'Competitive' },
              { num: '06', title: 'Priority Action Plan', desc: 'The 10 highest-impact fixes ranked by effort vs. measurable ROI.', tag: 'Actionable' }
            ].map(item => (
              <div key={item.num} className="bg-white p-5 rounded-[1.5rem] border border-lumio-ink/5 hover:border-lumio-accent/20 transition-all flex flex-col group text-left">
                <div className="text-2xl font-serif text-lumio-accent/5 mb-3 group-hover:text-lumio-accent/10 transition-colors">
                  {item.num}
                </div>
                <h4 className="text-base font-serif mb-1.5 text-lumio-ink">{item.title}</h4>
                <p className="text-[11px] text-lumio-ink-muted leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <span className="px-1.5 py-0.5 bg-lumio-accent-light text-lumio-accent text-[7px] font-bold uppercase rounded tracking-widest">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Findings */}
      <section className="py-16 bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            eyebrow="Audit Sample" 
            title="Real findings, real actions." 
            description="Here is a look at the level of detail we provide in every single free report."
          />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-lumio-ink/5 hover:border-lumio-accent/20 transition-all p-5 rounded-[1.5rem] text-lumio-ink flex flex-col text-left shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[8px] font-bold uppercase tracking-widest text-lumio-accent">Technical Finding</div>
                <span className="px-2 py-0.5 bg-rose-500/10 text-rose-600 text-[8px] font-bold uppercase rounded">Critical</span>
              </div>
              <p className="text-sm font-serif mb-4 leading-relaxed text-lumio-ink">
                "Mobile page speed is currently 4.8s. Google’s threshold is under 2.5s. You’re likely losing 30% of traffic before the page even loads."
              </p>
              <div className="pt-4 mt-auto border-t border-lumio-ink/5">
                <div className="text-[8px] font-bold uppercase tracking-widest text-lumio-ink/30 mb-1.5 font-mono">Action to Fix</div>
                <p className="text-[11px] text-lumio-ink-muted leading-relaxed italic">
                  Compress high-resolution hero images and enable lazy loading for secondary visual components.
                </p>
              </div>
            </div>
            
            <div className="bg-lumio-surface p-5 rounded-[1.5rem] border border-lumio-ink/5 hover:border-lumio-accent/20 transition-all flex flex-col text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[8px] font-bold uppercase tracking-widest text-lumio-accent">On-Page Finding</div>
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 text-[8px] font-bold uppercase rounded">High Impact</span>
              </div>
              <p className="text-sm font-serif mb-4 leading-relaxed text-lumio-ink">
                "Targeting [Product Name] in Toronto, but your homepage H1 tag is generic. You are sitting on page 3 when you could be in the top 5."
              </p>
              <div className="pt-4 mt-auto border-t border-lumio-ink/5">
                <div className="text-[8px] font-bold uppercase tracking-widest text-lumio-ink/30 mb-1.5 font-mono">Action to Fix</div>
                <p className="text-[11px] text-lumio-ink-muted leading-relaxed italic">
                  Restructure header tags to include high-intent geographic keywords without over-optimizing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lumio-accent py-24 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 leading-tight">Find out what Google isn't telling you.</h2>
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn bg-white text-lumio-accent px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-lumio-surface cursor-pointer"
          >
            Request Free Audit
          </button>
        </div>
      </section>
    </motion.div>
  );
}
