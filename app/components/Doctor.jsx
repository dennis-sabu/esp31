

const ForDoctors = () => {
  return (
    <section
      id="doctors"
    className="bg-white-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            For <span className="text-blue-600">Doctors</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            MediLink empowers doctors with secure, real-time access to patient
            records — but only with patient consent via OTP verification. This
            ensures privacy while giving you the data needed for informed
            decisions.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Manage prescriptions, monitor medicine adherence with verified
            intake, and stay connected with your patients — all in one platform
            designed to save time and improve outcomes.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            See More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="realdoctor.png" 
            alt="Doctor using MediLink"
            className="rounded-2xl shadow-lg max-w-sm w-full object-cover"
            loading="lazy"
            width="384"
            height="384"
          />
        </div>
      </div>
    </section>
  );
};

export default ForDoctors;
