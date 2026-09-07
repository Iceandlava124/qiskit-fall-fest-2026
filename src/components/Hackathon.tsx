import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { STATUS_LABELS } from '../data/status';
import {
  Atom,
  Terminal,
  Activity,
  Users,
  Sparkles,
  Globe,
  Trophy,
  Code,
  CheckCircle,
} from 'lucide-react';

const tracks = [
  {
    num: '01',
    name: 'Quantum Computing',
    icon: Atom,
    desc: 'Understand the fundamentals of quantum computing and how quantum systems differ from classical computers.',
  },
  {
    num: '02',
    name: 'Qiskit & Quantum Programming',
    icon: Terminal,
    desc: 'Learn to build basic quantum circuits and gain hands-on experience with Qiskit and IBM Quantum.',
  },
  {
    num: '03',
    name: 'Quantum Healthcare',
    icon: Activity,
    desc: 'Explore emerging applications of quantum computing in healthcare, biomedical research, and medical imaging.',
  },
  {
    num: '04',
    name: 'Expert & Industry Sessions',
    icon: Users,
    desc: 'Interact with researchers and professionals working in quantum computing and emerging quantum technologies.',
  },
  {
    num: '05',
    name: 'Interactive Learning',
    icon: Sparkles,
    desc: 'Participate in quizzes, demonstrations, coding activities, and hands-on challenges designed to make quantum concepts engaging and accessible.',
  },
  {
    num: '06',
    name: 'Inter-College Quantum Community',
    icon: Globe,
    desc: 'Bring together students from colleges across Tamil Nadu to share knowledge, develop curiosity, and build a collaborative quantum-learning community.',
  },
];

const flowSteps = [
  {
    num: '01',
    title: 'Problem Statements',
    desc: 'Official release of challenges across algorithm and application tracks.',
    icon: Terminal,
  },
  {
    num: '02',
    title: 'Team Formation',
    desc: 'Form teams with peers and attend technical mentor briefings.',
    icon: Users,
  },
  {
    num: '03',
    title: 'Overnight Build',
    desc: 'Develop quantum solutions with continuous mentor assistance and code guidance.',
    icon: Code,
  },
  {
    num: '04',
    title: 'Evaluation Checkpoint',
    desc: 'Submit project code and circuit benchmarks for mentor evaluation.',
    icon: CheckCircle,
  },
  {
    num: '05',
    title: 'Presentations & Awards',
    desc: 'Pitch live to the judging panel and celebrate winners at the valedictory.',
    icon: Trophy,
  },
];

export default function Hackathon() {
  return (
    <section id="hackathon" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Quantum Hackathon"
            subtitle="Tackle real-world problems using quantum computing concepts and tools"
          />
        </AnimatedSection>

        {/* Hackathon Intro Card - Direct copy, no pill badges */}
        <AnimatedSection delay={0.1}>
          <div className="p-8 sm:p-12 rounded-2xl bg-quantum-surface/60 border border-quantum-border mb-20 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <p className="text-xs font-mono text-quantum-purple mb-2 uppercase tracking-wider">
                  Day 2 Evening → Day 3 Afternoon · {STATUS_LABELS.confirmed}
                </p>
                <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4">
                  Overnight Quantum Build Challenge
                </h3>
                <p className="text-base sm:text-lg text-quantum-text-secondary leading-relaxed mb-6">
                  A quantum-focused hackathon where teams use quantum computing concepts and
                  tools on real problems. Build solutions, collaborate with peer developers, learn
                  from mentors, and compete for recognition and prizes.
                </p>

                {/* Plain text metadata line with middle dots */}
                <p className="text-xs sm:text-sm font-mono text-quantum-text-secondary">
                  Team Size: 2–4 Members <span className="mx-1.5 text-zinc-600">·</span> Cross-College Teams Allowed <span className="mx-1.5 text-zinc-600">·</span> BYOD (Bring Your Laptop) <span className="mx-1.5 text-zinc-600">·</span> Individual Registrants Matched
                </p>
              </div>

              {/* Prize card with quiet status label per Item 8 */}
              <div className="p-7 rounded-xl bg-quantum-surface border border-quantum-border text-center flex-shrink-0 w-full lg:w-auto">
                <Trophy size={28} className="text-quantum-purple mx-auto mb-3" />
                <div className="text-base font-bold text-white">Prize Tracks & Awards</div>
                <div className="text-xs text-quantum-text-secondary font-mono mt-1">
                  {STATUS_LABELS.comingSoon}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Hackathon Tracks - Plain small icon without rounded box */}
        <div className="mb-20">
          <AnimatedSection delay={0.15}>
            <div className="mb-8">
              <h4 className="text-2xl font-heading font-bold text-white">
                Challenge Tracks
              </h4>
              <p className="text-sm text-quantum-text-secondary mt-1">
                Select a track aligned with your interests and technical goals (6 Focus Areas)
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {tracks.map((t, idx) => (
              <AnimatedSection key={t.name} delay={0.15 + idx * 0.05}>
                <div className="p-8 rounded-2xl bg-quantum-surface/60 border border-quantum-border hover:border-quantum-purple/40 transition-colors flex flex-col justify-between h-full">
                  <div>
                    {/* Number and icon header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono text-quantum-text-secondary">
                        {t.num}
                      </span>
                      <t.icon size={18} className="text-quantum-purple" />
                    </div>
                    <h5 className="font-heading font-bold text-white text-xl mb-3 leading-snug">{t.name}</h5>
                    <p className="text-sm text-quantum-text-secondary leading-relaxed font-normal">{t.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Hackathon Flow Timeline Cards */}
        <div>
          <AnimatedSection delay={0.25}>
            <div className="mb-8">
              <h4 className="text-2xl font-heading font-bold text-white">
                Hackathon Flow & Progression
              </h4>
              <p className="text-sm text-quantum-text-secondary mt-1">
                Five milestones from briefing to final pitch presentations
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
            {flowSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={0.25 + i * 0.06}>
                <div className="p-6 sm:p-7 rounded-2xl bg-quantum-surface/60 border border-quantum-border hover:border-quantum-purple/40 transition-colors flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-heading font-extrabold text-white">
                        {step.num}
                      </span>
                      <step.icon size={18} className="text-quantum-purple" />
                    </div>
                    <h5 className="font-heading font-bold text-white text-base mb-2">
                      {step.title}
                    </h5>
                    <p className="text-xs text-quantum-text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-quantum-border/40 text-[11px] font-mono text-quantum-text-secondary/70">
                    Milestone 0{i + 1}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
