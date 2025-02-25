import React from 'react';
import { motion } from 'framer-motion';
import StatCounter from '../../components/About/Stats/StatCounter';

const Stats = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            DEMOCRATIZING
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-400 mb-8">
            CLIMATE ADVOCACY
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering youth voices in global climate action and decision-making processes.
          </p>
        </motion.div>

        <StatCounter />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Our Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-blue-400 mb-2">66 Months</h4>
              <p className="text-gray-300">Of continuous climate action since 2019</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-blue-400 mb-2">65,000+</h4>
              <p className="text-gray-300">Community members engaged</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-blue-400 mb-2">Strategic</h4>
              <p className="text-gray-300">Partnerships for sustainable impact</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-blue-400 mb-2">Youth-Led</h4>
              <p className="text-gray-300">Movement for climate advocacy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
