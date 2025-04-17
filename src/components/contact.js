// src/Footer.js
import React from 'react';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between md:space-x-8 max-w-6xl mx-auto px-6">
        <h1 className="text-2xl md:text-3xl transition-transform duration-300 hover:text-purple-800 transform hover:scale-110 font-bold">Contact Me</h1>
        <div className="flex space-x-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/923110525508?text=Hello!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-green-500 transition"
          >
            <FaWhatsapp className="text-3xl md:text-4xl" />
            <span className="text-sm mt-1">WhatsApp</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ayesha-iqbal-87133a309/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-blue-600 transition"
          >
            <FaLinkedin className="text-3xl md:text-4xl" />
            <span className="text-sm mt-1">LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:ayesha.iqbal2105@gmail.com"
            className="flex flex-col items-center hover:text-red-500 transition"
          >
            <FaEnvelope className="text-3xl md:text-4xl" />
            <span className="text-sm mt-1">Email</span>
          </a>

          {/* Phone Number */}
          <a
            href="tel:+923110525508"
            className="flex flex-col items-center hover:text-purple-600 transition"
          >
            <FaPhone className="text-3xl md:text-4xl" />
            <span className="text-sm mt-1">Phone</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
