// This will be your main stats page
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ number, label, suffix = '', delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
        {inView ? (
          <CountUp
            end={number}
            duration={2.5}
            suffix={suffix}
          />
        ) : (
          `0${suffix}`
        )}
      </div>
      <p className="text-gray-300 text-lg">{label}</p>
    </motion.div>
  );
};

export default StatCard;