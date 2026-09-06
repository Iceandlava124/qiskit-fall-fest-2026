import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const audience = [
  {
    role: 'Beginner',
    tagline: 'Never touched quantum computing? Start here.',
    detail: 'Introductory sessions break down qubits, superposition, and quantum intuition with zero prior physics required.',
  },
  {
    role: 'Intermediate',
    tagline: 'Already learning quantum computing? Go deeper.',
    detail: 'Move past theory into practical quantum circuit composition, noise models, and error mitigation strategies.',
  },
  {
    role: 'Developer',
    tagline: 'Interested in programming? Build with Qiskit.',
    detail: 'Write native Python with the Qiskit SDK, simulate algorithms, and build overnight in the hackathon.',
  },
  {
    role: 'Researcher',
    tagline: 'Exploring quantum research? Connect with others.',
    detail: 'Engage with faculty mentors and peer investigators working on simulation, algorithms, and post-quantum methods.',
  },
  {
    role: 'Quantum Enthusiast',
    tagline: 'Already curious about the field? You belong here.',
    detail: 'Discover industry roadmaps, career trajectories, and where commercial quantum advantage is heading.',
  },
];

export default function WhoCanAttend() {
  return (
    <section id="attend" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Who Can Attend"
            subtitle="Designed for curiosity and technical growth across all experience levels"
          />
        </AnimatedSection>

        {/* Hairline-divided 5-card grid, restrained and quiet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {audience.map((item, i) => (
            <AnimatedSection key={item.role} delay={i * 0.06}>
              <div className="p-7 rounded-2xl bg-quantum-surface/60 border border-quantum-border hover:border-quantum-purple/40 transition-colors flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-mono text-quantum-purple mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl mb-2">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-quantum-text mb-3 leading-snug">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-quantum-text-secondary leading-relaxed">
                    {item.detail}
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
