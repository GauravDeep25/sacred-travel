import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

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
import ItineraryDetail from './pages/ItineraryDetail';

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
          <Route path="/enquiry" element={<Contact />} />
          <Route path="/enquire" element={<Contact />} />
          <Route path="/itinerary/:destination" element={<ItineraryDetail />} />
          <Route path="/itenary/:destination" element={<ItineraryDetail />} />
          <Route path="/itinerary" element={<Navigate to="/domestic" replace />} />
          <Route path="/itenary" element={<Navigate to="/domestic" replace />} />
          <Route path="/itineraries" element={<Navigate to="/domestic" replace />} />
        </Routes>
      </main>
      <ScrollToTop /> {/* Render the floating UI button here */}
      <Footer />
    </Router>
  );
}

