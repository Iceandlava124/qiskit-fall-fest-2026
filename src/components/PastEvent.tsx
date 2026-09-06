import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { Camera } from 'lucide-react';

export default function PastEvent() {
  const photoPlaceholders = [
    { label: 'Qiskit Circuit Workshop', caption: 'Hands-on lab session with student developers' },
    { label: 'Hackathon Sprint', caption: 'Overnight project build in progress' },
    { label: 'Valedictory & Awards', caption: 'Closing ceremony and finalist presentations' },
  ];

  return (
    <section id="past-event" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#0b0b12] relative overflow-hidden border-y border-quantum-border/60 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Past Event"
            subtitle="Explore the inaugural edition of Qiskit Fall Fest at VIT Chennai"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-quantum-surface/60 border border-quantum-border relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Retrospective Story & Links */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                    Inaugural Edition Recap
                  </span>
                  <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mt-1 mb-4 leading-tight">
                    Qiskit Fall Fest 2025 at VIT Chennai
                  </h3>

                  <p className="text-base sm:text-lg text-quantum-text-secondary leading-relaxed mb-6 font-normal">
                    The inaugural edition of Qiskit Fall Fest at VIT Chennai brought together passionate student developers,
                    faculty mentors, and quantum computing enthusiasts. Through interactive circuit design workshops, live challenge
                    sessions, and an overnight hackathon, participants built foundational skills on IBM Qiskit.
                  </p>

                  {/* Highlights row */}
                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-quantum-border/60 mb-8">
                    <div>
                      <div className="text-xl sm:text-2xl font-heading font-extrabold text-white">600+</div>
                      <div className="text-xs text-quantum-text-secondary font-mono mt-0.5">2025 Attendees</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-heading font-extrabold text-white">24-Hr</div>
                      <div className="text-xs text-quantum-text-secondary font-mono mt-0.5">Overnight Sprint</div>
                    </div>
                  </div>
                </div>

                {/* Links to Previous Edition */}
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <a
                    href="https://ibm-qff-25.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-quantum-purple hover:underline transition-colors font-medium inline-flex items-center gap-1.5"
                  >
                    <span>Visit 2025 Event Website</span>
                    <span className="text-quantum-purple">↗</span>
                  </a>

                  <a
                    href="https://qiskit.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-quantum-text-secondary hover:text-white hover:underline transition-colors font-medium inline-flex items-center gap-1.5"
                  >
                    <span>Explore Qiskit SDK</span>
                    <span className="text-quantum-purple">↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Event Photography Archive Cards */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="text-xs font-mono text-quantum-text-secondary uppercase tracking-wider px-1">
                  2025 Event Photography Archive
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  {photoPlaceholders.map((photo) => (
                    <div
                      key={photo.label}
                      className="p-5 sm:p-6 rounded-2xl bg-quantum-surface/80 border border-quantum-border flex items-start gap-4"
                    >
                      <div className="p-3 rounded-xl bg-quantum-surface border border-quantum-border flex-shrink-0">
                        <Camera size={20} className="text-zinc-500" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm sm:text-base font-semibold text-white mb-0.5">
                          {photo.label}
                        </div>
                        <div className="text-xs text-quantum-text-secondary leading-relaxed mb-2">
                          {photo.caption}
                        </div>
                        <div className="text-[10px] font-mono text-quantum-purple">
                          Photo archive pending release
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
