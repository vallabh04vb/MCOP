import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Youth Delegate",
      quote: "MCOP has given me the platform to make my voice heard in climate policy discussions.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
      name: "James Miller",
      role: "Student Activist",
      quote: "Being part of MCOP has transformed my understanding of climate advocacy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Aisha Patel",
      role: "Community Leader",
      quote: "The support and resources from MCOP have been invaluable for our local initiatives.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-12">
            Voices of Change
          </h2>
          
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-lg p-8"
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <p className="text-xl text-gray-300 mb-6 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              <h3 className="text-white font-bold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-blue-400">
                {testimonials[currentIndex].role}
              </p>
            </motion.div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition-colors duration-300"
            >
              <HiChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition-colors duration-300"
            >
              <HiChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 