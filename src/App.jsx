import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Schools from './components/Schools';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    const sections = ['home', 'about', 'products', 'schools', 'testimonials', 'contact'];

    const update = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
      ticking = false;
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrolled={scrolled} activeSection={activeSection} />
      <Hero />
      <About />
      <Products />
      <Schools />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;