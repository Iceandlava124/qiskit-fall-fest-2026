export interface Organizer {
  name: string;
  role: string;
  designation?: string;
  image?: string;
}

export const organizers: Organizer[] = [
  {
    name: 'Dr. N. Ramesh Babu',
    role: 'Lead Organizer',
    designation: 'Assistant Professor',
    image: '/organizers/ramesh-babu.jpeg',
  },
  {
    name: 'Dr. Lakshmanan S',
    role: 'Co-Organizer',
    designation: 'Professor',
    image: '/organizers/lakshmanan.jpg',
  },
  {
    name: 'Dr. Padmaja N',
    role: 'Co-Organizer',
    designation: 'Assistant Professor',
    image: '/organizers/padmaja.jpg',
  },
  {
    name: 'Dr. Sriraman R',
    role: 'Co-Organizer',
    designation: 'Assistant Professor',
    image: '/organizers/sriraman.jpg',
  },
  {
    name: 'Dr. Thangaraj M',
    role: 'Co-Organizer',
    designation: 'Assistant Professor',
    image: '/organizers/thangaraj-m.png',
  },
  {
    name: 'Dr. Reena Monica',
    role: 'Co-Organizer',
    designation: 'Deputy Director (International Relations)',
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
