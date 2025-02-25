import { motion } from 'framer-motion';
import { HiPlay, HiDownload, HiClock } from 'react-icons/hi';

const ModuleCard = ({ title, description, duration, type, thumbnail, downloadUrl, videoUrl, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9 relative group">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors duration-300">
            <HiPlay size={24} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-blue-400 text-sm">{type}</span>
          <div className="flex items-center text-gray-400 text-sm">
            <HiClock className="mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center">
            <HiPlay className="mr-2" /> Watch Now
          </button>
          <button className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
            <HiDownload className="mr-2" /> Resources
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
