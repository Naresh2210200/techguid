import React from 'react';
import { Lightbulb, Cpu, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering young minds to transform ideas into innovations through technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Imagine</h3>
            <p className="text-gray-600">
              Foster creativity and innovative thinking in young learners
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ideate</h3>
            <p className="text-gray-600">
              Develop problem-solving skills through hands-on projects
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovate</h3>
            <p className="text-gray-600">
              Turn concepts into real-world technological solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;