import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 mt-12 rounded-t-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white">MediLink</h2>
          <p className="mt-2 text-sm">Caring for You, Every Step of the Way.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Doctors</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Utility Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Password Protected</a></li>
            <li><a href="#" className="hover:text-white">404 Not Found</a></li>
            <li><a href="#" className="hover:text-white">Style Guide</a></li>
            <li><a href="#" className="hover:text-white">Licenses</a></li>
          </ul>
        </div>

        {/* Legal Links + Subscribe */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal Links</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Disclaimer</a></li>
          </ul>
          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full text-sm bg-transparent text-gray-300 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© Copyright 2025. All Rights Reserved</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Condition</a>
          <a href="#" className="hover:text-white">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
