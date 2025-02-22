import { motion } from 'framer-motion';

const LuminaryCard = ({ name, role, image, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-blue-400 mb-4">{role}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default LuminaryCard;
