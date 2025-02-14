import { motion } from 'framer-motion';
import EventCard from '../../components/Events/EventCard';

const Events = () => {
  const events = [
    {
      title: "Annual MUN Conference 2024",
      date: "March 15-17, 2024",
      description: "Join us for our flagship three-day conference discussing global challenges.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
    },
    {
      title: "Regional Summit",
      date: "April 5-6, 2024",
      description: "A focused discussion on regional cooperation and development.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
    {
      title: "Youth Leadership Forum",
      date: "May 20-22, 2024",
      description: "Empowering young leaders through diplomatic engagement.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107"
    },
    {
      title: "Global Crisis Committee",
      date: "June 10-12, 2024",
      description: "Tackle pressing global issues in real-time simulation.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
    },
    {
      title: "Diplomatic Workshop",
      date: "July 1-2, 2024",
      description: "Learn essential diplomatic skills from experienced professionals.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
    {
      title: "International Conference",
      date: "August 15-17, 2024",
      description: "Join delegates from around the world in this premier event.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white"
        >
          Upcoming Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-center mb-12 text-lg"
        >
          Join us in shaping the future of global diplomacy
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events; 