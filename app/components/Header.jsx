'use client'
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <img src="/logo.svg" alt="MediLink Logo" className="h-8 w-8" /> */}
          <span className="text-xl font-bold text-purple-600">MediLink</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <Link href="/" className="hover:text-purple-600 font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:text-purple-600 font-medium">
            About
          </Link>
          <Link href="#services" className="hover:text-purple-600 font-medium">
            Services
          </Link>
          <Link href="/doctors" className="hover:text-purple-600 font-medium">
            Doctors
          </Link>
          <Link href="/appointments" className="hover:text-purple-600 font-medium">
            Appointments
          </Link>
          <Link href="/contact" className="hover:text-purple-600 font-medium">
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/signup"
            className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t px-6 py-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-purple-600">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-purple-600">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block hover:text-purple-600">Services</Link>
          <Link href="/doctors" onClick={() => setIsOpen(false)} className="block hover:text-purple-600">Doctors</Link>
          <Link href="/appointments" onClick={() => setIsOpen(false)} className="block hover:text-purple-600">Appointments</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-purple-600">Contact</Link>
          <div className="flex flex-col space-y-2 pt-2">
            <Link href="/signup" className="w-full text-center px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100">
              Sign up
            </Link>
            <Link href="/login" className="w-full text-center px-5 py-2 rounded-full bg-black text-white hover:bg-gray-900">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
