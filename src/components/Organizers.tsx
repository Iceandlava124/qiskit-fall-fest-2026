import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { chiefPatron, patrons, organizers } from '../data/organizers';
import { Camera, GraduationCap, Users, Crown, Award } from 'lucide-react';

export default function Organizers() {
  const leadOrganizers = organizers.filter((o) => o.category === 'lead');
  const facultyOrganizers = organizers.filter((o) => o.category === 'faculty');
  const studentOrganizers = organizers.filter((o) => o.category === 'student');

  return (
    <section id="organizers" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="Patrons & Organizing Committee" />
        </AnimatedSection>

        {/* 1. Chief Patron */}
        <div className="mb-16">
          <AnimatedSection delay={0.08}>
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
              <Crown size={18} className="text-quantum-purple" />
              <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                Chief Patron
              </h3>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center justify-center text-center overflow-hidden flex-shrink-0">
                <img
                  src={chiefPatron.image}
                  alt={chiefPatron.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                  Chief Patron
                </span>
                <h3 className="font-heading font-bold text-slate-900 text-2xl sm:text-3xl mt-1 mb-1">
                  {chiefPatron.name}
                </h3>
                <p className="text-sm font-semibold text-slate-700">
                  {chiefPatron.designation}
                </p>
                <p className="text-xs font-mono text-slate-500">
                  {chiefPatron.institution}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 2. Patrons Grid */}
        <div className="mb-20">
          <AnimatedSection delay={0.12}>
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
              <Award size={18} className="text-quantum-purple" />
              <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                Patrons
              </h3>
              <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full ml-auto font-medium">
                {patrons.length} Dignitaries
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {patrons.map((patron, i) => (
              <AnimatedSection key={patron.name} delay={0.12 + i * 0.04}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-quantum-purple/40 shadow-xs transition-all flex items-center gap-4 h-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center justify-center text-center overflow-hidden flex-shrink-0">
                    <img
                      src={patron.image}
                      alt={patron.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-heading font-bold text-slate-900 text-base leading-snug">
                      {patron.name}
                    </h4>
                    <p className="text-xs font-mono text-quantum-purple font-semibold mt-1">
                      {patron.designation}
                    </p>
                    <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                      {patron.institution}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* 3. Organizing Committee (Below Patrons) */}
        <div className="pt-12 border-t border-slate-200">
          <AnimatedSection delay={0.16}>
            <div className="mb-10 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/20 text-quantum-purple font-mono text-xs font-semibold uppercase tracking-wider mb-2">
                <Users size={13} />
                Execution Committee
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                Organizing Committee
              </h3>
            </div>
          </AnimatedSection>

          {/* Lead & Co-Lead Organizers Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            {leadOrganizers.map((lead, i) => (
              <AnimatedSection key={lead.name} delay={0.18 + i * 0.05}>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 h-full">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center justify-center text-center overflow-hidden flex-shrink-0">
                    {lead.image ? (
                      <img
                        src={lead.image}
                        alt={lead.name}
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

                  <div className="flex-1 text-center sm:text-left min-w-0">
                    <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                      {lead.role}
                    </span>
                    <h4 className="font-heading font-bold text-slate-900 text-xl sm:text-2xl mt-1 mb-1 truncate">
                      {lead.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {lead.designation ? `${lead.designation} · ` : ''}{lead.affiliation || 'Vellore Institute of Technology (VIT Chennai)'}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Faculty Co-Organizers */}
          <div className="mb-14">
            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                <Users size={18} className="text-quantum-purple" />
                <h4 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                  Faculty Co-Organizers
                </h4>
                <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full ml-auto font-medium">
                  {facultyOrganizers.length} Members
                </span>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyOrganizers.map((org, i) => (
                <AnimatedSection key={org.name} delay={0.2 + i * 0.05}>
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
                      <h5 className="font-heading font-semibold text-slate-900 text-base truncate">
                        {org.name}
                      </h5>
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
            <AnimatedSection delay={0.24}>
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                <GraduationCap size={18} className="text-quantum-purple" />
                <h4 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                  Student Organizers
                </h4>
                <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full ml-auto font-medium">
                  {studentOrganizers.length} Members
                </span>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentOrganizers.map((org, i) => (
                <AnimatedSection key={org.name} delay={0.26 + i * 0.05}>
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
                      <h5 className="font-heading font-semibold text-slate-900 text-base truncate">
                        {org.name}
                      </h5>
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
      </div>
    </section>
  );
}
