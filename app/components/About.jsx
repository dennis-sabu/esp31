import React from "react";

const About = () => {
  return (
    <section className="bg-white-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">MediLink</span>
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed mb-4">
            MediLink is a secure health management platform designed to connect
            patients and doctors with confidence and ease. We prioritize your
            privacy by protecting medical records with advanced encryption and
            controlled access through OTP verification.
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed">
            With features like appointment booking, prescription sharing,
            medication reminders, and verified intake tracking, MediLink ensures
            better care while keeping your data safe. Our mission is simple — to
            make healthcare more personalized, reliable, and trustworthy.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="doctor.jpg" 
            alt="MediLink Healthcare"
            className="rounded-5xl shadow-lg max-w-sm w-full object-cover"
            loading="lazy"
            width="384"
            height="384"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
