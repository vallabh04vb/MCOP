import { motion } from 'framer-motion';

const FoundersMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 md:p-12"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1557555187-23d685287bc3"
            alt="Founders"
            className="rounded-lg w-full h-auto shadow-xl"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-white">Shail and Shubh Mehta</h3>
            <p className="text-gray-400">Co-Founders, MCOP</p>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Journey Towards Climate Action
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Started in 2019 at Change Is Us (CU), we've been giving voice to 
              environmental issues through youth activism and citizen action. Our focus 
              has been on creating a robust ecosystem of change involving all levels 
              of stakeholders.
            </p>
            <p>
              Through strategic partnerships and community engagement, we've built 
              South Mumbai's fastest-growing youth movement, expanding to trans-local 
              communities through events & experiences.
            </p>
            <blockquote className="border-l-4 border-blue-400 pl-4 my-6 italic">
              "We believe in the power of youth to drive meaningful change in climate 
              advocacy and global decision-making processes."
            </blockquote>
            <p>
              Our mission is to democratize climate advocacy by increasing youth 
              representation in global forums and ensuring that young voices are 
              heard in climate action discussions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoundersMessage;
