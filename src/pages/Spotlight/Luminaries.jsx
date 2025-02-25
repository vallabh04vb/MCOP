import { motion } from 'framer-motion';
import LuminaryGrid from '../../components/About/Luminaries/LuminaryGrid';

const Luminaries = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Luminaries
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experts and leaders guiding our mission to democratize climate advocacy
          </p>
        </motion.div>

        <LuminaryGrid />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Network
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with climate advocacy leaders and become part of our growing community
            of change-makers.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
            Get Involved
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Luminaries;
