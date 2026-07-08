import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyCardProps {
  project: Project;
}

export function CaseStudyCard({ project }: CaseStudyCardProps) {
  const navigate = useNavigate();
  return (
    <div 
      className="group bg-white rounded-3xl border border-lumio-ink/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full cursor-pointer"
      onClick={() => { navigate(`/case-studies/${project.id}`); window.scrollTo(0, 0); }}
    >
      <div className={`p-12 text-center ${project.bg} transition-transform duration-500 group-hover:scale-[1.02]`}>
        <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${project.accent}`}>
          {project.category}
        </div>
        <h3 className={`text-xl md:text-2xl font-serif ${project.accent}`}>
          {project.client}
        </h3>
      </div>
      
      <div className="p-10 flex flex-col flex-grow">
        <span className="text-[10px] font-bold uppercase tracking-widest text-lumio-ink/30 mb-2">
          {project.client}
        </span>
        <h4 className="text-sm font-bold text-lumio-ink mb-6 leading-snug group-hover:text-lumio-accent transition-colors">
          {project.title}
        </h4>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 bg-lumio-surface rounded text-[10px] font-medium text-lumio-ink-soft border border-lumio-ink/5">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-6 border-t border-lumio-ink/5 flex items-center justify-between">
          <div className="text-xs font-serif text-lumio-accent italic">
            {project.result}
          </div>
          <ArrowRight size={16} className="text-lumio-accent opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
        </div>
      </div>
    </div>
  );
}
