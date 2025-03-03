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
      title: 'MCOP HUB',
      path: '/mcop-hub',
      dropdownItems: [
        { title: 'SOP/ROP', path: '/mcop-hub/sop-rop' },
        { title: 'Training', path: '/mcop-hub/training' }
      ]
    },
    { 
      title: 'Events',
      path: '/events',
      dropdownItems: [
        { title: 'Upcoming Events', path: '/events/upcoming' },
        { title: 'Past Events', path: '/events/past' }
      ]
    },
    {
      title: "Spotlight",
      path: "/spotlight",
      dropdownItems: [
        { title: "Spotlight", path: "/spotlight" },
      ],
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
      if (!event.target.closest('.nav-dropdown') && !event.target.closest('.mobile-menu')) {
        setActiveDropdown(null);
      }
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const handleDropdownToggle = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
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
            {navItems && navItems.length > 0 ? navItems.map((item) => (
              <div key={item.title} className="relative nav-dropdown">
                <button
                  onClick={() => handleDropdownToggle(item.title)}
                  className="flex items-center text-white hover:text-blue-400 transition-colors duration-300"
                >
                  {item.title}
                  <HiChevronDown className={`ml-1 transform transition-transform ${
                    activeDropdown === item.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {activeDropdown === item.title && item.dropdownItems && item.dropdownItems.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {item.dropdownItems.map((dropItem) => (
                      <button
                        key={dropItem.title}
                        onClick={() => handleNavigation(dropItem.path)}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {dropItem.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )) : null}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 mobile-menu">
            {navItems && navItems.length > 0 ? navItems.map((item) => (
              <div key={item.title} className="py-2">
                <button
                  onClick={() => handleDropdownToggle(item.title)}
                  className="flex items-center justify-between w-full text-white hover:text-blue-400"
                >
                  {item.title}
                  <HiChevronDown className={`transform transition-transform ${
                    activeDropdown === item.title ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === item.title && item.dropdownItems && item.dropdownItems.length > 0 && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.dropdownItems.map((dropItem) => (
                      <button
                        key={dropItem.title}
                        onClick={() => handleNavigation(dropItem.path)}
                        className="block w-full text-left text-gray-300 hover:text-blue-400 py-2"
                      >
                        {dropItem.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )) : null}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;