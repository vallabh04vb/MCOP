import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const StatCounter = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    {
      number: 65000,
      label: "Community Members",
      suffix: "+"
    },
    {
      number: 40,
      label: "Countries Represented",
      suffix: "+"
    },
    {
      number: 100,
      label: "Events Organized",
      suffix: "+"
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatCounter; 