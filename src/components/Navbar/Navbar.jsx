import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item) => {
    setIsOpen(false);
    if (item.path.startsWith('/#')) {
      // For hash navigation within home page
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.path.replace('/', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(item.path.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For page navigation
      navigate(item.path);
    }
  };

  const navItems = [
    { title: 'Home', path: '/', section: 'home' },
    { title: 'About', path: '/#about', section: 'about' },
    { title: 'Events', path: '/events', section: 'events' },
    { title: 'Gallery', path: '/#gallery', section: 'gallery' },
    { title: 'Contact', path: '/contact', section: 'contact' }
  ];

  return (
    <>
      {/* Desktop Vertical Navbar */}
      <motion.nav
        className="fixed left-0 top-0 h-screen w-64 z-50 hidden md:flex flex-col bg-transparent backdrop-blur-sm border-r border-white/10"
      >
        <div className="flex flex-col h-full py-8">
          <motion.div 
            className="px-6 mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-2xl font-bold text-white">MUN</Link>
          </motion.div>
          
          <div className="flex-1 px-4">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.section}
                  onClick={() => handleNavigation(item)}
                  className={`text-white px-4 py-3 rounded-lg transition-all duration-300 text-left
                    ${activeSection === item.section 
                      ? 'bg-blue-600/30 backdrop-blur-sm border border-white/10' 
                      : 'hover:bg-white/5'}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.title}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div 
            className="px-4 mt-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => navigate('/register')}
              className="w-full px-4 py-3 bg-blue-600/30 backdrop-blur-sm text-white rounded-lg 
                       hover:bg-blue-600/50 transition-all duration-300 border border-white/10"
            >
              Register Now
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-blue-600/30 backdrop-blur-sm text-white md:hidden border border-white/10"
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed left-0 top-0 h-screen w-64 bg-transparent backdrop-blur-sm z-40 md:hidden border-r border-white/10"
          >
            <div className="flex flex-col h-full py-20 px-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.section}
                  onClick={() => handleNavigation(item)}
                  className={`text-white px-4 py-3 rounded-lg transition-all duration-300 mb-2 text-left
                    ${activeSection === item.section ? 'bg-blue-600/30 border border-white/10' : 'hover:bg-white/5'}`}
                  whileHover={{ x: 10 }}
                >
                  {item.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 