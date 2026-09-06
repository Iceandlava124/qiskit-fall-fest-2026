export interface Organizer {
  name: string;
  role: string;
  designation?: string;
  image?: string;
}

export const organizers: Organizer[] = [
  { name: 'Dr. N. Ramesh Babu', role: 'Lead Organizer' },
  { name: 'Dr. Lakshmanan S', role: 'Co-Organizer' },
  { name: 'Dr. Padmaja N', role: 'Co-Organizer' },
  { name: 'Dr. Sriraman R', role: 'Co-Organizer' },
  {
    name: 'Dr. Thangaraj M',
    role: 'Co-Organizer',
    designation: 'Assistant Professor',
    image: '/organizers/thangaraj-m.png',
  },
  {
    name: 'Ms. Nathimalar Chandran',
    role: 'Co-Organizer',
    designation: 'Project Assistant',
    image: '/organizers/nathimalar-chandran.jpg',
  },
  {
    name: 'Tarun Ashwat',
    role: 'Student Organizer',
    designation: 'The QuantumPlators Club',
    image: '/organizers/tarun-ashwat.jpg',
  },
  {
    name: 'Adithya K',
    role: 'Student Organizer',
    designation: 'The QuantumPlators Club',
    image: '/organizers/adithya-k.jpg',
  },
];
