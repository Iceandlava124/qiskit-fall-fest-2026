export interface ScheduleSession {
  timeframe: string;
  title: string;
  description: string;
  speaker?: string;
  tags: string[];
}

export interface ScheduleEntry {
  dayLabel: string;
  date: string;
  title: string;
  subtitle: string;
  isExtension?: boolean;
  content: string;
  sessions: ScheduleSession[];
}

export const schedule: ScheduleEntry[] = [
  {
    dayLabel: 'Day 1',
    date: 'October 12, 2026',
    title: 'Quantum Foundations & Industry Horizons',
    subtitle: 'Inaugural Ceremony, Core Principles & Interactive Challenges',
    content:
      'Grand inauguration at MG Auditorium, inaugural keynote, foundational quantum computing concepts, Qiskit SDK introductory architecture, and interactive live quiz challenges.',
    sessions: [
      {
        timeframe: '09:30 AM – 11:00 AM',
        title: 'Grand Inauguration & Opening Keynote',
        description:
          'Inaugural ceremony at MG Auditorium with university leadership, IBM dignitaries, and the host team from The QuantumPlators Club. Keynote address introducing the quantum computing paradigm.',
        tags: ['Inauguration', 'Keynote', 'MG Auditorium'],
      },
      {
        timeframe: '11:15 AM – 01:00 PM',
        title: 'Quantum Computing Fundamentals & Circuit Anatomy',
        description:
          'Deep dive into qubits, superposition, quantum entanglement, unitary quantum gates, and multi-qubit circuit compositions.',
        tags: ['Theory', 'Fundamentals', 'Circuits'],
      },
      {
        timeframe: '01:00 PM – 02:00 PM',
        title: 'Lunch Break & Inter-College Networking',
        description:
          'Buffet lunch and informal networking with faculty mentors, students, and peers from over 50 regional institutions.',
        tags: ['Networking', 'Break'],
      },
      {
        timeframe: '02:00 PM – 03:45 PM',
        title: 'Hands-on Qiskit SDK: Writing Your First Quantum Circuit',
        description:
          'Interactive Python coding session configuring Qiskit environments, creating quantum circuits, executing local simulators, and visualizing statevectors.',
        speaker: 'Anupama Roy, IBM India',
        tags: ['Qiskit SDK', 'Hands-on Lab', 'Python'],
      },
      {
        timeframe: '04:00 PM – 05:00 PM',
        title: 'Live Quantum Quiz & Industry Pathways Panel',
        description:
          'Interactive live challenge testing Day 1 concepts with immediate leaderboard recognition, followed by an overview of quantum career pathways and research opportunities.',
        tags: ['Live Quiz', 'Career Pathways', 'Competition'],
      },
    ],
  },
  {
    dayLabel: 'Day 2',
    date: 'October 13, 2026',
    title: 'Quantum Machine Learning & Healthcare Innovation',
    subtitle: 'Variational Algorithms, QML Architecture & Domain Applications',
    content:
      'Exploration of hybrid quantum-classical algorithms, Variational Quantum Eigensolver (VQE), Quantum Neural Networks, and applications in drug discovery and healthcare.',
    sessions: [
      {
        timeframe: '09:30 AM – 11:00 AM',
        title: 'Quantum Machine Learning & Hybrid AI Algorithms',
        description:
          'Introduction to parameterized quantum circuits, quantum kernels, data encoding techniques, and combining classical PyTorch/TensorFlow pipelines with Qiskit Machine Learning.',
        speaker: 'Bhanwar Gupta, IBM India',
        tags: ['Quantum ML', 'Hybrid AI', 'Qiskit ML'],
      },
      {
        timeframe: '11:15 AM – 01:00 PM',
        title: 'Quantum Computing in Healthcare & Drug Discovery',
        description:
          'Investigating molecular simulation, protein folding modeling, and algorithmic acceleration for biomedical research with quantum chemistry modules.',
        tags: ['Quantum Healthcare', 'Biomedical', 'Algorithms'],
      },
      {
        timeframe: '01:00 PM – 02:00 PM',
        title: 'Lunch Break & Poster Showcase',
        description:
          'Lunch break accompanied by student research poster showcases and project idea discussions.',
        tags: ['Poster Session', 'Break'],
      },
      {
        timeframe: '02:00 PM – 03:45 PM',
        title: 'Guided Hands-on Lab: Variational Classifiers & Optimization',
        description:
          'Step-by-step practical coding of variational quantum algorithms on sample healthcare datasets with error mitigation basics.',
        tags: ['Hands-on Lab', 'Optimization', 'VQE'],
      },
      {
        timeframe: '04:00 PM – 05:00 PM',
        title: 'Expert Panel: Frontiers of Quantum Technologies',
        description:
          'Panel dialogue between academic researchers and industry experts discussing NISQ-era constraints, fault-tolerant roadmaps, and commercial opportunities.',
        tags: ['Expert Panel', 'Discussion', 'Industry'],
      },
    ],
  },
  {
    dayLabel: 'Day 3',
    date: 'October 14, 2026',
    title: 'Hardware Programming & Hackathon Launch',
    subtitle: 'Real IBM Quantum Hardware, Circuit Optimization & Sprint Kickoff',
    content:
      'Executing jobs on real IBM Quantum superconducting backends via Qiskit Runtime, track problem statement release, team formation, and launch of the 24-hour hackathon.',
    sessions: [
      {
        timeframe: '09:30 AM – 11:00 AM',
        title: 'Programming on Real IBM Quantum Hardware & Runtime',
        description:
          'Connecting to IBM Quantum systems via the cloud, utilizing Qiskit Runtime primitives (Sampler & Estimator), and understanding device topology and coupling maps.',
        speaker: 'Guncha Malik, IBM India',
        tags: ['IBM Quantum', 'Cloud Hardware', 'Qiskit Runtime'],
      },
      {
        timeframe: '11:15 AM – 01:00 PM',
        title: 'Quantum Circuit Optimization & Error Mitigation Strategies',
        description:
          'Techniques for reducing circuit depth, transpilation pass managers, readout error mitigation (M3), and Zero-Noise Extrapolation (ZNE).',
        tags: ['Optimization', 'Error Mitigation', 'Transpiler'],
      },
      {
        timeframe: '01:00 PM – 02:00 PM',
        title: 'Lunch Break & Team Preparation',
        description:
          'Final team registration check-ins and environment setup for hackathon participants.',
        tags: ['Team Check-in', 'Break'],
      },
      {
        timeframe: '02:00 PM – 03:30 PM',
        title: 'Hackathon Briefing & Official Track Problem Release',
        description:
          'Unveiling of the 6 official hackathon tracks, evaluation rubric, submission guidelines, and technical mentor introductions.',
        tags: ['Hackathon Briefing', 'Track Release', 'Evaluation Rubric'],
      },
      {
        timeframe: '03:30 PM Onward',
        title: '24-Hour Quantum Hackathon Sprint Begins',
        description:
          'Sprint kick-off! Teams commence development across hackathon tracks with live technical mentor support and continuous lab access through the night.',
        tags: ['Hackathon Launch', 'Overnight Sprint', 'Mentorship'],
      },
    ],
  },
  {
    dayLabel: 'Day 4',
    date: 'October 15, 2026',
    title: 'Overnight Hackathon Sprint & Mentor Checkpoints',
    subtitle: 'Continuous Development, Milestone Reviews & Code Freeze',
    content:
      'Intensive prototyping sprint supported by continuous technical mentorship, formal evaluation checkpoints, code freeze, and project submission.',
    sessions: [
      {
        timeframe: '09:00 AM – 11:00 AM',
        title: 'Hackathon Checkpoint 1: Architecture Review',
        description:
          'Mandatory progress check with assigned technical mentors to review algorithmic design, quantum circuit validity, and classical integration.',
        tags: ['Checkpoint 1', 'Mentor Review', 'Architecture'],
      },
      {
        timeframe: '11:30 AM – 01:00 PM',
        title: 'Mentor Office Hours & Circuit Debugging Clinics',
        description:
          'One-on-one troubleshooting clinics with IBM and faculty mentors for teams facing convergence issues or transpilation errors.',
        tags: ['Office Hours', 'Debugging', 'Optimization'],
      },
      {
        timeframe: '01:00 PM – 02:00 PM',
        title: 'Lunch & Recharge Break',
        description:
          'Participants recharge and regroup before the afternoon sprint push.',
        tags: ['Break', 'Recharge'],
      },
      {
        timeframe: '02:00 PM – 03:30 PM',
        title: 'Hackathon Checkpoint 2: Final Integration & Demos Prep',
        description:
          'Final checkpoint verifying working execution, GitHub repository documentation, and benchmark evidence.',
        tags: ['Checkpoint 2', 'Verification', 'Benchmarking'],
      },
      {
        timeframe: '04:00 PM Sharp',
        title: 'Code Freeze & Project Submission Deadline',
        description:
          'All code, slide decks, and project repositories submitted for jury review. Automated verification pipeline runs.',
        tags: ['Code Freeze', 'Project Submission', 'Deadline'],
      },
    ],
  },
  {
    dayLabel: 'Day 5',
    date: 'October 16, 2026',
    title: 'Project Demonstrations & Grand Valedictory',
    subtitle: 'Finalist Demos, Jury Evaluation, Awards & Closing Ceremony',
    content:
      'Shortlisted teams present before the distinguished jury panel, followed by a quantum career panel, winner announcements, cash prize distribution, and the valedictory ceremony.',
    sessions: [
      {
        timeframe: '09:30 AM – 12:30 PM',
        title: 'Finalist Live Presentations & Jury Defense',
        description:
          'Shortlisted finalist teams showcase live project demos, answer technical questions from the jury, and defend algorithmic novelty.',
        tags: ['Live Demos', 'Jury Evaluation', 'Finalists'],
      },
      {
        timeframe: '12:30 PM – 01:30 PM',
        title: 'Lunch Break & Deliberation Period',
        description:
          'Jury evaluation deliberation and score tabulation.',
        tags: ['Deliberation', 'Break'],
      },
      {
        timeframe: '01:30 PM – 03:00 PM',
        title: 'Quantum Community Horizons: Student & Researcher Panel',
        description:
          'Inspiring panel featuring student builders, graduate scholars, and open-source contributors sharing blueprints for building local quantum communities.',
        tags: ['Community', 'Student Panel', 'Future Pathways'],
      },
      {
        timeframe: '03:15 PM – 05:00 PM',
        title: 'Grand Valedictory Ceremony & Prize Distribution',
        description:
          'Official closing ceremony at MG Auditorium with presentation of winner trophies, cash prizes, certificates, and recognition for mentors, volunteers, and sponsors.',
        tags: ['Valedictory', 'Prize Distribution', 'Certificates', 'MG Auditorium'],
      },
    ],
  },
];
