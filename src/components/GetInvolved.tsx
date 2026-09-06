import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { STATUS_LABELS } from '../data/status';
import {
  Building2,
  Mic2,
  Trophy,
  Gift,
  Coffee,
  Cpu,
  Shirt,
  Mail,
} from 'lucide-react';

const partnerCategories = [
  { icon: Building2, label: 'Industry Partner' },
  { icon: Mic2, label: 'Session Partner' },
  { icon: Trophy, label: 'Prize Partner' },
  { icon: Gift, label: 'Goodies Partner' },
  { icon: Coffee, label: 'Refreshment Partner' },
  { icon: Cpu, label: 'Technology Partner' },
  { icon: Shirt, label: 'Merchandise Partner' },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#0b0b12] relative overflow-hidden border-y border-quantum-border/60 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Get Involved"
            subtitle="Explore partnership, sponsorship, and mentorship opportunities for 2026"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-base sm:text-lg text-quantum-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed">
            The event is building a sponsorship ecosystem across multiple partner categories.
            Organizations interested in supporting quantum education and connecting with students
            and emerging researchers are invited to get in touch.
          </p>
        </AnimatedSection>

        {/* Sponsor category cards - 7 columns across widescreen desktop */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
            {partnerCategories.map((cat) => (
              <div
                key={cat.label}
                className="flex flex-col items-center justify-center p-6 rounded-2xl border border-quantum-border bg-quantum-surface/60 hover:border-quantum-purple/40 transition-colors text-center min-h-[150px]"
              >
                <cat.icon size={22} className="text-quantum-purple mb-3 flex-shrink-0" />
                <span className="text-sm font-medium text-white mb-1.5 leading-snug">{cat.label}</span>
                <span className="text-[10px] font-mono text-quantum-text-secondary/70">
                  {STATUS_LABELS.proposed}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Widescreen Partnership Inquiry Panel */}
        <AnimatedSection delay={0.3}>
          <div className="p-8 sm:p-12 rounded-3xl border border-quantum-border bg-[#080811] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                Sponsorship & Collaboration
              </span>
              <h3 className="font-heading font-bold text-white text-2xl sm:text-3xl mt-1 mb-2">
                Collaborate with The QuantumPlators
              </h3>
              <p className="text-sm text-quantum-text-secondary leading-relaxed font-normal">
                Direct inquiries to the organizing committee at VIT Chennai to discuss customized track sponsorship,
                keynote opportunities, student challenge judging, and technical recruitment.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="mailto:quantumplators@vit.ac.in"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold rounded-xl bg-quantum-purple hover:bg-quantum-purple-light text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple shadow-lg shadow-quantum-purple/20"
              >
                <Mail size={18} />
                <span>Partner With Us</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
