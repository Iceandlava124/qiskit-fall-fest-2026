import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import {
  ExternalLink,
  X,
  Layers,
  ArrowLeft,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { pastEvents, EventPhoto } from '../data/pastEvents';

export default function Qff2025Page() {
  const event = pastEvents.find((e) => e.id === 'qff-2025') || pastEvents[1];
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<EventPhoto | null>(null);

  return (
    <div className="min-h-screen bg-slate-50/50 text-quantum-text pt-24 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs */}
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-quantum-purple transition-colors bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-xs"
            >
              <ArrowLeft size={16} />
              <span>Back to Qiskit Fall Fest 2026</span>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                to="/past-events"
                className="text-xs font-mono font-medium text-slate-500 hover:text-quantum-purple transition-colors"
              >
                All Past Events Archive
              </Link>
              <span className="text-slate-300">·</span>
              <Link
                to="/qmi-2025"
                className="text-xs font-mono font-medium text-slate-500 hover:text-quantum-purple transition-colors"
              >
                QMI 2025 Workshop →
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Hero Banner Card for QFF 2025 */}
        <AnimatedSection delay={0.05}>
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-quantum-purple/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/20 text-quantum-purple text-xs font-mono font-semibold mb-4">
                  <Sparkles size={13} />
                  <span>Inaugural Festival Edition</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                  IBM Qiskit Fall Fest 2025
                </h1>
                <p className="text-lg sm:text-xl font-heading font-semibold text-quantum-purple mb-4">
                  The Inaugural Quantum Computing Festival at VIT Chennai
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  The landmark inaugural edition of Qiskit Fall Fest at VIT Chennai brought together 600+ passionate 
                  student developers, faculty mentors, and IBM Quantum researchers. Over three intensive days, delegates 
                  participated in guided quantum circuit design labs, interactive quizzes, keynote lectures, and an overnight 
                  24-hour hackathon sprint.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm">
                  {event.websiteUrl && (
                    <a
                      href={event.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-quantum-purple hover:bg-quantum-purple-light text-white font-semibold inline-flex items-center gap-2 shadow-sm transition-colors"
                    >
                      <span>Visit Official 2025 Site</span>
                      <ExternalLink size={15} />
                    </a>
                  )}

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <MapPin size={13} className="text-quantum-purple" />
                    <span>MG Auditorium, VIT Chennai</span>
                  </div>
                </div>
              </div>

              {/* Stats Box */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3 sm:gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                {event.stats.map((stat) => (
                  <div key={stat.label} className="p-2">
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-mono mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 flex items-center gap-2">
                <Layers size={22} className="text-quantum-purple" />
                <span>Qiskit Fall Fest 2025 Photo Archive</span>
              </h2>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Authentic moments from the 2025 inaugural cohort · Click to zoom
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.photos.map((photo, i) => (
              <AnimatedSection key={photo.title} delay={0.03 + (i % 3) * 0.04}>
                <div
                  onClick={() => setActiveLightboxPhoto(photo)}
                  className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden flex flex-col h-full hover:shadow-md transition-all cursor-pointer group hover:border-quantum-purple/40"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-slate-950/80 text-white backdrop-blur-xs">
                      {photo.tag}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-sm mb-1 leading-snug group-hover:text-quantum-purple transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeLightboxPhoto && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveLightboxPhoto(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[72vh] w-full bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                <img
                  src={activeLightboxPhoto.image}
                  alt={activeLightboxPhoto.title}
                  className="max-h-[68vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-lg"
                />
                <button
                  onClick={() => setActiveLightboxPhoto(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors shadow-md"
                  aria-label="Close photo preview"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8 bg-white border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-quantum-purple/10 text-quantum-purple font-semibold">
                    {activeLightboxPhoto.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Qiskit Fall Fest 2025 · VIT Chennai
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-2">
                  {activeLightboxPhoto.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {activeLightboxPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
