import React from 'react';

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}

export function SectionTitle({ eyebrow, title, description, dark = false }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lumio-accent block mb-3">
        {eyebrow}
      </span>
      <h2 className={`text-3xl md:text-5xl font-serif mb-4 ${dark ? 'text-white' : 'text-lumio-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-xl leading-relaxed ${dark ? 'text-white/60' : 'text-lumio-ink-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
