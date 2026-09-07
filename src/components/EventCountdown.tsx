import { useState, useEffect } from 'react';

export default function EventCountdown() {
  // Target: October 12, 2026 (Opening Day)
  const targetDate = new Date('2026-10-12T09:00:00+05:30').getTime();

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
    <div className="inline-flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/80 shadow-sm">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-[58px]">
            <span className="font-mono text-xl sm:text-2xl font-bold text-slate-900">
              {String(u.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-slate-300 font-mono text-lg font-bold select-none">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
