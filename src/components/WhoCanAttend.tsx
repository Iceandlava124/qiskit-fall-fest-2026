import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import {
  Sparkles,
  Layers,
  Terminal,
  GraduationCap,
  Orbit,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';

const audience = [
  {
    role: 'Beginner',
    tagline: 'Never touched quantum computing? Start here.',
    detail: 'Introductory sessions break down qubits, superposition, and quantum intuition with zero prior physics required.',
    icon: Sparkles,
    step: 'Stage 01',
  },
  {
    role: 'Intermediate',
    tagline: 'Already learning quantum computing? Go deeper.',
    detail: 'Move past theory into practical quantum circuit composition, noise models, and error mitigation strategies.',
    icon: Layers,
    step: 'Stage 02',
  },
  {
    role: 'Developer',
    tagline: 'Interested in programming? Build with Qiskit.',
    detail: 'Write native Python with the Qiskit SDK, simulate algorithms, and build overnight in the hackathon.',
    icon: Terminal,
    step: 'Stage 03',
  },
  {
    role: 'Researcher',
    tagline: 'Exploring quantum research? Connect with others.',
    detail: 'Engage with faculty mentors and peer investigators working on simulation, algorithms, and post-quantum methods.',
    icon: GraduationCap,
    step: 'Stage 04',
  },
  {
    role: 'Quantum Enthusiast',
    tagline: 'Already curious about the field? You belong here.',
    detail: 'Discover industry roadmaps, career trajectories, and where commercial quantum advantage is heading.',
    icon: Orbit,
    step: 'Stage 05',
  },
];

export default function WhoCanAttend() {
  return (
    <section
      id="attend"
      className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-slate-50/60 relative overflow-hidden border-y border-slate-200 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Who Can Attend"
            subtitle="A connected learning journey — Start with zero prerequisites and advance to research and hackathon builds"
          />
        </AnimatedSection>

        {/* Connected Pathway Container */}
        <div className="relative mt-12">
          {/* Subtle connecting pathway guide line across desktop cards */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[2px] bg-slate-200 -translate-y-1/2 z-0 pointer-events-none" />

          {/* Cards Grid / Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {audience.map((item, i) => (
              <div key={item.role} className="flex flex-col lg:block">
                <AnimatedSection delay={i * 0.08} className="h-full">
                  <div className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-quantum-purple/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full group">
                    <div>
                      {/* Top Row: Stage pill & Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[11px] font-mono text-quantum-purple font-semibold px-2 py-0.5 rounded bg-quantum-purple/10">
                          {item.step}
                        </span>
                        <item.icon
                          size={20}
                          className="text-slate-400 group-hover:text-quantum-purple transition-colors"
                        />
                      </div>

                      {/* Role & Tagline */}
                      <h3 className="font-heading font-bold text-slate-900 text-xl mb-2">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-800 mb-3 leading-snug">
                        {item.tagline}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {item.detail}
                      </p>
                    </div>

                    {/* Connecting Arrow for Desktop (pointing Right to next card) */}
                    {i < audience.length - 1 && (
                      <div
                        className="hidden lg:flex absolute -right-3.5 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-quantum-purple group-hover:border-quantum-purple/50 transition-colors pointer-events-none"
                        aria-hidden="true"
                      >
                        <ArrowRight size={14} className="stroke-[2.5]" />
                      </div>
                    )}
                  </div>
                </AnimatedSection>

                {/* Connecting Arrow for Mobile & Tablet (pointing Down between vertical cards) */}
                {i < audience.length - 1 && (
                  <div
                    className="lg:hidden flex items-center justify-center my-2 sm:my-3 text-quantum-purple"
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

        {/* Bottom Progression Summary Pill */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-5 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-mono text-slate-600">
              <span className="text-quantum-purple font-semibold">Learning Flow:</span>
              <span>Fundamentals</span>
              <span className="text-quantum-purple">→</span>
              <span>Circuit Labs</span>
              <span className="text-quantum-purple">→</span>
              <span>Qiskit SDK</span>
              <span className="text-quantum-purple">→</span>
              <span>QML & Algorithms</span>
              <span className="text-quantum-purple">→</span>
              <span className="font-bold text-slate-900">Hackathon Deployment</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
