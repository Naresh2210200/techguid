import React from 'react';
import { Star, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Students',
      school: 'Noble School Alipur',
      text: 'The robotics course is very interesting with easy-to-use kits that make it fun to assemble and learn concepts. Thank you!',
      rating: 5
    },
    {
      name: 'Creator',
      school: 'Literacy India',
      text: 'I love the 3D printing part! We learned about software and converted our designs into 3D models. Wonderful experience.',
      rating: 5
    },
    {
      name: 'Student',
      school: 'Green Valley School',
      text: 'All activities are exciting and help develop innovative skills. TechyGuide creates such engaging products and courses.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What They Say About Us</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.school}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;