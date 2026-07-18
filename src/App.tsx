import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ChineseMarketingView } from './components/ChineseMarketingView';
import { CaseStudiesView } from './components/CaseStudiesView';
import { CaseDetailView } from './components/CaseDetailView';
import { FreeSeoAuditView } from './components/FreeSeoAuditView';
import { InsightsView } from './components/InsightsView';
import { InsightDetailView } from './components/InsightDetailView';
import { AboutView } from './components/AboutView';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeServiceId, setActiveServiceId] = useState('chinese');
  const [scrollContactPending, setScrollContactPending] = useState(false);

  // Scroll to top on navigation (except if we're on Home and waiting to scroll to contact)
  useEffect(() => {
    if (location.pathname !== '/' || !scrollContactPending) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, scrollContactPending]);

  // Handle smooth scroll to contact once we are on the homepage
  useEffect(() => {
    if (location.pathname === '/' && scrollContactPending) {
      // Reset scroll position to top instantly
      window.scrollTo(0, 0);

      let attempts = 0;
      const interval = setInterval(() => {
        const el = document.getElementById('contact');
        attempts++;
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          clearInterval(interval);
          setScrollContactPending(false);
        } else if (attempts > 40) {
          // Give up after 2 seconds
          clearInterval(interval);
          setScrollContactPending(false);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [location.pathname, scrollContactPending]);

  return (
    <div className="min-h-screen bg-white font-sans text-lumio-ink selection:bg-lumio-accent/10 selection:text-lumio-accent">
      <Navbar 
        setActiveServiceId={setActiveServiceId} 
        setScrollContactPending={setScrollContactPending}
      />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <HomeView 
                key="home"
                activeServiceId={activeServiceId}
                setActiveServiceId={setActiveServiceId}
                setScrollContactPending={setScrollContactPending}
              />
            } />
            <Route path="/chinese-consumer-marketing" element={
              <ChineseMarketingView key="chinese" />
            } />
            <Route path="/case-studies" element={
              <CaseStudiesView key="cases" />
            } />
            <Route path="/case-studies/:id" element={
              <CaseDetailView key="case-detail" />
            } />
            <Route path="/free-seo-audit" element={
              <FreeSeoAuditView key="seo" />
            } />
            <Route path="/insights" element={
              <InsightsView key="insights" />
            } />
            <Route path="/insights/:id" element={
              <InsightDetailView key="insight-detail" />
            } />
            <Route path="/about" element={
              <AboutView 
                key="about"
                onContactClick={() => {
                  setScrollContactPending(true);
                  navigate('/');
                }}
              />
            } />
            <Route path="/privacy-policy" element={
              <PrivacyPolicyView key="privacy" />
            } />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer 
        setActiveServiceId={setActiveServiceId} 
        setScrollContactPending={setScrollContactPending}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
