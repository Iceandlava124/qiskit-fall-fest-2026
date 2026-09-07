import { BookOpen, Wrench, Users, Swords, Compass } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const pillars = [
  {
    num: '01',
    icon: BookOpen,
    label: 'Learn',
    description: 'Quantum fundamentals, expert sessions, and cutting-edge research.',
  },
  {
    num: '02',
    icon: Wrench,
    label: 'Build',
    description: 'Hands-on Qiskit programming and quantum circuit design.',
  },
  {
    num: '03',
    icon: Users,
    label: 'Connect',
    description: 'Network with students, researchers, and industry professionals.',
  },
  {
    num: '04',
    icon: Swords,
    label: 'Compete',
    description: 'Hackathon, quizzes, and challenges to test your skills.',
  },
  {
    num: '05',
    icon: Compass,
    label: 'Explore',
    description: 'Career pathways, research frontiers, and the future of quantum.',
  },
];

export default function Experience() {
  return (
    <section className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Experience Pillars"
            subtitle="Five core dimensions of your Qiskit Fall Fest journey"
          />
        </AnimatedSection>

        {/* Numbered grid layout with clean borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-slate-200">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.label} delay={i * 0.05} className="h-full">
              <div className="p-8 border-b md:border-r border-slate-200 last:border-r-0 h-full flex flex-col justify-between hover:bg-slate-50/80 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {pillar.num}
                    </span>
                    {/* Plain icon */}
                    <pillar.icon size={18} className="text-quantum-purple" />
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
