import React from 'react';
import { Code, Cpu, Lightbulb, Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium">
              #1 STEM Learning Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Prepare Kids for a
              <span className="text-green-600"> Tech-Driven Future</span>
            </h1>
            <p className="text-xl text-gray-600">
              Transform young minds with hands-on STEM education through robotics, coding, AI, and 3D printing
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Book Free Class</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all">
                Explore Products
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">50,000+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Schools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <Code className="text-green-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Coding</h3>
                  <p className="text-sm text-gray-600">Learn programming through interactive projects</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <Cpu className="text-green-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Robotics</h3>
                  <p className="text-sm text-gray-600">Build and program intelligent robots</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <Lightbulb className="text-green-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">AI & IoT</h3>
                  <p className="text-sm text-gray-600">Explore artificial intelligence concepts</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <Rocket className="text-green-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">3D Printing</h3>
                  <p className="text-sm text-gray-600">Design and create 3D objects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;