export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'Is this only for quantum computing students?',
    answer:
      "No, it's designed for students across disciplines and experience levels—including computer science, physics, electronics, and engineering enthusiasts.",
  },
  {
    question: 'Do I need prior quantum knowledge?',
    answer:
      'No, several sessions are designed specifically for beginners, starting with foundational quantum principles and introductory Qiskit syntax.',
  },
  {
    question: 'Is Qiskit experience required for the hackathon?',
    answer:
      'Final requirements will be announced with the official challenge rules. Preparatory workshops will be conducted on Days 1 and 2 to bring participants up to speed.',
  },
  {
    question: 'Can students from other colleges attend?',
    answer:
      'Yes, subject to registration. Students from over 50 regional colleges are invited to register and attend in person at VIT Chennai.',
  },
  {
    question: 'How many colleges are participating?',
    answer:
      'Target is 50+ colleges; confirmed institutions will be announced as registrations complete.',
  },
  {
    question: 'Will IBM be present?',
    answer:
      'IBM/Qiskit participation will be shown only after official confirmation in accordance with global Fall Fest guidelines.',
  },
  {
    question: 'Will certificates be provided?',
    answer:
      'Certificate details will be announced once the event structure and attendance criteria are finalized.',
  },
  {
    question: 'What are Days 4–5 (Outreach & Awareness Extension)?',
    answer:
      'Days 4 and 5 are an outreach and awareness extension conducted at regional partner institutions to introduce basic quantum concepts to school and junior college students. They are separate from the core 3-day on-campus program at MG Auditorium.',
  },
];
