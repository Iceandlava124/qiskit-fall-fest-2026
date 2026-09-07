import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { Cpu, Users, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="About the Event"
            subtitle="Explore quantum technology beyond the traditional classroom"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Narrative Copy with Clean Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="p-8 sm:p-9 rounded-2xl bg-slate-50 border-l-4 border-l-quantum-purple border border-slate-200 shadow-sm">
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                  Qiskit Fall Fest 2026 at VIT Chennai is a 3-day premier quantum computing event bringing together 400–500 students, researchers, technology enthusiasts, and industry professionals to explore the rapidly advancing frontiers of quantum computing.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-prose">
                Organized by the Department of Mathematics, School of Advanced Sciences (SAS) and The QuantumPlators Club at VIT Chennai, the event takes students beyond
                the classroom through 8 technical sessions, IBM Quantum speaker keynotes, hands-on programming labs,
                and a 4-track quantum hackathon spanning machine learning, cryptography, error correction, and scientific computing.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.22}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-prose font-mono text-sm text-slate-700">
                Official Motto: <span className="text-quantum-purple font-semibold">Learn | Explore | Build | Innovate</span>
              </p>
            </AnimatedSection>
          </div>

          {/* Right: Event Overview Info Box */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm relative">
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-6">
                  Event Overview
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <Users size={18} className="text-quantum-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase">Organizers</div>
                      <div className="text-sm font-medium text-slate-800">Department of Mathematics, School of Advanced Sciences & The QuantumPlators Club, VIT Chennai</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <Award size={18} className="text-quantum-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase">Focus Area</div>
                      <div className="text-sm font-medium text-slate-800">Quantum Computing & IBM Qiskit SDK</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <MapPin size={18} className="text-quantum-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase">Venue</div>
                      <div className="text-sm font-medium text-slate-800">MG Auditorium, VIT Chennai</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <Cpu size={18} className="text-quantum-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase">Platform</div>
                      <div className="text-sm font-medium text-slate-800">IBM Qiskit SDK (Python)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <Award size={18} className="text-quantum-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase">Duration & Dates</div>
                      <div className="text-sm font-medium text-slate-800">3 Days · 5–7 October 2026</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 text-xs text-slate-500 font-mono flex items-center justify-between">
                  <span>Audience</span>
                  <span className="text-quantum-purple font-semibold">Beginners to Researchers</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Festival Highlights Cards with Curated Photography */}
        <div className="mt-16 sm:mt-20">
          <AnimatedSection delay={0.24}>
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                What to Expect
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-1">
                The Festival Experience
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedSection delay={0.26}>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col h-full group">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/stock/fest-labs.jpg"
                    alt="Students in hands-on quantum coding lab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-quantum-purple/80 text-white">
                      Interactive Labs
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg mb-2 group-hover:text-quantum-purple transition-colors">
                      Hands-on Quantum Labs
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      Hands-on circuit composition, algorithmic simulation, and practical programming using the IBM Qiskit Python SDK.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col h-full group">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/stock/fest-keynote.jpg"
                    alt="Plenary auditorium keynote session"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-quantum-purple/80 text-white">
                      Distinguished Lectures
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg mb-2 group-hover:text-quantum-purple transition-colors">
                      Keynotes & Expert Sessions
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      Learn directly from quantum researchers and industry practitioners exploring the frontiers of quantum hardware and software.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.34}>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col h-full group">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/stock/fest-sprint.jpg"
                    alt="Hackathon team collaborating during sprint"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-quantum-purple/80 text-white">
                      Hackathon Sprint
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg mb-2 group-hover:text-quantum-purple transition-colors">
                      Quantum Challenge Sprint
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      Collaborate in teams across 4 tracks, build algorithmic solutions overnight, defend live demos, and earn awards.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
