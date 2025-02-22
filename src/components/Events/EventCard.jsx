import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCalendar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const EventCard = ({ title, date, location, time, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-xl overflow-hidden shadow-lg group"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-blue-600/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6 relative">
        <motion.h3
          className="text-xl font-bold mb-3 text-gray-900"
          animate={{ color: isHovered ? '#2563EB' : '#111827' }}
        >
          {title}
        </motion.h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <FaCalendar className="mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaClock className="mr-2" />
            <span>{time}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <motion.button
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Register Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventCard; 