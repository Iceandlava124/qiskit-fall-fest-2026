import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { ExternalLink, X, Calendar, Layers } from 'lucide-react';

interface EventPhoto {
  title: string;
  caption: string;
  image: string;
  tag: string;
}

interface PastEventData {
  id: string;
  title: string;
  edition: string;
  description: string;
  websiteUrl?: string;
  stats: { label: string; value: string }[];
  photos: EventPhoto[];
}

const pastEvents: PastEventData[] = [
  {
    id: 'qff-2025',
    title: 'IBM Qiskit Fall Fest 2025 (Inaugural Edition)',
    edition: 'October 2025 · Inaugural Edition',
    description:
      'The landmark inaugural edition of Qiskit Fall Fest at VIT Chennai brought together 600+ passionate student developers, faculty mentors, and IBM Quantum researchers. Over 5 intensive days, delegates participated in guided quantum circuit design labs, interactive quizzes, keynote lectures, and a 24-hour overnight hackathon sprint.',
    websiteUrl: 'https://ibm-qff-25.netlify.app/',
    stats: [
      { label: 'Total Attendees', value: '600+' },
      { label: 'Sprint Duration', value: '24-Hr' },
      { label: 'Regional Colleges', value: '50+' },
      { label: 'Hands-on Labs', value: '100%' },
    ],
    photos: [
      {
        title: 'Inauguration Ceremony & Keynote',
        caption: 'Faculty leadership and distinguished guests inaugurating the quantum sessions at MG Auditorium.',
        image: '/gallery/day1_1.webp',
        tag: 'Day 1 · Keynote',
      },
      {
        title: 'Dignitary Felicitation & Welcome',
        caption: 'Honoring visiting dignitaries and academic speakers at the festival opening.',
        image: '/gallery/day1_2.webp',
        tag: 'Day 1 · Opening',
      },
      {
        title: 'Quantum Computing Frontiers',
        caption: 'Keynote lecture introducing quantum circuit architectures and quantum supremacy milestones.',
        image: '/gallery/day1_3.webp',
        tag: 'Day 1 · Keynote',
      },
      {
        title: 'Guided Circuit Labs & Coding',
        caption: 'Student delegates actively building and simulating circuits in guided programming labs.',
        image: '/gallery/day2_1.webp',
        tag: 'Day 2 · Workshop',
      },
      {
        title: 'Interactive Python Programming',
        caption: 'Hands-on coding exercises writing quantum statevectors and gate compositions.',
        image: '/gallery/day2_2.webp',
        tag: 'Day 2 · Lab',
      },
      {
        title: 'Hackathon Sprint Kickoff',
        caption: 'Teams collaborating on real-world quantum challenge problem statements.',
        image: '/gallery/day3_1.webp',
        tag: 'Day 3 · Hackathon',
      },
      {
        title: 'Technical Mentor Troubleshooting',
        caption: 'One-on-one debugging clinics with technical mentors to optimize circuit execution.',
        image: '/gallery/day3_2.webp',
        tag: 'Day 3 · Mentorship',
      },
      {
        title: 'Late Night Prototyping',
        caption: 'Delegates working into the night to build working algorithms and front-end demos.',
        image: '/gallery/day3_3.webp',
        tag: 'Day 3 · Sprint',
      },
      {
        title: 'Mid-Sprint Review Checkpoint',
        caption: 'Technical review panel validating algorithmic depth and circuit simulation validity.',
        image: '/gallery/day4_1.webp',
        tag: 'Day 4 · Checkpoint',
      },
      {
        title: 'Grand Valedictory & Awards',
        caption: 'Honoring top project demonstrations, cash prize distribution, and certificates.',
        image: '/gallery/day5_1.webp',
        tag: 'Day 5 · Finale',
      },
      {
        title: 'Project Demonstrations & Defense',
        caption: 'Finalist teams presenting their quantum prototypes before the distinguished jury.',
        image: '/gallery/day5_2.webp',
        tag: 'Day 5 · Defense',
      },
      {
        title: 'Winners Trophy Felicitation',
        caption: 'Awarding cash prizes and certificates of excellence to champion hackathon teams.',
        image: '/gallery/day5_3.webp',
        tag: 'Day 5 · Awards',
      },
    ],
  },
  {
    id: 'quantum-workshop',
    title: 'Quantum Computing Hands-on Workshop & Research Colloquium',
    edition: 'Research Colloquium Series · VIT Chennai',
    description:
      'An intensive quantum colloquium engaging undergraduate researchers, faculty scholars, and delegates in quantum algorithm implementation, statevector simulations, and research paper discussions.',
    stats: [
      { label: 'Participants', value: '250+' },
      { label: 'Simulation Labs', value: 'Hands-on' },
      { label: 'Faculty Panel', value: 'Expert' },
      { label: 'Campus Exchange', value: 'Active' },
    ],
    photos: [
      {
        title: 'Quantum Simulation Lab & Hardware Execution',
        caption: 'Hands-on execution of quantum circuits on simulator backends with state analysis.',
        image: '/gallery/1.jpg',
        tag: 'Hands-on Lab',
      },
      {
        title: 'Faculty Research Colloquium & Panel',
        caption: 'Academic panel discussing emerging quantum computing algorithms and scalable qubits.',
        image: '/gallery/2.jpg',
        tag: 'Research Panel',
      },
      {
        title: 'Collaborative Problem Solving & Demos',
        caption: 'Student groups analyzing circuit results and discussing algorithmic optimizations.',
        image: '/gallery/3.jpg',
        tag: 'Group Activity',
      },
      {
        title: 'Networking Tea & Inter-College Exchange',
        caption: 'Delegates and faculty networking over refreshments during the workshop breaks.',
        image: '/gallery/refreshments_1.webp',
        tag: 'Networking',
      },
    ],
  },
];

