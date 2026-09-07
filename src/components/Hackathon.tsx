import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { STATUS_LABELS } from '../data/status';
import {
  Brain,
  ShieldCheck,
  Cpu,
  Activity,
  Users,
  Trophy,
  Terminal,
  Code,
  CheckCircle,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';

const tracks = [
  {
    num: '01',
    name: 'Quantum Machine Learning',
    icon: Brain,
    image: '/stock/track-qml.jpg',
  },
  {
    num: '02',
    name: 'Quantum Cryptography & Communication',
    icon: ShieldCheck,
    image: '/stock/track-crypto.jpg',
  },
  {
    num: '03',
    name: 'Quantum Error Correction',
    icon: Cpu,
    image: '/stock/track-qec.jpg',
  },
  {
    num: '04',
    name: 'Quantum Computing for Healthcare',
    icon: Activity,
    image: '/stock/track-health.jpg',
  },
];

const flowSteps = [
  {
    num: '01',
    title: 'Briefing & Track Release',
    time: 'Day 2 · 03:00 PM',
    desc: 'Introduction to hackathon rules, detailed explanation of track problem statements, and evaluation criteria.',
    icon: Terminal,
  },
  {
    num: '02',
    title: 'Team Formation & Mentors',
    time: 'Day 2 · 03:30 PM',
    desc: 'Connect with technical mentors, structure circuit architectures, and formulate problem approaches.',
    icon: Users,
  },
  {
    num: '03',
    title: 'Overnight Quantum Sprint',
    time: 'Day 2 Evening → Day 3 Morning',
    desc: 'Develop quantum solutions, simulate circuits on IBM Qiskit, and consult mentors for live debugging.',
    icon: Code,
  },
  {
    num: '04',
    title: 'Submission Deadline',
    time: 'Day 3 · 01:00 PM',
    desc: 'Final development sprint, code freeze, GitHub repository submission, and demonstration slide upload.',
    icon: CheckCircle,
  },
  {
    num: '05',
    title: 'Jury Demos & Valedictory',
    time: 'Day 3 · 01:30 – 04:00 PM',
    desc: 'Live project defense before the judging panel, followed by the grand valedictory ceremony and prize distribution.',
    icon: Trophy,
  },
];

export default function Hackathon() {
  return (
    <section id="hackathon" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-slate-50/60 relative overflow-hidden border-y border-slate-200 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Quantum Hackathon"
            subtitle="Build and deploy solutions across 4 official challenge tracks using IBM Qiskit SDK"
          />
        </AnimatedSection>

        {/* Hackathon Intro Card */}
        <AnimatedSection delay={0.1}>
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-slate-200 shadow-sm mb-20 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <p className="text-xs font-mono text-quantum-purple mb-2 uppercase tracking-wider font-semibold">
                  Day 2 (3:00 PM) → Day 3 (1:00 PM) · {STATUS_LABELS.confirmed}
                </p>
                <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mb-4">
                  Quantum Challenge Sprint
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  A high-impact quantum hackathon where cross-disciplinary student teams apply quantum computing principles,
                  Qiskit programming libraries, and algorithmic thinking to real-world challenge tracks. Collaborate with peers,
                  receive guidance from IBM and academic mentors, and compete for prestige and awards.
                </p>

                {/* Clean Metadata Line - without team size restrictions */}
                <p className="text-xs sm:text-sm font-mono text-slate-500">
                  MG Auditorium, VIT Chennai <span className="mx-1.5 text-slate-300">·</span> 4 Official Tracks <span className="mx-1.5 text-slate-300">·</span> IBM Qiskit SDK <span className="mx-1.5 text-slate-300">·</span> BYOD (Bring Your Laptop)
                </p>
              </div>

              {/* Prize Card */}
              <div className="p-7 rounded-xl bg-slate-50 border border-slate-200 text-center flex-shrink-0 w-full lg:w-auto shadow-xs">
                <Trophy size={28} className="text-quantum-purple mx-auto mb-3" />
                <div className="text-base font-bold text-slate-900">Prize Tracks & Awards</div>
                <div className="text-xs text-slate-500 font-mono mt-1">
                  Official Awards & Certificates
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Official 4 Hackathon Tracks */}
        <div className="mb-20">
          <AnimatedSection delay={0.15}>
            <div className="mb-8">
              <h4 className="text-2xl font-heading font-bold text-slate-900">
                Official Hackathon Tracks
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Choose one of the 4 official challenge tracks defined for Qiskit Fall Fest 2026
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((t, idx) => (
              <AnimatedSection key={t.name} delay={0.15 + idx * 0.05}>
                <div className="rounded-2xl bg-white border border-slate-200 hover:border-quantum-purple/40 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full group">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-slate-900/80 text-white backdrop-blur-xs border border-white/20">
                        Track {t.num}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-xs flex items-center justify-center text-quantum-purple shadow-xs">
                      <t.icon size={16} />
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-center">
                    <h5 className="font-heading font-bold text-slate-900 text-base leading-snug group-hover:text-quantum-purple transition-colors">
                      {t.name}
                    </h5>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Hackathon Flow Timeline Cards with Connected Arrow Marks */}
        <div>
          <AnimatedSection delay={0.25}>
            <div className="mb-8">
              <h4 className="text-2xl font-heading font-bold text-slate-900">
                Hackathon Flow & Progression
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Key milestones from Day 2 release to final Day 3 live demonstrations
              </p>
            </div>
          </AnimatedSection>

          {/* Connected Flow Container */}
          <div className="relative">
            {/* Horizontal guide line across desktop cards */}
            <div className="hidden xl:block absolute top-1/2 left-10 right-10 h-[2px] bg-slate-200 -translate-y-1/2 z-0 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 sm:gap-6 relative z-10">
              {flowSteps.map((step, i) => (
                <div key={step.num} className="flex flex-col xl:block">
                  <AnimatedSection delay={0.25 + i * 0.06} className="h-full">
                    <div className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-quantum-purple/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full group">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl font-heading font-extrabold text-slate-900">
                            {step.num}
                          </span>
                          <step.icon size={18} className="text-quantum-purple" />
                        </div>
                        <div className="text-[11px] font-mono text-quantum-purple font-semibold mb-1.5">
                          {step.time}
                        </div>
                        <h5 className="font-heading font-bold text-slate-900 text-base mb-2">
                          {step.title}
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                        Milestone 0{i + 1}
                      </div>

                      {/* Directional Arrow Mark for Desktop (Rightward) */}
                      {i < flowSteps.length - 1 && (
                        <div
                          className="hidden xl:flex absolute -right-3.5 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-quantum-purple group-hover:border-quantum-purple/50 transition-colors pointer-events-none"
                          aria-hidden="true"
                        >
                          <ArrowRight size={14} className="stroke-[2.5]" />
                        </div>
                      )}
                    </div>
                  </AnimatedSection>

                  {/* Directional Arrow Mark for Mobile/Tablet (Downward) */}
                  {i < flowSteps.length - 1 && (
                    <div
                      className="xl:hidden flex items-center justify-center my-2 sm:my-3 text-quantum-purple"
                      aria-hidden="true"
                    >
                      <div className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                        <ArrowDown size={14} className="stroke-[2.5]" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
