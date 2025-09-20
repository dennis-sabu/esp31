import React from "react";

const ForPatients = () => {
  return (
    <section
      id="patients"
      className="bg-white-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="patient.png" 
            alt="Happy Patient using MediLink"
            className="rounded-2xl shadow-lg max-w-sm w-full object-cover"
            loading="lazy"
            width="384"
            height="384"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            For <span className="text-blue-600">Patients</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Take control of your healthcare journey with MediLink. From booking
            appointments to receiving smart medication reminders, everything is
            designed to make your treatment smoother and stress-free.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Your medical records are secured with encryption and only shared
            when you allow it, giving you full peace of mind and privacy.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForPatients;
