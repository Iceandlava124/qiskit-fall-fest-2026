import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { schedule } from '../data/schedule';
import { Clock, Calendar, MapPin } from 'lucide-react';

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Event Schedule"
            subtitle="Four days of intensive quantum computing keynotes, workshops, and hackathon sprint"
          />
        </AnimatedSection>

        {/* Horizontal Timeline Container */}
        <div className="relative mt-8">
          {/* Continuous Connecting Horizontal Line Across Days (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-1 bg-gradient-to-r from-quantum-purple via-quantum-purple to-quantum-purple/40 rounded-full z-0" />

          {/* 4-Day Horizontal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {schedule.map((day, dIdx) => (
              <AnimatedSection key={day.dayLabel} delay={dIdx * 0.08}>
                <div className="flex flex-col h-full">
                  {/* Timeline Step Marker & Header */}
                  <div className="flex flex-col items-center text-center mb-6">
                    {/* Circle Node */}
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-quantum-purple shadow-md flex items-center justify-center font-heading font-extrabold text-quantum-purple text-base mb-3 transition-transform hover:scale-110">
                      0{dIdx + 1}
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-1">
                      {day.dayLabel}
                    </h3>
                    <p className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-quantum-purple bg-quantum-purple/10 px-2.5 py-0.5 rounded-full border border-quantum-purple/20">
                      <Calendar size={11} />
                      {day.date}
                    </p>
                  </div>

                  {/* Day Events Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-sm transition-all flex-1 flex flex-col">
                    <div className="mb-4 pb-3 border-b border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
                      <span className="font-semibold text-slate-700 truncate pr-2">{day.title}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 shrink-0">
                        <MapPin size={11} className="text-quantum-purple" />
                        MG Audi
                      </span>
                    </div>

                    {/* Clean Event Items without descriptions */}
                    <ul className="space-y-2.5 flex-1">
                      {day.sessions.map((session, sIdx) => (
                        <li
                          key={sIdx}
                          className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-quantum-purple/40 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-center justify-between gap-1.5 mb-1.5">
                            <span className="inline-flex items-center gap-1 text-[10.5px] font-mono font-semibold text-quantum-purple">
                              <Clock size={10} />
                              {session.timeframe}
                            </span>
                            {session.speaker && (
                              <span className="text-[9.5px] font-mono font-medium text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded shrink-0 max-w-[140px] truncate" title={session.speaker}>
                                {session.speaker}
                              </span>
                            )}
                          </div>
                          <h4 className="font-heading font-semibold text-slate-900 text-xs leading-snug">
                            {session.title}
                          </h4>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
