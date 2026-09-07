import { Mic2, Users, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

const speakerGroups = [
  {
    icon: Mic2,
    title: 'IBM Quantum Keynote Speakers',
    desc: 'Distinguished IBM Quantum researchers and practitioners delivering keynote lectures and hands-on Qiskit programming sessions.',
    badge: 'IBM Quantum',
    image: '/stock/speaker-keynote.jpg',
  },
  {
    icon: Users,
    title: 'Invited Expert Speakers',
    desc: 'Leading academics and industry researchers presenting across quantum machine learning, cryptography, error correction, and healthcare.',
    badge: 'Invited Experts',
    image: '/stock/speaker-expert.jpg',
  },
  {
    icon: Award,
    title: 'Mentors & Hackathon Guides',
    desc: 'Dedicated technical mentors guiding teams through all 4 hackathon tracks — available for live debugging, ideation, and circuit review.',
    badge: 'Hackathon Mentors',
    image: '/stock/mentor-guide.jpg',
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

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {speakerGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col group"
                >
                  {/* Card Image Banner with Badge */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={group.image}
                      alt={group.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs border border-white/20 shadow-xs">
                        {group.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={18} className="text-quantum-purple flex-shrink-0" />
                        <h3 className="font-heading font-bold text-slate-900 text-lg group-hover:text-quantum-purple transition-colors">
                          {group.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed font-normal">
                        {group.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-center text-xs font-mono text-slate-400 mt-8">
            Speaker confirmations will be announced closer to the event date.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
