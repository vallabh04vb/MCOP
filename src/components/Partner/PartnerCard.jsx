import { motion } from 'framer-motion';
import { HiGlobeAlt, HiLocationMarker } from 'react-icons/hi';

const PartnerCard = ({ name, logo, description, location, website, type, projects, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={logo}
            alt={name}
            className="w-16 h-16 object-contain rounded-lg bg-white p-2"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <span className="text-blue-400 text-sm">{type}</span>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-400 text-sm">
            <HiLocationMarker className="mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <HiGlobeAlt className="mr-2" />
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <h4 className="text-white font-semibold mb-2">Joint Projects</h4>
          <div className="flex flex-wrap gap-2">
            {projects.map((project, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerCard;
