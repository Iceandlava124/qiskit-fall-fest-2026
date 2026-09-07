import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import Qmi2025Page from './pages/Qmi2025Page';
import Qff2025Page from './pages/Qff2025Page';
import PastEventsPage from './pages/PastEventsPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-quantum-text selection:bg-quantum-purple/20 selection:text-quantum-purple flex flex-col justify-between">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/qmi-2025" element={<Qmi2025Page />} />
            <Route path="/qff-2025" element={<Qff2025Page />} />
            <Route path="/past-events" element={<PastEventsPage />} />
            <Route path="/gallery" element={<Navigate to="/past-events" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
