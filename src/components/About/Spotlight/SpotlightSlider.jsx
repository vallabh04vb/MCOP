import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const SpotlightSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const spotlights = [
    {
      title: "MCOP29: Where Dialogue Drives Change",
      image: "https://images.unsplash.com/photo-1552799446-159ba9523315",
      description: "Exploring how youth-led initiatives are shaping climate policy discussions at the global level.",
      date: "March 2024",
      category: "Conference"
    },
    {
      title: "Youth Climate Summit 2024",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
      description: "Bringing together young leaders from across the globe to address climate challenges.",
      date: "April 2024",
      category: "Summit"
    },
    {
      title: "Local Climate Action Workshop",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      description: "Empowering communities with tools and knowledge for grassroots climate initiatives.",
      date: "May 2024",
      category: "Workshop"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % spotlights.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + spotlights.length) % spotlights.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="grid md:grid-cols-3 gap-8">
          {spotlights.map((spotlight, index) => (
            <SpotlightCard key={index} {...spotlight} delay={index * 0.2} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
        >
          <HiChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
        >
          <HiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SpotlightSlider;
