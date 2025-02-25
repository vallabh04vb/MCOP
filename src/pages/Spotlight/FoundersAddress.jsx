import { motion } from 'framer-motion';
import FoundersMessage from '../../components/About/FoundersAddress/FoundersMessage';

const FoundersAddress = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Founders' Address
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A message from the visionaries behind MCOP's mission to empower youth in climate advocacy
          </p>
        </motion.div>

        <FoundersMessage />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Vision</h3>
            <p className="text-gray-300">
              To create a world where youth are at the forefront of climate action and policy-making
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Mission</h3>
            <p className="text-gray-300">
              Empowering young voices through dialogue, education, and active participation
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Impact</h3>
            <p className="text-gray-300">
              Building a community of 65,000+ climate advocates and future leaders
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FoundersAddress;
