import { Sparkles, Brain, Cpu, ShieldCheck, Dna, Terminal, Award, Binary, Atom } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

const featuredSpeakers = [
  {
    name: 'Speaker 1',
    org: 'IBM Quantum',
    topic: 'Session 1: Quantum & Qiskit 101 (Intro & Hands-on)',
    icon: Cpu,
    category: 'IBM Keynote',
  },
  {
    name: 'Speaker 2',
    org: 'IBM Quantum',
    topic: 'Session 4: Qiskit & Hands-on Quantum Programming',
    icon: Terminal,
    category: 'IBM Lab Lead',
  },
  {
    name: 'Speaker 3',
    org: 'Invited Expert',
    topic: 'Session 2: Introduction to Quantum Computing',
    icon: Atom,
    category: 'Foundations',
  },
  {
    name: 'Speaker 4',
    org: 'Invited Expert',
    topic: 'Session 3: Quantum Computing for Healthcare',
    icon: Dna,
    category: 'Healthcare',
  },
  {
    name: 'Speaker 5',
    org: 'Invited Expert',
    topic: 'Session 5: Quantum Machine Learning',
    icon: Brain,
    category: 'Quantum AI',
  },
  {
    name: 'Speaker 6',
    org: 'Invited Expert',
    topic: 'Session 6: Quantum Cryptography & Communication',
    icon: ShieldCheck,
    category: 'Cryptography',
  },
  {
    name: 'Speaker 7',
    org: 'Invited Expert',
    topic: 'Session 7: Quantum Computing for Biomedical Applications',
    icon: Sparkles,
    category: 'Biomedical',
  },
  {
    name: 'Speaker 8',
    org: 'Invited Expert',
    topic: 'Session 8: Hands-on QML for Biomedical Research',
    icon: Binary,
    category: 'Research Lab',
  },
];

export default function SpeakersTeaser() {
  return (
    <section id="speakers" className="py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Featured Speakers & Mentors"
            subtitle="Distinguished quantum researchers, IBM Quantum speakers, and track mentors"
          />
        </AnimatedSection>

        {/* Speakers Grid - Clean Cards using Speaker 1, Speaker 2, etc. */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredSpeakers.map((speaker, i) => {
              const Icon = speaker.icon;
              return (
                <div
                  key={speaker.name}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 group-hover:border-quantum-purple/40 flex items-center justify-center text-quantum-purple shadow-xs transition-colors">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-quantum-purple/10 text-quantum-purple border border-quantum-purple/20">
                        {speaker.category}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-heading font-bold text-slate-900 text-lg group-hover:text-quantum-purple transition-colors">
                        {speaker.name}
                      </h3>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        0{i + 1}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-quantum-purple mb-3">
                      <Award size={11} />
                      {speaker.org}
                    </span>

                    <div className="pt-3 border-t border-slate-200/70">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                        Scheduled Session
                      </span>
                      <p className="text-xs font-semibold text-slate-800 leading-snug">
                        {speaker.topic}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
