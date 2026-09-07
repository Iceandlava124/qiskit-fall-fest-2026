import Hero from '../components/Hero';
import MetricsBar from '../components/MetricsBar';
import About from '../components/About';
import Organizers from '../components/Organizers';
import SpeakersTeaser from '../components/SpeakersTeaser';
import WhoCanAttend from '../components/WhoCanAttend';
import Schedule from '../components/Schedule';
import Hackathon from '../components/Hackathon';
import Venue from '../components/Venue';
import PastEventsTeaser from '../components/PastEventsTeaser';
import Contact from '../components/Contact';
import ConceptExplainer from '../components/ConceptExplainer';
import RegisterCTA from '../components/RegisterCTA';

export default function HomePage() {
  return (
    <main>
      {/* Top Hero Banner & Metrics Overview */}
      <Hero />
      <MetricsBar />

      {/* 1. About */}
      <About />

      {/* 2. Organizers */}
      <Organizers />

      {/* 3. Speakers */}
      <SpeakersTeaser />

      {/* 4. Who Can Attend */}
      <WhoCanAttend />

      {/* 5. Schedule */}
      <Schedule />

      {/* 6. Hackathon */}
      <Hackathon />

      {/* 7. Venue & Location */}
      <Venue />

      {/* 8. Past Events & Archives Teaser linking to dedicated pages */}
      <PastEventsTeaser />

      {/* 9. Contact Us */}
      <Contact />

      {/* 10. Concept Explainer (Interactive educational center) */}
      <ConceptExplainer />

      {/* Final Registration CTA */}
      <RegisterCTA />
    </main>
  );
}
