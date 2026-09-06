import { Navigation, Plane, Train, Bus, ShieldCheck, Camera } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

export default function Venue() {
  const mapUrl =
    'https://www.google.com/maps/search/?api=1&query=MG+Auditorium+VIT+Chennai+Campus';

  return (
    <section id="venue" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Venue & Location"
            subtitle="MG Auditorium — VIT Chennai Campus"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Venue Details Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-quantum-surface/60 border border-quantum-border">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                MG Auditorium
              </h3>
              <p className="text-sm font-medium text-quantum-purple mb-4">
                VIT Chennai Campus
              </p>

              <p className="text-sm text-quantum-text-secondary leading-relaxed mb-6">
                Vellore Institute of Technology (VIT Chennai)<br />
                Vandalur-Kelambakkam Road, Keelakottaiyur<br />
                Chennai, Tamil Nadu 600127, India
              </p>

              <div className="p-5 rounded-xl border border-quantum-border bg-quantum-surface/60 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-quantum-purple font-bold mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>Campus Entry & Security Protocol</span>
                </h4>
                <ul className="text-xs text-quantum-text-secondary space-y-2 list-disc list-inside">
                  <li><strong className="text-white">Main Entrance:</strong> External delegates must enter via <span className="text-quantum-purple font-semibold">Gate 1 (Main Gate)</span> on Vandalur-Kelambakkam Road.</li>
                  <li><strong className="text-white">Mandatory IDs:</strong> Carry your <span className="text-white font-semibold">Physical College ID Card</span> and a Government Photo ID (Aadhaar / Driving License) for gate verification.</li>
                  <li><strong className="text-white">Venue Facilities:</strong> Fully air-conditioned auditorium with campus high-speed Wi-Fi, power backup, and food courts on site.</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-quantum-text-secondary font-semibold mb-3">
                Transit & Connectivity
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-lg border border-quantum-border/60 bg-quantum-surface/40 flex items-center gap-2.5">
                  <Plane size={16} className="text-quantum-purple flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-quantum-text">Air (MAA)</div>
                    <div className="text-[11px] text-quantum-text-secondary">~30 km</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-quantum-border/60 bg-quantum-surface/40 flex items-center gap-2.5">
                  <Train size={16} className="text-quantum-purple flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-quantum-text">Rail (TBM)</div>
                    <div className="text-[11px] text-quantum-text-secondary">~15 km</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-quantum-border/60 bg-quantum-surface/40 flex items-center gap-2.5">
                  <Bus size={16} className="text-quantum-purple flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-quantum-text">Bus Transit</div>
                    <div className="text-[11px] text-quantum-text-secondary">Vandalur Jcn</div>
                  </div>
                </div>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-quantum-purple hover:text-white hover:underline transition-colors font-medium"
              >
                <Navigation size={14} /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Real Photography Placement per Item 11 */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="p-8 sm:p-10 rounded-2xl border border-quantum-border bg-quantum-surface/60 flex flex-col items-center justify-center text-center flex-1 min-h-[260px]">
              <Camera size={32} className="text-zinc-600 mb-3" />
              <h4 className="font-heading font-bold text-white text-lg mb-1">
                MG Auditorium — VIT Chennai
              </h4>
              <p className="text-xs text-quantum-text-secondary max-w-sm mb-3">
                Flagship university auditorium hosting keynotes, technical sessions, and the overnight hackathon.
              </p>
              <span className="text-[11px] font-mono text-quantum-purple">
                Campus photo coming soon · Authorization pending
              </span>
            </div>

            {/* Quiet Map Reference Box */}
            <div className="p-5 rounded-2xl border border-quantum-border bg-quantum-surface/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-quantum-text-secondary">Campus Coordinates</span>
                <p className="text-sm font-mono text-white mt-0.5">12.8406° N, 80.1534° E</p>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-quantum-purple hover:underline"
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
