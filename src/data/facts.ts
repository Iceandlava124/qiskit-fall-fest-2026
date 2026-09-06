export interface QuantumFact {
  id: number;
  title: string;
  fact: string;
  tag: string;
}

export const quantumFacts: QuantumFact[] = [
  {
    id: 1,
    title: 'Superposition',
    fact: 'A classical bit is either 0 or 1. A qubit exists as a linear combination |ψ⟩ = α|0⟩ + β|1⟩, allowing quantum algorithms to explore multidimensional solution spaces simultaneously.',
    tag: 'Foundations',
  },
  {
    id: 2,
    title: 'Quantum Entanglement',
    fact: 'Entangled qubits exhibit correlations with no classical counterpart. Measuring one immediately dictates the state of the other, which Einstein famously described as "spooky action at a distance."',
    tag: 'Phenomenon',
  },
  {
    id: 3,
    title: 'Open Source with Qiskit',
    fact: 'Qiskit was launched in 2017 as an open-source SDK. It enables developers worldwide to write quantum circuits in Python and simulate them locally or execute them on real quantum hardware.',
    tag: 'Qiskit',
  },
  {
    id: 4,
    title: 'The Bloch Sphere',
    fact: 'Every single-qubit pure state corresponds to a unique point on the surface of a unit sphere called the Bloch sphere, with north pole |0⟩ and south pole |1⟩.',
    tag: 'Geometry',
  },
  {
    id: 5,
    title: 'No-Cloning Theorem',
    fact: 'It is mathematically impossible to create an identical copy of an arbitrary unknown quantum state. This fundamental property forms the physical foundation of quantum cryptography.',
    tag: 'Quantum Theory',
  },
  {
    id: 6,
    title: 'Hadamard Gate',
    fact: 'The Hadamard gate creates an equal superposition of |0⟩ and |1⟩. Applying it to |0⟩ yields (|0⟩ + |1⟩)/√2, placing the state right on the equator of the Bloch sphere.',
    tag: 'Circuits',
  },
  {
    id: 7,
    title: 'Transpilation in Qiskit',
    fact: 'Real quantum hardware only supports specific native gates and coupling maps. Qiskit’s transpiler synthesizes, optimizes, and routes circuits to match target hardware constraints.',
    tag: 'Qiskit Tools',
  },
  {
    id: 8,
    title: 'Quantum Interference',
    fact: 'Quantum algorithms are designed so that probability amplitudes of incorrect answers interfere destructively (cancel out), while the amplitude of the correct answer interferes constructively.',
    tag: 'Algorithms',
  },
  {
    id: 9,
    title: 'Shor’s Algorithm',
    fact: 'Published by Peter Shor in 1994, it factors large integers in polynomial time on an ideal quantum computer, providing an exponential speedup over known classical methods.',
    tag: 'Algorithms',
  },
  {
    id: 10,
    title: 'Grover’s Search',
    fact: 'Grover’s algorithm provides a quadratic speedup for searching unsorted datasets of N items, finding target entries in roughly √N steps rather than N/2 classical operations.',
    tag: 'Algorithms',
  },
  {
    id: 11,
    title: 'Decoherence & Error Mitigation',
    fact: 'Quantum states are fragile and subject to thermal noise and environmental interference. Active research focuses on error mitigation and fault-tolerant quantum error correction.',
    tag: 'Hardware',
  },
  {
    id: 12,
    title: 'Phase Kickback',
    fact: 'In quantum circuits, phase kickback transfers information from a target qubit to the phase of a control qubit, a core building block used in Phase Estimation and Shor’s algorithm.',
    tag: 'Circuit Design',
  },
];
