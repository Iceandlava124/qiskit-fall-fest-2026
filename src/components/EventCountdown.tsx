import { useState, useEffect } from 'react';

export default function EventCountdown() {
  // Target: October 2026 (e.g., Oct 1, 2026)
  const targetDate = new Date('2026-10-01T09:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = Math.max(0, targetDate - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.max(0, targetDate - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border border-quantum-border bg-quantum-surface/60">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-[58px]">
            <span className="font-mono text-xl sm:text-2xl font-bold text-white">
              {String(u.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-quantum-text-secondary">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-zinc-600 font-mono text-lg font-bold select-none">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
