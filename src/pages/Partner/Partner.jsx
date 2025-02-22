import { useState } from 'react';
import { motion } from 'framer-motion';
import Requirements from '../../components/Partner/StartChapter/Requirements';
import ApplicationForm from '../../components/Partner/StartChapter/ApplicationForm';
import PartnerCard from '../../components/Partner/PartnerCard';

const Partner = () => {
  const [activeTab, setActiveTab] = useState('partners');

  const partners = [
    {
      name: "UNICEF",
      logo: "https://example.com/unicef-logo.png", // Replace with actual logo URL
      description: "Working together to amplify youth voices in climate action and policy-making.",
      location: "Global",
      website: "https://www.unicef.org",
      type: "International Organization",
      projects: ["Youth Summit 2024", "Climate Education", "Policy Advocacy"]
    },
    {
      name: "Hinduja College",
      logo: "https://example.com/hinduja-logo.png", // Replace with actual logo URL
      description: "Academic partnership fostering climate education and youth leadership.",
      location: "Mumbai, India",
      website: "https://www.hindujacollege.com",
      type: "Educational Institution",
      projects: ["Research Initiative", "Student Leadership", "Community Outreach"]
    },
    {
      name: "Climate Action Network",
      logo: "https://example.com/can-logo.png", // Replace with actual logo URL
      description: "Collaborative network for climate advocacy and sustainable development.",
      location: "International",
      website: "https://www.climatenetwork.org",
      type: "NGO Network",
      projects: ["Policy Development", "Grassroots Mobilization", "Training Programs"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Partnership Program
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our global network of organizations committed to climate advocacy and youth empowerment
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex space-x-4 border-b border-gray-700">
            <button
              className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                activeTab === 'partners'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('partners')}
            >
              Current Partners
            </button>
            <button
              className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                activeTab === 'start-chapter'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('start-chapter')}
            >
              Start a Chapter
            </button>
          </div>
        </div>

        {activeTab === 'partners' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} delay={index * 0.2} />
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            <Requirements />
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Benefits</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Access to MCOP's global network
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Training and resource materials
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Participation in international events
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Collaborative project opportunities
                  </li>
                </ul>
              </div>
              <ApplicationForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partner; 