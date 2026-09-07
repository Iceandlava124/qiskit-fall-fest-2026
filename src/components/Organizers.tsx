import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { organizers } from '../data/organizers';
import { Camera, GraduationCap, Users } from 'lucide-react';

export default function Organizers() {
  const leadOrganizer = organizers.find((o) => o.category === 'lead') || organizers[0];
  const facultyOrganizers = organizers.filter((o) => o.category === 'faculty');
  const studentOrganizers = organizers.filter((o) => o.category === 'student');

  return (
    <section id="organizers" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Organizing Committee"
            subtitle="Faculty leadership & student organizers for Qiskit Fall Fest 2026 at VIT Chennai"
          />
        </AnimatedSection>

        {/* Featured Lead Organizer Card */}
        <AnimatedSection delay={0.1}>
          <div className="mb-14 p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-8">
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
                {leadOrganizer.designation ? `${leadOrganizer.designation} · ` : ''}{leadOrganizer.affiliation || 'Vellore Institute of Technology (VIT Chennai)'}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
                Directing the academic program, university partnerships, hackathon problem statements,
                and student engagement for the 2026 festival.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Faculty Co-Organizers */}
        <div className="mb-14">
          <AnimatedSection delay={0.15}>
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
              <Users size={18} className="text-quantum-purple" />
              <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                Faculty Co-Organizers
              </h3>
              <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full ml-auto font-medium">
                {facultyOrganizers.length} Members
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyOrganizers.map((org, i) => (
              <AnimatedSection key={org.name} delay={0.15 + i * 0.05}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-xs transition-all flex items-center gap-4 h-full">
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
                      {org.affiliation || 'VIT Chennai'}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Student Organizers */}
        <div>
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
              <GraduationCap size={18} className="text-quantum-purple" />
              <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                Student Organizers
              </h3>
              <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full ml-auto font-medium">
                {studentOrganizers.length} Members
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentOrganizers.map((org, i) => (
              <AnimatedSection key={org.name} delay={0.25 + i * 0.05}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-xs transition-all flex items-center gap-4 h-full">
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
                      {org.affiliation || 'VIT Chennai'}
                    </p>
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
