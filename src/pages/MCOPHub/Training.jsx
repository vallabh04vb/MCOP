import { motion } from 'framer-motion';
import TrainingModules from '../../components/MCOPHub/Training/TrainingModules';

const Training = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Training Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive training materials to empower youth in climate advocacy
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-3">
            <TrainingModules />
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Access</h3>
              <div className="space-y-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Latest Modules
                </button>
                <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                  Certification Track
                </button>
                <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                  Resource Library
                </button>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Completed Modules</span>
                    <span>3/12</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-1/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Certifications</span>
                    <span>1/3</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
