import { motion, useScroll, useTransform } from 'framer-motion';

const HeroParallax = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="relative z-10 h-full flex items-center justify-center text-white"
      >
        <div className="text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Model United Nations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Shaping Tomorrow's Leaders Today
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Join Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroParallax; 