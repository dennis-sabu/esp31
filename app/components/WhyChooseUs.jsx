'use client'
import React from 'react';
import { FaShieldAlt, FaClock, FaMobile, FaHeart } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-2xl text-blue-600" />,
      title: "HIPAA Compliant",
      description: "Full compliance with healthcare privacy regulations",
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-50"
    },
    {
      icon: <FaClock className="text-2xl text-green-600" />,
      title: "24/7 Availability",
      description: "Access your healthcare services anytime, anywhere",
      bgColor: "bg-green-100",
      iconBg: "bg-green-50"
    },
    {
      icon: <FaMobile className="text-2xl text-purple-600" />,
      title: "Mobile Friendly",
      description: "Optimized for all devices and platforms",
      bgColor: "bg-purple-100",
      iconBg: "bg-purple-50"
    },
    {
      icon: <FaHeart className="text-2xl text-red-600" />,
      title: "Patient Focused",
      description: "Designed with patient experience as priority",
      bgColor: "bg-red-100",
      iconBg: "bg-red-50"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Our Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built with security, efficiency, and patient care at the forefront
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${feature.bgColor} rounded-full flex items-center justify-center`}>
                  <div className={`w-12 h-12 ${feature.iconBg} rounded-full flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
