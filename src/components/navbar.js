import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaChartLine, FaBriefcase, FaSchool, FaEnvelope } from 'react-icons/fa';

const iconMap = {
  home: <FaHome className="text-xl" />,
  about: <FaUser className="text-xl" />,
  'tech-stack': <FaCode className="text-xl" />,
  projects: <FaProjectDiagram className="text-xl" />,
  skills: <FaChartLine className="text-xl" />,
  'work-experience': <FaBriefcase className="text-xl" />,
  education: <FaSchool className="text-xl" />,
  contact: <FaEnvelope className="text-xl" />
};

const sectionNames = {
  home: 'Home',
  about: 'About Me',
  'tech-stack': 'Tech Stack',
  projects: 'Projects',
  skills: 'Skills',
  'work-experience': 'Work',
  education: 'Education',
  contact: 'Contact'
};

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tech-stack', 'projects', 'skills', 'work-experience', 'education', 'contact'];
      let activeSection = 'home';

      const scrollPosition = window.scrollY;
      const scrollBottomPosition = scrollPosition + window.innerHeight;
      const documentHeight = document.body.offsetHeight;

      if (scrollPosition === 0) {
        activeSection = 'home';
      } else {
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (scrollBottomPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              activeSection = section;
            }
          }
        });

        if (scrollBottomPosition >= documentHeight) {
          activeSection = 'contact';
        }
      }

      setActiveLink(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    setActiveLink(section);
    setHoveredLink(section);
    setClickedLink(section);

    // Set timeout to remove hover after 1 second
    setTimeout(() => {
      setHoveredLink(null);
      setClickedLink(null);
    }, 1000);
  };

  return (
    <nav className="bg-black bg-opacity-70 w-10 sm:w-14 md:w-18 h-auto p-2 sm:p-3 md:p-4 fixed top-1/2 right-0 transform -translate-y-1/2 rounded-tl-xl rounded-bl-xl shadow-lg flex flex-col items-center z-50">
      <ul className="flex flex-col space-y-3 items-center">
        {['home', 'about', 'tech-stack', 'projects', 'skills', 'work-experience', 'education', 'contact'].map((section) => (
          <li
            key={section}
            className="relative text-center group"
            onMouseEnter={() => setHoveredLink(section)}
            onMouseLeave={() => setHoveredLink(clickedLink === section ? section : null)}
          >
            <a
              href={`#${section}`}
              className={classNames(
                'text-white hover:text-purple-300 p-2 rounded-full flex items-center justify-center transition-transform transform duration-300',
                {
                  'bg-purple-800': activeLink === section,
                  'scale-110': hoveredLink === section // Enlarge icon on hover
                }
              )}
              style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.5rem' }}
              onClick={() => handleClick(section)} // Handle click event
            >
              {iconMap[section]}
            </a>

            {/* Tooltip that appears on hover */}
            {hoveredLink === section && ( // Show tooltip when the section is hovered
              <span
                className={classNames(
                  'absolute top-1/2 transform -translate-y-1/2 text-xs bg-purple-900 text-white py-1 px-2 rounded-lg whitespace-nowrap transition-opacity duration-300',
                  {
                    'left-[-55px]': section === 'skills' || section === 'work-experience', // Reduced gap for these sections
                    'left-[-85px]': section === 'education', // Increased gap for education
                    'left-[-65px]': section === 'home', // Decreased gap for home
                    'left-[-90px]': section === 'tech-stack', // Add gap for Tech Stack
                    'left-[-75px]': !(section === 'skills' || section === 'work-experience' || section === 'education' || section === 'home' || section === 'tech-stack') // Default gap
                  }
                )}
                style={{ marginLeft: '5px' }} // Adds a smaller gap between the icon and the tooltip
              >
                {sectionNames[section]}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
