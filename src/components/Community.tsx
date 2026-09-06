import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

export default function Community() {
  return (
    <section id="community" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#0b0b12] relative overflow-hidden border-y border-quantum-border/60 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Host Chapter & Global Network"
            subtitle="Student innovation at VIT Chennai aligned with the worldwide quantum education series"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: The QuantumPlators Club */}
          <AnimatedSection delay={0.1}>
            <div className="p-8 sm:p-10 rounded-2xl bg-[#050505] border border-quantum-border flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                  Student Chapter
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1 mb-3">
                  The QuantumPlators Club
                </h3>
                <p className="text-sm font-medium text-quantum-purple mb-4">
                  Official Student Quantum Computing Club — VIT Chennai
                </p>

                <p className="text-sm sm:text-base text-quantum-text-secondary leading-relaxed font-normal max-w-prose">
                  Operating under the academic mentorship of VIT Chennai faculty, The QuantumPlators is
                  a student-led innovation community dedicated to demystifying quantum science. Through
                  weekly peer circles, coding bootcamps, and research explorations, the club bridges
                  classroom theory with industry-standard quantum software development.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-quantum-border/40 text-xs font-mono text-quantum-text-secondary/80 flex items-center justify-between">
                <span>Vellore Institute of Technology</span>
                <span className="text-quantum-purple font-medium">Chennai Campus</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2: IBM Quantum & Qiskit Fall Fest */}
          <AnimatedSection delay={0.18}>
            <div className="p-8 sm:p-10 rounded-2xl bg-[#050505] border border-quantum-border flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                  Global Initiative
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1 mb-3">
                  IBM Quantum Fall Fest
                </h3>
                <p className="text-sm font-medium text-quantum-purple mb-4">
                  Worldwide University Event Series
                </p>

                <p className="text-sm sm:text-base text-quantum-text-secondary leading-relaxed font-normal max-w-prose">
                  Qiskit Fall Fest is IBM Quantum's premier global series empowering university groups
                  to lead quantum computing education on their own campuses. Utilizing the open-source
                  IBM Qiskit SDK, participants gain access to industry-grade quantum circuit simulation,
                  pulse-level controls, and quantum algorithm libraries.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-quantum-border/40 text-xs font-mono text-quantum-text-secondary/80 flex items-center justify-between">
                <span>Global University Program</span>
                <span className="text-quantum-purple font-medium">Qiskit SDK</span>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
