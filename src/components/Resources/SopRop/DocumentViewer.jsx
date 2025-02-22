import { useState } from 'react';
import { HiEye, HiDownload, HiLockClosed } from 'react-icons/hi';

const DocumentViewer = ({ title, description, type, lastUpdated, isProtected }) => {
  const [isPasswordPrompt, setIsPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');

  const handleAccess = () => {
    if (isProtected) {
      setIsPasswordPrompt(true);
    } else {
      // Handle document access
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>{type}</span>
            <span>•</span>
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
        {isProtected && <HiLockClosed className="text-yellow-500" size={20} />}
      </div>

      {isPasswordPrompt ? (
        <div className="mt-4">
          <input
            type="password"
            placeholder="Enter password"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex space-x-2">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={() => {/* Handle password submission */}}
            >
              Submit
            </button>
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              onClick={() => setIsPasswordPrompt(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex space-x-4 mt-4">
          <button
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
            onClick={handleAccess}
          >
            <HiEye className="mr-2" /> View
          </button>
          <button
            className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
            onClick={handleAccess}
          >
            <HiDownload className="mr-2" /> Download
          </button>
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;
