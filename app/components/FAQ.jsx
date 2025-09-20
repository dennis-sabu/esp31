'use client'
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Link from 'next/link';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How secure is my medical data on MediLink?",
      answer: "Your medical data is protected with AES-256 encryption, the same security standard used by banks. All data is stored securely in the cloud with multiple backup systems, and access is controlled through OTP verification."
    },
    {
      question: "How does the OTP verification system work?",
      answer: "When a doctor needs to access your medical records, you receive an OTP (One-Time Password) via SMS or email or by password. You must provide this code to grant temporary access to your data, ensuring you have complete control over who sees your information."
    },
    {
      question: "Can I book appointments with any doctor on the platform?",
      answer: "Yes, you can browse and book appointments with any registered doctor on MediLink. You can filter by specialty, location, availability, and read reviews from other patients to make an informed choice."
    },
    {
      question: "How do medication reminders work?",
      answer: "Once your doctor prescribes medication, MediLink automatically sets up personalized reminders based on your dosage schedule. You'll receive notifications on your phone, and you can upload photos as proof of intake for better adherence tracking."
    },
    {
      question: "What happens if I miss an appointment?",
      answer: "If you miss an appointment, you can reschedule directly through the platform. Some doctors may have cancellation policies, which will be clearly displayed when booking. We also send multiple reminders to help you avoid missing appointments."
    },
    {
      question: "Is MediLink available on mobile devices?",
      answer: "Yes, MediLink is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers. We also have dedicated mobile apps for iOS and Android for the best user experience."
    },
    {
      question: "How do doctors verify prescriptions?",
      answer: "All prescriptions are digitally signed by licensed doctors and include verification codes. Pharmacies can verify prescriptions directly through our system, and patients receive digital copies instantly after consultation."
    },
    {
      question: "Can I share my medical history with family members?",
      answer: "Yes, you can grant limited access to family members or caregivers through our secure sharing feature. You control what information they can see and can revoke access at any time."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about MediLink
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FaMinus className="text-blue-600 text-sm" />
                  ) : (
                    <FaPlus className="text-blue-600 text-sm" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
