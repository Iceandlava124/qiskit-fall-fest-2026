import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { schedule } from '../data/schedule';
import { Clock, Tag } from 'lucide-react';

export default function Schedule() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredSchedule =
    selectedFilter === 'all'
      ? schedule
      : schedule.filter((s) => s.dayLabel.toLowerCase().includes(selectedFilter.toLowerCase()));

  const tabs = [
    { id: 'all', label: 'All Days Overview', ariaLabel: 'View complete 5-day schedule overview' },
    { id: 'Day 1', label: 'Day 1', ariaLabel: 'View Day 1 schedule: Quantum and Industry' },
    { id: 'Day 2', label: 'Day 2', ariaLabel: 'View Day 2 schedule: Qiskit and Hackathon Kickoff' },
    { id: 'Day 3', label: 'Day 3', ariaLabel: 'View Day 3 schedule: Hackathon and Finale' },
    { id: 'Days 4', label: 'Days 4–5 (Outreach)', ariaLabel: 'View Days 4 and 5 schedule: Outreach and Awareness' },
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
    <section id="schedule" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#0b0b12] relative overflow-hidden border-y border-quantum-border/60 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Event Schedule"
            subtitle="3-day core festival at MG Auditorium + 2-day outreach & awareness extension"
          />
        </AnimatedSection>

        {/* Accessible Keyboard-Navigable Day Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div
            role="tablist"
            aria-label="Filter schedule by day"
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16 p-2 rounded-xl bg-quantum-surface/60 border border-quantum-border max-w-3xl mx-auto"
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
                  className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple ${
                    isSelected
                      ? 'bg-quantum-purple text-white font-semibold shadow-sm'
                      : 'text-quantum-text-secondary hover:text-white hover:bg-quantum-surface'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Spacious Schedule Days Container with tabpanel semantics */}
        <div
          id="schedule-content-panel"
          role="tabpanel"
          aria-labelledby={`schedule-tab-${selectedFilter}`}
          className="space-y-14 sm:space-y-18"
        >
          {filteredSchedule.map((day, i) => (
            <AnimatedSection key={day.dayLabel} delay={i * 0.08}>
              <div className="p-8 sm:p-12 rounded-2xl bg-quantum-surface/60 border border-quantum-border relative">
                {/* Header Row: Title & Clean Subtitle */}
                <div className="border-b border-quantum-border/60 pb-8 mb-8">
                  <p className="text-xs font-mono text-quantum-purple uppercase tracking-wider mb-2 font-semibold">
                    {day.dayLabel} <span className="mx-2 text-zinc-600">·</span> {day.isExtension ? 'Outreach & Awareness Extension' : 'Core Program'} <span className="mx-2 text-zinc-600">·</span> MG Auditorium
                  </p>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
                    {day.title}
                  </h3>
                  <p className="text-base sm:text-lg text-quantum-text-secondary font-light">
                    {day.subtitle}
                  </p>

                  {day.isExtension && (
                    <p className="mt-4 text-xs font-mono text-quantum-text-secondary">
                      Note: Exact structure depends on institutional permissions and host logistics.
                    </p>
                  )}
                </div>

                {/* Structured Sessions Grid: 2 columns on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {day.sessions.map((session) => (
                    <div
                      key={session.title}
                      className="p-6 sm:p-7 rounded-xl bg-quantum-surface/70 border border-quantum-border hover:border-quantum-purple/40 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        {/* Timeframe */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center gap-1.5 text-quantum-purple font-mono text-xs font-semibold">
                            <Clock size={12} />
                            {session.timeframe}
                          </span>
                        </div>

                        {/* Session Title */}
                        <h4 className="font-heading font-bold text-white text-lg sm:text-xl mb-2.5">
                          {session.title}
                        </h4>

                        {/* Session Description */}
                        <p className="text-sm sm:text-base text-quantum-text-secondary leading-relaxed mb-6 font-normal">
                          {session.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="pt-4 border-t border-quantum-border/40 flex flex-wrap gap-2">
                        {session.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-quantum-surface border border-quantum-border/60 text-quantum-text-secondary"
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
