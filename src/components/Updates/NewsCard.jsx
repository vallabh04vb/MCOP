import { motion } from 'framer-motion';
import { HiCalendar, HiTag, HiArrowRight } from 'react-icons/hi';

const NewsCard = ({ title, excerpt, date, category, image, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-400">
            <HiCalendar className="mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <HiTag className="mr-2 text-blue-400" />
            <span className="text-blue-400">{category}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{excerpt}</p>
        <a
          href={link}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          Read More <HiArrowRight className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default NewsCard;
