import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { highlights } from '../data/highlights';

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-slate-50/60 relative overflow-hidden border-y border-slate-200 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Event Highlights"
            subtitle="Core themes and activities across the multi-day festival"
          />
        </AnimatedSection>

        {/* Numbered clean grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.05} className="h-full">
              <div className="p-8 sm:p-10 border-r border-b border-slate-200 h-full flex flex-col justify-between hover:bg-white transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Plain icon */}
                    <item.icon size={18} className="text-quantum-purple" />
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed max-w-prose">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
