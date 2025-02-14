import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About MUN</h3>
            <p className="text-gray-400">
              Empowering future leaders through diplomatic simulation and debate.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/events" className="text-gray-400 hover:text-white">Events</a></li>
              <li><a href="/register" className="text-gray-400 hover:text-white">Registration</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-white">Our Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@munwebsite.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 MUN Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 