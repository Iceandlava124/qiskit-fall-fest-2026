export interface ScheduleSession {
  timeframe: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ScheduleEntry {
  dayLabel: string;
  title: string;
  subtitle: string;
  isExtension?: boolean;
  content: string;
  sessions: ScheduleSession[];
  subSections?: {
    timeframe: string;
    description: string;
  }[];
}

export const schedule: ScheduleEntry[] = [
  {
    dayLabel: 'Day 1',
    title: 'Quantum & Industry',
    subtitle: 'Foundations, Industry Perspectives & Interactive Quizzes',
    content:
      'Opening ceremony, quantum computing keynote, fundamentals sessions, industry & career sessions, interactive live-quiz challenges after sessions, evening expert/industry session and networking.',
    sessions: [
      {
        timeframe: 'Morning',
        title: 'Opening Ceremony & Keynote Address',
        description:
          'Inaugural ceremony at MG Auditorium followed by a high-level keynote exploring quantum principles and how quantum systems fundamentally differ from classical computing.',
        tags: ['Inauguration', 'Keynote', 'MG Auditorium'],
      },
      {
        timeframe: 'Mid-Day',
        title: 'Quantum Computing Fundamentals',
        description:
          'Core foundational sessions covering qubits, superposition, entanglement, quantum gates, and circuit architecture for students and researchers.',
        tags: ['Fundamentals', 'Theory', 'Interactive'],
      },
      {
        timeframe: 'Afternoon',
        title: 'Industry & Career Perspectives + Live Quizzes',
        description:
          'Talks by quantum professionals on research pathways and industrial applications, punctuated with interactive live quizzes testing session concepts.',
        tags: ['Industry', 'Careers', 'Live Quiz'],
      },
      {
        timeframe: 'Evening',
        title: 'Expert Panel & Networking Reception',
        description:
          'In-depth discussion with quantum researchers and industry pioneers, concluding with an open networking session for students across colleges.',
        tags: ['Expert Panel', 'Networking', 'Community'],
      },
    ],
  },
  {
    dayLabel: 'Day 2',
    title: 'Qiskit, Hands-on Learning & Hackathon Kickoff',
    subtitle: 'Interactive Quantum Programming & Overnight Build Launch',
    content:
      'Full day progressing from quantum circuits to the overnight hackathon kick-off.',
    subSections: [
      {
        timeframe: 'Morning',
        description: 'Qiskit fundamentals, quantum circuits, quantum programming sessions.',
      },
      {
        timeframe: 'Afternoon',
        description: 'Guided hands-on Qiskit activities.',
      },
      {
        timeframe: 'Evening',
        description:
          'Hackathon begins — briefing, problem statement release, team formation, mentor interaction, development starts (continues overnight into Day 3).',
      },
    ],
    sessions: [
      {
        timeframe: 'Morning',
        title: 'Qiskit Fundamentals & Quantum Circuits',
        description:
          'Hands-on session with the IBM Qiskit SDK: writing quantum code in Python, building quantum circuits, applying gates, and running statevector simulations.',
        tags: ['Qiskit SDK', 'Python', 'Circuits'],
      },
      {
        timeframe: 'Afternoon',
        title: 'Guided Hands-on Quantum Labs',
        description:
          'Interactive coding exercises exploring algorithm implementations, error mitigation techniques, and practical quantum problem-solving.',
        tags: ['Hands-on Lab', 'Algorithms', 'Interactive'],
      },
      {
        timeframe: 'Evening & Night',
        title: 'Hackathon Kickoff: Briefing, Team Formation & Overnight Build',
        description:
          'Official hackathon briefing, release of track problem statements, team formation, mentor matching, and sprint launch continuing overnight into Day 3.',
        tags: ['Hackathon Kickoff', 'Team Formation', 'Overnight Sprint'],
      },
    ],
  },
  {
    dayLabel: 'Day 3',
    title: 'Hackathon & Finale',
    subtitle: 'Overnight Development Sprint, Project Demos & Awards Ceremony',
    content:
      'Hackathon continues alongside a final session; teams develop, get mentor/technical support, hit evaluation checkpoints, and submit. Closing: project presentations, judging, winner announcement, prize distribution, sponsor/speaker/volunteer recognition, certificates, closing ceremony.',
    sessions: [
      {
        timeframe: 'Morning',
        title: 'Overnight Sprint & Mentor Checkpoints',
        description:
          'Teams continue developing overnight with technical mentor support and evaluation checkpoints to refine their quantum implementations.',
        tags: ['Overnight Sprint', 'Mentor Support', 'Checkpoints'],
      },
      {
        timeframe: 'Mid-Day',
        title: 'Code Freeze & Project Submission',
        description:
          'Final project code submission, circuit benchmarking, documentation review, and initial checkpoint validation.',
        tags: ['Code Freeze', 'Project Submission'],
      },
      {
        timeframe: 'Afternoon',
        title: 'Project Presentations & Live Judging',
        description:
          'Shortlisted teams present project demonstrations and defend algorithmic approaches before a panel of expert judges.',
        tags: ['Live Demos', 'Jury Evaluation'],
      },
      {
        timeframe: 'Evening',
        title: 'Grand Finale, Awards & Valedictory Ceremony',
        description:
          'Winner announcements, prize distribution, certificates, and recognition for sponsors, keynote speakers, and student organizers.',
        tags: ['Prize Distribution', 'Certificates', 'Valedictory'],
      },
    ],
  },
  {
    dayLabel: 'Days 4–5',
    title: 'Outreach & Awareness Extension',
    subtitle: 'External School & College Engagement',
    isExtension: true,
    content:
      'Awareness sessions for external schools/colleges: what quantum computing is, how a quantum computer works, simple Qiskit demonstrations, and career/pathway awareness (research, industry, higher studies, quantum software/hardware, quantum + AI). Exact structure depends on institutional permissions and logistics.',
    sessions: [
      {
        timeframe: 'School & College Outreach',
        title: 'Foundations of Quantum Computers',
        description:
          'Engaging awareness sessions explaining what quantum computing is, how a quantum computer functions, and differences from classical hardware.',
        tags: ['Outreach', 'School & College', 'Awareness'],
      },
      {
        timeframe: 'Interactive Demonstrations',
        title: 'Simple Qiskit Demos & Quantum Simulations',
        description:
          'Interactive Qiskit demonstrations showing quantum superposition, visual Bloch sphere simulations, and beginner-friendly examples.',
        tags: ['Qiskit Demos', 'Bloch Sphere', 'Visual Lab'],
      },
      {
        timeframe: 'Career Guidance',
        title: 'Quantum Careers, Higher Studies & AI Horizons',
        description:
          'Roadmap covering higher education in quantum science, research career pathways, quantum software/hardware engineering, and Quantum + AI integration.',
        tags: ['Career Pathways', 'Quantum + AI', 'Higher Studies'],
      },
    ],
  },
];
