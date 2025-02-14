import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamMember = ({ name, role, image, social }) => (
  <div 
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    data-aos="fade-up"
  >
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex space-x-4">
        {social.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            className="text-gray-400 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Secretary General",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      social: [
        { icon: "LinkedIn", url: "#" },
        { icon: "Twitter", url: "#" }
      ]
    },
    // Add more team members...
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team; 