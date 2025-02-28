import React from 'react';
import { motion } from 'framer-motion';
import StatCounter from '../../components/About/Stats/StatCounter';
import FoundersMessage from '../../components/About/FoundersAddress/FoundersMessage';
import LuminaryGrid from '../../components/About/Luminaries/LuminaryGrid';
import Hero from '../../components/Hero/Hero';
import UpcomingEventsCarousel from '../../components/UpcomingEventsCarousel';

const Home = () => {
  const upcomingEvents = [
    { id: 1, title: 'Event 1', date: '2023-10-01', description: 'Description for Event 1', image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664' },
    { id: 2, title: 'Event 2', date: '2023-10-15', description: 'Description for Event 2', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { id: 3, title: 'Event 3', date: '2023-11-01', description: 'Description for Event 3', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9' },
    // Add more events as needed
  ];

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

      {/* Upcoming Events Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
        <UpcomingEventsCarousel events={upcomingEvents} />
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