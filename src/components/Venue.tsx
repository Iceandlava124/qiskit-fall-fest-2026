import { Navigation, Plane, Train, Bus, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

export default function Venue() {
  const mapUrl =
    'https://www.google.com/maps/search/?api=1&query=MG+Auditorium+VIT+Chennai+Campus';

  return (
    <section id="venue" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-slate-50/60 relative overflow-hidden border-y border-slate-200 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Venue & Location"
            subtitle="MG Auditorium — VIT Chennai Campus"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Venue Details Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-2">
                MG Auditorium
              </h3>
              <p className="text-sm font-medium text-quantum-purple mb-4">
                VIT Chennai Campus
              </p>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Vellore Institute of Technology (VIT Chennai)<br />
                Vandalur-Kelambakkam Road, Keelakottaiyur<br />
                Chennai, Tamil Nadu 600127, India
              </p>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/80 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-quantum-purple font-bold mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>Campus Entry & Security Protocol</span>
                </h4>
                <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                  <li><strong className="text-slate-900">Main Entrance:</strong> External delegates enter via <span className="text-quantum-purple font-semibold">Gate 1 (Main Gate)</span> on Vandalur-Kelambakkam Road.</li>
                  <li><strong className="text-slate-900">Mandatory IDs:</strong> Carry your <span className="text-slate-900 font-semibold">Physical College ID Card</span> and a Government Photo ID (Aadhaar / Driving License) for gate verification.</li>
                  <li><strong className="text-slate-900">Venue Facilities:</strong> Fully air-conditioned auditorium with high-speed campus Wi-Fi, power backup, and food courts on site.</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                Transit & Connectivity
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2.5">
                  <Plane size={16} className="text-quantum-purple flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-slate-800">Air (MAA)</div>
                    <div className="text-[11px] text-slate-500">~30 km</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2.5">
                  <Train size={16} className="text-quantum-purple flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-slate-800">Rail (TBM)</div>
                    <div className="text-[11px] text-slate-500">~15 km</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2.5">
                  <Bus size={16} className="text-quantum-purple flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-slate-800">Bus Transit</div>
                    <div className="text-[11px] text-slate-500">Vandalur Jcn</div>
                  </div>
                </div>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-quantum-purple hover:underline transition-colors font-semibold"
              >
                <Navigation size={14} /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Real Photography Placement */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col flex-1">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="/gallery/day1_1.webp"
                  alt="MG Auditorium Stage - VIT Chennai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="font-heading font-bold text-base">MG Auditorium Stage</p>
                  <p className="text-xs text-white/80 font-mono">VIT Chennai Campus</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-heading font-bold text-slate-900 text-lg mb-1">
                  Keynotes, Workshops & Hackathon Hub
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The flagship auditorium hosting all plenary ceremonies, IBM technical keynote addresses, guided hands-on lab sprints, and the overnight hackathon showcase.
                </p>
              </div>
            </div>

            {/* Coordinates Box */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-slate-500">Campus Coordinates</span>
                <p className="text-sm font-mono text-slate-800 font-semibold mt-0.5">12.8406° N, 80.1534° E</p>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-quantum-purple font-semibold hover:underline"
              >
                Directions ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
