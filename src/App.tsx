import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { ViewState, Project, Article } from './types';
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
import { PROJECTS } from './data/projects';
import { INSIGHTS_ARTICLES } from './data/articles';

function App() {
  const [view, setView] = useState<ViewState>('home');
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);
  const [selectedArticle, setSelectedArticle] = useState<Article>(INSIGHTS_ARTICLES[0]);
  const [activeServiceId, setActiveServiceId] = useState('paid');
  const [scrollContactPending, setScrollContactPending] = useState(false);

  // Simple scroll top on view change (only if not waiting to scroll to contact)
  useEffect(() => {
    if (view !== 'home' || !scrollContactPending) {
      window.scrollTo(0, 0);
    }
  }, [view, scrollContactPending]);

  // Handle smooth scroll to contact once home view is active
  useEffect(() => {
    if (view === 'home' && scrollContactPending) {
      // Reset scroll position to top instantly when Home page mounts
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
  }, [view, scrollContactPending]);

  return (
    <div className="min-h-screen bg-white font-sans text-lumio-ink selection:bg-lumio-accent/10 selection:text-lumio-accent">
      <Navbar currentView={view} setView={setView} setActiveServiceId={setActiveServiceId} />
      
      <main>
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <HomeView 
              key="home"
              setView={setView} 
              setSelectedProject={setSelectedProject}
              activeServiceId={activeServiceId}
              setActiveServiceId={setActiveServiceId}
            />
          )}
          {view === 'chinese-marketing' && (
            <ChineseMarketingView 
              key="chinese"
              setView={setView} 
            />
          )}
          {view === 'case-studies' && (
            <CaseStudiesView 
              key="cases"
              setView={setView} 
              setSelectedProject={setSelectedProject} 
            />
          )}
          {view === 'case-detail' && (
            <CaseDetailView 
              key="case-detail"
              project={selectedProject} 
              setView={setView} 
            />
          )}
          {view === 'free-seo-audit' && (
            <FreeSeoAuditView 
              key="seo"
              setView={setView} 
            />
          )}
          {view === 'insights' && (
            <InsightsView 
              key="insights"
              setView={setView} 
              setSelectedArticle={setSelectedArticle} 
            />
          )}
          {view === 'insight-detail' && (
            <InsightDetailView 
              key="insight-detail"
              article={selectedArticle} 
              setView={setView} 
            />
          )}
          {view === 'about' && (
            <AboutView 
              key="about"
              setView={setView} 
              onContactClick={() => {
                setView('home');
                setScrollContactPending(true);
              }}
            />
          )}
        </AnimatePresence>
      </main>

      <Footer setView={setView} setActiveServiceId={setActiveServiceId} />
    </div>
  );
}

export default App;
