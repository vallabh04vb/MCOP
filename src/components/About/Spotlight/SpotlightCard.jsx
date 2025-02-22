import { motion } from 'framer-motion';

const SpotlightCard = ({ title, image, description, date, category, delay = 0 }) => {
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
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-400 text-sm">{category}</span>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-semibold">
          Read More →
        </button>
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
