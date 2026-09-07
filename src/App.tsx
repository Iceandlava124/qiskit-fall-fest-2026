import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import About from './components/About';
import Organizers from './components/Organizers';
import SpeakersTeaser from './components/SpeakersTeaser';
import WhoCanAttend from './components/WhoCanAttend';
import Schedule from './components/Schedule';
import Hackathon from './components/Hackathon';
import Venue from './components/Venue';
import PastEvent from './components/PastEvent';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ConceptExplainer from './components/ConceptExplainer';
import RegisterCTA from './components/RegisterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-quantum-text selection:bg-quantum-purple/20 selection:text-quantum-purple">
      <Navbar />
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

        {/* 8. Past Events with Gallery for Each Event */}
        <PastEvent />

        {/* 9. FAQ & Contact Us */}
        <FAQ />
        <Contact />

        {/* 10. Concept Explainer (Prominent, interactive educational center) */}
        <ConceptExplainer />

        {/* Final Registration CTA */}
        <RegisterCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
