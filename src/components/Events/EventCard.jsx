import { motion } from 'framer-motion';
import { useState } from 'react';

const EventCard = ({ title, date, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2"
          animate={{ color: isHovered ? '#2563EB' : '#1F2937' }}
        >
          {title}
        </motion.h3>
        <p className="text-blue-600 font-semibold mb-2">{date}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <motion.button
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventCard; 