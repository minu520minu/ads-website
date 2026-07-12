import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, TrendingUp, Sparkles, ArrowRight, ShieldCheck, Search, Share2, Globe, HeartHandshake } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface AboutViewProps {
  onContactClick?: () => void;
}

export function AboutView({ onContactClick }: AboutViewProps) {
  useDocumentMeta({
    title: 'About Lumio | Senior Marketing Strategists & Growth Partners',
    description: 'We are a senior team of performance marketers, content creators, and cultural specialists. We build tailored, scalable campaigns focused entirely on driving real revenue growth.',
    canonicalPath: '/about',
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-lumio-surface min-h-screen pt-24"
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-lumio-surface text-lumio-ink border-b border-lumio-ink/5 relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-lumio-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-lumio-teal/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-3"
          >
            Our Philosophy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif mb-4 leading-tight text-lumio-ink"
          >
            About Lumio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl font-light text-lumio-ink-soft max-w-2xl mx-auto leading-relaxed mb-6"
          >
            Ambitious marketers. Real brand partners.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-[1px] w-16 bg-lumio-accent/40 mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm md:text-base text-lumio-ink-muted max-w-3xl mx-auto leading-relaxed"
          >
            We is a group of marketers who got tired of agencies that prioritized billable hours over business outcomes. We built something different: a team that takes a genuine stake in the brands we work with and holds itself accountable to revenue, not reports.
          </motion.p>
        </div>
      </section>

      {/* Built by marketers who demand more. */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-2">
              The Standard
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-lumio-ink mb-4">
              Built by marketers who demand more.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-lumio-ink-soft text-sm md:text-base leading-relaxed">
            <p>
              We are a small, senior team of strategists, creatives, analysts, and community specialists who have worked across brand-side, agency, and startup environments. We have run campaigns that scaled businesses 3x. We have also made the expensive mistakes that teach you what actually works.
            </p>
            <p>
              Our team is deeply fluent in every major channel of modern marketing. Paid media across Meta, Google, TikTok, and Amazon. SEO and content strategy. Influencer and creator campaigns. We have done this work at scale, across industries, and we know what drives real revenue growth versus what just looks good in a report.
            </p>
            <p className="font-semibold text-lumio-accent">
              That foundation is what makes everything else we do possible.
            </p>
          </div>
        </div>
      </section>

      {/* How we work. */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-white border-y border-lumio-ink/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-2">
              Our Core Principles
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-lumio-ink">
              How we work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Ambition over comfort",
                desc: "We set targets that make us uncomfortable, then build the strategy to hit them. Average outcomes are not something we accept, for ourselves or for our clients.",
                icon: Target,
                color: "bg-lumio-accent-light text-lumio-accent"
              },
              {
                title: "Cultural intelligence",
                desc: "We understand the communities we market to from the inside. That depth, knowing what resonates, what offends, and what converts, is something you cannot fake.",
                icon: Globe,
                color: "bg-lumio-teal-light text-lumio-teal"
              },
              {
                title: "Revenue over vanity",
                desc: "Impressions and follower counts are easy to produce. We measure ourselves by one number: the revenue growth we create for our partners.",
                icon: TrendingUp,
                color: "bg-lumio-accent-light text-lumio-accent"
              },
              {
                title: "Partner, not vendor",
                desc: "We take a stake in your outcomes. Your brand's growth is the metric we wake up thinking about. If you win, we win.",
                icon: HeartHandshake,
                color: "bg-lumio-teal-light text-lumio-teal"
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 md:p-8 rounded-2xl border border-lumio-ink/5 bg-lumio-surface hover:border-lumio-accent/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-lumio-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-lumio-ink-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The advantage most agencies cannot offer. */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-lumio-accent-light/55 border-y border-lumio-accent/10 text-lumio-ink relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-lumio-teal/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-teal block mb-3">
            Bilingual & Bi-cultural
          </span>
          <h2 className="text-2xl md:text-4xl font-serif mb-6 leading-tight text-lumio-ink">
            The advantage most agencies cannot offer.
          </h2>
          <div className="space-y-4 text-lumio-ink-soft text-sm md:text-base leading-relaxed">
            <p>
              There are agencies that are great at mainstream Western marketing. There are a handful of boutique firms that focus on Chinese community marketing. There is almost no one who does both at a genuinely high level.
            </p>
            <p className="text-lumio-ink font-semibold text-base md:text-lg border-l-2 border-lumio-teal pl-4 my-6 italic">
              That is where Lumio is different.
            </p>
            <p>
              Our team combines experienced mainstream marketers with specialists who grew up in the Chinese community and understand Chinese consumer culture from the inside. We are not a Chinese marketing agency that dabbles in general advertising, and we are not a general agency that outsources Chinese content to a freelancer. We are both, working together under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* What we do. */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-2">
            Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-lumio-ink">
            What we do.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {[
            {
              title: "Paid Media",
              desc: "Meta, Google, TikTok, and Amazon. Performance campaigns built and run for revenue, not clicks.",
              icon: TrendingUp,
            },
            {
              title: "SEO & Content",
              desc: "Technical audits, keyword strategy, content programs, and link building, with a bilingual SEO layer for brands targeting Chinese-language search.",
              icon: Search,
            },
            {
              title: "Influencer Marketing",
              desc: "KOL and KOC campaigns from creator discovery to conversion tracking. We source the voices that actually move product.",
              icon: Share2,
            },
            {
              title: "Chinese Consumer Marketing",
              desc: "Our specialist capability. We help brands grow within the Chinese community through WeChat, Rednote, Douyin, bilingual paid ads, KOL partnerships, and culturally intelligent campaign execution.",
              icon: Globe,
              featured: true
            }
          ].map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={idx}
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  service.featured 
                    ? "bg-lumio-accent-light border-lumio-accent/20 shadow-md" 
                    : "bg-white border-lumio-ink/5 hover:border-lumio-accent/20 hover:shadow-lg"
                }`}
              >
                <div>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${
                    service.featured ? "bg-lumio-accent text-white" : "bg-lumio-surface text-lumio-accent"
                  }`}>
                    <IconComponent size={18} />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-lumio-ink mb-3 flex items-center gap-2">
                    {service.title}
                    {service.featured && (
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-lumio-accent text-white px-2 py-0.5 rounded-full">
                        Specialist
                      </span>
                    )}
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${
                    service.featured ? "text-lumio-ink-soft font-medium" : "text-lumio-ink-muted"
                  }`}>
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
