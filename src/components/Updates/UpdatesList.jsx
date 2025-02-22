import { useState } from 'react';
import NewsCard from './NewsCard';

const UpdatesList = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const updates = [
    {
      title: "MCOP29 Global Summit Announces Key Speakers",
      excerpt: "Leading climate experts and youth advocates to address crucial environmental challenges at this year's summit.",
      date: "March 15, 2024",
      category: "Events",
      image: "https://images.unsplash.com/photo-1552799446-159ba9523315",
      link: "#"
    },
    {
      title: "Youth Climate Action Initiative Launches",
      excerpt: "New program empowers young leaders to implement local climate solutions in their communities.",
      date: "March 10, 2024",
      category: "Initiatives",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      link: "#"
    },
    {
      title: "Partnership Announcement: UNICEF Collaboration",
      excerpt: "Strategic partnership to enhance youth representation in global climate policy discussions.",
      date: "March 5, 2024",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      link: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Updates' },
    { id: 'events', label: 'Events' },
    { id: 'initiatives', label: 'Initiatives' },
    { id: 'partnerships', label: 'Partnerships' }
  ];

  const filteredUpdates = activeFilter === 'all'
    ? updates
    : updates.filter(update => update.category.toLowerCase() === activeFilter);

  return (
    <div>
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 whitespace-nowrap ${
              activeFilter === filter.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUpdates.map((update, index) => (
          <NewsCard key={index} {...update} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default UpdatesList;
