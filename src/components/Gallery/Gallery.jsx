import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
      title: "General Assembly Session",
      size: "large"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      title: "Committee Debate",
      size: "small"
    },
    // Add more images...
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Past Events Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              whileHover={{ scale: 1.03 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery; 