'use client'
import { motion } from 'framer-motion';

const InfiniteScrollCards = ({ 
  cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
      title: "1000+ Active Patients",
      subtitle: "Trust Smiles, Our Mission",
      playButton: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
      title: "98% Successful Diagnosis",
      subtitle: "Advanced Medical Technology",
      badge: "98%"
    },
    {
      id: 3,
      image: "https://plus.unsplash.com/premium_photo-1664475369784-be57403ad214?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "20,000+ Appointments",
      subtitle: "Your Smile, Our Mission",
      avatars: true
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
      title: "Expert Care Team",
      subtitle: "Experienced Professionals",
      playButton: true
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      title: "Modern Facilities",
      subtitle: "State-of-the-art Equipment",
      badge: "NEW"
    }
  ],
  speed = 30,
  direction = "left",
  className = ""
}) => {
  
  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
    <div className={`w-full overflow-hidden py-8 ${className}`}> {/* ✅ container hides overflow */}
      <motion.div
        className="flex gap-6 will-change-transform"
        animate={{
          x: direction === "left" ? [0, -2000] : [-2000, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ width: 'max-content' }}
      >
        {duplicatedCards.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="relative flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src={card.image} 
              alt={card.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-bold mb-1">{card.title}</h3>
              <p className="text-sm opacity-90">{card.subtitle}</p>
            </div>
            
            {/* Play Button */}
            {card.playButton && (
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                </div>
              </div>
            )}
            
            {/* Badge */}
            {card.badge && (
              <div className="absolute top-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-bold text-sm">{card.badge}</span>
                </div>
              </div>
            )}
            
            {/* Avatars */}
            {card.avatars && (
              <div className="absolute bottom-4 right-4 flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">👤</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollCards;
