import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const service = formData.get('service') as string;
    const goals = formData.get('goals') as string;

    const subject = encodeURIComponent(`Lumio Enquiry from ${firstName} ${lastName} (${company})`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Company: ${company}\n` +
      `Service Interest: ${service}\n\n` +
      `Goals:\n${goals}`
    );

    setSubmitted(true);
    window.location.href = `mailto:wooximarketing@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-lumio-surface py-16 px-6 scroll-mt-24 border-t border-lumio-ink/5">
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <SectionTitle 
          eyebrow="Get in touch" 
          title="Reach the market others miss." 
          description="Tell us about your brand and goals. We'll get back to you within one business day."
        />
      </div>
      <div className="max-w-xl mx-auto">

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-lumio-ink/10 p-10 rounded-2xl text-center shadow-xl"
          >
            <div className="w-12 h-12 bg-lumio-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-serif text-lumio-ink mb-2">We got your message!</h3>
            <p className="text-lumio-ink-soft text-xs">Our team will be in touch within one business day.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-lumio-ink/10 p-6 md:p-8 rounded-2xl space-y-4 shadow-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">First Name <span className="text-lumio-accent">*</span></label>
                <input 
                  type="text" 
                  name="firstName"
                  required
                  placeholder="Jane" 
                  className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-lg px-4 py-2 text-lumio-ink text-xs placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">Last Name <span className="text-lumio-accent">*</span></label>
                <input 
                  type="text" 
                  name="lastName"
                  required
                  placeholder="Smith" 
                  className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-lg px-4 py-2 text-lumio-ink text-xs placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">Email Address <span className="text-lumio-accent">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="jane@company.com" 
                  className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-lg px-4 py-2 text-lumio-ink text-xs placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">Company Name <span className="text-lumio-accent">*</span></label>
                <input 
                  type="text" 
                  name="company"
                  required
                  placeholder="Your Company" 
                  className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-lg px-4 py-2 text-lumio-ink text-xs placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">Service Interest</label>
              <select name="service" className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-lg px-4 py-2 text-lumio-ink text-xs appearance-none focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200">
                <option value="">Select a service...</option>
                <option>Paid Media</option>
                <option>SEO</option>
                <option>Influencer Marketing</option>
                <option>Chinese Consumer Marketing</option>
                <option>Full-Service / Other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-bold uppercase tracking-wider text-lumio-ink-soft/85">Tell us about your goals</label>
              <textarea 
                name="goals"
                rows={3}
                placeholder="What are you trying to achieve? Any context helps..." 
                className="w-full bg-lumio-surface border border-lumio-ink/10 rounded-lg px-4 py-2 text-lumio-ink text-xs placeholder:text-lumio-ink-muted/50 focus:border-lumio-accent focus:bg-white outline-none transition-all duration-200 resize-none"
              ></textarea>
            </div>
            <button type="submit" className="w-full btn btn-primary py-3 text-[10px] tracking-widest uppercase cursor-pointer">
              Send My Enquiry →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
