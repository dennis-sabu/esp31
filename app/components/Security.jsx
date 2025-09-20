import React from "react";

const Security = () => {
  return (
    <section className="bg-white-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="security.png" 
            alt="Data Security"
            className="rounded-2xl shadow-lg max-w-sm w-full object-cover"
            loading="lazy"
            width="384"
            height="384"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your <span className="text-blue-600">Security</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            At MediLink, protecting your health data is our top priority. All
            medical records and communications are encrypted with{" "}
            <span className="font-semibold text-gray-800">AES-256</span> — the
            same level of security trusted by banks and governments.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Doctors only access patient records with{" "}
            <span className="font-semibold text-gray-800">OTP verification</span>,
            giving you full control over your information. With secure cloud
            storage and privacy-first design, your data stays safe and
            confidential at all times.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Security;
