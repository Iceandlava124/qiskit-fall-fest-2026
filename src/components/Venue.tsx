import {
  Navigation,
  Plane,
  Train,
  Bus,
  ShieldCheck,
  Users,
  Wifi,
  Zap,
  Sparkles,
  MapPin,
  ExternalLink,
  Radio,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

const venueFacilities = [
  { icon: Users, title: '2,000 Capacity Tiered Hall' },
  { icon: Wifi, title: 'Gigabit Campus Wi-Fi' },
  { icon: Zap, title: '100% Generator Backup' },
  { icon: Sparkles, title: 'Dual 4K LED Displays & Line-Array Audio' },
  { icon: Radio, title: 'Session Recording & Live Broadcast' },
  { icon: ShieldCheck, title: '24/7 Campus Security & Registration Desk' },
];

const transitOptions = [
  { icon: Plane, label: 'Air (MAA)', detail: 'Chennai Intl. Airport · ~30 km' },
  { icon: Train, label: 'Rail (TBM)', detail: 'Tambaram Railway Station · ~15 km' },
  { icon: Bus, label: 'Bus (KCBT)', detail: 'Kilambakkam Terminus · ~8 km' },
  { icon: MapPin, label: 'Road Transit', detail: 'Vandalur Junction · ~9 km' },
];

export default function Venue() {
  const mapUrl =
    'https://www.google.com/maps/search/?api=1&query=MG+Auditorium+VIT+Chennai+Campus';

  return (
    <section
      id="venue"
      className="py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-slate-50/60 relative overflow-hidden border-y border-slate-200 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Venue & Campus Infrastructure"
            subtitle="Mahatma Gandhi (MG) Auditorium — Vellore Institute of Technology, Chennai Campus"
          />
        </AnimatedSection>

        {/* Photography Showcase: Interior Stage & Main Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {/* Photo 1: Inside MG Auditorium (Stage & Seating) */}
          <AnimatedSection delay={0.05}>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-quantum-purple/40 transition-all overflow-hidden flex flex-col group">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="/venue/mg-auditorium-4.jpg"
                  alt="MG Auditorium Central Stage and Plenary Seating - VIT Chennai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-quantum-purple text-white shadow-xs">
                    <Users size={11} />
                    2,000 Capacity Hall
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="font-heading font-bold text-base sm:text-lg">MG Auditorium (Inside)</p>
                  <p className="text-xs text-white/80 font-mono">Central Stage & Plenary Arena</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1.5 text-quantum-purple font-medium">
                  <Sparkles size={13} /> Keynotes & Hackathon Arena
                </span>
                <span>Plenary Hall</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Photo 2: VIT Chennai Main Entrance Arch */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-quantum-purple/40 transition-all overflow-hidden flex flex-col group">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="/venue/vit-chennai-main.png"
                  alt="VIT Chennai Campus Main Gate Entrance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900/90 text-white backdrop-blur-xs shadow-xs">
                    <MapPin size={11} className="text-quantum-purple" />
                    Gate 1 (Main Gate)
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="font-heading font-bold text-base sm:text-lg">VIT Chennai University Campus</p>
                  <p className="text-xs text-white/80 font-mono">Main Entrance & Pylon</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1.5 text-quantum-purple font-medium">
                  <ShieldCheck size={13} /> Security Checkpoint
                </span>
                <span>Campus Access</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Detailed Information & Facilities Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Venue Facilities */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.15}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-5">
                  Auditorium Infrastructure & Technical Specs
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {venueFacilities.map((facility) => {
                    const Icon = facility.icon;
                    return (
                      <div
                        key={facility.title}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-quantum-purple/40 transition-all flex items-center gap-3"
                      >
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-quantum-purple shadow-xs shrink-0">
                          <Icon size={16} />
                        </div>
                        <h4 className="font-heading font-semibold text-slate-900 text-xs sm:text-sm">
                          {facility.title}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Address, Entry Protocols & Transit */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-1 text-xs font-mono text-quantum-purple font-semibold uppercase">
                    <MapPin size={13} />
                    <span>Campus Location</span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-slate-900">
                    MG Auditorium, VIT Chennai
                  </h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Vandalur-Kelambakkam Road, Keelakottaiyur, Chennai 600127
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2.5">
                  <ShieldCheck size={16} className="text-quantum-purple shrink-0" />
                  <span>Entry via <strong>Gate 1</strong> · Mandatory physical College ID & Govt Photo ID</span>
                </div>

                {/* Transit Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {transitOptions.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <div
                        key={opt.label}
                        className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2"
                      >
                        <Icon size={14} className="text-quantum-purple shrink-0" />
                        <div className="text-[11px] font-medium text-slate-700 truncate">
                          {opt.detail}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-quantum-purple hover:bg-quantum-purple-light text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Navigation size={14} />
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
