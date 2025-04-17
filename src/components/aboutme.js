import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../assets/Image.jpg'; // Ensure this path is correct for your profile picture
import { FaInstagram, FaGithub } from 'react-icons/fa'; // Import social icons
import { MdArrowDownward } from 'react-icons/md'; // Import down arrow icon

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the animation triggers
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-4 px-4" ref={aboutRef}>
      {/* About Me Heading */}
      <div className="text-center mb-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-white transition-colors duration-300 hover:text-purple-500 ${isVisible ? 'animate-fadeIn' : ''}`}>
          About Me
        </h2>
      </div>
      
      {/* Profile Image and Description Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Profile Image with Creative Design */}
        <div className="relative w-full md:w-1/3 lg:w-1/4 flex justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className={`relative w-5/6 h-auto object-cover rounded-lg border-4 border-transparent z-10 shadow-xl hover:scale-105 transition duration-300 ease-in-out md:w-full ${isVisible ? 'animate-fadeIn' : ''}`}
          />
        </div>

        {/* About Me Description */}
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col">
          <p className={`text-lg md:text-2xl text-gray-100 leading-relaxed mb-6 px-6 md:px-12 text-justify ${isVisible ? 'animate-fadeIn' : ''}`}>
            I am a skilled web developer with hands-on experience in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. I excel in both front-end and back-end development, creating modern, responsive designs and building scalable web applications. I'm always eager to embrace new technologies and tackle challenging projects that require a blend of technical skill and creativity.
          </p>

          {/* Buttons & Social Links Section (Improved Layout) */}
          <div className="flex flex-col md:flex-row items-center justify-start px-6 md:px-12 space-y-4 md:space-y-0 md:space-x-8">
            {/* Download CV Button */}
            <a
              href="/Ayesha Iqbal Resume.pdf" // Path relative to public directory
              download="Ayesha_Iqbal_Resume.pdf"
              className="inline-flex items-center bg-[#4A148C] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#6A1B9A] transition duration-300 ease-in-out text-lg w-full md:w-auto text-center justify-center"
            >
              Download CV
              <MdArrowDownward size={24} className="ml-2" />
            </a>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/ash_ayeshaa" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                <FaInstagram size={32} />
              </a>
              <a href="https://github.com/Ayesha-Iqbal-Codes" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                <FaGithub size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
