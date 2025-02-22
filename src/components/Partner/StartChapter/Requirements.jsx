import { motion } from 'framer-motion';
import { HiCheck, HiOutlineExclamationCircle } from 'react-icons/hi';

const Requirements = () => {
  const requirements = [
    {
      title: "Organization Status",
      description: "Must be a registered non-profit or educational institution",
      essential: true
    },
    {
      title: "Youth Leadership",
      description: "Active youth involvement in organization leadership (ages 15-30)",
      essential: true
    },
    {
      title: "Climate Focus",
      description: "Demonstrated commitment to climate action and advocacy",
      essential: true
    },
    {
      title: "Local Impact",
      description: "Proven track record of community engagement",
      essential: true
    },
    {
      title: "Resources",
      description: "Ability to dedicate time and resources to MCOP initiatives",
      essential: false
    },
    {
      title: "Digital Presence",
      description: "Active social media presence and digital communication capabilities",
      essential: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Chapter Requirements</h2>
        <p className="text-gray-300">
          Before applying to start a chapter, please ensure you meet the following requirements:
        </p>
      </div>

      <div className="space-y-4">
        {requirements.map((req, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start p-4 bg-gray-700/50 rounded-lg"
          >
            <div className="flex-shrink-0">
              <div className={`p-2 rounded-full ${
                req.essential ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-600/20 text-gray-400'
              }`}>
                <HiCheck size={20} />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-white font-semibold flex items-center">
                {req.title}
                {req.essential && (
                  <span className="ml-2 text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                    Required
                  </span>
                )}
              </h3>
              <p className="text-gray-300 text-sm mt-1">{req.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg flex items-start">
        <HiOutlineExclamationCircle className="flex-shrink-0 text-yellow-500 mt-1" size={24} />
        <div className="ml-4">
          <h3 className="text-yellow-500 font-semibold">Important Note</h3>
          <p className="text-gray-300 text-sm mt-1">
            Meeting these requirements does not guarantee chapter approval. All applications 
            will be reviewed thoroughly by our team to ensure alignment with MCOP's mission 
            and values.
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Start Application
        </button>
      </div>
    </motion.div>
  );
};

export default Requirements;
