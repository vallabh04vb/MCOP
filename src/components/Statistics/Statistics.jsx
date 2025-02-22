import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Statistics = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { number: 500, label: 'Delegates' },
    { number: 20, label: 'Countries' },
    { number: 15, label: 'Committees' },
    { number: 10, label: 'Years Experience' }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 opacity-50">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            backgroundSize: ['100% 100%', '200% 200%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold mb-2"
                initial={{ scale: 0.5 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    separator=","
                    suffix="+"
                  />
                ) : '0+'}
              </motion.div>
              <div className="text-lg md:text-xl text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 