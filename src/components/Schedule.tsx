import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { schedule, ScheduleSession } from '../data/schedule';
import {
  LucideIcon,
  Clock,
  Calendar,
  MapPin,
  ArrowDown,
  User,
  Sparkles,
  Cpu,
  Atom,
  Activity,
  Terminal,
  Brain,
  ShieldCheck,
  Dna,
  Binary,
  Flag,
  Code,
  MonitorPlay,
  Trophy,
} from 'lucide-react';

const sessionIconMap: Record<ScheduleSession['iconType'], LucideIcon> = {
  sparkles: Sparkles,
  cpu: Cpu,
  atom: Atom,
  heartPulse: Activity,
  terminal: Terminal,
  brain: Brain,
  shield: ShieldCheck,
  dna: Dna,
  binary: Binary,
  flag: Flag,
  code: Code,
  presentation: MonitorPlay,
  trophy: Trophy,
};

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-slate-50/50 relative overflow-hidden flex items-center justify-center border-b border-slate-200"
    >
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Event Schedule"
            subtitle="Official 3-day programme flowing from quantum fundamentals to full-day hackathon sprint"
          />
        </AnimatedSection>

        {/* Quick Day Anchors */}
        <AnimatedSection delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 mb-10">
            {schedule.map((day, idx) => (
              <a
                key={day.dayLabel}
                href={`#schedule-day-${idx + 1}`}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-quantum-purple text-xs font-mono font-semibold text-slate-700 hover:text-quantum-purple shadow-xs transition-colors flex items-center gap-2 group"
              >
                <span className="w-2 h-2 rounded-full bg-quantum-purple group-hover:scale-125 transition-transform" />
                <span>{day.dayLabel} · {day.date.split(',')[0]}</span>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Vertical Downward Schedule Flow */}
        <div className="relative">
          {schedule.map((day, dIdx) => (
            <div key={day.dayLabel} id={`schedule-day-${dIdx + 1}`}>
              {/* Day Card */}
              <AnimatedSection delay={0.08 * dIdx}>
                <div className="rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-quantum-purple/40 transition-all overflow-hidden">
                  {/* Day Header Bar */}
                  <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-900 to-quantum-purple/90 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs flex items-center justify-center font-heading font-extrabold text-lg text-white shrink-0 shadow-inner">
                        {day.dayNumber}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-bold text-lg sm:text-xl text-white">
                            {day.dayLabel}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-white/90 bg-white/15 px-2.5 py-0.5 rounded-full">
                            <Calendar size={11} />
                            {day.date}
                          </span>
                        </div>
                        <h3 className="font-heading text-sm sm:text-base font-medium text-white/90 mt-0.5">
                          {day.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white self-start sm:self-auto shrink-0 backdrop-blur-xs">
                      <MapPin size={12} className="text-cyan-300" />
                      <span>MG Auditorium</span>
                    </div>
                  </div>

                  {/* Vertical Timeline of Sessions within the Day */}
                  <div className="p-5 sm:p-7">
                    <div className="relative border-l-2 border-slate-200 ml-3.5 sm:ml-5 pl-5 sm:pl-7 space-y-4 sm:space-y-5">
                      {day.sessions.map((session, sIdx) => {
                        const Icon = sessionIconMap[session.iconType] || Sparkles;
                        return (
                          <div key={sIdx} className="relative group">
                            {/* Timeline Node Dot with Icon */}
                            <div className="absolute -left-[31px] sm:-left-[39px] top-2.5 w-6 h-6 rounded-full bg-white border-2 border-quantum-purple flex items-center justify-center text-quantum-purple group-hover:bg-quantum-purple group-hover:text-white transition-all shadow-xs">
                              <Icon size={11} />
                            </div>

                            {/* Session Item Card */}
                            <div className="p-4 sm:p-4.5 rounded-2xl bg-slate-50/90 border border-slate-200/90 hover:border-quantum-purple/40 hover:bg-white hover:shadow-xs transition-all">
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                <div className="flex items-center gap-2">
                                  {session.sessionNumber && (
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                                      {session.sessionNumber}
                                    </span>
                                  )}
                                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-quantum-purple bg-quantum-purple/10 px-2.5 py-0.5 rounded-md border border-quantum-purple/20">
                                    <Clock size={11} />
                                    {session.timeframe}
                                  </span>
                                </div>

                                {session.speaker && (
                                  <span className={`inline-flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md shadow-2xs ${
                                    session.speakerBadge
                                      ? 'bg-quantum-purple text-white border border-quantum-purple'
                                      : 'bg-white border border-slate-200 text-slate-700'
                                  }`}>
                                    <User size={11} className={session.speakerBadge ? 'text-white' : 'text-quantum-purple'} />
                                    {session.speaker}
                                  </span>
                                )}
                              </div>

                              <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug">
                                {session.title}
                              </h4>

                              {session.tags && session.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-2.5">
                                  {session.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="inline-flex items-center text-[10.5px] font-mono text-slate-600 bg-white border border-slate-200/80 px-2 py-0.5 rounded"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Downward Arrow Connector between Days */}
              {dIdx < schedule.length - 1 && (
                <div
                  className="flex flex-col items-center my-6 sm:my-8"
                  aria-hidden="true"
                >
                  <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-quantum-purple to-quantum-purple/60" />
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-quantum-purple/30 text-quantum-purple shadow-sm hover:border-quantum-purple transition-all">
                    <ArrowDown size={14} className="text-quantum-purple animate-bounce" />
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase">
                      Proceed to Day 0{dIdx + 2}
                    </span>
                  </div>
                  <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-quantum-purple/60 to-slate-200" />
                </div>
              )}
            </div>
          ))}

          {/* Festival Conclusion Badge at End of Day 3 */}
          <div className="flex flex-col items-center mt-6 sm:mt-8">
            <div className="w-0.5 h-6 sm:h-8 bg-slate-200" />
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white font-mono text-xs font-semibold shadow-md">
              <Trophy size={15} className="text-yellow-400" />
              <span>Hackathon Results & Valedictory Ceremony</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
