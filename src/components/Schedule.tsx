import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { schedule } from '../data/schedule';
import { Clock, Tag, User } from 'lucide-react';

export default function Schedule() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredSchedule =
    selectedFilter === 'all'
      ? schedule
      : schedule.filter((s) => s.dayLabel.toLowerCase().includes(selectedFilter.toLowerCase()));

  const tabs = [
    { id: 'all', label: 'All 5 Days', ariaLabel: 'View complete 5-day schedule overview' },
    { id: 'Day 1', label: 'Day 1 (Oct 12)', ariaLabel: 'View Day 1 schedule: Quantum Foundations' },
    { id: 'Day 2', label: 'Day 2 (Oct 13)', ariaLabel: 'View Day 2 schedule: Quantum ML & Healthcare' },
    { id: 'Day 3', label: 'Day 3 (Oct 14)', ariaLabel: 'View Day 3 schedule: Hardware & Hackathon Kickoff' },
    { id: 'Day 4', label: 'Day 4 (Oct 15)', ariaLabel: 'View Day 4 schedule: Hackathon Sprint & Checkpoints' },
    { id: 'Day 5', label: 'Day 5 (Oct 16)', ariaLabel: 'View Day 5 schedule: Finalist Demos & Valedictory' },
  ];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % tabs.length;
      setSelectedFilter(tabs[nextIndex].id);
      const nextEl = document.getElementById(`schedule-tab-${tabs[nextIndex].id}`);
      nextEl?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      setSelectedFilter(tabs[prevIndex].id);
      const prevEl = document.getElementById(`schedule-tab-${tabs[prevIndex].id}`);
      prevEl?.focus();
    }
  };

  return (
    <section id="schedule" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Event Schedule"
            subtitle="5-day immersive journey from quantum foundations to overnight hackathon and awards"
          />
        </AnimatedSection>

        {/* Accessible Keyboard-Navigable Day Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div
            role="tablist"
            aria-label="Filter schedule by day"
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16 p-2 rounded-xl bg-slate-50 border border-slate-200 shadow-sm max-w-4xl mx-auto"
          >
            {tabs.map((tab, idx) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`schedule-tab-${tab.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="schedule-content-panel"
                  aria-label={tab.ariaLabel}
                  tabIndex={isSelected ? 0 : -1}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple ${
                    isSelected
                      ? 'bg-quantum-purple text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Spacious Schedule Days Container */}
        <div
          id="schedule-content-panel"
          role="tabpanel"
          aria-labelledby={`schedule-tab-${selectedFilter}`}
          className="space-y-12 sm:space-y-16"
        >
          {filteredSchedule.map((day, i) => (
            <AnimatedSection key={day.dayLabel} delay={i * 0.08}>
              <div className="p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm relative">
                {/* Header Row: Title & Clean Subtitle */}
                <div className="border-b border-slate-200 pb-8 mb-8">
                  <p className="text-xs font-mono text-quantum-purple uppercase tracking-wider mb-2 font-semibold">
                    {day.dayLabel} <span className="mx-2 text-slate-300">·</span> {day.date} <span className="mx-2 text-slate-300">·</span> MG Auditorium, VIT Chennai
                  </p>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">
                    {day.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 font-light">
                    {day.subtitle}
                  </p>
                </div>

                {/* Structured Sessions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {day.sessions.map((session) => (
                    <div
                      key={session.title}
                      className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 hover:border-quantum-purple/40 shadow-xs transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Timeframe */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center gap-1.5 text-quantum-purple font-mono text-xs font-semibold">
                            <Clock size={12} />
                            {session.timeframe}
                          </span>
                          {session.speaker && (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                              <User size={11} className="text-quantum-purple" />
                              {session.speaker}
                            </span>
                          )}
                        </div>

                        {/* Session Title */}
                        <h4 className="font-heading font-bold text-slate-900 text-lg sm:text-xl mb-2.5">
                          {session.title}
                        </h4>

                        {/* Session Description */}
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                          {session.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                        {session.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-600"
                          >
                            <Tag size={10} className="text-quantum-purple" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
