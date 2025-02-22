import React from 'react';
import { motion } from 'framer-motion';
import StatCard from './StatCard';

const StatCounter = () => {
  const stats = [
    { number: 65000, label: "Community Members", suffix: "+" },
    { number: 40, label: "Partner Countries", suffix: "+" },
    { number: 150, label: "Active Projects", suffix: "+" },
    { number: 25000, label: "Youth Trained", suffix: "+" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          number={stat.number}
          label={stat.label}
          suffix={stat.suffix}
          delay={index * 0.2}
        />
      ))}
    </motion.div>
  );
};

export default StatCounter;
