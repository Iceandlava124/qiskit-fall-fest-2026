import { BookOpen, Compass, Wrench, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const pillars = [
  {
    num: '01',
    icon: BookOpen,
    label: 'Learn',
    description: 'Master quantum foundations, Qiskit SDK syntax, and healthcare-focused quantum algorithms through 8 structured sessions.',
  },
  {
    num: '02',
    icon: Compass,
    label: 'Explore',
    description: 'Investigate cutting-edge domains including Quantum Machine Learning, Cryptography & Communication, and Error Correction.',
  },
  {
    num: '03',
    icon: Wrench,
    label: 'Build',
    description: 'Write quantum code, compose multi-qubit circuits, and execute simulations on IBM Quantum backends in guided hands-on labs.',
  },
  {
    num: '04',
    icon: Sparkles,
    label: 'Innovate',
    description: 'Form teams and build groundbreaking prototypes during the Quantum Hackathon across 4 high-impact biomedical and algorithmic tracks.',
  },
];

export default function Experience() {
  return (
    <section className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Experience Pillars"
            subtitle="Learn | Explore | Build | Innovate — Four core dimensions of your Qiskit Fall Fest journey"
          />
        </AnimatedSection>

        {/* Numbered grid layout with clean borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-slate-200">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.label} delay={i * 0.05} className="h-full">
              <div className="p-8 border-b sm:border-r border-slate-200 last:border-r-0 h-full flex flex-col justify-between hover:bg-slate-50/80 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {pillar.num}
                    </span>
                    <pillar.icon size={20} className="text-quantum-purple" />
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-xl mb-3">
                    {pillar.label}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed max-w-prose">
                    {pillar.description}
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
