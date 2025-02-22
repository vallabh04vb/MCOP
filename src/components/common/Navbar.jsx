import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      title: "About",
      path: "/about",
      dropdownItems: [
        { title: "Stats", path: "/about/stats" },
        { title: "Founder's Address", path: "/about/founders-address" },
        { title: "Luminaries", path: "/about/luminaries" },
        { title: "Spotlight", path: "/about/spotlight" }
      ]
    },
    { 
      title: 'Calendar',
      path: '/calendar',
      dropdownItems: [
        { title: 'Upcoming Events', path: '/calendar/upcoming' },
        { title: 'Past Events', path: '/calendar/past' }
      ]
    },
    { 
      title: 'Resources',
      path: '/resources',
      dropdownItems: [
        { title: 'Training', path: '/resources/training' },
        { title: 'SOP/ROP', path: '/resources/sop-rop' }
      ]
    },
    { 
      title: 'Partner',
      path: '/partner',
      dropdownItems: [
        { title: 'Start A Chapter', path: '/partner/start-chapter' }
      ]
    },
    { 
      title: 'Updates',
      path: '/updates',
      dropdownItems: [
        { title: 'Latest News', path: '/updates/news' },
        { title: 'Announcements', path: '/updates/announcements' }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownClick = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleLinkClick = (path) => {
    setActiveDropdown(null);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            MCOP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.title} className="relative nav-dropdown">
                <button
                  onClick={() => handleDropdownClick(item.title)}
                  className={`flex items-center text-white hover:text-blue-400 transition-colors duration-300 ${
                    location.pathname.startsWith(item.path) ? 'text-blue-400' : ''
                  }`}
                >
                  {item.title}
                  <HiChevronDown className={`ml-1 transform transition-transform ${
                    activeDropdown === item.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    {item.dropdownItems.map((dropItem) => (
                      <button
                        key={dropItem.title}
                        onClick={() => handleLinkClick(dropItem.path)}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {dropItem.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <div key={item.title} className="py-2">
                <button
                  onClick={() => handleDropdownClick(item.title)}
                  className="flex items-center justify-between w-full text-white hover:text-blue-400"
                >
                  {item.title}
                  <HiChevronDown className={`transform transition-transform ${
                    activeDropdown === item.title ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === item.title && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.dropdownItems.map((dropItem) => (
                      <button
                        key={dropItem.title}
                        onClick={() => handleLinkClick(dropItem.path)}
                        className="block w-full text-left text-gray-300 hover:text-blue-400"
                      >
                        {dropItem.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;