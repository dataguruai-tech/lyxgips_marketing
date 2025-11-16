import { ReactNode } from "react";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  accent?: boolean;
}

const Section = ({ id, number, title, children, accent = false }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${accent ? 'bg-card' : 'bg-background'}`}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 animate-fade-in-up">
          <div className="text-accent text-sm font-mono mb-3">{number}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent" />
        </div>
        
        <div className="prose prose-lg prose-invert max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
