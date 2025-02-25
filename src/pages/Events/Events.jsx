import { motion } from 'framer-motion';
import GoogleEvents from '../../components/Events/GoogleEvents';
import UpcomingEvents from '../../components/Events/UpcomingEvents';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Events Calendar
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our upcoming events and join us in making a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GoogleEvents />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Register for Events
              </button>
              <button className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                Submit a Proposal
              </button>
              <button className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                Become a Speaker
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Upcoming Events</h2>
          <UpcomingEvents />
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
