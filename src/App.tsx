import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import About from './components/About';
import Community from './components/Community';
import WhoCanAttend from './components/WhoCanAttend';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import Schedule from './components/Schedule';
import Hackathon from './components/Hackathon';
import SpeakersTeaser from './components/SpeakersTeaser';
import QuantumFactSection from './components/QuantumFactSection';
import GetInvolved from './components/GetInvolved';
import Venue from './components/Venue';
import Organizers from './components/Organizers';
import FAQ from './components/FAQ';
import PastEvent from './components/PastEvent';
import RegisterCTA from './components/RegisterCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-quantum-text selection:bg-quantum-purple/40 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MetricsBar />
        <About />
        <Community />
        <WhoCanAttend />
        <Experience />
        <Highlights />
        <Schedule />
        <Hackathon />
        <SpeakersTeaser />
        <QuantumFactSection />
        <GetInvolved />
        <Venue />
        <Organizers />
        <FAQ />
        <PastEvent />
        <RegisterCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
