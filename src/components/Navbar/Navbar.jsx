import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { title: 'Home', path: '/', section: 'home', isPage: true },
    { title: 'About', path: '/#about', section: 'about', isPage: false },
    { title: 'Events', path: '/events', section: 'events', isPage: true },
    { title: 'Gallery', path: '/#gallery', section: 'gallery', isPage: false },
    { title: 'Team', path: '/team', section: 'team', isPage: true },
    { title: 'Contact', path: '/contact', section: 'contact', isPage: true }
  ];

  useEffect(() => {
    // Only track sections when on home page
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const scrollY = window.scrollY;

          if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
            setActiveSection(section.getAttribute('id'));
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  // Update active section based on current route
  useEffect(() => {
    const currentPath = location.pathname.slice(1) || 'home';
    setActiveSection(currentPath);
  }, [location.pathname]);

  const handleNavigation = (item) => {
    if (item.isPage) {
      // Navigate to new page
      navigate(item.path);
    } else {
      // If not on home page, go to home page first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(item.section);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(item.section);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg z-50">
      <div className="flex flex-col h-full py-8">
        <div className="px-6 mb-8">
          <Link to="/" className="text-2xl font-bold text-white">MUN Logo</Link>
        </div>
        
        <div className="flex-1 px-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavigation(item)}
                className={`px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                  (activeSection === item.section || 
                   (item.isPage && location.pathname === item.path))
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 mt-8">
          <button
            onClick={() => navigate('/register')}
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 