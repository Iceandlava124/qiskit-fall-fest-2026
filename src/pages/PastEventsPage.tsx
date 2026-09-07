import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import {
  ExternalLink,
  X,
  Calendar,
  Layers,
  Trophy,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { pastEvents, EventPhoto } from '../data/pastEvents';

export default function PastEventsPage() {
  const [searchParams] = useSearchParams();
  const initialEvent = searchParams.get('event') || 'all';

  const [selectedEventId, setSelectedEventId] = useState<string>(initialEvent);
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<{
    photo: EventPhoto;
    eventName: string;
  } | null>(null);

  const displayedEvents =
    selectedEventId === 'all'
      ? pastEvents
      : pastEvents.filter((e) => e.id === selectedEventId);

  return (
    <div className="min-h-screen bg-slate-50/50 text-quantum-text pt-24 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-quantum-purple transition-colors bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-xs"
            >
              <ArrowLeft size={16} />
              <span>Back to Qiskit Fall Fest 2026</span>
            </Link>

            <div className="flex items-center gap-3 text-xs font-mono">
              <Link to="/qmi-2025" className="text-slate-600 hover:text-quantum-purple">
                Dedicated QMI 2025 Page →
              </Link>
              <span className="text-slate-300">·</span>
              <Link to="/qff-2025" className="text-slate-600 hover:text-quantum-purple">
                Dedicated QFF 2025 Page →
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <SectionHeading
            title="Past Events & Photo Archive"
            subtitle="Explore memories, keynote sessions, and awards from previous quantum events at VIT Chennai"
          />
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 p-1.5 rounded-xl bg-white border border-slate-200 shadow-xs max-w-xl mx-auto">
            <button
              onClick={() => setSelectedEventId('all')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                selectedEventId === 'all'
                  ? 'bg-quantum-purple text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Events ({pastEvents.length})
            </button>
            {pastEvents.map((evt) => (
              <button
                key={evt.id}
                onClick={() => setSelectedEventId(evt.id)}
                className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                  selectedEventId === evt.id
                    ? 'bg-quantum-purple text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {evt.shortTitle}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Events Display */}
        <div className="space-y-16">
          {displayedEvents.map((event, eventIdx) => (
            <div key={event.id} className="space-y-8">
              {/* Event Card */}
              <AnimatedSection delay={0.08 + eventIdx * 0.05}>
                <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={14} className="text-quantum-purple" />
                        <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                          {event.edition} · {event.date}
                        </span>
                      </div>

                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
                        {event.title}
                      </h2>

                      <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <Link
                          to={event.id === 'qmi-2025' ? '/qmi-2025' : '/qff-2025'}
                          className="px-4 py-2 rounded-lg bg-quantum-purple hover:bg-quantum-purple-light text-white font-semibold inline-flex items-center gap-1.5 transition-colors text-xs"
                        >
                          <span>Open Dedicated {event.shortTitle} Page</span>
                          <ArrowRight size={14} />
                        </Link>

                        {event.websiteUrl && (
                          <a
                            href={event.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-700 hover:text-quantum-purple font-semibold inline-flex items-center gap-1.5 transition-colors text-xs"
                          >
                            <span>Archive Site</span>
                            <ExternalLink size={13} className="text-quantum-purple" />
                          </a>
                        )}

                        <span className="text-xs font-mono text-slate-400">
                          {event.photos.length} Photos
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-4 grid grid-cols-2 gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      {event.stats.map((s) => (
                        <div key={s.label} className="p-2">
                          <div className="text-2xl font-heading font-extrabold text-slate-900">
                            {s.value}
                          </div>
                          <div className="text-xs text-slate-500 font-mono mt-0.5">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Photos Grid */}
              <div>
                <div className="flex items-center justify-between mb-6 px-1">
                  <h3 className="font-heading font-bold text-slate-900 text-lg flex items-center gap-2">
                    <Layers size={18} className="text-quantum-purple" />
                    <span>{event.shortTitle} Gallery</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    Click any photo to view full size
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {event.photos.map((photo, i) => (
                    <AnimatedSection key={photo.title} delay={0.03 + (i % 4) * 0.03}>
                      <div
                        onClick={() =>
                          setActiveLightboxPhoto({ photo, eventName: event.shortTitle })
                        }
                        className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden flex flex-col h-full hover:shadow-md transition-all cursor-pointer group hover:border-quantum-purple/40"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                          <img
                            src={photo.image}
                            alt={photo.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-slate-950/80 text-white backdrop-blur-xs flex items-center gap-1">
                            {photo.tag.includes('Award') && <Trophy size={10} className="text-amber-300" />}
                            {photo.tag}
                          </span>
                        </div>

                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-heading font-bold text-slate-900 text-sm mb-1 leading-snug group-hover:text-quantum-purple transition-colors">
                              {photo.title}
                            </h4>
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
            </div>
          ))}
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
                  src={activeLightboxPhoto.photo.image}
                  alt={activeLightboxPhoto.photo.title}
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
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-quantum-purple/10 text-quantum-purple font-semibold flex items-center gap-1">
                    {activeLightboxPhoto.photo.tag.includes('Award') && <Trophy size={11} />}
                    {activeLightboxPhoto.photo.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeLightboxPhoto.eventName}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-2">
                  {activeLightboxPhoto.photo.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {activeLightboxPhoto.photo.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
