import EventCard from './EventCard';

const UpcomingEvents = () => {
  const events = [
    {
      title: "MCOP29 Global Summit",
      date: "April 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual Event",
      description: "Join us for our annual global summit on climate action and youth advocacy.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      category: "Summit"
    },
    {
      title: "Youth Climate Workshop",
      date: "May 1, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Mumbai, India",
      description: "Interactive workshop on climate advocacy and leadership development.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      category: "Workshop"
    },
    {
      title: "Regional Conference 2024",
      date: "May 20, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Delhi, India",
      description: "Regional gathering for climate activists and youth leaders.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      category: "Conference"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <EventCard key={index} {...event} delay={index * 0.2} />
      ))}
    </div>
  );
};

export default UpcomingEvents;
