import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { quantumConcepts } from '../data/concepts';
import {
  Atom,
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  Code2,
  ExternalLink,
} from 'lucide-react';

export default function ConceptExplainer() {
  // Simulator State: [alpha, beta] where state = alpha|0> + beta|1>
  const [state, setState] = useState<{ alpha: number; beta: number; gates: string[] }>({
    alpha: 1,
    beta: 0,
    gates: [],
  });

  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCardCode, setCopiedCardCode] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeConceptId, setActiveConceptId] = useState<string>(quantumConcepts[0].id);

  // Gate actions
  const applyHadamard = () => {
    // H = 1/sqrt(2) * [[1, 1], [1, -1]]
    const invSqrt2 = 1 / Math.SQRT2;
    const newAlpha = (state.alpha + state.beta) * invSqrt2;
    const newBeta = (state.alpha - state.beta) * invSqrt2;
    setState({
      alpha: Number(newAlpha.toFixed(4)),
      beta: Number(newBeta.toFixed(4)),
      gates: [...state.gates, 'qc.h(0)'],
    });
  };

  const applyPauliX = () => {
    // X swaps alpha and beta
    setState({
      alpha: state.beta,
      beta: state.alpha,
      gates: [...state.gates, 'qc.x(0)'],
    });
  };

  const applyPauliZ = () => {
    // Z changes beta to -beta
    setState({
      alpha: state.alpha,
      beta: -state.beta,
      gates: [...state.gates, 'qc.z(0)'],
    });
  };

  const resetState = () => {
    setState({
      alpha: 1,
      beta: 0,
      gates: [],
    });
  };

  // Probabilities
  const prob0 = Math.min(100, Math.max(0, Math.round(state.alpha * state.alpha * 100)));
  const prob1 = Math.min(100, Math.max(0, 100 - prob0));

  // Generated code string
  const generatedCode = `from qiskit import QuantumCircuit

# Initialize 1-qubit circuit with 1 classical bit
qc = QuantumCircuit(1, 1)

${state.gates.length > 0 ? state.gates.join('\n') : '# Initial state |0> (No gates applied yet)'}

# Measure qubit 0 into classical bit 0
qc.measure(0, 0)`;

  const handleCopySimulator = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyCard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCardCode(id);
    setTimeout(() => setCopiedCardCode(null), 2000);
  };

  const categories = [
    'All',
    'Foundations',
    'Qiskit SDK',
    'Biomedical & Healthcare',
    'Algorithms & Crypto',
  ];

  const filteredConcepts =
    activeCategory === 'All'
      ? quantumConcepts
      : quantumConcepts.filter((c) => c.category === activeCategory);

  const selectedConcept =
    quantumConcepts.find((c) => c.id === activeConceptId) || quantumConcepts[0];

  return (
    <section
      id="concept-explainer"
      className="py-20 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-slate-50/70 relative overflow-hidden border-y border-slate-200 flex items-center justify-center"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-quantum-purple/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/20 text-quantum-purple font-mono text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              Educational Centerpiece
            </span>
            <SectionHeading
              title="Quantum Concept Explainer"
              subtitle="Explore the fundamental physics, IBM Qiskit code syntax, and biomedical applications through live interactive visual tools"
            />
          </div>
        </AnimatedSection>

        {/* 1. Interactive Live Gate & State Simulator Widget */}
        <AnimatedSection delay={0.1}>
          <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
              <div>
                <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                  Interactive Lab
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-1">
                  Single-Qubit State & Gate Simulator
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Apply quantum logic gates in real time to witness wavefunction transformation and inspection probabilities.
                </p>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetState}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-mono font-medium transition-colors"
              >
                <RotateCcw size={14} className="text-quantum-purple" />
                <span>Reset to |0⟩</span>
              </button>
            </div>

            {/* Interactive Grid: Gate Controls + State Amplitudes + Qiskit Code Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Controls Column */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                    Click to Apply Gate
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={applyHadamard}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-quantum-purple hover:text-white hover:border-quantum-purple text-slate-800 transition-all flex flex-col items-center justify-center group shadow-xs"
                      title="Hadamard Gate: Creates Equal Superposition"
                    >
                      <span className="font-heading font-bold text-xl mb-1">H</span>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-white/80">
                        Superposition
                      </span>
                    </button>

                    <button
                      onClick={applyPauliX}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-quantum-purple hover:text-white hover:border-quantum-purple text-slate-800 transition-all flex flex-col items-center justify-center group shadow-xs"
                      title="Pauli-X Gate: Quantum NOT / Bit Flip"
                    >
                      <span className="font-heading font-bold text-xl mb-1">X</span>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-white/80">
                        Bit-Flip
                      </span>
                    </button>

                    <button
                      onClick={applyPauliZ}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-quantum-purple hover:text-white hover:border-quantum-purple text-slate-800 transition-all flex flex-col items-center justify-center group shadow-xs"
                      title="Pauli-Z Gate: Phase Flip"
                    >
                      <span className="font-heading font-bold text-xl mb-1">Z</span>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-white/80">
                        Phase-Flip
                      </span>
                    </button>
                  </div>
                </div>

                {/* State Vector Readout */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Current Quantum State |ψ⟩
                  </div>
                  <div className="font-mono text-base sm:text-lg font-bold text-slate-900 mb-4 bg-white p-3 rounded-lg border border-slate-200">
                    |ψ⟩ = {state.alpha >= 0 ? state.alpha : `- ${Math.abs(state.alpha)}`}|0⟩{' '}
                    {state.beta >= 0 ? `+ ${state.beta}` : `- ${Math.abs(state.beta)}`}|1⟩
                  </div>

                  {/* Measurement Probabilities */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-slate-700 mb-1">
                        <span>P(Measure |0⟩):</span>
                        <span className="font-bold text-quantum-purple">{prob0}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-quantum-purple transition-all duration-300 rounded-full"
                          style={{ width: `${prob0}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono text-slate-700 mb-1">
                        <span>P(Measure |1⟩):</span>
                        <span className="font-bold text-slate-900">{prob1}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-slate-700 transition-all duration-300 rounded-full"
                          style={{ width: `${prob1}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Python Code Generator Column */}
              <div className="lg:col-span-8 h-full">
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <Code2 size={15} className="text-quantum-purple" />
                        <span>generated_qiskit_circuit.py</span>
                      </div>
                      <button
                        onClick={handleCopySimulator}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors"
                      >
                        {copiedCode ? (
                          <>
                            <Check size={13} className="text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} />
                            <span>Copy Qiskit Code</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="overflow-x-auto text-slate-300 leading-relaxed font-mono">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>

                  <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between mt-6">
                    <span>Target SDK: Qiskit 1.x (IBM Quantum Runtime)</span>
                    <a
                      href="https://qiskit.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-quantum-purple-light hover:underline inline-flex items-center gap-1"
                    >
                      <span>Qiskit Documentation</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* 2. Curated Concepts Explorer Header & Category Selector */}
        <AnimatedSection delay={0.15}>
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-2xl font-heading font-bold text-slate-900">
                Core Quantum Curriculum & Problem Tracks
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Theoretical and algorithmic foundations taught throughout the 3-day festival
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                      isActive
                        ? 'bg-quantum-purple text-white font-semibold shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredConcepts.map((item, idx) => {
            const isSelected = activeConceptId === item.id;
            return (
              <AnimatedSection key={item.id} delay={0.15 + idx * 0.04}>
                <div
                  onClick={() => setActiveConceptId(item.id)}
                  className={`p-7 rounded-2xl bg-white border cursor-pointer transition-all flex flex-col justify-between h-full hover:shadow-md ${
                    isSelected
                      ? 'border-quantum-purple shadow-sm ring-1 ring-quantum-purple/30'
                      : 'border-slate-200 hover:border-quantum-purple/40 shadow-xs'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-quantum-purple font-semibold">
                        Concept {item.number}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                    </div>

                    <h5 className="font-heading font-bold text-slate-900 text-lg mb-2 leading-snug">
                      {item.title}
                    </h5>

                    {item.math && (
                      <div className="text-xs font-mono text-quantum-purple bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg mb-3">
                        {item.math}
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {item.summary}
                    </p>
                  </div>

                  {/* Track Relevance Badge */}
                  <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                    <span className="text-quantum-purple font-medium">Relevance: </span>
                    {item.relevance}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* 4. Active Deep-Dive Inspector Panel */}
        <AnimatedSection delay={0.25}>
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <Atom size={16} className="text-quantum-purple" />
                  <span className="text-xs font-mono text-quantum-purple uppercase tracking-wider font-semibold">
                    Deep Dive · Concept {selectedConcept.number}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 mb-4">
                  {selectedConcept.title}
                </h3>

                {selectedConcept.math && (
                  <div className="inline-block font-mono text-sm sm:text-base font-semibold text-slate-900 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl mb-6">
                    {selectedConcept.math}
                  </div>
                )}

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  {selectedConcept.deepDive}
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
                  <span className="font-semibold text-slate-900">Festival Application: </span>
                  {selectedConcept.relevance}
                </div>
              </div>

              {/* Code Snippet Card */}
              {selectedConcept.codeSnippet && (
                <div className="lg:col-span-5">
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                      <span className="text-slate-400 text-xs">Qiskit Implementation</span>
                      <button
                        onClick={() =>
                          handleCopyCard(selectedConcept.codeSnippet!, selectedConcept.id)
                        }
                        className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
                      >
                        {copiedCardCode === selectedConcept.id ? (
                          <>
                            <Check size={12} className="text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="overflow-x-auto text-slate-300 leading-relaxed font-mono">
                      <code>{selectedConcept.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              )}

            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
