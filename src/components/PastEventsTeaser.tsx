import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { ArrowRight, Trophy, Sparkles, Camera } from 'lucide-react';
import { pastEvents } from '../data/pastEvents';

export default function PastEventsTeaser() {
  const qmiEvent = pastEvents.find((e) => e.id === 'qmi-2025')!;
  const qffEvent = pastEvents.find((e) => e.id === 'qff-2025')!;

  return (
    <section
      id="past-events"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/70 relative overflow-hidden border-y border-slate-200"
    >
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Past Editions & Quantum Archives"
            subtitle="Explore dedicated photo archives and highlights from previous landmark quantum events hosted at VIT Chennai"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Card 1: QMI 2025 */}
          <AnimatedSection delay={0.1}>
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-quantum-purple/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-quantum-purple/10 text-quantum-purple border border-quantum-purple/20">
                    <Sparkles size={12} />
                    February 2025 · 5-Day Workshop
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {qmiEvent.photos.length} Verified Photos
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2.5 group-hover:text-quantum-purple transition-colors">
                  QMI 2025 Workshop & Colloquium
                </h3>

                <p className="text-sm font-semibold text-slate-700 mb-3">
                  International Workshop on Quantum Mathematics and Imaging for Smart Manufacturing and Industry 4.0
                </p>


                {/* Thumbnail Preview Row */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  {qmiEvent.photos.slice(0, 3).map((photo, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {photo.tag.includes('Award') && (
                        <span className="absolute bottom-1 right-1 p-1 rounded bg-amber-500 text-white">
                          <Trophy size={10} />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/qmi-2025"
                  className="px-5 py-2.5 rounded-xl bg-quantum-purple hover:bg-quantum-purple-light text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-colors"
                >
                  <span>Explore Dedicated QMI 2025 Page</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  to="/past-events?event=qmi-2025"
                  className="text-xs font-mono text-slate-600 hover:text-quantum-purple font-medium inline-flex items-center gap-1"
                >
                  <Camera size={13} />
                  <span>View All Gallery</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2: QFF 2025 */}
          <AnimatedSection delay={0.2}>
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-quantum-purple/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-quantum-purple/10 text-quantum-purple border border-quantum-purple/20">
                    <Sparkles size={12} />
                    October 2025 · Inaugural Edition
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {qffEvent.photos.length} Verified Photos
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2.5 group-hover:text-quantum-purple transition-colors">
                  IBM Qiskit Fall Fest 2025
                </h3>

                <p className="text-sm font-semibold text-slate-700 mb-3">
                  The Landmark Inaugural Quantum Festival at VIT Chennai
                </p>


                {/* Thumbnail Preview Row */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  {qffEvent.photos.slice(0, 3).map((photo, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/qff-2025"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-colors"
                >
                  <span>Explore QFF 2025 Archive</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  to="/past-events?event=qff-2025"
                  className="text-xs font-mono text-slate-600 hover:text-quantum-purple font-medium inline-flex items-center gap-1"
                >
                  <Camera size={13} />
                  <span>View All Gallery</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Global Archive Link */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              to="/past-events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-quantum-purple/40 text-slate-800 hover:text-quantum-purple font-semibold text-sm shadow-xs hover:shadow-sm transition-all"
            >
              <span>Browse All Historical Archives & High-Res Galleries</span>
              <ArrowRight size={16} className="text-quantum-purple" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
