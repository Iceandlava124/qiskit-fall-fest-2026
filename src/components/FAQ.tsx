import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/faqs';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-slate-50/60 relative overflow-hidden border-y border-slate-200 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about participation, prerequisites, and event structure"
          />
        </AnimatedSection>

        {/* Responsive Desktop 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={faq.question} delay={i * 0.05}>
                <div
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'border-quantum-purple bg-white shadow-sm'
                      : 'border-slate-200 bg-white hover:border-quantum-purple/40 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5">
                      <HelpCircle
                        size={18}
                        className={`flex-shrink-0 mt-0.5 transition-colors ${
                          isOpen ? 'text-quantum-purple' : 'text-slate-400'
                        }`}
                      />
                      <span className="font-heading font-semibold text-slate-900 text-base sm:text-lg leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 flex-shrink-0 mt-1 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-quantum-purple' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 pl-12 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Desktop Help Support Row */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-slate-900">Still have questions about OD letters or team eligibility?</p>
              <p className="text-xs text-slate-500 mt-0.5">The organizing team from School of Advanced Sciences and The QuantumPlators Club at VIT Chennai is here to help.</p>
            </div>
            <a
              href="mailto:quantumplators@vit.ac.in"
              className="inline-flex items-center px-5 py-2.5 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors shadow-xs"
            >
              Contact Organizing Team
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
