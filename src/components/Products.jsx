import React from 'react';
import { Code, ChevronRight, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: 'Educational DIY Kits',
      description: 'Comprehensive robotics and electronics kits for hands-on learning',
      features: ['Arduino & Raspberry Pi', 'Sensors & Motors', 'Project-based Learning']
    },
    {
      title: 'Online Courses',
      description: 'Interactive live sessions with certified instructors',
      features: ['Coding (Python, Scratch)', 'Robotics & AI', 'Certification Programs']
    },
    {
      title: 'STEM Lab Setup',
      description: 'Complete innovation lab infrastructure for schools',
      features: ['Equipment & Furniture', 'Curriculum Design', 'Teacher Training']
    },
    {
      title: 'Workshops & Tinkerfest',
      description: 'Engaging short-term programs and competitions',
      features: ['Weekend Workshops', 'School Competitions', 'Maker Challenges']
    },
    {
      title: 'IoT Products',
      description: 'Smart devices and connected learning tools',
      features: ['IoT Starter Kits', 'Home Automation', 'Smart Gadgets']
    },
    {
      title: '3D Printing Services',
      description: 'Design and prototype with cutting-edge technology',
      features: ['3D Design Software', 'Printing Services', 'Modeling Workshops']
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products & Services</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2 mb-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <ChevronRight size={16} className="text-green-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-green-600 font-medium hover:text-green-700 flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;