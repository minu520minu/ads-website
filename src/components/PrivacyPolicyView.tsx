import React from 'react';
import { motion } from 'motion/react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function PrivacyPolicyView() {
  useDocumentMeta({
    title: 'Privacy Policy | Lumio',
    description: 'Learn how Lumio collects, uses, and protects your personal information on lumioreach.com.',
    canonicalPath: '/privacy-policy',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-6 max-w-4xl mx-auto"
    >
      <div className="border-b border-lumio-ink/10 pb-8 mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lumio-accent block mb-3">
          Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-lumio-ink leading-tight mb-4">
          Privacy Policy
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-lumio-ink-muted">
          <span className="font-bold uppercase tracking-wider text-lumio-ink">Lumio</span>
          <span className="w-1.5 h-1.5 rounded-full bg-lumio-ink/20" />
          <span>Effective Date: July 12, 2026</span>
        </div>
      </div>

      <div className="prose prose-slate max-w-none text-lumio-ink-soft space-y-8 text-[15px] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">1. Introduction</h2>
          <p>
            Lumio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{' '}
            <a href="https://lumioreach.com" className="text-lumio-accent hover:underline font-medium">
              lumioreach.com
            </a>
            . This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage with our services.
          </p>
          <p>
            By using our website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">2. Information We Collect</h2>
          <p>We may collect the following types of personal information:</p>
          
          <div className="pl-4 border-l-2 border-lumio-accent/20 space-y-4 my-4">
            <div>
              <h3 className="font-bold text-[14px] text-lumio-ink">Information you provide directly:</h3>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-lumio-ink-muted">
                <li>Name</li>
                <li>Email address</li>
                <li>Company name</li>
                <li>Any other information you submit through our contact or inquiry forms</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-[14px] text-lumio-ink">Information collected automatically:</h3>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-lumio-ink-muted">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring URLs</li>
                <li>Device information</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-1 text-lumio-ink-muted">
            <li>Respond to your inquiries and provide our services</li>
            <li>Send you information relevant to your request</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Send marketing communications where you have given consent</li>
          </ul>
          <p className="font-medium text-lumio-ink">
            We will never sell your personal information to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">4. Cookies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. Some parts of our website may not function properly if cookies are disabled.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">5. Third-Party Services</h2>
          <p>
            We may use third-party services such as analytics providers and advertising platforms that collect, monitor, and analyze usage data. These third parties have their own privacy policies and we encourage you to review them. We are not responsible for the privacy practices of third-party services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">6. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. When your information is no longer needed, we will securely delete or anonymize it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">7. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-5 space-y-1 text-lumio-ink-muted">
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to withdraw consent at any time where processing is based on consent</li>
            <li>The right to lodge a complaint with a supervisory authority</li>
          </ul>
          <p>To exercise any of these rights, please contact us at the email below.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">8. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">9. Children&apos;s Privacy</h2>
          <p>
            Our website is not directed at individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the effective date at the top of this page. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-lumio-ink/5">
          <h2 className="text-xl font-bold text-lumio-ink tracking-tight font-serif">11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:</p>
          <div className="bg-lumio-surface p-6 rounded-2xl border border-lumio-ink/5 mt-4 space-y-1">
            <div className="font-bold text-lumio-ink text-[14px]">Lumio</div>
            <div>
              <a href="mailto:hello@lumioreach.com" className="text-lumio-accent hover:underline text-[14px]">
                hello@lumioreach.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
