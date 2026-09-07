import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { ExternalLink } from 'lucide-react';

const eventPhotos = [
  {
    title: 'Inauguration & Keynote Sessions',
    caption: 'Faculty leadership and distinguished guests inaugurating the quantum sessions at MG Auditorium.',
    image: '/gallery/day1_1.webp',
    tag: 'Day 1 · Keynote',
  },
  {
    title: 'Hands-on Circuit Labs & Coding',
    caption: 'Student delegates actively building and simulating circuits in guided programming labs.',
    image: '/gallery/day2_1.webp',
    tag: 'Day 2 · Workshop',
  },
  {
    title: 'Hardware Execution & Hackathon Sprint',
    caption: 'Teams collaborating on real-world quantum challenge problem statements.',
    image: '/gallery/day3_1.webp',
    tag: 'Day 3 · Hackathon',
  },
  {
    title: 'Grand Valedictory & Awards Ceremony',
    caption: 'Honoring top project demonstrations, cash prize distribution, and certificates.',
    image: '/gallery/day5_1.webp',
    tag: 'Day 5 · Finale',
  },
];

export default function PastEvent() {
  return (
    <section id="past-event" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-slate-50/60 relative overflow-hidden border-y border-slate-200 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Past Event Highlights"
            subtitle="Memories and achievements from previous quantum events at VIT Chennai"
          />
        </AnimatedSection>

        {/* Retrospective Story & Stats Card */}
        <AnimatedSection delay={0.1}>
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-8">
                <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                  Inaugural Edition Retrospective
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-4 leading-tight">
                  Qiskit Fall Fest & Quantum Workshops at VIT Chennai
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  The inaugural edition of Qiskit Fall Fest at VIT Chennai brought together passionate student developers,
                  faculty mentors, and quantum computing enthusiasts. Through interactive circuit design workshops, live challenge
                  sessions, and an overnight hackathon, participants built foundational skills on IBM Qiskit.
                </p>

                {/* Quick links to previous edition */}
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <a
                    href="https://ibm-qff-25.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-quantum-purple font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Visit 2025 Event Website</span>
                    <ExternalLink size={14} className="text-quantum-purple" />
                  </a>

                  <a
                    href="https://qiskit.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-quantum-purple font-medium inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore Qiskit SDK</span>
                    <ExternalLink size={14} className="text-quantum-purple" />
                  </a>
                </div>
              </div>

              {/* Stats Highlights */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="p-3">
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">600+</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">2025 Attendees</div>
                </div>
                <div className="p-3">
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">24-Hr</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">Overnight Sprint</div>
                </div>
                <div className="p-3">
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">50+</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">Colleges</div>
                </div>
                <div className="p-3">
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">Hands-on Labs</div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* Real Event Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventPhotos.map((photo, i) => (
            <AnimatedSection key={photo.title} delay={0.15 + i * 0.06}>
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="relative h-48 sm:h-52 w-full overflow-hidden group">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded bg-slate-950/75 text-white backdrop-blur-xs">
                    {photo.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-base mb-1.5 leading-snug">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
