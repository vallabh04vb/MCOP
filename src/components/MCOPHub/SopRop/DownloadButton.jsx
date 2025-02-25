import { useState } from 'react';
import { HiDownload, HiCheck } from 'react-icons/hi';

const DownloadButton = ({ fileUrl, fileName, fileSize }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Simulate download delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Actual download logic would go here
      setIsDownloaded(true);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading || isDownloaded}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isDownloaded
          ? 'bg-green-600 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      }`}
    >
      {isDownloading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
      ) : isDownloaded ? (
        <HiCheck className="h-5 w-5" />
      ) : (
        <HiDownload className="h-5 w-5" />
      )}
      <span>
        {isDownloading
          ? 'Downloading...'
          : isDownloaded
          ? 'Downloaded'
          : 'Download'}
      </span>
      {!isDownloading && !isDownloaded && (
        <span className="text-sm opacity-75">({fileSize})</span>
      )}
    </button>
  );
};

export default DownloadButton;
