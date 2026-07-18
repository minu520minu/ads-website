import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface FooterProps {
  setActiveServiceId: (id: string) => void;
  setScrollContactPending: (pending: boolean) => void;
}

export function Footer({ setActiveServiceId, setScrollContactPending }: FooterProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="bg-lumio-ink pt-20 pb-12 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" onClick={() => { window.scrollTo(0,0); }} className="text-2xl font-serif text-white mb-6 cursor-pointer block w-fit">
            Lumi<span className="text-lumio-accent">o</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Growth marketing for ambitious brands—including the Chinese consumer market others miss.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">Services</h4>
          <ul className="space-y-4">
            {[
              { name: 'Chinese Consumer Marketing', id: 'chinese' },
              { name: 'Paid Media', id: 'paid' },
              { name: 'SEO', id: 'seo' },
              { name: 'Influencer', id: 'influencer' }
            ].map(link => (
              <li key={link.name}>
                <button 
                  onClick={() => {
                    if (link.id === 'chinese') { 
                      navigate('/chinese-consumer-marketing'); 
                      window.scrollTo(0, 0); 
                    } else if (link.id === 'seo') {
                      navigate('/free-seo-audit');
                      window.scrollTo(0, 0);
                    } else {
                      setActiveServiceId(link.id);
                      if (location.pathname === '/') {
                        const el = document.getElementById('services');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        navigate('/');
                        setTimeout(() => {
                          const el = document.getElementById('services');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 400);
                      }
                    }
                  }}
                  className="text-sm text-slate-300 hover:text-lumio-accent transition-colors cursor-pointer text-left"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">Company</h4>
          <ul className="space-y-4">
            {['About', 'Case Studies', 'Insights'].map(link => (
              <li key={link}>
                {link === 'Insights' ? (
                  <Link 
                    to="/insights"
                    onClick={() => { window.scrollTo(0, 0); }}
                    className="text-sm text-slate-300 hover:text-lumio-accent transition-colors cursor-pointer"
                  >
                    {link}
                  </Link>
                ) : link === 'Case Studies' ? (
                  <Link 
                    to="/case-studies"
                    onClick={() => { window.scrollTo(0, 0); }}
                    className="text-sm text-slate-300 hover:text-lumio-accent transition-colors cursor-pointer"
                  >
                    {link}
                  </Link>
                ) : link === 'About' ? (
                  <Link 
                    to="/about"
                    onClick={() => { window.scrollTo(0, 0); }}
                    className="text-sm text-slate-300 hover:text-lumio-accent transition-colors cursor-pointer"
                  >
                    {link}
                  </Link>
                ) : (
                  <Link to="/" className="text-sm text-slate-300 hover:text-lumio-accent transition-colors cursor-pointer">{link}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://www.instagram.com/lumioreach/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-300 hover:bg-lumio-accent hover:text-white transition-all cursor-pointer">
                <Instagram size={18} />
              </a>
            </div>
          <a href="mailto:hello@lumioreach.com" className="text-sm text-slate-300 hover:text-lumio-accent flex items-center gap-2 cursor-pointer w-fit">
            <Mail size={16} /> hello@lumioreach.com
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-medium text-slate-500">© 2026 LUMIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <Link to="/privacy-policy" onClick={() => { window.scrollTo(0,0); }} className="text-[10px] font-medium text-slate-500 hover:text-white transition-colors cursor-pointer">PRIVACY POLICY</Link>
        </div>
      </div>
    </footer>
  );
}
