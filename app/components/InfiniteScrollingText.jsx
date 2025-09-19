'use client'
import { motion } from 'framer-motion';


const InfiniteScrollBanner = ({ 
  text = "Committed to Your Health and Lifelong Care • Trusted care from experienced professionals • Accessible, compassionate, and always nearby • ",
  speed = 50,
  className = "",
  textColor = "text-white",
  backgroundColor = "bg-gradient-to-r from-purple-600 to-pink-500"
}) => {
  return (
    <div className={`w-full overflow-hidden ${backgroundColor} py-3 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -2000]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {/* Repeat the text multiple times to ensure continuous scroll */}
        <span className={`text-sm font-medium ${textColor} mr-8`}>
          {text.repeat(10)}
        </span>
      </motion.div>
    </div>
  );
};

export default InfiniteScrollBanner;