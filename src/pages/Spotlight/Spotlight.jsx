import { motion } from 'framer-motion';
import SpotlightSlider from '../../components/About/Spotlight/SpotlightSlider';
import StatCounter from '../../components/About/Stats/StatCounter';
import FoundersMessage from '../../components/About/FoundersAddress/FoundersMessage';
import LuminaryGrid from '../../components/About/Luminaries/LuminaryGrid';

const Spotlight = () => {
  console.log("Spotlight component rendered"); // Debug log
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Spotlight
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Highlighting key initiatives and achievements in our journey towards climate advocacy
          </p>
        </motion.div>

        <SpotlightSlider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-400 rounded-full mr-3"></span>
                65,000+ community members engaged
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-400 rounded-full mr-3"></span>
                Global partnerships across 40+ countries
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-400 rounded-full mr-3"></span>
                Youth representation in key climate forums
              </li>
            </ul>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              Get Involved
            </h2>
            <p className="text-gray-300 mb-6">
              Join our mission to amplify youth voices in climate advocacy. Together, 
              we can make a difference.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Join the Movement
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Spotlight;
