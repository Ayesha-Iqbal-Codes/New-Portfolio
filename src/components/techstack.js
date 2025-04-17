import React from 'react';
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaUnity } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiCisco, SiNextdotjs, SiCplusplus } from 'react-icons/si';

const TechStack = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white -mt-8">
      <div className="w-full p-4 md:px-32 lg:px-48 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-10 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-110">
          Tech Stack
        </h1>
        <div className="grid grid-cols-4 gap-4 sm:gap-6 md:grid-cols-5 lg:grid-cols-5 xl:gap-3">
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <FaPython className="text-6xl sm:text-7xl text-yellow-500" />
            <p className="mt-2 text-sm md:text-base">Python</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <SiCplusplus className="text-6xl sm:text-7xl text-blue-500" />
            <p className="mt-2 text-sm md:text-base">C++</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <FaJs className="text-6xl sm:text-7xl text-yellow-400" />
            <p className="mt-2 text-sm md:text-base">JavaScript</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <FaHtml5 className="text-6xl sm:text-7xl text-orange-500" />
            <p className="mt-2 text-sm md:text-base">HTML</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <FaCss3Alt className="text-6xl sm:text-7xl text-blue-600" />
            <p className="mt-2 text-sm md:text-base">CSS</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <FaBootstrap className="text-6xl sm:text-7xl text-purple-700" />
            <p className="mt-2 text-sm md:text-base">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <FaReact className="text-6xl sm:text-7xl text-blue-500" />
            <p className="mt-2 text-sm md:text-base">React</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <SiTailwindcss className="text-6xl sm:text-7xl text-blue-400" />
            <p className="mt-2 text-sm md:text-base">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <div className="bg-gray-200 p-2 rounded-full">
              <SiNextdotjs className="text-6xl sm:text-7xl text-black" />
            </div>
            <p className="mt-2 text-sm md:text-base">Next.js</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <FaNodeJs className="text-6xl sm:text-7xl text-green-600" />
            <p className="mt-2 text-sm md:text-base">Node.js</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <div className="bg-gray-200 p-2 rounded-full">
              <FaUnity className="text-6xl sm:text-7xl text-black" />
            </div>
            <p className="mt-2 text-sm md:text-base">Unity</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <SiMongodb className="text-6xl sm:text-7xl text-green-700" />
            <p className="mt-2 text-sm md:text-base">MongoDB</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <SiExpress className="text-6xl sm:text-7xl text-gray-800" />
            <p className="mt-2 text-sm md:text-base">Express.js</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <FaDatabase className="text-6xl sm:text-7xl text-blue-800" />
            <p className="mt-2 text-sm md:text-base">MySQL</p>
          </div>
          <div className="flex flex-col items-center hover:scale-125 transform transition duration-300 ease-in-out">
            <SiCisco className="text-6xl sm:text-7xl text-blue-500" />
            <p className="mt-2 text-sm md:text-base">Cisco</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
