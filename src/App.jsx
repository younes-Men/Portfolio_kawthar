import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper for route transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-slate-800 flex flex-col font-sans selection:bg-pink-200 selection:text-pink-900">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        
        <footer className="py-8 text-center mt-auto border-t border-pink-100 bg-white/30 backdrop-blur-sm">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Kawthar BOUKSIM. Tous droits réservés.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
