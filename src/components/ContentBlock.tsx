import { ReactNode } from "react";

interface ContentBlockProps {
  children: ReactNode;
  highlight?: boolean;
}

export const ContentBlock = ({ children, highlight = false }: ContentBlockProps) => {
  return (
    <div className={`mb-8 ${highlight ? 'p-8 bg-card/50 border border-border rounded-xl' : ''}`}>
      {children}
    </div>
  );
};

export const Paragraph = ({ children }: { children: ReactNode }) => {
  return <p className="text-lg text-foreground/90 leading-relaxed mb-6">{children}</p>;
};

export const Highlight = ({ children }: { children: ReactNode }) => {
  return <span className="text-gold font-medium">{children}</span>;
};

export const Quote = ({ children }: { children: ReactNode }) => {
  return (
    <blockquote className="border-l-4 border-accent pl-6 py-4 my-8 italic text-muted-foreground bg-card/30 rounded-r-lg">
      {children}
    </blockquote>
  );
};

export const List = ({ items }: { items: string[] }) => {
  return (
    <ul className="space-y-4 mb-8">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-foreground/90">
          <span className="text-accent mt-1">●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export const SubTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-2xl font-bold text-foreground mb-6 mt-12">{children}</h3>;
};
