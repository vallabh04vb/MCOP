import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCounter = ({ end, title }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        className="text-5xl md:text-6xl font-bold mb-2"
        initial={{ scale: 0.5 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {inView ? (
          <CountUp
            end={end}
            duration={2.5}
            separator=","
            suffix="+"
          />
        ) : '0+'}
      </motion.div>
      <div className="text-lg md:text-xl text-blue-100">{title}</div>
    </motion.div>
  );
};

export default StatCounter; 