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
} from 'lucide-react';

const tracks = [
  {
    num: '01',
    name: 'Quantum Machine Learning',
    icon: Brain,
    desc: 'Harness parameterized quantum circuits, quantum kernels, and hybrid quantum-classical algorithms to classify high-dimensional datasets and accelerate pattern discovery.',
    tags: ['Variational Classifiers', 'Quantum Kernels', 'Hybrid AI'],
  },
  {
    num: '02',
    name: 'Quantum Cryptography & Communication',
    icon: ShieldCheck,
    desc: 'Explore protocols for unconditionally secure information exchange including Quantum Key Distribution (QKD), BB84 simulation, entanglement distribution, and post-quantum defenses.',
    tags: ['QKD Protocols', 'BB84 Simulation', 'Post-Quantum Security'],
  },
  {
    num: '03',
    name: 'Quantum Error Correction',
    icon: Cpu,
    desc: 'Investigate stabilizer codes, surface code models, noise mitigation (ZNE/M3), and fault-tolerant techniques essential for scaling NISQ devices into fault-tolerant quantum computers.',
    tags: ['Surface Codes', 'Stabilizer Formalism', 'Noise Mitigation'],
  },
  {
    num: '04',
    name: 'Quantum Computing for Healthcare',
    icon: Activity,
    desc: 'Apply quantum algorithms to accelerate biomedical research, molecular docking simulations, genomic sequence analysis, and precision medicine drug discovery pipelines.',
    tags: ['Biomedical Research', 'Molecular Docking', 'Drug Discovery'],
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
    desc: 'Finalize teams (2–4 members), connect with technical mentors, and structure circuit architectures.',
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
    time: 'Day 3 · 09:00 – 10:00 AM',
    desc: 'Final development sprint, code freeze, GitHub repository submission, and demonstration slide upload.',
    icon: CheckCircle,
  },
  {
    num: '05',
    title: 'Jury Demos & Valedictory',
    time: 'Day 3 · 10:00 AM – 01:00 PM',
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
                  Day 2 (3:00 PM) → Day 3 (10:00 AM) · {STATUS_LABELS.confirmed}
                </p>
                <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mb-4">
                  Quantum Challenge Sprint
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  A high-impact quantum hackathon where cross-disciplinary student teams apply quantum computing principles,
                  Qiskit programming libraries, and algorithmic thinking to real-world challenge tracks. Collaborate with peers,
                  receive guidance from IBM and academic mentors, and compete for prestige and awards.
                </p>

                {/* Metadata Line */}
                <p className="text-xs sm:text-sm font-mono text-slate-500">
                  Team Size: 2–4 Members <span className="mx-1.5 text-slate-300">·</span> Offline at VIT Chennai <span className="mx-1.5 text-slate-300">·</span> 4 Official Tracks <span className="mx-1.5 text-slate-300">·</span> BYOD (Bring Your Laptop)
                </p>
              </div>

              {/* Prize Card */}
              <div className="p-7 rounded-xl bg-slate-50 border border-slate-200 text-center flex-shrink-0 w-full lg:w-auto shadow-xs">
                <Trophy size={28} className="text-quantum-purple mx-auto mb-3" />
                <div className="text-base font-bold text-slate-900">Prize Tracks & Awards</div>
                <div className="text-xs text-slate-500 font-mono mt-1">
                  Cash Prizes & Certificates
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
                <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-quantum-purple/40 shadow-sm transition-all flex flex-col justify-between h-full">
                  <div>
                    {/* Number and icon header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono text-slate-400 font-semibold">
                        Track {t.num}
                      </span>
                      <t.icon size={20} className="text-quantum-purple" />
                    </div>
                    <h5 className="font-heading font-bold text-slate-900 text-lg mb-3 leading-snug">
                      {t.name}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {t.desc}
                    </p>
                  </div>

                  {/* Track Tags */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
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
              <h4 className="text-2xl font-heading font-bold text-slate-900">
                Hackathon Flow & Progression
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Key milestones from Day 2 release to final Day 3 live demonstrations
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
            {flowSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={0.25 + i * 0.06}>
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-quantum-purple/40 shadow-sm transition-all flex flex-col justify-between h-full">
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
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
