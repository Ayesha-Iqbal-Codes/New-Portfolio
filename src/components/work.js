// src/WorkExperience.js
import React from 'react';
import ITSOLERAImage from '../assets/2.png'; // Ensure the image path is correct
import { MdArrowDownward } from 'react-icons/md'; // Import icon

const WorkExperience = () => {
  return (
    <div className="min-h-screen bg-black text-white py-0 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center">Work Experience</h1>
        
        {/* AI/ML Intern Experience */}
        <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16 pt-2">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-80 md:h-40 mb-4 md:mb-0">
            <img 
              src={ITSOLERAImage} 
              alt="ITSOLERA" 
              className="w-full h-full rounded-xl object-cover shadow-lg" 
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 md:ml-6 mt-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">AI/ML Intern</h2>
            <p className="text-lg text-gray-400 mb-1">ITSOLERA - 3-Month Internship in Machine Learning</p>
            <p className="text-lg text-gray-300 leading-relaxed mb-3">
              Worked on a variety of AI/ML projects, focusing on data preprocessing, model development, and evaluation, utilizing Python libraries like TensorFlow and Scikit-learn.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Key Projects:</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Earthquake Prediction Model with Machine Learning</li>
                <li>Fake News Detection with Machine Learning</li>
                <li>AI-Enhanced Detection of Fake and Bot Profiles on Social Media</li>
                <li>Image Segmentation with Machine Learning</li>
                <li>URL Classification and Analysis: Categorizing and Analyzing 1 Million URLs for Enhanced Data Insights</li>
                <li>Outfit Recommendation System</li>
              </ul>
            </div>
            
            {/* Button for Downloading Internship Letter */}
            <div className="flex items-center justify-center space-x-6 mt-4">
              <a
                href="/Internship_Letter_Itsolera.pdf" // Path relative to public directory
                download="Internship_Letter_Itsolera.pdf"
                className="inline-flex items-center bg-[#4A148C] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#6A1B9A] transition duration-300 ease-in-out text-lg"
              >
                Download Internship Letter
                <MdArrowDownward size={24} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
