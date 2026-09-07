export interface ScheduleSession {
  timeframe: string;
  title: string;
  description?: string;
  speaker?: string;
  tags: string[];
}

export interface ScheduleEntry {
  dayLabel: string;
  date: string;
  title: string;
  subtitle: string;
  sessions: ScheduleSession[];
}

export const schedule: ScheduleEntry[] = [
  {
    dayLabel: 'Day 1',
    date: 'October 7, 2026',
    title: 'Quantum ML, Optimization & Error Mitigation',
    subtitle: 'Inauguration, Hybrid AI, QAOA & Quantum Error Mitigation with IBM India',
    sessions: [
      {
        timeframe: '10:00 AM – 10:15 AM',
        title: 'Inauguration Ceremony',
        speaker: 'Event Organizing Team',
        tags: ['Inauguration', 'Opening'],
      },
      {
        timeframe: '10:15 AM – 11:15 AM',
        title: 'Quantum Machine Learning and Hybrid AI',
        speaker: 'Anupama Roy, IBM India',
        tags: ['Quantum ML', 'Hybrid AI'],
      },
      {
        timeframe: '11:15 AM – 12:15 PM',
        title: 'QAOA and Quantum Optimization',
        speaker: 'Amith Singhee, IBM India',
        tags: ['QAOA', 'Optimization'],
      },
      {
        timeframe: '02:00 PM – 03:00 PM',
        title: 'Quantum Error Correction and Error Mitigation',
        speaker: 'Siddharth Golecha, IBM India',
        tags: ['Error Correction', 'Error Mitigation'],
      },
    ],
  },
  {
    dayLabel: 'Day 2',
    date: 'October 8, 2026',
    title: 'Generative AI, Drug Discovery & Supercomputing',
    subtitle: 'Cutting-Edge Quantum Applications in GenAI, Life Sciences & HPC',
    sessions: [
      {
        timeframe: '10:00 AM – 11:00 AM',
        title: 'Quantum Generative AI',
        speaker: 'Bhanwar Gupta, IBM India',
        tags: ['Quantum GenAI', 'Deep Learning'],
      },
      {
        timeframe: '11:15 AM – 12:15 PM',
        title: 'Quantum Drug Discovery',
        speaker: 'Sonali Chawla, IBM India',
        tags: ['Drug Discovery', 'Biomedical'],
      },
      {
        timeframe: '02:00 PM – 03:00 PM',
        title: 'Quantum-Centric Supercomputing',
        speaker: 'Ritajit Majumdar, IBM India',
        tags: ['Supercomputing', 'Quantum HPC'],
      },
    ],
  },
  {
    dayLabel: 'Day 3',
    date: 'October 9, 2026',
    title: 'Hardware Programming, Cryptography & Startups',
    subtitle: 'Hands-on Real Hardware, Software Engineering, Post-Quantum Security & Innovation',
    sessions: [
      {
        timeframe: '10:00 AM – 11:15 AM',
        title: 'Real IBM Quantum Hardware Programming with Qiskit',
        speaker: 'Mrs. Guncha Malik, IBM India',
        tags: ['IBM Quantum Hardware', 'Qiskit SDK'],
      },
      {
        timeframe: '11:30 AM – 12:30 PM',
        title: 'Quantum Software Engineering',
        speaker: 'Anupama Roy, IBM India',
        tags: ['Software Engineering', 'SDK Architecture'],
      },
      {
        timeframe: '02:00 PM – 03:00 PM',
        title: 'Quantum Cybersecurity and Post-Quantum Cryptography',
        speaker: 'Siddharth Golecha, IBM India',
        tags: ['Cybersecurity', 'Post-Quantum Crypto'],
      },
      {
        timeframe: '03:15 PM – 04:15 PM',
        title: 'Quantum Entrepreneurship and Startup Opportunities',
        speaker: 'Ritajit Majumdar, IBM India',
        tags: ['Startups', 'Entrepreneurship'],
      },
    ],
  },
  {
    dayLabel: 'Day 4',
    date: 'October 10, 2026',
    title: 'Online Hackathon Sprint & Valedictory',
    subtitle: 'Full-Day Development Sprint, Speaker Mentorship & Valedictory Ceremony',
    sessions: [
      {
        timeframe: '09:00 AM – 05:00 PM',
        title: 'Quantum Hackathon Project Sprint',
        speaker: 'Mentorship Panel with all IBM Speakers',
        tags: ['Hackathon', 'Live Coding', 'Mentorship'],
      },
      {
        timeframe: '05:00 PM – 05:30 PM',
        title: 'Valedictory & Thanks Giving Ceremony',
        speaker: 'Event Organizing Team',
        tags: ['Valedictory', 'Awards', 'Closing'],
      },
    ],
  },
];
