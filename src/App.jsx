import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Domestic from './pages/Domestic';
import International from './pages/International';
import SpiritualJourney from './pages/SpiritualJourney';
import Experiences from './pages/Experiences';
import About from './pages/About';
import Contact from './pages/Contact';

// Renamed to prevent conflict with the imported ScrollToTop button component
function ScrollRestoration() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Navbar />
      <main className="bg-base">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/domestic" element={<Domestic />} />
          <Route path="/international" element={<International />} />
          <Route path="/spiritualjourney" element={<SpiritualJourney />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <ScrollToTop /> {/* Render the floating UI button here */}
      <Footer />
    </Router>
  );
}
