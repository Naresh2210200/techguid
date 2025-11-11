import React from 'react';
import { Users, Cpu, Award } from 'lucide-react';

const Schools = () => {
  return (
    <section id="schools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">For Educational Institutions</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Complete STEM Ecosystem</h3>
              <ul className="space-y-4">
                {[
                  'AI & Robotics Lab Setup',
                  'Innovation Program Implementation',
                  'Comprehensive Curriculum',
                  'Teacher Training & Certification',
                  'Ongoing Support & Updates'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Award className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">STEM Workshop & Tinkerfest</h4>
                <p className="text-gray-600">Conduct engaging workshops and competitions to enhance student learning</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cpu size={24} className="text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">ATL Lab Solutions</h4>
                <p className="text-gray-600">Complete Atal Tinkering Lab setup with equipment and training</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Consultation Services</h4>
                <p className="text-gray-600">Expert guidance for integrating STEM into your curriculum</p>
              </div>
            </div>
            <button className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schools;