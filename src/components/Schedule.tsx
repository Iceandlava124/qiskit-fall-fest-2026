import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { schedule } from '../data/schedule';
import { Clock, Calendar, MapPin, ArrowDown, User, Sparkles, Tag } from 'lucide-react';

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
            subtitle="Four-day roadmap flowing from quantum fundamentals to full-day hackathon sprint"
          />
        </AnimatedSection>

        {/* Quick Day Anchors */}
        <AnimatedSection delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 mb-10">
            {schedule.map((day, idx) => (
              <a
                key={day.dayLabel}
                href={`#schedule-day-${idx + 1}`}
                className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 hover:border-quantum-purple text-xs font-mono font-semibold text-slate-700 hover:text-quantum-purple shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-quantum-purple" />
                {day.dayLabel} · {day.date.split(',')[0]}
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
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs flex items-center justify-center font-heading font-extrabold text-base text-white shrink-0">
                        0{dIdx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-bold text-lg sm:text-xl text-white">
                            {day.dayLabel}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-white/80 bg-white/10 px-2 py-0.5 rounded-full">
                            <Calendar size={11} />
                            {day.date}
                          </span>
                        </div>
                        <h3 className="font-heading text-sm sm:text-base font-medium text-white/90 mt-0.5">
                          {day.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 self-start sm:self-auto shrink-0">
                      <MapPin size={12} className="text-cyan-300" />
                      <span>MG Auditorium</span>
                    </div>
                  </div>

                  {/* Vertical Timeline of Sessions within the Day */}
                  <div className="p-5 sm:p-7">
                    <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-4 pl-5 sm:pl-6 space-y-5">
                      {day.sessions.map((session, sIdx) => (
                        <div key={sIdx} className="relative group">
                          {/* Timeline Node Dot */}
                          <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-quantum-purple group-hover:bg-quantum-purple transition-colors shadow-xs" />

                          {/* Session Item Card */}
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-quantum-purple/40 hover:bg-white hover:shadow-xs transition-all">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-quantum-purple bg-quantum-purple/10 px-2.5 py-0.5 rounded-md border border-quantum-purple/20">
                                <Clock size={11} />
                                {session.timeframe}
                              </span>

                              {session.speaker && (
                                <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-0.5 rounded-md shadow-2xs">
                                  <User size={11} className="text-quantum-purple" />
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
                                    className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-white border border-slate-200/80 px-2 py-0.5 rounded"
                                  >
                                    <Tag size={9} className="text-slate-400" />
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
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
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-quantum-purple/30 text-quantum-purple shadow-sm hover:border-quantum-purple transition-all">
                    <ArrowDown size={14} className="text-quantum-purple animate-bounce" />
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase">
                      Next: Day 0{dIdx + 2}
                    </span>
                  </div>
                  <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-quantum-purple/60 to-slate-200" />
                </div>
              )}
            </div>
          ))}

          {/* Festival Conclusion Badge at End of Day 4 */}
          <div className="flex flex-col items-center mt-6 sm:mt-8">
            <div className="w-0.5 h-6 sm:h-8 bg-slate-200" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white font-mono text-xs font-semibold shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              <span>Festival Finale & Hackathon Valedictory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
