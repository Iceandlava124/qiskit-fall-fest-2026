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
  Coffee,
  MapPin,
  ExternalLink,
  Sun,
  Building2,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

const venueFacilities = [
  {
    icon: Users,
    title: '2,000 Capacity Hall',
    desc: 'Spacious tiered acoustic seating accommodating all attendees, mentors, and hackathon teams.',
  },
  {
    icon: Wifi,
    title: 'Gigabit Campus Wi-Fi',
    desc: 'High-speed dual-band wireless infrastructure optimized for live cloud computing and quantum SDK simulation.',
  },
  {
    icon: Zap,
    title: '100% Power Backup',
    desc: 'Uninterrupted power supply with heavy-duty backup generators for the entire 24-hour sprint.',
  },
  {
    icon: Sparkles,
    title: '4K Projection & Audio',
    desc: 'Dual ultra-high-definition presentation screens with professional stage line-array sound systems.',
  },
  {
    icon: Coffee,
    title: 'Food Courts & Lounges',
    desc: 'On-campus multi-cuisine cafeterias, refreshment stalls, and student networking lounges within 50m.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 Campus Security',
    desc: 'Dedicated security staff, CCTV monitoring, first-aid medical station, and helpdesk desks on site.',
  },
];

const transitOptions = [
  {
    icon: Plane,
    label: 'Air Transit (MAA)',
    detail: 'Chennai Intl. Airport (~30 km)',
    sub: 'Prepaid taxis & Metro available',
  },
  {
    icon: Train,
    label: 'Rail Transit (TBM)',
    detail: 'Tambaram Railway Station (~15 km)',
    sub: 'Frequent local trains & buses',
  },
  {
    icon: Bus,
    label: 'Bus Terminal (KCBT)',
    detail: 'Kalaignar Centenary Bus Terminus (~8 km)',
    sub: 'Direct inter-city connectivity',
  },
  {
    icon: MapPin,
    label: 'Road Transit',
    detail: 'Vandalur Junction (~9 km)',
    sub: 'Connected via Kelambakkam Road',
  },
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

        {/* 3-Image Photography Showcase: Daytime Exterior, Interior Stage, Main Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Photo 1: Daytime External MG Auditorium */}
          <AnimatedSection delay={0.05}>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-quantum-purple/40 transition-all overflow-hidden flex flex-col h-full group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="/venue/mg-auditorium-exterior-day.jpg"
                  alt="MG Auditorium Daytime External Architecture - VIT Chennai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 text-white backdrop-blur-xs border border-white/10 shadow-xs">
                    <Sun size={11} className="text-amber-400" />
                    Daytime Exterior
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="font-heading font-bold text-base">MG Auditorium Architecture</p>
                  <p className="text-xs text-white/80 font-mono">Iconic Cantilever Facade</p>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed">
                  The striking architectural landmark at VIT Chennai featuring a modern cantilevered pavilion and glass facade, hosting all major institutional colloquia.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-quantum-purple font-medium">
                    <Building2 size={12} /> MG Auditorium
                  </span>
                  <span>Daylight View</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Photo 2: Inside MG Auditorium (Stage & Seating) */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-quantum-purple/40 transition-all overflow-hidden flex flex-col h-full group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
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
                  <p className="font-heading font-bold text-base">Central Stage & Plenary Hall</p>
                  <p className="text-xs text-white/80 font-mono">Auditorium Interior</p>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fully air-conditioned indoor hall equipped with surround sound, dual 4K LED projection, and tiered seating for festival ceremonies and hackathon presentations.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-quantum-purple font-medium">
                    <Sparkles size={12} /> Keynotes & Hackathon
                  </span>
                  <span>Plenary Arena</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Photo 3: VIT Chennai Main Entrance Arch */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-quantum-purple/40 transition-all overflow-hidden flex flex-col h-full group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
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
                  <p className="font-heading font-bold text-base">VIT Chennai University Campus</p>
                  <p className="text-xs text-white/80 font-mono">Main Entrance & Pylon</p>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Delegates entering from Vandalur-Kelambakkam Road proceed through Gate 1 with physical college ID cards for quick campus security registration.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-quantum-purple font-medium">
                    <ShieldCheck size={12} /> Security Checkpoint
                  </span>
                  <span>Campus Access</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Detailed Information & Facilities Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Venue Facilities Grid with Icons */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection delay={0.2}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
                      Auditorium Facilities & Tech Rig
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      Equipped for high-intensity quantum lectures, workshops & hackathons
                    </p>
                  </div>
                  <span className="p-2 rounded-xl bg-quantum-purple/10 text-quantum-purple">
                    <Building2 size={20} />
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {venueFacilities.map((facility) => {
                    const Icon = facility.icon;
                    return (
                      <div
                        key={facility.title}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-quantum-purple/40 transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-xl bg-white border border-slate-200 text-quantum-purple shadow-xs shrink-0">
                            <Icon size={16} />
                          </div>
                          <h4 className="font-heading font-bold text-slate-900 text-sm">
                            {facility.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {facility.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Address, Entry Protocols & Transit Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Entry Guidelines */}
            <AnimatedSection delay={0.25}>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-quantum-purple" />
                  <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                    Campus Address
                  </span>
                </div>

                <h4 className="font-heading font-bold text-lg text-slate-900 mb-1">
                  Mahatma Gandhi Auditorium
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  Vellore Institute of Technology (VIT Chennai)<br />
                  Vandalur-Kelambakkam Road, Keelakottaiyur<br />
                  Chennai, Tamil Nadu 600127, India
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 space-y-2.5">
                  <h5 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-quantum-purple" />
                    Entry Guidelines
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    External student delegates must carry their <strong>Physical College ID Card</strong> along with a Government Photo ID (Aadhaar / Driving License). Entry is through <strong>Gate 1 (Main Entrance)</strong>.
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                    Transit Connectivity
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {transitOptions.map((opt) => {
                      const Icon = opt.icon;
                      return (
                        <div
                          key={opt.label}
                          className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-2.5"
                        >
                          <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-quantum-purple shrink-0 mt-0.5">
                            <Icon size={14} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800">{opt.label}</div>
                            <div className="text-[11px] text-slate-600 font-medium">{opt.detail}</div>
                            <div className="text-[10px] text-slate-400">{opt.sub}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-quantum-purple hover:bg-quantum-purple-light text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Navigation size={15} />
                  <span>Open MG Auditorium on Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
