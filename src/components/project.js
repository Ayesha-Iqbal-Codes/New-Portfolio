import React, { useState } from 'react';
import ProjectImage1 from '../assets/1.gif';
import ProjectImage2 from '../assets/coldstore.gif';
import ProjectImage3 from '../assets/newprojectt.gif';
import ColdStorageVideo from '../assets/cold.mp4'; // Local video file

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
      <div className="bg-black rounded-xl w-full max-w-3xl p-6 relative shadow-lg overflow-y-auto max-h-[80vh] no-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-red-600"
        >
          ×
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-purple-800 font-serif">
          𝐂𝐨𝐥𝐝 𝐒𝐭𝐨𝐫𝐚𝐠𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝
        </h2>

        <video controls className="w-full rounded-lg mb-6 shadow-md">
          <source src={ColdStorageVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-gray-100 space-y-4 text-sm leading-6">
          <p>
            I developed a Cold Storage Management Dashboard using <strong>𝐑𝐞𝐚𝐜𝐭.𝐣𝐬</strong> with <strong>Auth0 authentication</strong>,
            ensuring that only authorized users can log in. The dashboard streamlines inventory tracking and provides real-time storage status.
          </p>

          <h3 className="text-purple-800 font-semibold">🔹 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬:</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              ✅ <strong>𝐀𝐝𝐝 𝐈𝐭𝐞𝐦𝐬 𝐏𝐚𝐠𝐞</strong> – Users can add, edit, and delete item details like Serial No, Company Name, Item Name,
              Quantity, Packaging Type, Vehicle No, Storage Location (Room, Floor, Rack). Data is displayed in a table below with an option
              to generate a printable PDF report.
            </li>
            <li>
              ✅ <strong>𝐒𝐞𝐧𝐝 𝐈𝐭𝐞𝐦𝐬 𝐏𝐚𝐠𝐞</strong> – Entering a Serial No automatically fills in the item's details, allowing quick dispatch with additional input fields.
            </li>
            <li>
              ✅ <strong>𝐒𝐭𝐨𝐫𝐚𝐠𝐞 𝐑𝐨𝐨𝐦 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭</strong> – 
              <ul className="list-disc pl-6 mt-1">
                <li>Three rooms, each with five floors and multiple racks.</li>
                <li>Color-coded rack status for quick identification:</li>
                <ul className="pl-4 mt-1">
                  <li>🟢 <strong>Green</strong> – Empty</li>
                  <li>🟡 <strong>Yellow</strong> – Half-Full</li>
                  <li>🔴 <strong>Red</strong> – Full</li>
                </ul>
              </ul>
            </li>
            <li>
              ✅ <strong>𝐀𝐥𝐥 𝐑𝐞𝐜𝐨𝐫𝐝𝐬 𝐏𝐚𝐠𝐞</strong> – Displays a complete history of added and sent items for easy tracking.
            </li>
          </ul>

          <p>
            With secure access, real-time inventory tracking, and an intuitive storage management system, this dashboard optimizes cold storage operations.
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white -mt-2 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-110">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {/* Project 1 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={ProjectImage1}
                alt="Project 1"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">My Watchlist Diaries</h2>
              <p className="text-purple-500 text-sm mb-2">React.js, Node.js, Express, MongoDB</p>
              <p className="text-gray-300 text-sm mb-4">
                A website where I add reviews of all movies and TV shows I've watched, featuring special lists. Built with Tailwind CSS, React, and backend APIs for forms.
              </p>
              <a
                href="https://watchlist-diaries.vercel.app/"
                className="text-purple-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link &gt;&gt;
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={ProjectImage2}
                alt="Project 2"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Cold Storage Dashboard</h2>
              <p className="text-purple-500 text-sm mb-2">React.js</p>
              <p className="text-gray-300 text-sm mb-4">
                A cold storage management dashboard with item management, PDF generation, and real-time tracking across multiple racks.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="text-purple-500 hover:underline"
              >
                More Details &gt;&gt;
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={ProjectImage3}
                alt="Project 3"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Ashy Bakes</h2>
              <p className="text-purple-500 text-sm mb-2">React.js</p>
              <p className="text-gray-300 text-sm mb-4">
                A responsive bakery website where users can order products using an "Add to Cart" feature. Messages from the "Contact Us" form go directly to the owner's Gmail.
              </p>
              <a
                href="https://bakery-site-phi.vercel.app/"
                className="text-purple-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link &gt;&gt;
              </a>
            </div>
          </div>
        </div>
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Projects;
