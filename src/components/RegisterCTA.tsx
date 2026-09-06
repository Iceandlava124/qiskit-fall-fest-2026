import AnimatedSection from './AnimatedSection';

export default function RegisterCTA() {
  return (
    <section id="register" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-quantum-purple/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="rounded-3xl bg-quantum-surface/70 border border-quantum-border p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-black/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading, Context & Attendee Benefits */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <p className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold mb-3">
                  VIT Chennai × The QuantumPlators Club
                </p>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1] mb-6">
                  Join the Quantum Frontier at <br className="hidden sm:inline" />
                  <span className="text-quantum-purple">VIT Chennai</span>
                </h2>

                <p className="text-base sm:text-lg text-quantum-text-secondary mb-8 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                  Five days of quantum computing workshops, circuit design, hackathon challenges, and
                  inter-college networking. Secure your spot today.
                </p>

                {/* Attendee Perks Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left pt-6 border-t border-quantum-border/60">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-quantum-text">
                    <span className="text-quantum-purple font-bold">✓</span>
                    <span>Free participation for students</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-quantum-text">
                    <span className="text-quantum-purple font-bold">✓</span>
                    <span>Official On-Duty (OD) letters</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-quantum-text">
                    <span className="text-quantum-purple font-bold">✓</span>
                    <span>Verified participation certificate</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-quantum-text">
                    <span className="text-quantum-purple font-bold">✓</span>
                    <span>Open to 50+ regional colleges</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact Registration Card */}
              <div className="lg:col-span-5">
                <div className="p-7 sm:p-8 rounded-2xl bg-[#080811] border border-quantum-border/80 flex flex-col items-stretch text-center">
                  <span className="text-xs font-mono text-quantum-text-secondary uppercase tracking-wider mb-2">
                    Official Registration Portal
                  </span>
                  <div className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                    Reserve Your Seat
                  </div>
                  <p className="text-xs text-quantum-text-secondary mb-6">
                    Registration handled via the official TechnoVIT portal. Open to both VIT and external college students.
                  </p>

                  <div className="space-y-3 mb-6">
                    <a
                      href="https://chennaievents.vit.ac.in/technovit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-quantum-purple hover:bg-quantum-purple-light text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple shadow-lg shadow-quantum-purple/20"
                    >
                      Register via VIT Portal ↗
                    </a>

                    <a
                      href="#faq"
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl border border-quantum-border bg-quantum-surface/70 hover:bg-quantum-surface text-quantum-text hover:text-white transition-colors"
                    >
                      Read FAQs & OD Guidelines
                    </a>
                  </div>

                  <div className="pt-4 border-t border-quantum-border/40 text-[11px] font-mono text-quantum-text-secondary/70">
                    October 2026 · MG Auditorium, VIT Chennai
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
