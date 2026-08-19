import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Domestic from './pages/Domestic';
import International from './pages/International';
import SpiritualJourney from './pages/SpiritualJourney';
import Experiences from './pages/Experiences';
import About from './pages/About';

// Scroll Management
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="bg-base">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/domestic" element={<Domestic />} />
          <Route path="/international" element={<International />} />
          <Route path="/spiritualjourney" element={<SpiritualJourney />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
