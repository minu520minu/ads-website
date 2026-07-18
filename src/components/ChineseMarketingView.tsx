import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Plus, 
  Globe, 
  MessageSquare, 
  Smartphone, 
  Users, 
  BarChart, 
  Type, 
  Calendar, 
  Search, 
  CheckCircle, 
  Star, 
  PenTool, 
  TrendingUp 
} from 'lucide-react';
import { PACKAGES } from '../data/services';
import { 
  FAQS, 
  CHINESE_SERVICES, 
  CHINESE_ADDONS 
} from '../data/chineseMarketing';
import { SectionTitle } from './SectionTitle';
import { ContactForm } from './ContactForm';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const LucideIcon = ({ name, className }: { name: string, className?: string }) => {
  const icons: Record<string, any> = {
    MessageSquare,
    Smartphone,
    Users,
    BarChart,
    Type,
    Calendar,
    Search,
    CheckCircle,
    Star,
    Zap,
    PenTool,
    TrendingUp
  };
  const Icon = icons[name] || Globe;
  return <Icon className={className || "w-6 h-6"} />;
};

export function ChineseMarketingView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  useDocumentMeta({
    title: 'Chinese Consumer Marketing & Xiaohongshu (Rednote) Agency',
    description: 'Unlock high-spending Chinese diaspora and global markets. Expert management of Rednote (Xiaohongshu), WeChat, WeChat Pay, and Chinese micro-influencer (KOL) campaigns.',
    canonicalPath: '/chinese-consumer-marketing',
  });

  const stats = [
    { value: '50M+', label: 'Chinese living abroad' },
    { value: '$250B+', label: 'Spent by Chinese tourists globally each year' },
    { value: '3x', label: 'Higher brand loyalty vs general market' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[9px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-8"
              >
                Chinese Consumer Marketing
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif leading-[1.1] mb-8 text-lumio-ink"
              >
                Your brand, inside <span className="italic text-lumio-accent font-normal leading-normal">Chinese communities worldwide.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm md:text-base text-lumio-ink-muted mb-10 leading-relaxed max-w-xl"
              >
                50 million Chinese consumers live across North America, South America, Australia, Europe, and Southeast Asia, with tens of millions more visiting every year. They spend more, stay loyal longer, and are almost entirely ignored by Western marketing. We can get you in front of them before your competitors do.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5 mb-16"
              >
                <button 
                  onClick={() => {
                    const el = document.getElementById('free-chinese-audit');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary px-10 py-4 shadow-xl shadow-lumio-accent/20 text-[10px] uppercase tracking-widest font-bold cursor-pointer"
                >
                  Free Visibility Report
                </button>
                <a href="#packages" className="btn bg-lumio-ink/5 border border-lumio-ink/10 text-lumio-ink px-10 py-4 hover:bg-lumio-ink/10 transition-colors uppercase tracking-widest text-[10px] font-bold cursor-pointer text-center">
                  See our packages
                </a>
              </motion.div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-lumio-ink/10 text-left">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl md:text-3xl font-serif text-lumio-ink mb-2">{stat.value}</div>
                    <div className="text-[9px] uppercase tracking-widest text-lumio-ink-muted/60 leading-tight font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative z-10 w-[80%] mx-auto flex flex-col gap-5 animate-fade-in"
              >
                <div className="bg-white rounded-[2rem] border border-lumio-ink/5 p-3 shadow-lg">
                  <img 
                    src="https://marketingtochina.com/wp-content/uploads/2021/05/red-kols-tourism-thailand.jpg" 
                    alt="Chinese Digital Marketing Platforms"
                    className="w-full h-auto rounded-[1.4rem]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-white rounded-[2rem] border border-lumio-ink/5 p-3 shadow-lg">
                  <img 
                    src="https://walkthechat.com/wp-content/uploads/2018/12/wechat-customer-service.jpg" 
                    alt="WeChat Customer Service"
                    className="w-full h-auto rounded-[1.4rem]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Decorative Polish */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumio-accent/10 rounded-full blur-[120px] -z-10" />
            </div>
          </div>
        </div>

        {/* Floating shapes background - full width */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lumio-accent/5 to-transparent pointer-events-none" />
      </section>

      {/* Opportunity Band */}
      <div className="bg-lumio-accent py-6 px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm md:text-base text-white font-medium text-left">
            <span className="opacity-60 mr-2">The hidden opportunity:</span>
            Chinese consumers don't respond to general market advertising. They respond to brands that show up in their language, on their platforms, through their community. That's exactly what we build.
          </p>
        </div>
      </div>

      {/* Main Content Area (Light) */}
      <div className="bg-white rounded-t-[4rem]">

      {/* Partnered Influencers Callout */}
      <section className="pt-16 pb-4 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="p-6 md:p-8 bg-gradient-to-r from-lumio-accent/[0.08] via-lumio-accent/[0.02] to-lumio-teal/[0.08] border border-lumio-accent/20 rounded-3xl flex flex-col md:flex-row items-center gap-6 text-left shadow-md relative overflow-hidden"
          >
            {/* Background Accent glow */}
            <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-lumio-teal/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -top-24 w-48 h-48 bg-lumio-accent/10 rounded-full blur-3xl pointer-events-none" />

            {/* Overlapping Creator Facepile */}
            <div className="flex -space-x-3.5 overflow-hidden shrink-0 py-1">
              <img 
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-md" 
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=120&h=120&q=80" 
                alt="Chinese Creator 1" 
                referrerPolicy="no-referrer"
              />
              <img 
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-md" 
                src="https://images.unsplash.com/photo-1705247814998-7e36dc7cd92e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Chinese Creator 2" 
                referrerPolicy="no-referrer"
              />
              <img 
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-md" 
                src="https://images.unsplash.com/photo-1546415324-dd7ea5ba3cea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaW5lc2UlMjBpbmZsdWVuY2VyfGVufDB8fDB8fHww" 
                alt="Chinese Creator 3" 
                referrerPolicy="no-referrer"
              />
              <img 
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-md" 
                src="https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Chinese Creator 4" 
                referrerPolicy="no-referrer"
              />
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-lumio-accent text-white text-[11px] font-bold ring-2 ring-white font-sans shrink-0 shadow-md">
                +55K
              </div>
            </div>

            {/* Content Text */}
            <div className="flex-1 flex flex-col gap-1.5 z-10">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-lumio-accent bg-lumio-accent/10 px-2 py-0.5 rounded-md">
                  Global Network
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-lumio-teal uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-lumio-teal animate-pulse" />
                  Verified Partners
                </span>
              </div>
              <p className="text-[14px] md:text-[15px] text-lumio-ink font-medium leading-relaxed">
                We have direct partnerships with over <span className="text-lumio-accent font-bold">55,000+ active Chinese influencers and key opinion leaders (KOLs)</span> all over the world, ready to authentically amplify your brand to high-value consumer groups.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-lumio-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            eyebrow="What we do" 
            title="Strategic channel management." 
            description="Full-spectrum marketing management across the platforms your Chinese customers use daily."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {CHINESE_SERVICES.map((svc, i) => (
              <div key={i} className="bg-white p-5 rounded-[1.5rem] border border-lumio-ink/5 hover:border-lumio-accent/20 transition-all group text-left">
                <div className="w-8 h-8 bg-lumio-accent/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-lumio-accent group-hover:text-white transition-all text-lumio-accent">
                  <LucideIcon name={svc.icon} className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-base font-serif mb-1.5 text-lumio-ink">{svc.name}</h4>
                <p className="text-[11px] text-lumio-ink-muted leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {svc.plats.map(p => (
                    <span key={p} className="text-[6.5px] font-bold uppercase tracking-widest px-1.5 py-0.5 bg-lumio-surface border border-lumio-ink/5 rounded-full text-lumio-ink-soft">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 bg-lumio-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            eyebrow="Our Packages" 
            title="Choose your level of engagement." 
            description="From first-time market entry to full-scale Chinese market domination. We have a tier for every stage."
          />
          <div className="grid md:grid-cols-3 gap-0 border border-lumio-ink/10 rounded-[2rem] overflow-hidden bg-white shadow-xl text-left items-stretch">
            {PACKAGES.map((pkg, idx) => (
              <div key={idx} className={`p-8 flex flex-col h-full ${pkg.featured ? 'bg-lumio-accent-light border-2 border-lumio-accent/40 text-lumio-ink rounded-[2rem] shadow-xl' : 'border-r border-lumio-ink/5 last:border-0'}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-6 w-fit ${pkg.featured ? 'bg-lumio-accent text-white' : 'bg-lumio-accent-light text-lumio-accent'}`}>
                  {pkg.badge}
                </div>
                <h4 className="text-2xl font-serif mb-3 text-lumio-ink">{pkg.name}</h4>
                <div className="min-h-[2.5rem] mb-6">
                  <p className="text-[12px] leading-relaxed text-lumio-ink-muted">
                    {pkg.tagline}
                  </p>
                </div>
                
                <div className={`h-px w-full mb-6 ${pkg.featured ? 'bg-lumio-accent/20' : 'bg-lumio-ink/5'}`} />

                <div className={`text-[9px] font-bold uppercase tracking-widest mb-4 ${pkg.featured ? 'text-lumio-ink-soft/40' : 'text-lumio-ink/30'}`}>What's Included</div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, fIdx) => {
                    const isIntroBullet = (pkg.name === 'Grow' || pkg.name === 'Scale') && fIdx === 0;
                    return (
                      <li key={fIdx} className="flex items-start gap-3">
                        {!isIntroBullet && (
                          <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pkg.featured ? 'bg-lumio-accent/20' : 'bg-lumio-accent-light'}`}>
                            <div className="w-1 h-1 rounded-full bg-lumio-accent" />
                          </div>
                        )}
                        <span className={`text-[12px] leading-relaxed ${isIntroBullet ? 'font-bold' : ''} text-lumio-ink-soft`}>{feature}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-auto pt-6">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('contact-chinese');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`btn w-full py-3.5 text-[9px] tracking-widest uppercase font-bold transition-all shadow-lg cursor-pointer ${pkg.featured ? 'btn-primary shadow-lumio-accent/20' : 'bg-lumio-surface border border-lumio-ink/10 hover:border-lumio-accent text-lumio-ink'}`}
                  >
                    Get Started
                  </button>
                  <p className="text-[9px] italic text-center mt-4 text-lumio-ink-muted">
                    {pkg.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-lumio-ink-muted mt-8 italic">
            Contact us for custom pricing tailored to your brand's goals and budget.
          </p>
        </div>
      </section>

      {/* À LA CARTE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            eyebrow="À La Carte" 
            title="Not ready for a retainer? Start here." 
            description="One-time projects and bolt-on services for brands testing the water before committing to a monthly package."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {CHINESE_ADDONS.map((addon, i) => (
              <div key={i} className="bg-lumio-surface p-5 rounded-[1.5rem] border border-lumio-ink/5 hover:border-lumio-accent/20 transition-all group flex flex-col items-start text-left">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-lumio-accent group-hover:text-white transition-all text-lumio-accent shadow-sm">
                  <LucideIcon name={addon.icon} className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-base font-serif mb-1.5 text-lumio-ink">{addon.name}</h4>
                <p className="text-[11px] text-lumio-ink-muted leading-relaxed mb-4">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE CHINESE MARKET AUDIT */}
      <section id="free-chinese-audit" className="py-20 bg-lumio-surface text-lumio-ink border-t border-b border-lumio-ink/5 scroll-mt-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 text-left">
              <span className="bg-lumio-teal-light text-lumio-teal text-[9px] font-bold px-3 py-1.5 rounded-full tracking-[0.2em] uppercase inline-block mb-6 font-sans">
                FREE VISIBILITY REPORT
              </span>
              <h2 className="text-3xl md:text-4xl font-serif leading-[1.2] mb-6 text-lumio-ink">
                Get your free Chinese <br />
                <span className="italic text-lumio-accent font-normal">consumer visibility audit.</span>
              </h2>
              <p className="text-sm text-lumio-ink-soft leading-relaxed mb-8 max-w-lg">
                Full Chinese consumer visibility audit, competitive gap analysis, and a 90-day recommended action plan.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-lumio-ink/10 max-w-lg">
                <div className="flex items-start gap-3 text-left">
                  <div className="w-5 h-5 rounded-full bg-lumio-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-lumio-accent" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-lumio-ink">Visibility Audit</h5>
                    <p className="text-xs text-lumio-ink-muted">We assess your current search footprint and brand presence on WeChat, Rednote, Douyin, and other platforms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <div className="w-5 h-5 rounded-full bg-lumio-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-lumio-accent" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-lumio-ink">Competitive Gap Analysis</h5>
                    <p className="text-xs text-lumio-ink-muted">We analyze where your top competitors are capturing high-value Chinese consumer traffic.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <div className="w-5 h-5 rounded-full bg-lumio-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-lumio-accent" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-lumio-ink">90-Day Action Plan</h5>
                    <p className="text-xs text-lumio-ink-muted">Receive a clear, step-by-step launch strategy with estimated effort, platform selection, and budget.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white border border-lumio-ink/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!auditSubmitted ? (
                    <motion.div
                       key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-left"
                    >
                      <h3 className="text-xl font-serif text-lumio-ink mb-2">Request Your Free Visibility Report</h3>
                      <p className="text-xs text-lumio-ink-muted mb-6 italic">Delivered to your inbox within 48 business hours.</p>
                      
                      <form 
                        action="https://web3forms.com"
                        method="POST"
                        onSubmit={async (e) => { 
                          e.preventDefault(); 
                          const formData = new FormData(e.currentTarget);
                          setAuditSubmitted(true); 
                          try {
                            await fetch('https://api.web3forms.com/submit', {
                              method: 'POST',
                              body: formData,
                            });
                          } catch (error) {
                            console.error('Form submission failed:', error);
                          }
                        }} 
                        className="space-y-4"
                      >
                        <input type="hidden" name="access_key" value="080106f1-826e-4bf3-929f-65c3e6de976c" />
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">First Name <span className="text-lumio-accent">*</span></label>
                            <input 
                              type="text" 
                              name="firstName"
                              required 
                              placeholder="First Name" 
                              className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-xl px-4 py-3 text-xs text-lumio-ink placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200" 
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">Last Name <span className="text-lumio-accent">*</span></label>
                            <input 
                              type="text" 
                              name="lastName"
                              required 
                              placeholder="Last Name" 
                              className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-xl px-4 py-3 text-xs text-lumio-ink placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200" 
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">Email Address <span className="text-lumio-accent">*</span></label>
                          <input 
                            type="email" 
                            name="email"
                            required 
                            placeholder="you@company.com" 
                            className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-xl px-4 py-3 text-xs text-lumio-ink placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200" 
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">Company Name <span className="text-lumio-accent">*</span></label>
                          <input 
                            type="text" 
                            name="company"
                            required 
                            placeholder="Your Company" 
                            className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-xl px-4 py-3 text-xs text-lumio-ink placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200" 
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">Competitor 1 <span className="text-lumio-ink-muted/50">(Optional)</span></label>
                            <input 
                              type="text" 
                              name="competitor1"
                              placeholder="Competitor 1 Name" 
                              className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-xl px-4 py-3 text-xs text-lumio-ink placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200" 
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">Competitor 2 <span className="text-lumio-ink-muted/50">(Optional)</span></label>
                            <input 
                              type="text" 
                              name="competitor2"
                              placeholder="Competitor 2 Name" 
                              className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-xl px-4 py-3 text-xs text-lumio-ink placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200" 
                            />
                          </div>
                        </div>

                        <button 
                          type="submit"
                          className="w-full btn btn-primary py-4 uppercase tracking-widest text-[10px] font-bold cursor-pointer mt-2"
                        >
                          Request Free Report →
                        </button>
                        <p className="text-[9px] text-center text-lumio-ink-muted/65 italic">
                          🔒 Your information is secure and only used for your report.
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
                        <div className="w-16 h-16 bg-lumio-accent/15 text-lumio-accent rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif text-lumio-ink mb-4">Report Request Received</h3>
                        <p className="text-sm text-lumio-ink-soft leading-relaxed">
                          We've received your request! Our team will conduct a comprehensive visibility audit and build your competitive gap analysis. Look out for your custom 90-day action plan in your inbox within 48 business hours.
                        </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumio-accent/5 rounded-full blur-[120px] -z-10" />
      </section>

      <div id="contact-chinese">
        <ContactForm />
      </div>

      {/* FAQ Wrap-up */}
      <section className="py-16 bg-lumio-surface relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <SectionTitle 
            eyebrow="Questions" 
            title="Frequently asked" 
            dark={false}
          />
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-lumio-ink/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-base font-normal text-lumio-ink group-hover:text-lumio-accent transition-colors pr-6">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openFaq === i ? 'bg-lumio-accent text-white rotate-45' : 'bg-lumio-surface text-lumio-accent'}`}>
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-[13px] text-lumio-ink-soft leading-relaxed border-t border-lumio-ink/5 pt-4 italic whitespace-pre-line">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </motion.div>
  );
}
