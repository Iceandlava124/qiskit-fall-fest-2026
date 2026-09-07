import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { Phone } from 'lucide-react';

const contacts = [
  {
    name: 'Ms. Nathimalar Chandran',
    role: 'Project Assistant',
    mobile: '+91 9566414309',
    tel: '+919566414309',
    image: '/organizers/nathimalar-chandran.jpg',
  },
  {
    name: 'Tarun Ashwat',
    role: 'Student Organizer',
    mobile: '+91 79046 57545',
    tel: '+917904657545',
    image: '/organizers/tarun-ashwat.jpg',
  },
  {
    name: 'Adithya K',
    role: 'Student Organizer',
    mobile: '+91 84381 29288',
    tel: '+918438129288',
    image: '/organizers/adithya-k.jpg',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#0b0b12] relative overflow-hidden border-y border-quantum-border/60 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Contact Us"
            subtitle="Get in touch with the organizing committee for queries regarding participation, OD letters, and event details"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {contacts.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 0.08}>
              <div className="p-7 sm:p-8 rounded-2xl bg-quantum-surface/60 border border-quantum-border hover:border-quantum-purple/40 transition-colors flex flex-col justify-between h-full">
                <div className="flex items-start gap-4 mb-6">
                  {/* Photo avatar */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-quantum-surface border border-quantum-border/80 overflow-hidden flex-shrink-0">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="font-heading font-bold text-white text-lg sm:text-xl truncate">
                      {c.name}
                    </h4>
                    <p className="text-xs font-mono text-quantum-purple mt-0.5 font-medium">
                      {c.role}
                    </p>
                    <p className="text-[11px] font-mono text-quantum-text-secondary/70 mt-1">
                      VIT Chennai
                    </p>
                  </div>
                </div>

                {/* Mobile Call CTA */}
                <div className="pt-4 border-t border-quantum-border/40">
                  <a
                    href={`tel:${c.tel}`}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-quantum-text hover:text-white transition-colors group"
                  >
                    <Phone size={15} className="text-quantum-purple group-hover:scale-110 transition-transform" />
                    <span className="font-mono">{c.mobile}</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
