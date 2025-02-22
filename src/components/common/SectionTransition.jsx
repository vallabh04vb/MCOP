import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionTransition = ({ children, className = '' }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`section-transition ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionTransition; 