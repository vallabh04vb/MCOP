import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "John Doe",
      role: "Delegate, Harvard MUN",
      text: "An incredible experience that shaped my understanding of international relations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    // Add more testimonials...
  ];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center text-center">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <p className="text-gray-600 italic mb-4">{testimonials[currentIndex].text}</p>
            <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
            <p className="text-gray-500">{testimonials[currentIndex].role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 