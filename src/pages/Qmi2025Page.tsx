import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import {
  ExternalLink,
  X,
  Layers,
  Trophy,
  ArrowLeft,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { pastEvents, EventPhoto } from '../data/pastEvents';

export default function Qmi2025Page() {
  const event = pastEvents.find((e) => e.id === 'qmi-2025') || pastEvents[0];
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<EventPhoto | null>(null);
  const [photoFilter, setPhotoFilter] = useState<'all' | 'sessions' | 'awards'>('all');

  const filteredPhotos = event.photos.filter((photo) => {
    if (photoFilter === 'awards') return photo.tag.includes('Award');
    if (photoFilter === 'sessions') return !photo.tag.includes('Award');
    return true;
  });

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
                to="/qff-2025"
                className="text-xs font-mono font-medium text-slate-500 hover:text-quantum-purple transition-colors"
              >
                Qiskit Fall Fest 2025 →
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Hero Banner Card for QMI 2025 */}
        <AnimatedSection delay={0.05}>
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-quantum-purple/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/20 text-quantum-purple text-xs font-mono font-semibold mb-4">
                  <Sparkles size={13} />
                  <span>SAS Colloquium & Workshop</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                  QMI 2025
                </h1>
                <p className="text-lg sm:text-xl font-heading font-semibold text-quantum-purple mb-4">
                  International Workshop on Quantum Mathematics and Imaging for Smart Manufacturing and Industry 4.0
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  Organized by the Department of Mathematics, School of Advanced Sciences (SAS), VIT Chennai. 
                  This landmark 5-day international workshop brought together distinguished researchers, academicians, 
                  and student scholars to explore the intersections of quantum computing algorithms, mathematical imaging, 
                  smart manufacturing, and healthcare analytics.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm">
                  {event.websiteUrl && (
                    <a
                      href={event.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-quantum-purple hover:bg-quantum-purple-light text-white font-semibold inline-flex items-center gap-2 shadow-sm transition-colors"
                    >
                      <span>Visit Official QMI 2025 Site</span>
                      <ExternalLink size={15} />
                    </a>
                  )}

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <MapPin size={13} className="text-quantum-purple" />
                    <span>MG Auditorium & SAS, VIT Chennai</span>
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

        {/* Awards Highlight Section */}
        <AnimatedSection delay={0.1}>
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-bold text-2xl text-slate-900 flex items-center gap-2.5">
                <Trophy size={22} className="text-amber-500" />
                <span>QMI 2025 Excellence & Merit Awards</span>
              </h2>
              <span className="text-xs font-mono text-slate-500">
                Recognized at Valedictory Session
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1st Place */}
              <div
                onClick={() =>
                  setActiveLightboxPhoto(
                    event.photos.find((p) => p.tag.includes('1st Place')) || null
                  )
                }
                className="p-6 rounded-2xl bg-white border-2 border-amber-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src="/gallery/qmi_excellence_award_1st_place.jpg"
                      alt="QMI Excellence Award 1st Place"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-amber-500 text-white shadow-xs">
                      1st Place · Excellence
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg mb-1 group-hover:text-quantum-purple transition-colors">
                    Dr. Canavoy Narahari Sujatha
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mb-2">
                    Sreenidhi Institute of Science and Technology, Telangana
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Honoured with the QMI Excellence Award for exceptional research contribution and analytical excellence.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-quantum-purple font-medium">
                  <span>Click to view certificate photo</span>
                  <span>↗</span>
                </div>
              </div>

              {/* 2nd Place */}
              <div
                onClick={() =>
                  setActiveLightboxPhoto(
                    event.photos.find((p) => p.tag.includes('2nd Place')) || null
                  )
                }
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-quantum-purple/40 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src="/gallery/qmi_distinction_award_2nd_place.jpg"
                      alt="QMI Distinction Award 2nd Place"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-slate-800 text-white shadow-xs">
                      2nd Place · Distinction
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg mb-1 group-hover:text-quantum-purple transition-colors">
                    Dr. Sujatha E
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mb-2">
                    SRM Institute of Science and Technology, Chennai
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Awarded the QMI Distinction Award for outstanding performance and paper presentation during colloquia.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-quantum-purple font-medium">
                  <span>Click to view certificate photo</span>
                  <span>↗</span>
                </div>
              </div>

              {/* 3rd Place */}
              <div
                onClick={() =>
                  setActiveLightboxPhoto(
                    event.photos.find((p) => p.tag.includes('3rd Place')) || null
                  )
                }
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-quantum-purple/40 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src="/gallery/qmi_merit_award_3rd_place.jpg"
                      alt="QMI Merit Award 3rd Place"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-slate-700 text-white shadow-xs">
                      3rd Place · Merit
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg mb-1 group-hover:text-quantum-purple transition-colors">
                    Mr. Sobhin Thomas
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mb-2">
                    Vellore Institute of Technology, Chennai
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Honoured with the QMI Merit Award recognizing exemplary engagement and research problem-solving.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-quantum-purple font-medium">
                  <span>Click to view certificate photo</span>
                  <span>↗</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Gallery Section */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 flex items-center gap-2">
                <Layers size={22} className="text-quantum-purple" />
                <span>QMI 2025 Workshop Photo Gallery</span>
              </h2>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Full chronological workshop moments · Click any image to view in high resolution
              </p>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 text-xs font-medium">
              <button
                onClick={() => setPhotoFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  photoFilter === 'all'
                    ? 'bg-quantum-purple text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Photos ({event.photos.length})
              </button>
              <button
                onClick={() => setPhotoFilter('sessions')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  photoFilter === 'sessions'
                    ? 'bg-quantum-purple text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Workshop & Sessions
              </button>
              <button
                onClick={() => setPhotoFilter('awards')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  photoFilter === 'awards'
                    ? 'bg-quantum-purple text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Awards & Valedictory
              </button>
            </div>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, i) => (
              <AnimatedSection key={photo.title} delay={0.03 + (i % 3) * 0.04}>
                <div
                  onClick={() => setActiveLightboxPhoto(photo)}
                  className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden flex flex-col h-full hover:shadow-md transition-all cursor-pointer group hover:border-quantum-purple/40"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-slate-950/80 text-white backdrop-blur-xs flex items-center gap-1">
                      {photo.tag.includes('Award') && <Trophy size={10} className="text-amber-300" />}
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
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-quantum-purple/10 text-quantum-purple font-semibold flex items-center gap-1">
                    {activeLightboxPhoto.tag.includes('Award') && <Trophy size={11} />}
                    {activeLightboxPhoto.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    QMI 2025 · VIT Chennai
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
