import { motion } from 'framer-motion';
import DocumentViewer from '../../components/MCOPHub/SopRop/DocumentViewer';
import DownloadButton from '../../components/MCOPHub/SopRop/DownloadButton';

const SopRop = () => {
  const documents = [
    {
      title: "Standard Operating Procedures 2024",
      description: "Complete guide to MCOP's operational procedures and guidelines.",
      type: "PDF Document",
      lastUpdated: "March 15, 2024",
      isProtected: true
    },
    {
      title: "Rules of Procedure",
      description: "Detailed procedures for conducting meetings and events.",
      type: "PDF Document",
      lastUpdated: "March 10, 2024",
      isProtected: true
    },
    {
      title: "Climate Advocacy Toolkit",
      description: "Resources and tools for effective climate advocacy.",
      type: "ZIP Archive",
      lastUpdated: "March 1, 2024",
      isProtected: false
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
            SOPs & ROPs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our Standard Operating Procedures and Rules of Procedure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {documents.map((doc, index) => (
              <DocumentViewer key={index} {...doc} />
            ))}
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Access Levels</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Public Access
                </p>
                <p className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  Member Access
                </p>
                <p className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  Admin Access
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-4">
                Contact our support team for assistance with accessing documents.
              </p>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SopRop;
