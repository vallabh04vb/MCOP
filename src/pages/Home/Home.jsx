import React from 'react';
import { motion } from 'framer-motion';
import StatCounter from '../../components/About/Stats/StatCounter';
import FoundersMessage from '../../components/About/FoundersAddress/FoundersMessage';
import LuminaryGrid from '../../components/About/Luminaries/LuminaryGrid';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Impact</h2>
        <StatCounter />
      </motion.section>

      {/* Founder's Address Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Founder's Address</h2>
        <FoundersMessage />
      </motion.section>

      {/* Luminaries Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Luminaries</h2>
        <LuminaryGrid />
      </motion.section>
    </div>
  );
};

export default Home; 