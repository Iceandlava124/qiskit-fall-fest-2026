import { lazy, Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const BlochSphere = lazy(() => import('./BlochSphere'));

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 md:py-36 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white quantum-grid-bg">
      {/* Subtle single purple ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-quantum-purple/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean, Spacious Headline & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Main Event Title - Pure typography */}
            <AnimatedSection>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-heading tracking-tight leading-[1.08] mb-4 text-slate-900">
                Qiskit Fall Fest <span className="text-quantum-purple">2026</span>
              </h1>
            </AnimatedSection>

            {/* Theme & Tagline */}
            <AnimatedSection delay={0.08}>
              <div className="mb-6">
                <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-quantum-purple mb-2">
                  Quantum Computing for Biomedical Applications
                </p>
                <p className="text-base sm:text-lg font-mono text-slate-600 font-medium tracking-wide">
                  Learn <span className="text-quantum-purple font-bold">|</span> Explore <span className="text-quantum-purple font-bold">|</span> Build <span className="text-quantum-purple font-bold">|</span> Innovate
                </p>
              </div>
            </AnimatedSection>

            {/* Date, Mode & Venue */}
            <AnimatedSection delay={0.12}>
              <p className="text-sm font-mono text-slate-700 mb-6 bg-slate-100/80 px-4 py-2 rounded-lg border border-slate-200 inline-block">
                OFFLINE <span className="mx-2 text-quantum-purple">·</span> VIT CHENNAI <span className="mx-2 text-quantum-purple">·</span> 5–7 OCTOBER 2026
              </p>
            </AnimatedSection>

            {/* Quiet Stat Line */}
            <AnimatedSection delay={0.16}>
              <p className="text-xs sm:text-sm font-mono text-slate-500 mb-8">
                400–500 Expected Delegates <span className="mx-1.5 text-slate-300">·</span> 3 Days <span className="mx-1.5 text-slate-300">·</span> 8 Technical Sessions <span className="mx-1.5 text-slate-300">·</span> 4 Hackathon Tracks
              </p>
            </AnimatedSection>

            {/* Action Buttons - Solid #6929C4 */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#register"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold rounded-lg bg-quantum-purple hover:bg-quantum-purple-light text-white shadow-lg hover:shadow-quantum-purple/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple"
                >
                  <span>Register for Fest</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#schedule"
                  className="px-7 py-3.5 text-base font-semibold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors shadow-sm"
                >
                  View Schedule
                </a>
              </div>
            </AnimatedSection>

          </div>

          {/* Right Column: 3D Rotating Bloch Sphere - The ONE signature quantum visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <AnimatedSection delay={0.16}>
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm relative w-full flex flex-col items-center">
                <div className="w-full flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-3 mb-4 px-1">
                  <span>Bloch Sphere Simulator</span>
                  <span className="text-quantum-purple font-semibold">Interactive 3D</span>
                </div>
                
                <Suspense
                  fallback={
                    <div className="w-full aspect-square max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto flex flex-col items-center justify-center rounded-xl bg-slate-100/60 border border-slate-200 p-8">
                      <div className="w-10 h-10 rounded-full border-2 border-quantum-purple border-t-transparent animate-spin mb-3" />
                      <span className="text-xs font-mono text-slate-500">
                        Loading Bloch Simulator...
                      </span>
                    </div>
                  }
                >
                  <BlochSphere />
                </Suspense>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
