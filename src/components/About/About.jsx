import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTransition from '../common/SectionTransition';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const features = [
    { title: 'Global Network', description: 'Connect with delegates worldwide' },
    { title: 'Expert Training', description: 'Learn from experienced diplomats' },
    { title: 'Leadership Skills', description: 'Develop crucial diplomatic abilities' },
    { title: 'Real-world Impact', description: 'Address current global challenges' }
  ];

  return (
    <SectionTransition className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About Our MUN
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Experience the world of international diplomacy through our Model United Nations conferences. 
              Develop crucial skills in public speaking, negotiation, and leadership while addressing global challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                >
                  <h3 className="font-bold text-blue-400 mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" 
              alt="MUN Conference"
              className="rounded-lg shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-50 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </SectionTransition>
  );
};

export default About; 