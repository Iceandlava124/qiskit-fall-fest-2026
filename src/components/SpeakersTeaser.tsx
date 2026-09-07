import { User, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

const featuredSpeakers = [
  {
    name: 'Anupama Roy',
    org: 'IBM India',
    topic: 'Quantum Machine Learning & Software Engineering',
  },
  {
    name: 'Amith Singhee',
    org: 'IBM India',
    topic: 'QAOA and Quantum Optimization',
  },
  {
    name: 'Siddharth Golecha',
    org: 'IBM India',
    topic: 'Quantum Error Correction & Cybersecurity',
  },
  {
    name: 'Bhanwar Gupta',
    org: 'IBM India',
    topic: 'Quantum Generative AI',
  },
  {
    name: 'Sonali Chawla',
    org: 'IBM India',
    topic: 'Quantum Drug Discovery',
  },
  {
    name: 'Ritajit Majumdar',
    org: 'IBM India',
    topic: 'Quantum-Centric Supercomputing & Startups',
  },
  {
    name: 'Mrs. Guncha Malik',
    org: 'IBM India',
    topic: 'Real IBM Quantum Hardware Programming',
  },
];

export default function SpeakersTeaser() {
  return (
    <section id="speakers" className="py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Featured Speakers & Mentors"
            subtitle="Distinguished quantum researchers and practitioners from IBM India"
          />
        </AnimatedSection>

        {/* Speakers Grid - Clean Cards without fluff descriptions */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {featuredSpeakers.map((speaker, i) => (
              <div
                key={speaker.name}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-quantum-purple/10 border border-quantum-purple/20 flex items-center justify-center text-quantum-purple font-semibold text-sm">
                      <User size={18} />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-base mb-1 group-hover:text-quantum-purple transition-colors">
                    {speaker.name}
                  </h3>

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-quantum-purple mb-3">
                    <Sparkles size={11} />
                    {speaker.org}
                  </span>

                  <div className="pt-3 border-t border-slate-200/70">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                      Keynote / Session
                    </span>
                    <p className="text-xs font-semibold text-slate-800 leading-snug">
                      {speaker.topic}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