export default function PastEvent() {
  const [selectedEventId, setSelectedEventId] = useState<string>('all');
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<{
    photo: EventPhoto;
    eventName: string;
  } | null>(null);

  const displayedEvents =
    selectedEventId === 'all'
      ? pastEvents
      : pastEvents.filter((e) => e.id === selectedEventId);

  return (
    <section
      id="past-event"
      className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-slate-50/60 relative overflow-hidden border-y border-slate-200 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Past Events & Photo Gallery"
            subtitle="Explore memories, galleries, and achievements from previous quantum events hosted at VIT Chennai"
          />
        </AnimatedSection>

        {/* Event Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14 p-1.5 rounded-xl bg-white border border-slate-200 shadow-xs max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedEventId('all')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                selectedEventId === 'all'
                  ? 'bg-quantum-purple text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Past Events (2)
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
                {evt.id === 'qff-2025' ? 'Qiskit Fall Fest 2025' : 'Quantum Workshop'}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Event Sections Loop */}
        <div className="space-y-20">
          {displayedEvents.map((event, eventIdx) => (
            <div key={event.id} className="space-y-8">
              {/* Event Header & Overview Box */}
              <AnimatedSection delay={0.1 + eventIdx * 0.05}>
                <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left: Event Story */}
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={14} className="text-quantum-purple" />
                        <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                          {event.edition}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                        {event.title}
                      </h3>

                      <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                        {event.description}
                      </p>

                      {/* Links */}
                      <div className="flex flex-wrap items-center gap-6 text-sm">
                        {event.websiteUrl && (
                          <a
                            href={event.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-900 hover:text-quantum-purple font-semibold inline-flex items-center gap-1.5 transition-colors"
                          >
                            <span>Visit 2025 Edition Website</span>
                            <ExternalLink size={14} className="text-quantum-purple" />
                          </a>
                        )}

                        <span className="text-xs font-mono text-slate-400">
                          Gallery: {event.photos.length} Verified Event Photos
                        </span>
                      </div>
                    </div>

                    {/* Right: Key Stats */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-3.5 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
                      {event.stats.map((s) => (
                        <div key={s.label} className="p-2">
                          <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                            {s.value}
                          </div>
                          <div className="text-xs text-slate-500 font-mono mt-1">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </AnimatedSection>

              {/* Event Photo Gallery Grid */}
              <div>
                <div className="flex items-center justify-between mb-6 px-1">
                  <h4 className="font-heading font-bold text-slate-900 text-lg sm:text-xl flex items-center gap-2">
                    <Layers size={18} className="text-quantum-purple" />
                    <span>{event.title} Photo Gallery</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-500">
                    Click any photo to zoom
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                  {event.photos.map((photo, i) => (
                    <AnimatedSection key={photo.title} delay={0.05 + (i % 4) * 0.04}>
                      <div
                        onClick={() =>
                          setActiveLightboxPhoto({ photo, eventName: event.title })
                        }
                        className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden flex flex-col h-full hover:shadow-md transition-all cursor-pointer group hover:border-quantum-purple/40"
                      >
                        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                          <img
                            src={photo.image}
                            alt={photo.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-950/75 text-white backdrop-blur-xs">
                            {photo.tag}
                          </span>
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h5 className="font-heading font-bold text-slate-900 text-sm mb-1 leading-snug group-hover:text-quantum-purple transition-colors">
                              {photo.title}
                            </h5>
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
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveLightboxPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                <img
                  src={activeLightboxPhoto.photo.image}
                  alt={activeLightboxPhoto.photo.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setActiveLightboxPhoto(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
                  aria-label="Close photo preview"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-quantum-purple/10 text-quantum-purple font-semibold">
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
    </section>
  );
}
