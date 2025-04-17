import React, { useEffect, useState, useRef } from 'react';
import { FaCss3Alt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const skillsData = [
  { name: 'CSS', icon: <FaCss3Alt className="text-4xl text-blue-600" />, percentage: 95 },
  { name: 'React', icon: <FaReact className="text-4xl text-blue-500" />, percentage: 95 },
  { name: 'Next.js', icon: (
      <div className="bg-gray-200 p-1 rounded-full">
        <SiNextdotjs className="text-4xl text-black" />
      </div>
    ), percentage: 80 },
  { name: 'Python', icon: <FaPython className="text-4xl text-yellow-500" />, percentage: 85 },
  { name: 'Backend (Node.js + Express)', icon: <FaNodeJs className="text-4xl text-green-600" />, percentage: 80 },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div
    ref={skillsRef}
    className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 pt-0 md:pt-2"
  >
  
      <h1 className="text-5xl md:text-6xl font-bold mb-10 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-110">Skills & Proficiency</h1>
      <div className="w-full max-w-4xl">
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                {skill.icon}
                <span className="text-lg md:text-xl">{skill.name}</span>
              </div>
              <span className="text-lg md:text-xl">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className={`bg-purple-800 h-4 rounded-full transition-all duration-1000 ${visible ? 'w-full' : 'w-0'}`}
                style={{ width: visible ? `${skill.percentage}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
