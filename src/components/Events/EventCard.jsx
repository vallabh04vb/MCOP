import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiClock } from 'react-icons/hi';

const EventCard = ({ title, date, time, location, description, image, category, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300">
            <HiCalendar className="mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <HiClock className="mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <HiLocationMarker className="mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm">
          Register Now
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;
