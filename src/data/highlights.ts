import {
  Atom,
  Code2,
  Mic2,
  Gamepad2,
  Trophy,
  Users,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';

export interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const highlights: Highlight[] = [
  {
    icon: Atom,
    title: 'Quantum Computing',
    description:
      'Understand quantum principles and how quantum systems fundamentally differ from classical computers.',
  },
  {
    icon: Code2,
    title: 'Qiskit & Quantum Programming',
    description:
      'Build quantum circuits, write quantum programs, and experiment hands-on with IBM Qiskit.',
  },
  {
    icon: Mic2,
    title: 'Expert & Industry Sessions',
    description:
      'Hear from researchers and professionals working across the quantum computing field.',
  },
  {
    icon: Gamepad2,
    title: 'Interactive Learning',
    description:
      'Live quizzes, challenges, and interactive activities built into every session.',
  },
  {
    icon: Trophy,
    title: 'Quantum Hackathon',
    description:
      'Build and solve real problems using quantum computing concepts, tools, and teamwork.',
  },
  {
    icon: Users,
    title: 'Inter-College Community',
    description:
      'Connect with students from colleges across the region in a shared quantum journey.',
  },
  {
    icon: GraduationCap,
    title: 'Quantum Careers',
    description:
      'Explore pathways in quantum research, industry, higher education, and emerging fields.',
  },
];

export const hackathonTracks: string[] = [
  'Quantum Machine Learning',
  'Quantum Cryptography & Communication',
  'Quantum Error Correction',
  'Quantum Computing for Healthcare',
];

export const experiencePillars: string[] = [
  'Learn',
  'Explore',
  'Build',
  'Innovate',
];
