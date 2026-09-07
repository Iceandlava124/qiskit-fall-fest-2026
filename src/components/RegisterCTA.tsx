import AnimatedSection from './AnimatedSection';

export default function RegisterCTA() {
  return (
    <section id="register" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-quantum-purple/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading, Context & Attendee Benefits */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <p className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold mb-3">
                  School of Advanced Sciences & The QuantumPlators Club, VIT Chennai
                </p>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Join the Quantum Frontier at <br className="hidden sm:inline" />
                  <span className="text-quantum-purple">VIT Chennai</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                  Three days of quantum computing workshops, IBM Quantum keynotes, circuit design labs,
                  hackathon challenges, and hands-on quantum innovation. Secure your spot today.
                </p>

                {/* Attendee Perks Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
                    <span className="text-quantum-purple font-bold">✓</span>
                    <span>Free participation for students</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
                    <span className="text-quantum-purple font-bold">✓</span>
                    <span>Official On-Duty (OD) letters</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
                    <span className="text-quantum-purple font-bold">✓</span>
                    <span>Verified participation certificate</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
                    <span className="text-quantum-purple font-bold">✓</span>
                    <span>Open to 50+ regional colleges</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Registration Card */}
              <div className="lg:col-span-5">
                <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-stretch text-center">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Official Registration Portal
                  </span>
                  <div className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-2">
                    Reserve Your Seat
                  </div>
                  <p className="text-xs text-slate-500 mb-6">
                    Registration handled via the official TechnoVIT portal. Open to both VIT and external college students.
                  </p>

                  <div className="space-y-3 mb-6">
                    <a
                      href="https://chennaievents.vit.ac.in/technovit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-quantum-purple hover:bg-quantum-purple-light text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple shadow-md"
                    >
                      Register via VIT Portal ↗
                    </a>

                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                    >
                      Contact Organizing Team
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                    5–7 October 2026 · MG Auditorium, VIT Chennai · OFFLINE
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
