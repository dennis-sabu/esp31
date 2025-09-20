'use client'
import React from 'react';
import Link from 'next/link';
import { FaRocket, FaUsers } from 'react-icons/fa';

const Transform = ({ isLoggedIn = false }) => {
  if (isLoggedIn) {
    return null; // Don't show if user is logged in
  }

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <FaRocket className="text-2xl text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your{' '}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Healthcare Experience?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join thousands of patients and doctors who trust our platform for secure, 
          efficient healthcare management
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
          <div className="flex items-center text-white">
            <FaUsers className="text-2xl mr-3 text-blue-200" />
            <div className="text-left">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-blue-200 text-sm">Active Users</div>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          <div className="flex items-center text-white">
            <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-blue-200 text-sm">Uptime</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/signup"
            className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center">
              Get Started Today
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
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
            </span>
          </Link>
          
          <Link
            href="/contact"
            className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center">
              Contact Our Team
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-200 text-sm mb-4">Trusted by healthcare professionals</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-white font-semibold">HIPAA</div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="text-white font-semibold">SOC 2</div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="text-white font-semibold">ISO 27001</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform;
