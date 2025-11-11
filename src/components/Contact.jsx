import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-green-600 mb-6"></div>
            <p className="text-gray-600 mb-8">
              Ready to transform education with STEM? Reach out to us and let's start the innovation journey together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-gray-600">+91 91140 36376</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">reachus@techyguide.in</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="font-medium text-gray-900 mb-4">Follow Us</div>
              <div className="flex space-x-4">
                <button type="button" aria-label="Facebook" className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                  <Facebook size={20} />
                </button>
                <button type="button" aria-label="Instagram" className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                  <Instagram size={20} />
                </button>
                <button type="button" aria-label="Twitter" className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                  <Twitter size={20} />
                </button>
                <button type="button" aria-label="LinkedIn" className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  id="contact-message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;