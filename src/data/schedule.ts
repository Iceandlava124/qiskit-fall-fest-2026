export interface ScheduleSession {
  timeframe: string;
  sessionNumber?: string;
  title: string;
  speaker?: string;
  speakerBadge?: string;
  tags: string[];
  iconType: 'sparkles' | 'cpu' | 'atom' | 'heartPulse' | 'terminal' | 'brain' | 'shield' | 'dna' | 'binary' | 'flag' | 'code' | 'presentation' | 'trophy';
}

export interface ScheduleEntry {
  dayLabel: string;
  dayNumber: string;
  date: string;
  title: string;
  subtitle: string;
  sessions: ScheduleSession[];
}

export const schedule: ScheduleEntry[] = [
  {
    dayLabel: 'Day 1',
    dayNumber: '01',
    date: 'October 5, 2026',
    title: 'Inauguration & Quantum Foundations',
    subtitle: 'Official Opening, Qiskit 101, Core Foundations & Hands-on IBM Programming',
    sessions: [
      {
        timeframe: '09:00 AM – 10:00 AM',
        title: 'Inauguration Ceremony',
        speaker: 'Dignitaries, SAS Faculty & Organizing Committee',
        tags: ['Inauguration', 'Lamp Lighting', 'Opening'],
        iconType: 'sparkles',
      },
      {
        timeframe: '10:00 AM – 11:00 AM',
        sessionNumber: 'Session 1',
        title: 'Quantum & Qiskit 101: Introduction to Quantum Computing & Hands-on Qiskit',
        speaker: 'IBM Quantum Speaker',
        speakerBadge: 'IBM Quantum Keynote',
        tags: ['Qiskit 101', 'IBM Quantum', 'Hands-on'],
        iconType: 'cpu',
      },
      {
        timeframe: '11:30 AM – 01:00 PM',
        sessionNumber: 'Session 2',
        title: 'Introduction to Quantum Computing',
        speaker: 'Domain Expert',
        tags: ['Quantum Circuits', 'Superposition', 'Entanglement'],
        iconType: 'atom',
      },
      {
        timeframe: '01:30 PM – 02:30 PM',
        sessionNumber: 'Session 3',
        title: 'Quantum Computing for Healthcare',
        speaker: 'Domain Expert',
        tags: ['Healthcare', 'Clinical Data', 'Quantum Applications'],
        iconType: 'heartPulse',
      },
      {
        timeframe: '03:00 PM – 04:00 PM',
        sessionNumber: 'Session 4',
        title: 'Qiskit & Hands-on Quantum Programming',
        speaker: 'IBM Quantum Speaker',
        speakerBadge: 'IBM Quantum Lab',
        tags: ['Qiskit SDK', 'Hands-on Lab', 'Live Execution'],
        iconType: 'terminal',
      },
    ],
  },
  {
    dayLabel: 'Day 2',
    dayNumber: '02',
    date: 'October 6, 2026',
    title: 'Advanced Algorithms & Hackathon Briefing',
    subtitle: 'Quantum ML, Cryptography, Biomedical Systems & Hackathon Kickoff',
    sessions: [
      {
        timeframe: '09:00 AM – 10:00 AM',
        sessionNumber: 'Session 5',
        title: 'Quantum Machine Learning',
        speaker: 'Domain Expert',
        tags: ['QML', 'Quantum Classifiers', 'Hybrid Models'],
        iconType: 'brain',
      },
      {
        timeframe: '10:00 AM – 11:00 AM',
        sessionNumber: 'Session 6',
        title: 'Quantum Cryptography & Communication',
        speaker: 'Domain Expert',
        tags: ['QKD', 'Post-Quantum Crypto', 'Protocols'],
        iconType: 'shield',
      },
      {
        timeframe: '11:30 AM – 01:00 PM',
        sessionNumber: 'Session 7',
        title: 'Quantum Computing for Biomedical Applications',
        speaker: 'Domain Expert',
        tags: ['Biomedical', 'Molecular Modeling', 'Genomics'],
        iconType: 'dna',
      },
      {
        timeframe: '01:30 PM – 02:30 PM',
        sessionNumber: 'Session 8',
        title: 'Hands-on Quantum Machine Learning for Biomedical Research',
        speaker: 'Domain Expert',
        tags: ['Hands-on QML', 'Biomedical Research', 'Python Labs'],
        iconType: 'binary',
      },
      {
        timeframe: '03:00 PM – 04:00 PM',
        title: 'Hackathon Briefing & Problem Statement Release',
        speaker: 'Hackathon Mentorship Committee',
        tags: ['Problem Statements', 'Team Formation', 'Evaluation Rubric'],
        iconType: 'flag',
      },
    ],
  },
  {
    dayLabel: 'Day 3',
    dayNumber: '03',
    date: 'October 7, 2026',
    title: 'Hackathon Sprint & Valedictory Ceremony',
    subtitle: 'Final Development Sprint, Project Demonstrations & Valedictory Awards',
    sessions: [
      {
        timeframe: '09:00 AM – 01:00 PM',
        title: 'Hackathon — Final Development & Submission',
        speaker: 'All Teams & Active Mentorship',
        tags: ['Sprint', 'Code Freeze', 'Repository Submission'],
        iconType: 'code',
      },
      {
        timeframe: '01:30 PM – 03:00 PM',
        title: 'Project Demonstration & Evaluation',
        speaker: 'Jury Panel & Reviewers',
        tags: ['Team Pitches', 'Live Demos', 'Jury Scoring'],
        iconType: 'presentation',
      },
      {
        timeframe: '03:00 PM – 04:00 PM',
        title: 'Results Announcement & Valedictory Ceremony',
        speaker: 'Dignitaries, Convenors & Organizing Team',
        tags: ['Awards', 'Certificates', 'Valedictory'],
        iconType: 'trophy',
      },
    ],
  },
];
