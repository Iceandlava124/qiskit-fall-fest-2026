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
  content: string;
  sessions: ScheduleSession[];
}

export const schedule: ScheduleEntry[] = [
  {
    dayLabel: 'Day 1',
    date: 'October 5, 2026',
    title: 'Foundations & Healthcare Horizons',
    subtitle: 'Inauguration, Quantum & Qiskit 101, Core Principles & Hands-on Programming',
    content:
      'Grand inauguration at MG Auditorium, introductory quantum lectures, quantum computing for healthcare, and guided hands-on Qiskit programming with IBM Quantum speakers.',
    sessions: [
      {
        timeframe: '09:00 AM – 10:00 AM',
        title: 'Inauguration Ceremony',
        description:
          'Official opening ceremony at MG Auditorium with university dignitaries, department heads, and distinguished guests kicking off Qiskit Fall Fest 2026.',
        tags: ['Inauguration', 'MG Auditorium', 'Opening'],
      },
      {
        timeframe: '10:00 AM – 11:00 AM',
        title: 'Session 1 — Quantum & Qiskit 101: Introduction to Quantum Computing and Hands-on Qiskit',
        description:
          'Comprehensive introductory session covering quantum principles and hands-on circuit exploration using IBM Qiskit.',
        speaker: 'IBM Quantum Speaker',
        tags: ['Session 1', 'Quantum 101', 'Qiskit SDK', 'IBM Quantum'],
      },
      {
        timeframe: '11:30 AM – 01:00 PM',
        title: 'Session 2 — Introduction to Quantum Computing',
        description:
          'Core mathematical foundations, qubits, superposition, quantum entanglement, and quantum gate operations for beginners and multidisciplinary engineers.',
        tags: ['Session 2', 'Fundamentals', 'Superposition', 'Entanglement'],
      },
      {
        timeframe: '01:30 PM – 02:30 PM',
        title: 'Session 3 — Quantum Computing for Healthcare',
        description:
          'Exploring quantum computing applications in precision medicine, medical imaging, biomolecular modeling, and genomic data analytics.',
        tags: ['Session 3', 'Healthcare', 'Biomedical', 'Life Sciences'],
      },
      {
        timeframe: '03:00 PM – 04:00 PM',
        title: 'Session 4 — Qiskit & Hands-on Quantum Programming',
        description:
          'Guided practical coding session: structuring quantum circuits, running statevector simulations, and executing algorithms on Qiskit Runtime.',
        speaker: 'IBM Quantum Speaker',
        tags: ['Session 4', 'Hands-on Lab', 'Python', 'Qiskit Runtime', 'IBM Quantum'],
      },
    ],
  },
  {
    dayLabel: 'Day 2',
    date: 'October 6, 2026',
    title: 'Advanced Paradigms & Hackathon Release',
    subtitle: 'Quantum ML, Cryptography, Biomedical Applications & Hackathon Sprint Kickoff',
    content:
      'In-depth exploration of Quantum Machine Learning, Cryptography & Communication, Biomedical applications, hands-on research labs, and release of the official Hackathon problem statements.',
    sessions: [
      {
        timeframe: '09:00 AM – 10:00 AM',
        title: 'Session 5 — Quantum Machine Learning',
        description:
          'Parameterized quantum circuits, quantum kernels, variational classifiers, and hybrid quantum-classical machine learning architectures.',
        tags: ['Session 5', 'Quantum ML', 'Hybrid AI', 'Parameterized Circuits'],
      },
      {
        timeframe: '10:00 AM – 11:00 AM',
        title: 'Session 6 — Quantum Cryptography & Communication',
        description:
          'Quantum Key Distribution (QKD), BB84 protocol, quantum repeaters, and post-quantum cryptographic security imperatives.',
        tags: ['Session 6', 'Cryptography', 'QKD', 'Communication', 'Security'],
      },
      {
        timeframe: '11:30 AM – 01:00 PM',
        title: 'Session 7 — Quantum Computing for Biomedical Applications',
        description:
          'Targeted study of quantum algorithms in biomedical research: molecular simulation, drug discovery pipelines, and complex protein interactions.',
        tags: ['Session 7', 'Biomedical Applications', 'Drug Discovery', 'Molecular Simulation'],
      },
      {
        timeframe: '01:30 PM – 02:30 PM',
        title: 'Session 8 — Hands-on Quantum Machine Learning for Biomedical Research',
        description:
          'Practical workshop implementing QML pipelines on biomedical datasets, feature encoding, and variational optimization with mentor guidance.',
        tags: ['Session 8', 'Hands-on QML', 'Biomedical Research', 'Lab'],
      },
      {
        timeframe: '03:00 PM – 04:00 PM',
        title: 'Hackathon Briefing & Problem Statement Release',
        description:
          'Official launch of the hackathon! Covers introduction to the hackathon, explanation of problem statements, track-wise briefing, team formation, rules & evaluation criteria, and mentor interaction.',
        tags: [
          'Hackathon Briefing',
          'Track Release',
          'Team Formation',
          'Rules & Rubric',
          'Mentor Interaction',
        ],
      },
    ],
  },
  {
    dayLabel: 'Day 3',
    date: 'October 7, 2026',
    title: 'Sprint Submission, Demonstrations & Valedictory',
    subtitle: 'Final Code Submission, Live Jury Demonstrations & Grand Award Ceremony',
    content:
      'Final hackathon development sprint and submission, live project demonstrations before the jury, followed by results announcement and the valedictory ceremony.',
    sessions: [
      {
        timeframe: '09:00 AM – 10:00 AM',
        title: 'Hackathon — Final Development & Submission',
        description:
          'Final sprint touches, GitHub repository freeze, documentation preparation, and submission of quantum project prototypes.',
        tags: ['Hackathon Final Sprint', 'Submission Deadline', 'Code Freeze'],
      },
      {
        timeframe: '10:00 AM – 11:00 AM',
        title: 'Project Demonstration & Evaluation',
        description:
          'Live project presentations and jury evaluation. Teams demonstrate working quantum circuits, benchmark metrics, and algorithmic innovation.',
        tags: ['Project Demonstrations', 'Jury Evaluation', 'Live Demos'],
      },
      {
        timeframe: '11:30 AM – 01:00 PM',
        title: 'Results Announcement & Valedictory Ceremony',
        description:
          'Grand valedictory ceremony: announcement of track winners, distribution of cash prizes, participant certificates, and felicitation of organizers & mentors.',
        tags: ['Valedictory Ceremony', 'Results Announcement', 'Prize Distribution', 'Awards'],
      },
    ],
  },
];
