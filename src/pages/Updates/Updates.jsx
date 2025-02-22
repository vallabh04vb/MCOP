import { motion } from 'framer-motion';
import UpdatesList from '../../components/Updates/UpdatesList';
import { HiRss } from 'react-icons/hi';

const Updates = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Latest Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about our latest initiatives, events, and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <UpdatesList />
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Subscribe</h2>
              <p className="text-gray-300 mb-4">
                Get the latest updates delivered to your inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <HiRss className="mr-2" />
                  Subscribe
                </button>
              </form>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Categories</h2>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Events (12)
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Initiatives (8)
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Partnerships (5)
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Success Stories (15)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
