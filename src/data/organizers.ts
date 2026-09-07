export interface Patron {
  name: string;
  role: string;
  designation: string;
  institution: string;
  image: string;
}

export const chiefPatron: Patron = {
  name: 'Dr. G. Viswanathan',
  role: 'Chief Patron',
  designation: 'Founder & Chancellor',
  institution: 'Vellore Institute of Technology (VIT)',
  image: '/patrons/g-viswanathan.jpg',
};

export const patrons: Patron[] = [
  {
    name: 'Dr. Sankar Viswanathan',
    role: 'Patron',
    designation: 'Vice-President',
    institution: 'VIT',
    image: '/patrons/sankar-viswanathan.jpg',
  },
  {
    name: 'Dr. Sekar Viswanathan',
    role: 'Patron',
    designation: 'Vice-President',
    institution: 'VIT',
    image: '/patrons/sekar-viswanathan.jpg',
  },
  {
    name: 'Dr. G. V. Selvam',
    role: 'Patron',
    designation: 'Vice-President',
    institution: 'VIT',
    image: '/patrons/gv-selvam.jpg',
  },
  {
    name: 'Dr. V. S. Kanchana Bhaaskaran',
    role: 'Patron',
    designation: 'Vice-Chancellor',
    institution: 'VIT',
    image: '/patrons/kanchana-bhaaskaran.jpg',
  },
  {
    name: 'Dr. T. Thyagarajan',
    role: 'Patron',
    designation: 'Pro-Vice Chancellor',
    institution: 'VIT Chennai',
    image: '/patrons/t-thyagarajan.jpg',
  },
  {
    name: 'Dr. K. Sathiyanarayanan',
    role: 'Patron',
    designation: 'Director',
    institution: 'VIT Chennai',
    image: '/patrons/k-sathiyanarayanan.jpg',
  },
  {
    name: 'Dr. P. K. Manoharan',
    role: 'Patron',
    designation: 'Additional Registrar',
    institution: 'VIT Chennai',
    image: '/patrons/pk-manoharan.jpg',
  },
];

export interface Organizer {
  name: string;
  role: string;
  designation?: string;
  affiliation?: string;
  category: 'lead' | 'faculty' | 'student';
  image?: string;
}

export const organizers: Organizer[] = [
  {
    name: 'Dr. N. Ramesh Babu',
    role: 'Lead Organizer',
    designation: 'Assistant Professor',
    affiliation: 'Vellore Institute of Technology (VIT Chennai)',
    category: 'lead',
    image: '/organizers/ramesh-babu.jpeg',
  },
  {
    name: 'Dr. Lakshmanan S',
    role: 'Co-Organizer',
    designation: 'Professor',
    affiliation: 'VIT Chennai',
    category: 'faculty',
    image: '/organizers/lakshmanan.jpg',
  },
  {
    name: 'Dr. Padmaja N',
    role: 'Co-Organizer',
    designation: 'Assistant Professor',
    affiliation: 'VIT Chennai',
    category: 'faculty',
    image: '/organizers/padmaja.jpg',
  },
  {
    name: 'Dr. Sriraman R',
    role: 'Co-Organizer',
    designation: 'Assistant Professor',
    affiliation: 'VIT Chennai',
    category: 'faculty',
    image: '/organizers/sriraman.jpg',
  },
  {
    name: 'Dr. Thangaraj M',
    role: 'Co-Organizer',
    designation: 'Assistant Professor',
    affiliation: 'VIT Chennai',
    category: 'faculty',
    image: '/organizers/thangaraj-m.png',
  },
  {
    name: 'Dr. Reena Monica',
    role: 'Co-Organizer',
    designation: 'Deputy Director (International Relations)',
    affiliation: 'VIT Chennai',
    category: 'faculty',
    image: '/organizers/reena-monica.jpg',
  },
  {
    name: 'Ms. Nathimalar Chandran',
    role: 'Co-Organizer',
    designation: 'Project Assistant',
    affiliation: 'VIT Chennai',
    category: 'student',
    image: '/organizers/nathimalar-chandran.jpg',
  },
  {
    name: 'Tarun Ashwat',
    role: 'Student Organizer',
    designation: 'The QuantumPlators Club',
    affiliation: 'VIT Chennai',
    category: 'student',
    image: '/organizers/tarun-ashwat.jpg',
  },
  {
    name: 'Adithya K',
    role: 'Student Organizer',
    designation: 'The QuantumPlators Club',
    affiliation: 'VIT Chennai',
    category: 'student',
    image: '/organizers/adithya-k.jpg',
  },
];
