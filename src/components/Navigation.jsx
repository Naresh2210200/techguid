import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ scrolled, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`} aria-label="Primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TG</span>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gray-800">Techy</span>
              <span className="text-green-600">Guide</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Products', 'Schools', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
                aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
              >
                {item}
              </button>
            ))}
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Login
            </button>
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 space-y-3">
            {['Home', 'About', 'Products', 'Schools', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-gray-600 hover:text-green-600 py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;