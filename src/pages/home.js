import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import AboutMe from '../components/aboutme';
import ContactMe from '../components/contact';
import TechStack from '../components/techstack';
import Projects from '../components/project';
import SkillsPercentage from '../components/skill';
import WorkExperience from '../components/work';
import Education from '../components/education';
import Navbar from '../components/navbar';
import '../App.css';
import { FaArrowRight } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { Link as ScrollLink } from 'react-scroll'; 

const Homepage = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-serif">
      <Navbar activeLink={activeLink} />

    
      <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center py-6 px-6">
        <div className="max-w-4xl w-full mt-[-2%]">
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 1, ease: 'easeOut' }} 
          >
            <motion.p
              className="text-3xl md:text-4xl font-light text-purple-600 mb-4 md:mb-6 text-left md:ml-[-1rem] lg:ml-[-2rem]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              whileHover={{ scale: 1.1, color: '#d6bcfa' }} 
            >
              Hey there, it's
            </motion.p>

            <motion.h1
              className="text-6xl md:text-8xl font-extrabold mb-4 text-center md:text-left md:pl-32"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.2 }}
              whileHover={{ scale: 1.05, color: '#d6bcfa' }} 
            >
              Ayesha Iqbal
            </motion.h1>

            <motion.h2
              className="text-purple-800 text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left md:pl-60"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, color: '#d6bcfa' }} 
            >
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Web Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </motion.h2>

            <motion.p
              className="text-white text-lg md:text-2xl font-light mb-6 text-center md:text-left md:pl-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, color: '#d6bcfa' }} 
            >
              Passionate about transforming ideas into engaging web experiences.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            whileHover={{ scale: 1.05 }} 
          >
            <ScrollLink
              to="projects" 
              smooth={true} 
              duration={500} 
              className="bg-purple-800 text-white py-3 px-8 text-lg font-bold rounded-full flex items-center transition-transform hover:scale-110 hover:bg-white hover:text-purple-800 cursor-pointer"
            >
              <span className="mr-2">See My Projects</span>
              <FaArrowRight className="transition-transform hover:scale-110" />
            </ScrollLink>
          </motion.div>
        </div>
      </section>

     
      <section id="about" className="py-6 md:py-8">
        <AboutMe />
      </section>

      
      <section id="tech-stack" className="py-6 md:py-8">
        <TechStack />
      </section>

      
      <section id="projects" className="py-6 md:py-8">
        <Projects />
      </section>

      
      <section id="skills" className="py-6 md:py-8">
        <SkillsPercentage />
      </section>

      
      <section id="work-experience" className="py-6 md:py-8">
        <WorkExperience />
      </section>

      
      <section id="education" className="py-6 md:py-4">
        <Education />
      </section>

     
      <section id="contact" className="bg-purple-950 text-white py-0 md:py-0">
        <ContactMe />
        <div className="text-center mt-1">
          <p className="text-base md:text-lg">&copy; 2025 Ayesha Iqbal. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
