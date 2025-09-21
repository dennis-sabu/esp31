import React from "react";
import { motion } from "framer-motion";

import InfiniteScrollCards from "./InfiniteScrollCards";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300 py-10 pb-20 px-3 sm:px-12 rounded-3xl shadow-lg overflow-hidden max-w-[1600px] mx-auto">
      <div className="text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-bold leading-tight text-4xl md:text-7xl"
        >
          Secure Health Management & Personalized Medicine Tracking
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white mt-6 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Connecting doctors and patients with secure medical record access,
          real-time verification, and AI-powered adherence tracking
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-white text-black font-medium px-6 py-3 rounded-full shadow hover:bg-gray-100">
            Get Started
          </button>
          <button className="bg-white/20 border border-white text-white px-6 py-3 rounded-full shadow hover:bg-white/30 flex items-center justify-center gap-2">
            See How It Works →
          </button>
        </motion.div>
      </div>

      <div>
        <InfiniteScrollCards />
      </div>
    </section>
  );
};

export default Hero;
