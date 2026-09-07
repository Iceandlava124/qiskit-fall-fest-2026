export interface ConceptItem {
  id: string;
  number: string;
  category: 'Foundations' | 'Qiskit SDK' | 'Algorithms & Crypto' | 'Algorithms & Applications';
  title: string;
  math?: string;
  summary: string;
  deepDive: string;
  codeSnippet?: string;
  relevance: string;
}

export const quantumConcepts: ConceptItem[] = [
  {
    id: 'superposition',
    number: '01',
    category: 'Foundations',
    title: 'Quantum Superposition',
    math: '|ψ⟩ = α|0⟩ + β|1⟩  (where |α|² + |β|² = 1)',
    summary: 'Unlike classical bits that are strictly 0 or 1, a qubit exists in a simultaneous continuum of states until measured.',
    deepDive: 'Superposition enables quantum processors to evaluate high-dimensional mathematical spaces simultaneously. In real-world applications, this property allows evaluating millions of molecular conformations and state vectors in parallel rather than sequentially.',
    codeSnippet: `from qiskit import QuantumCircuit\n\nqc = QuantumCircuit(1, 1)\nqc.h(0)  # Applies Hadamard gate -> equal superposition (|0> + |1>)/sqrt(2)\nqc.measure(0, 0)`,
    relevance: 'Essential for state preparation in every quantum algorithm and hackathon project.',
  },
  {
    id: 'entanglement',
    number: '02',
    category: 'Foundations',
    title: 'Quantum Entanglement & Bell States',
    math: '|Φ⁺⟩ = (|00⟩ + |11⟩) / √2',
    summary: 'Two or more qubits become intrinsically linked such that the state of one instantly dictates the other, regardless of distance.',
    deepDive: 'Entanglement produces non-local quantum correlations with no classical equivalent. It is the cornerstone of Quantum Key Distribution (QKD), superdense coding, and quantum teleportation protocols.',
    codeSnippet: `qc = QuantumCircuit(2, 2)\nqc.h(0)         # Put qubit 0 in superposition\nqc.cx(0, 1)     # CNOT creates entangled Bell pair\nqc.measure([0, 1], [0, 1])`,
    relevance: 'Core principle for Hackathon Track 2: Quantum Cryptography & Communication.',
  },
  {
    id: 'bloch-sphere',
    number: '03',
    category: 'Foundations',
    title: 'The Bloch Sphere Representation',
    math: '|ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩',
    summary: 'A geometric unit sphere representation where every pure single-qubit state corresponds to a unique coordinate (θ, φ).',
    deepDive: 'The north pole represents |0⟩, the south pole represents |1⟩, and the equator represents equal superpositions. Unitary single-qubit quantum gates correspond to geometric rotations around the X, Y, and Z axes.',
    codeSnippet: `from qiskit.visualization import plot_bloch_multivector\nfrom qiskit.quantum_info import Statevector\n\nsv = Statevector.from_instruction(qc)\n# Visualizes 3D rotation on the Bloch sphere`,
    relevance: 'Interactive 3D Bloch sphere is simulated live right on the hero section of this site.',
  },
  {
    id: 'qiskit-primitives',
    number: '04',
    category: 'Qiskit SDK',
    title: 'Qiskit Runtime Primitives (Sampler & Estimator)',
    math: '⟨O⟩ = ⟨ψ|O|ψ⟩  (Estimator)  |  P(x) = |⟨x|ψ⟩|²  (Sampler)',
    summary: 'The execution interface for IBM Quantum hardware: Sampler extracts output quasi-probabilities, while Estimator computes expectation values.',
    deepDive: 'Qiskit Runtime primitives replace legacy execution loops, optimizing job scheduling, error mitigation, and co-located classical-quantum feedback loops directly on IBM Quantum superconducting systems.',
    codeSnippet: `from qiskit_ibm_runtime import QiskitRuntimeService, EstimatorV2 as Estimator\n\nservice = QiskitRuntimeService()\nestimator = Estimator(backend=service.least_busy())\n# Compute expectation value of Hamiltonian operator`,
    relevance: 'Mandatory standard for executing real quantum jobs during Day 2 & Day 3 labs.',
  },
  {
    id: 'transpilation',
    number: '05',
    category: 'Qiskit SDK',
    title: 'Circuit Transpilation & Hardware Optimization',
    math: 'U_target ⟶ Π native_gates (optimized for device topology)',
    summary: 'Rewriting abstract mathematical circuits into optimal native physical gates compatible with hardware coupling maps.',
    deepDive: 'Qiskit transpiler passes optimize circuit depth, cancel redundant gate operations, swap virtual qubits to respect physical connectivity, and insert dynamical decoupling pulses to suppress environmental noise.',
    codeSnippet: `from qiskit.transpiler.preset_passmanagers import generate_preset_pass_manager\n\npm = generate_preset_pass_manager(optimization_level=3, backend=backend)\noptimized_circuit = pm.run(qc)`,
    relevance: 'Directly evaluated in hackathon rubric: teams with lower circuit depth score higher.',
  },
  {
    id: 'vqe-healthcare',
    number: '06',
    category: 'Algorithms & Applications',
    title: 'VQE for Molecular Simulation & Complex Chemistry',
    math: 'E_0 ≤ ⟨ψ(θ)| H_molecule |ψ(θ)⟩  (Rayleigh-Ritz Variational Principle)',
    summary: 'A hybrid quantum-classical algorithm that computes the ground state energy and electron structure of complex molecules.',
    deepDive: 'Classical supercomputers struggle exponentially with quantum electron correlations in complex drugs, materials, and enzymes. VQE prepares parameterized trial wavefunctions on a quantum computer and optimizes parameters via classical optimizers.',
    codeSnippet: `from qiskit_algorithms import VQE\nfrom qiskit_algorithms.optimizers import COBYLA\nfrom qiskit.circuit.library import TwoLocal\n\nansatz = TwoLocal(num_qubits=4, ['ry', 'rz'], 'cz', reps=2)\nvqe = VQE(estimator=estimator, ansatz=ansatz, optimizer=COBYLA())`,
    relevance: 'Core application for Hackathon Track 4: Quantum Computing Applications.',
  },
  {
    id: 'qml-kernels',
    number: '07',
    category: 'Algorithms & Applications',
    title: 'Quantum Machine Learning & Quantum Kernels',
    math: 'K(x_i, x_j) = |⟨ϕ(x_i)|ϕ(x_j)⟩|²  (Feature Map Inner Product)',
    summary: 'Mapping biomedical patient and genomic data into high-dimensional quantum Hilbert spaces for superior classification.',
    deepDive: 'Quantum kernel methods map non-linear biomedical datasets into quantum states where linear classification algorithms (like Support Vector Machines) can accurately distinguish disease biomarkers and malignant cellular profiles.',
    codeSnippet: `from qiskit_machine_learning.kernels import FidelityQuantumKernel\nfrom qiskit.circuit.library import ZZFeatureMap\n\nfeature_map = ZZFeatureMap(feature_dimension=4, reps=2)\nkernel = FidelityQuantumKernel(feature_map=feature_map)`,
    relevance: 'Primary foundation for Day 2 Sessions 5 & 8 and Hackathon Track 1.',
  },
  {
    id: 'qkd-security',
    number: '08',
    category: 'Algorithms & Crypto',
    title: 'Quantum Key Distribution (QKD & BB84)',
    math: 'No-Cloning Theorem: |ψ⟩ ↛ |ψ⟩|ψ⟩',
    summary: 'A communication method that utilizes quantum mechanics principles to guarantee secure transmission of cryptographic keys.',
    deepDive: 'Because measuring an unknown quantum state irreversibly alters it (wavefunction collapse), any eavesdropper (Eve) trying to intercept photons on the quantum channel introduces detectable errors, alerting the communicating parties (Alice & Bob).',
    codeSnippet: `# BB84 state preparation logic in Qiskit\n# Alice chooses random bit (0/1) and random basis (Computational/Hadamard)\nif alice_basis == 'H':\n    qc.h(qubit_idx)  # encode in X basis`,
    relevance: 'Primary focus of Session 6 and Hackathon Track 2: Quantum Cryptography.',
  },
  {
    id: 'error-correction',
    number: '09',
    category: 'Algorithms & Crypto',
    title: 'Quantum Error Correction & Surface Codes',
    math: 'S_i |ψ_L⟩ = +1 |ψ_L⟩  (Stabilizer condition)',
    summary: 'Protecting quantum information against decoherence and physical gate noise by encoding 1 logical qubit across multiple physical qubits.',
    deepDive: 'Unlike classical parity checks which can copy bits, quantum error correction must measure multi-qubit syndrome operators without collapsing the encoded quantum superposition. Surface codes are currently the leading architecture for fault-tolerant quantum computing.',
    codeSnippet: `# Conceptual 3-qubit bit flip code syndrome detection\nqc.cx(0, 1)\nqc.cx(0, 2)\n# Syndrome measurement with ancilla qubits detects bit flips`,
    relevance: 'Directly aligns with Hackathon Track 3: Quantum Error Correction.',
  },
];
