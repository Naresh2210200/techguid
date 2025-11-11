import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <span className="text-xl font-bold">TechyGuide</span>
            </div>
            <p className="text-gray-400">Empowering future innovators through STEM education</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button type="button" className="hover:text-green-400">About Us</button></li>
              <li><button type="button" className="hover:text-green-400">Impact Program</button></li>
              <li><button type="button" className="hover:text-green-400">Partners</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button type="button" className="hover:text-green-400">DIY Kits</button></li>
              <li><button type="button" className="hover:text-green-400">Online Courses</button></li>
              <li><button type="button" className="hover:text-green-400">Lab Setup</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get updates on new products and courses</p>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-600 outline-none mb-2"
              placeholder="Your email"
            />
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TechyGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;