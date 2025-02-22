import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const { scrollY } = useScroll();
  const ref = useRef(null);

  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, 200]);

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 w-full h-screen z-0"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-screen flex items-center justify-center"
      >
        <motion.div 
          style={{ y: textY }}
          className="text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
              Model United Nations
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl mb-8 text-blue-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Shaping Tomorrow's Leaders Today
          </motion.p>
          <motion.button
            className="bg-blue-600/80 backdrop-blur-sm text-white px-8 py-4 rounded-full 
                     hover:bg-blue-700 transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-blue-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 