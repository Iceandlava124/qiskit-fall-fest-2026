import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { quantumFacts } from '../data/facts';
import { ChevronLeft, ChevronRight, Atom } from 'lucide-react';

export default function QuantumFactSection() {
  const [index, setIndex] = useState(0); // Start on Superposition
  const [revealed, setRevealed] = useState(true);

  const currentFact = quantumFacts[index];

  const handleSelect = (newIndex: number) => {
    if (newIndex === index) return;
    setRevealed(false);
    setTimeout(() => {
      setIndex(newIndex);
      setRevealed(true);
    }, 150);
  };

  const handleNext = () => {
    handleSelect((index + 1) % quantumFacts.length);
  };

  const handlePrev = () => {
    handleSelect((index - 1 + quantumFacts.length) % quantumFacts.length);
  };

  return (
    <section id="quantum-facts" className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Quantum Concept Explorer"
            subtitle="Core principles of quantum physics, computational mechanics, and IBM Qiskit architecture"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Interactive Concept Browser (Desktop) */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <div className="text-xs font-mono text-quantum-text-secondary uppercase tracking-wider mb-2 px-1 flex items-center justify-between">
                <span>Select Concept</span>
                <span className="text-quantum-purple">{index + 1} of {quantumFacts.length}</span>
              </div>

              {/* Scrollable list of topics */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {quantumFacts.slice(0, 7).map((fact, idx) => {
                  const isActive = index === idx;
                  return (
                    <button
                      key={fact.id}
                      onClick={() => handleSelect(idx)}
                      className={`text-left p-3.5 sm:p-4 rounded-xl border text-sm font-medium transition-colors flex items-center justify-between gap-3 whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink ${
                        isActive
                          ? 'bg-quantum-purple text-white border-quantum-purple shadow-md'
                          : 'bg-quantum-surface/40 border-quantum-border text-quantum-text-secondary hover:text-white hover:bg-quantum-surface/70'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`text-xs font-mono ${isActive ? 'text-white/80' : 'text-quantum-purple'}`}>
                          0{fact.id}
                        </span>
                        <span className="truncate">{fact.title}</span>
                      </div>
                      <span className={`hidden lg:inline text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-white/20 text-white' : 'bg-quantum-surface text-quantum-text-secondary'
                      }`}>
                        {fact.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Deep-Dive Concept Card */}
            <div className="lg:col-span-8">
              <div className="p-8 sm:p-12 rounded-2xl bg-quantum-surface/60 border border-quantum-border relative h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-quantum-border/60 pb-5 mb-8">
                    <div className="flex items-center gap-2">
                      <Atom size={16} className="text-quantum-purple" />
                      <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                        Concept {String(currentFact.id).padStart(2, '0')} · {currentFact.tag}
                      </span>
                    </div>

                    {/* Prev / Next controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="p-2 rounded-lg border border-quantum-border bg-quantum-surface hover:border-quantum-purple/50 text-quantum-text-secondary hover:text-white transition-colors"
                        aria-label="Previous concept"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2 rounded-lg border border-quantum-border bg-quantum-surface hover:border-quantum-purple/50 text-quantum-text-secondary hover:text-white transition-colors"
                        aria-label="Next concept"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-6">
                    {currentFact.title}
                  </h3>

                  <div
                    className={`transition-opacity duration-200 ${
                      revealed ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-base sm:text-lg text-quantum-text-secondary leading-relaxed font-normal">
                      {currentFact.fact}
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-quantum-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-quantum-text-secondary/70">
                  <span>Verified academic curriculum topic for Fall Fest workshops</span>
                  <span className="text-quantum-purple font-medium">Included in Qiskit SDK 1.x</span>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
