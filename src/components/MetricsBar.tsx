import EventCountdown from './EventCountdown';
import AnimatedSection from './AnimatedSection';
import { STATUS_LABELS, type ContentStatus } from '../data/status';
import { Users, Building2, Calendar, Trophy } from 'lucide-react';

interface MetricStat {
  icon: typeof Users;
  value: string;
  label: string;
  sub: string;
  status: ContentStatus;
}

const stats: MetricStat[] = [
  {
    icon: Users,
    value: '400–500',
    label: 'Expected Participants',
    sub: 'Students, researchers & faculty',
    status: 'confirmed',
  },
  {
    icon: Calendar,
    value: '3 Days',
    label: 'Offline Programme',
    sub: '5–7 October 2026 at VIT Chennai',
    status: 'confirmed',
  },
  {
    icon: Building2,
    value: '8 Sessions',
    label: 'Keynotes & Hands-on Labs',
    sub: 'Includes IBM Quantum speakers',
    status: 'confirmed',
  },
  {
    icon: Trophy,
    value: '4 Tracks',
    label: 'Quantum Hackathon',
    sub: 'QML, Cryptography, Error Correction & Healthcare',
    status: 'confirmed',
  },
];

export default function MetricsBar() {
  return (
    <section className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-slate-200 bg-slate-50/60 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Live Countdown Box */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <AnimatedSection>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mb-2">
                Mark Your Calendar
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mb-6 leading-relaxed">
                Inauguration ceremony at MG Auditorium, VIT Chennai on October 5, 2026 at 09:00 AM.
              </p>
              <EventCountdown />
            </AnimatedSection>
          </div>

          {/* Right Column: 4 Clean Harmonized Stat Cards with quiet status labels */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 0.07}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                    <div className="flex items-start justify-between mb-4">
                      <s.icon size={20} className="text-quantum-purple" />
                      <span className="text-[11px] font-mono text-slate-400">
                        {STATUS_LABELS[s.status]}
                      </span>
                    </div>

                    <div>
                      <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                        {s.value}
                      </div>
                      <div className="text-sm font-semibold text-slate-800 mt-1">
                        {s.label}
                      </div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">
                        {s.sub}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
