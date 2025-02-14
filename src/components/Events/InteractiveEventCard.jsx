import { motion } from 'framer-motion';
import { useState } from 'react';

const InteractiveEventCard = ({ title, date, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-48"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-black"
          animate={{ opacity: isHovered ? 0.3 : 0 }}
        />
      </motion.div>

      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2"
          animate={{ color: isHovered ? '#2563EB' : '#1F2937' }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-600 mb-2">{date}</p>
        <p className="text-gray-700">{description}</p>
        
        <motion.button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InteractiveEventCard; 