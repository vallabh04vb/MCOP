import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Latest News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest developments and initiatives
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default News; 