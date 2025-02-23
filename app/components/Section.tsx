"use client";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ children, className = '', style = {} }) => {
  return (
    <section className={`py-20 ${className}`} style={style}>
      {children}
    </section>
  );
};

export default Section;