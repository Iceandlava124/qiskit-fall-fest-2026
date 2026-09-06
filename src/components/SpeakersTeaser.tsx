import { Mic, Award, GraduationCap, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';
import { STATUS_LABELS } from '../data/status';

const speakerCategories = [
  {
    icon: GraduationCap,
    category: 'Quantum Researchers',
    description: 'Faculty and academic researchers exploring quantum foundations and algorithm development.',
  },
  {
    icon: Award,
    category: 'Industry Practitioners',
    description: 'Engineers and industry specialists working on practical quantum computing deployments.',
  },
  {
    icon: Users,
    category: 'Technical Mentors',
    description: 'Hands-on hackathon mentors assisting teams with circuit debugging, optimization, and tooling.',
  },
];

export default function SpeakersTeaser() {
  return (
    <section id="speakers" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#0b0b12] relative overflow-hidden border-y border-quantum-border/60 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Speakers & Mentors"
            subtitle="Distinguished researchers and industry practitioners"
          />
        </AnimatedSection>

        {/* Categories with plain small icon, no rounded box */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {speakerCategories.map((cat, i) => (
              <div
                key={cat.category}
                className="p-8 sm:p-9 rounded-2xl bg-quantum-surface/60 border border-quantum-border hover:border-quantum-purple/40 transition-colors flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-quantum-text-secondary">
                      0{i + 1}
                    </span>
                    <cat.icon size={18} className="text-quantum-purple" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {cat.category}
                  </h3>
                  <p className="text-sm text-quantum-text-secondary leading-relaxed max-w-prose">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-quantum-border/40 flex items-center justify-between">
                  <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                    Category
                  </span>
                  <span className="text-xs font-mono text-quantum-text-secondary/70">
                    {STATUS_LABELS.comingSoon}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Intentional Placeholder Box per Item 8 */}
        <AnimatedSection delay={0.2}>
          <div className="text-center p-7 sm:p-8 rounded-2xl border border-quantum-border bg-quantum-surface/40 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-quantum-purple text-sm font-semibold mb-2">
              <Mic size={16} />
              <span>Speaker Lineup</span>
            </div>
            <p className="text-xs sm:text-sm text-quantum-text-secondary leading-relaxed mb-2">
              More speakers and technical mentors will be announced leading up to October 2026.
            </p>
            <span className="text-[11px] font-mono text-quantum-text-secondary/70">
              Status: {STATUS_LABELS.comingSoon}
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
