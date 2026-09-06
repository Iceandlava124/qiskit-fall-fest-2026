interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-quantum-text-secondary max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
