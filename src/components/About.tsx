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
                  Qiskit Fall Fest 2026 at VIT Chennai is a 3-day premier quantum computing event centered on
                  <strong className="text-quantum-purple font-semibold"> Quantum Computing for Biomedical Applications</strong>,
                  bringing together 400–500 students, researchers, technology enthusiasts, and industry professionals.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-prose">
                Organized by the School of Advanced Sciences (SAS) and The QuantumPlators Club at VIT Chennai, the event takes students beyond
                the classroom through 8 technical sessions, IBM Quantum speaker keynotes, hands-on programming labs,
                and a 4-track quantum hackathon spanning biomedical research, machine learning, cryptography, and error correction.
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
                      <div className="text-sm font-medium text-slate-800">School of Advanced Sciences & The QuantumPlators Club, VIT Chennai</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <Award size={18} className="text-quantum-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase">Theme</div>
                      <div className="text-sm font-medium text-slate-800">Quantum Computing for Biomedical Applications</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <MapPin size={18} className="text-quantum-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase">Venue & Mode</div>
                      <div className="text-sm font-medium text-slate-800">MG Auditorium, VIT Chennai · OFFLINE</div>
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
      </div>
    </section>
  );
}
