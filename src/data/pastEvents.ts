export interface EventPhoto {
  title: string;
  caption: string;
  image: string;
  tag: string;
}

export interface PastEventData {
  id: string;
  title: string;
  shortTitle: string;
  edition: string;
  date: string;
  venue: string;
  description: string;
  websiteUrl?: string;
  stats: { label: string; value: string }[];
  photos: EventPhoto[];
}

export const pastEvents: PastEventData[] = [
  {
    id: 'qmi-2025',
    title: 'QMI 2025 — International Workshop on Quantum Mathematics and Imaging for Smart Manufacturing and Industry 4.0',
    shortTitle: 'QMI 2025 Workshop & Colloquium',
    edition: 'International Workshop & Research Colloquium',
    date: 'February 2025 · 5 Days',
    venue: 'MG Auditorium & SAS, VIT Chennai',
    description:
      'A prestigious five-day international workshop organized by the Department of Mathematics, School of Advanced Sciences (SAS), VIT Chennai. The event brought together leading researchers, academicians, clinicians, and student delegates across quantum mathematics, biomedical imaging, and intelligent healthcare analytics, concluding with valedictory honors recognizing outstanding research and participant excellence.',
    websiteUrl: 'https://qmi2025.onrender.com/pastevents.html',
    stats: [
      { label: 'Participants', value: '70+' },
      { label: 'Expert Sessions', value: '18 Talks' },
      { label: 'Days Duration', value: '5 Days' },
      { label: 'Host School', value: 'SAS VIT' },
    ],
    photos: [
      {
        title: 'Inauguration Ceremony & Lamp Lighting',
        caption: 'Faculty leadership, convenors, and distinguished guests inaugurating QMI 2025 with the traditional lamp lighting ceremony at MG Auditorium, VIT Chennai.',
        image: '/gallery/day1_1.webp',
        tag: 'Day 1 · Keynote',
      },
      {
        title: 'Guided Workshop & Technical Lecture',
        caption: 'Hands-on technical presentation and lecture sessions on quantum algorithms, mathematical models, and imaging frameworks.',
        image: '/gallery/day2_1.webp',
        tag: 'Day 2 · Workshop',
      },
      {
        title: 'Interactive Research & Technical Sessions',
        caption: 'Resource persons delivering specialized talks and engaging with delegates on smart manufacturing and quantum imaging applications.',
        image: '/gallery/day3_1.webp',
        tag: 'Day 3 · Technical Session',
      },
      {
        title: 'Checkpoint Presentations & Colloquium Review',
        caption: 'Scholars and delegates presenting research findings, followed by technical evaluation and speaker felicitations.',
        image: '/gallery/day4_1.webp',
        tag: 'Day 4 · Checkpoint',
      },
      {
        title: 'Grand Valedictory Ceremony',
        caption: 'Valedictory session honoring eminent guests, convenors, and resource persons with traditional shawls and mementos.',
        image: '/gallery/day5_1.webp',
        tag: 'Day 5 · Finale',
      },
      {
        title: 'Winners Trophy & Certificate Felicitation',
        caption: 'Presentation of accolades, certificates, and recognition to outstanding participants and researchers at the valedictory ceremony.',
        image: '/gallery/day5_3.webp',
        tag: 'Day 5 · Awards',
      },
      {
        title: 'QMI Excellence Award (1st Place)',
        caption: 'Dr. Canavoy Narahari Sujatha from Sreenidhi Institute of Science and Technology, Telangana honoured with the QMI Excellence Award (1st Place) during the valedictory ceremony.',
        image: '/gallery/qmi_excellence_award_1st_place.jpg',
        tag: '1st Place · Excellence Award',
      },
      {
        title: 'QMI Distinction Award (2nd Place)',
        caption: 'Dr. Sujatha E from SRM Institute of Science and Technology, Chennai honoured with the QMI Distinction Award (2nd Place) during the valedictory ceremony.',
        image: '/gallery/qmi_distinction_award_2nd_place.jpg',
        tag: '2nd Place · Distinction Award',
      },
      {
        title: 'QMI Merit Award (3rd Place)',
        caption: 'Mr. Sobhin Thomas from Vellore Institute of Technology, Chennai honoured with the QMI Merit Award (3rd Place) during the valedictory ceremony.',
        image: '/gallery/qmi_merit_award_3rd_place.jpg',
        tag: '3rd Place · Merit Award',
      },
      {
        title: 'Hospitality & Networking Refreshments',
        caption: 'Faculty, research scholars, and student delegates networking over tea and refreshments during workshop intervals.',
        image: '/gallery/refreshments_1.webp',
        tag: 'Networking & Hospitality',
      },
    ],
  },
  {
    id: 'qff-2025',
    title: 'IBM Qiskit Fall Fest 2025 (Inaugural Edition)',
    shortTitle: 'Qiskit Fall Fest 2025',
    edition: 'Inaugural Quantum Festival · VIT Chennai',
    date: 'October 2025 · 3 Days',
    venue: 'MG Auditorium, VIT Chennai',
    description:
      'The landmark inaugural edition of Qiskit Fall Fest at VIT Chennai brought together 600+ passionate student developers, faculty mentors, and IBM Quantum researchers. Over three intensive days, delegates participated in guided quantum circuit design labs, interactive quizzes, keynote lectures, and a 24-hour overnight hackathon sprint.',
    websiteUrl: 'https://ibm-qff-25.netlify.app/',
    stats: [
      { label: 'Total Attendees', value: '600+' },
      { label: 'Sprint Duration', value: '24-Hr' },
      { label: 'Regional Colleges', value: '50+' },
      { label: 'Hands-on Labs', value: '100%' },
    ],
    photos: [
      {
        title: 'Student Organizer Address at Dais',
        caption: 'Tarun Ashwat addressing delegates from the VIT Chennai dais at MG Auditorium during Qiskit Fall Fest.',
        image: '/gallery/qff25/qff25_1.jpeg',
        tag: 'Dais Address',
      },
      {
        title: 'Organizing Committee & Delegates Cohort',
        caption: 'Student organizing committee and enthusiastic participant delegates wearing official Qiskit Fall Fest badges.',
        image: '/gallery/qff25/qff25_2.jpeg',
        tag: 'Cohort · Group',
      },
      {
        title: 'QFF25 Participant Assembly & Briefing',
        caption: 'Full participant cohort assembled in lecture hall for technical briefing and circuit assignments.',
        image: '/gallery/qff25/qff25_3.jpeg',
        tag: 'Assembly',
      },
      {
        title: 'Interactive Quantum Coding Session',
        caption: 'Delegates engaged in live Qiskit coding challenges and quantum circuit implementation.',
        image: '/gallery/qff25/qff25_4.jpeg',
        tag: 'Workshop',
      },
      {
        title: 'International & Inter-College Delegates',
        caption: 'Student delegates from diverse universities collaborating and networking during the festival workshops.',
        image: '/gallery/qff25/qff25_5.jpeg',
        tag: 'Delegates',
      },
      {
        title: 'Hands-on Circuit Design Workshop',
        caption: 'Participants working on IBM Quantum Composer and Qiskit SDK challenges in teams.',
        image: '/gallery/qff25/qff25_6.jpeg',
        tag: 'Lab Session',
      },
      {
        title: 'Team Collaboration & Hackathon Huddles',
        caption: 'Hackathon team members discussing algorithmic approaches and quantum circuit design.',
        image: '/gallery/qff25/qff25_7.jpeg',
        tag: 'Collaboration',
      },
    ],
  },
];
