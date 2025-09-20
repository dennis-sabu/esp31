'use client'
import React from 'react';
import { FaCalendarAlt, FaUserMd, FaLock, FaPills, FaClock, FaCamera } from 'react-icons/fa';

const ServiceSuite = () => {
  const services = [
    {
      icon: <FaCalendarAlt className="text-3xl text-blue-600" />,
      title: "Book Appointment",
      description: "Schedule visits with your preferred doctors and get instant confirmations with automated reminders.",
      learnMore: "Learn More",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <FaUserMd className="text-3xl text-orange-600" />,
      title: "Doctor-Patient Portal",
      description: "Secure login and instant access to your full medical history, labs, and care plans.",
      learnMore: "Learn More",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: <FaLock className="text-3xl text-purple-600" />,
      title: "Secure OTP Access",
      description: "Control who can view your health data with secure one-time password sharing.",
      learnMore: "Learn More",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <FaPills className="text-3xl text-red-600" />,
      title: "Prescription Management",
      description: "Get digital prescriptions, dosage tracking, and refills — all in one place.",
      learnMore: "Learn More",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: <FaClock className="text-3xl text-green-600" />,
      title: "Medicine Reminders",
      description: "Automated notifications for medication intake, ensuring you stay consistent.",
      learnMore: "Learn More",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <FaCamera className="text-3xl text-gray-600" />,
      title: "Intake Verification",
      description: "Upload proof of medication intake and share adherence reports with your doctor.",
      learnMore: "Learn More",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Complete Service Suite
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From appointment booking to medication management, we provide end-to-end 
            digital healthcare solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center justify-center mx-auto">
                {service.learnMore}
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSuite;
