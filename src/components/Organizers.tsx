import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { organizers } from '../data/organizers';
import { Camera } from 'lucide-react';

export default function Organizers() {
  const leadOrganizer = organizers.find((o) => o.role === 'Lead Organizer') || organizers[0];
  const coOrganizers = organizers.filter((o) => o.role !== 'Lead Organizer');

  return (
    <section id="organizers" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Organizing Committee"
            subtitle="Faculty leadership for Qiskit Fall Fest 2026 at VIT Chennai"
          />
        </AnimatedSection>

        {/* Featured Lead Organizer Card */}
        <AnimatedSection delay={0.1}>
          <div className="mb-10 p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Labeled Photo Placeholder or Real Photo */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center justify-center text-center overflow-hidden flex-shrink-0">
              {leadOrganizer.image ? (
                <img
                  src={leadOrganizer.image}
                  alt={leadOrganizer.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="p-3 flex flex-col items-center justify-center">
                  <Camera size={20} className="text-slate-400 mb-1.5" />
                  <span className="text-[10px] font-mono text-slate-500 leading-tight">
                    Photo coming soon
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 text-center sm:text-left">
              <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                Lead Organizer
              </span>
              <h3 className="font-heading font-bold text-slate-900 text-2xl sm:text-3xl mt-1 mb-2">
                {leadOrganizer.name}
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                {leadOrganizer.designation ? `${leadOrganizer.designation} · ` : ''}Vellore Institute of Technology (VIT Chennai)
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
                Directing the academic program, university partnerships, hackathon problem statements,
                and student engagement for the 2026 festival.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Co-Organizers in a balanced grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coOrganizers.map((org, i) => (
            <AnimatedSection key={org.name} delay={0.15 + i * 0.05}>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-xs transition-all flex items-center gap-4 h-full">
                {/* Labeled Photo Placeholder or Real Photo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center justify-center text-center overflow-hidden flex-shrink-0">
                  {org.image ? (
                    <img
                      src={org.image}
                      alt={org.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="p-1 flex flex-col items-center justify-center">
                      <Camera size={16} className="text-slate-400 mb-0.5" />
                      <span className="text-[8px] font-mono text-slate-400 leading-none">
                        Pending
                      </span>
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-heading font-semibold text-slate-900 text-base truncate">
                    {org.name}
                  </h4>
                  <p className="text-xs font-mono text-quantum-purple mt-0.5">
                    {org.designation ? `${org.designation} · ${org.role}` : org.role}
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 mt-1">
                    VIT Chennai
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
