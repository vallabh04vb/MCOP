import { motion } from 'framer-motion';
import LuminaryCard from './LuminaryCard';

const LuminaryGrid = () => {
  const luminaries = [
    {
      name: "Dr. Sarah Chen",
      role: "Climate Science Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      description: "Leading researcher in climate change impacts and adaptation strategies with over 15 years of experience."
    },
    {
      name: "Prof. James Miller",
      role: "Environmental Policy Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "Former UN advisor specializing in youth engagement in climate policy development."
    },
    {
      name: "Dr. Aisha Patel",
      role: "Sustainability Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      description: "Pioneer in developing sustainable community initiatives and youth leadership programs."
    },
    {
      name: "Michael Zhang",
      role: "Youth Advocacy Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      description: "Experienced in mobilizing youth movements and creating impactful climate campaigns."
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {luminaries.map((luminary, index) => (
        <LuminaryCard
          key={index}
          {...luminary}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};

export default LuminaryGrid;
