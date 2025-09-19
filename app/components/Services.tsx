import React from "react";
import { FaUserMd, FaCalendarAlt, FaShieldAlt, FaPills, FaBell, FaCamera } from "react-icons/fa";

const Services = () => {
  return (
    <section 
    id="services"
    className="py-16 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 bg-white max-w-[1600px] mx-auto mt-20 mb-20">
      {/* Heading + Description */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <h2 className="text-3xl md:text-6xl font-bold leading-tight">
          The Best Quality Service <br /> You Can Get
        </h2>
        <p className="text-gray-500 max-w-xl mt-4 md:mt-0 text-2xl">
          Trusted care from experienced professionals — accessible, compassionate,
          and always nearby to support your health and well-being.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaUserMd className="text-3xl text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">👩‍⚕️ Doctor–Patient Portal</h3>
          <p className="text-gray-600 text-sm">
            Secure login and instant access to your full medical history, labs, and care plans.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaCalendarAlt className="text-3xl text-pink-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">📅 Appointment Booking</h3>
          <p className="text-gray-600 text-sm">
            Effortlessly schedule visits and get automatic reminders so you never miss an appointment.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaShieldAlt className="text-3xl text-purple-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">🔐 Secure OTP Access</h3>
          <p className="text-gray-600 text-sm">
            Control who can view your health data with secure one-time password sharing.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaPills className="text-3xl text-green-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">💊 Prescription Management</h3>
          <p className="text-gray-600 text-sm">
            Get digital prescriptions, dosage tracking, and refills — all in one place.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaBell className="text-3xl text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">⏰ Medicine Reminders</h3>
          <p className="text-gray-600 text-sm">
            Automated notifications for medication intake, ensuring you stay consistent.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaCamera className="text-3xl text-red-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">📷 Intake Verification</h3>
          <p className="text-gray-600 text-sm">
            Upload proof of medication intake and share adherence reports with your doctor.
          </p>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
          View All Services <span className="text-lg">➔</span>
        </button>
      </div>
    </section>
  );
};

export default Services;
