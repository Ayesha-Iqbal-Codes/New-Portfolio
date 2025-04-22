import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa'; // Icons for GitHub, Website, and More Details
import ProjectImage1 from '../assets/1.gif';
import ProjectImage2 from '../assets/coldstore.gif';
import ProjectImage3 from '../assets/newprojectt.gif';
import ProjectImage4 from '../assets/4.gif'; // New burger project image
import ColdStorageVideo from '../assets/colder.mp4';

const Modal = ({ onClose, project }) => {
  if (project === "whamBamBurgers") {
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
            🍔 Wham Bam Burgers – Fast Food Ordering Website
          </h2>

          <div className="text-gray-100 space-y-4 text-sm leading-6">
            <p>
              Wham Bam Burgers is a fully functional fast food web application designed with a modern UI and powerful admin control. The platform supports protected routes, with separate login functionality for users and admins to ensure a secure and personalized experience.
            </p>

            <h3 className="text-purple-800 font-semibold">👥 User Features:</h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>🍟 Log in to your account to start your fast food journey</li>
              <li>🍔 Browse the full burgerlicious menu</li>
              <li>🛒 Add items to cart and place orders easily</li>
              <li>📜 Check your order history anytime</li>
            </ul>

            <h3 className="text-purple-800 font-semibold">🛠️ Admin Features:</h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>🔒 Access a secure Admin Dashboard</li>
              <li>🧾 Add new menu items with image upload and custom details</li>
              <li>✏️ Edit or delete existing menu items in real time</li>
              <li>📬 View all customer orders in a single panel</li>
              <li>🔄 Update order statuses like Preparing, Ready, or Delivered</li>
            </ul>

            <p className="mt-4">
              📝 Note: The current menu is just a dummy menu to demonstrate admin functionality. You can test the full Manage Menu features by adding, editing, or deleting your own items!
            </p>

            <h3 className="mt-4 text-purple-800 font-semibold">🔑 Admin Login Details:</h3>
            <p>Username: <strong>Admin</strong></p>
            <p>Password: <strong>admin123</strong></p>
          </div>
        </div>
      </div>
    );
  }

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
            I developed a Cold Storage Management Dashboard using <strong>𝐑𝐞𝐚𝐜𝐭.𝐣𝐬</strong> with <strong>Auth0 authentication</strong> ensuring that only authorized users can log in. The dashboard streamlines inventory tracking and provides real-time storage status.
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
              ✅ <strong>𝐒𝐭𝐨𝐫𝐚𝐠𝐞 𝐑𝐨𝐨𝐦 𝐌𝐚𝐧𝐚𝐠𝐞𝐧𝐭</strong> – 
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
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
    setShowModal(true);
  };

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
              <div className="flex justify-center space-x-4">
                    <a
                      href="https://watchlist-diaries.vercel.app/"
                      className="text-white flex items-center space-x-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="text-white text-2xl" />
                      <span className="hidden group-hover:inline text-sm">Live Demo</span>
                    </a>

                    <a
                      href="https://github.com/Ayesha-Iqbal-Codes/Watchlist-Diaries.git"
                      className="text-white flex items-center space-x-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-white text-2xl" />
                      <span className="hidden group-hover:inline text-sm">GitHub</span>
                    </a>
                  </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={ProjectImage2}
                alt="Cold Storage Dashboard"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Cold Storage Dashboard</h2>
              <p className="text-purple-500 text-sm mb-2">React.js</p>
              <p className="text-gray-300 text-sm mb-4">
                A cold storage management dashboard with item management, PDF generation, and real-time tracking across multiple racks.
              </p>
                          <div className="flex justify-center space-x-4">
              <a
                href="https://madina-cold-storage-dashboard.vercel.app/"
                className="text-white flex items-center space-x-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="text-white text-2xl" />
                <span className="hidden group-hover:inline text-sm">Live Demo</span>
              </a>

              <button
                onClick={() => openModal('yourModalKey')}
                className="text-white flex items-center space-x-2 group"
              >
                <FaInfoCircle className="text-white text-2xl" />
                <span className="hidden group-hover:inline text-sm">More Details</span>
              </button>

              <a
                href="https://github.com/Ayesha-Iqbal-Codes/madina-cold-storage-dashboard.git"
                className="text-white flex items-center space-x-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-2xl" />
                <span className="hidden group-hover:inline text-sm">GitHub</span>
              </a>
            </div>

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
              <h2 className="text-xl font-semibold mb-2"> Ashy Bakes
</h2>
              <p className="text-purple-500 text-sm mb-2">React.js</p>
              <p className="text-gray-300 text-sm mb-4">
                A responsive bakery website where users can order products using an Add to Cart feature. Messages from the Contact Us form go directly to the owner's Gmail.

              </p>
              <div className="flex justify-center space-x-4">
  <a
    href="https://bakery-site-phi.vercel.app/"
    className="text-white flex items-center space-x-2 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaExternalLinkAlt className="text-white text-2xl" />
    <span className="hidden group-hover:inline text-sm">Live Demo</span>
  </a>

  

  <a
    href="https://github.com/Ayesha-Iqbal-Codes/bakery-site.git"
    className="text-white flex items-center space-x-2 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="text-white text-2xl" />
    <span className="hidden group-hover:inline text-sm">GitHub</span>
  </a>
</div>

            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={ProjectImage4}
                alt="Wham Bam Burgers"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Wham Bam Burgers</h2>
              <p className="text-purple-500 text-sm mb-2">React.js</p>
              <p className="text-gray-300 text-sm mb-4">
                A fast food website with admin functionality to manage the menu, orders, and user interactions.
              </p>
              <div className="flex justify-center space-x-4">
  
  <a
    href="https://wham-bam-burgers.vercel.app/"
    className="text-white flex items-center space-x-2 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaExternalLinkAlt className="text-white text-2xl" />
    <span className="hidden group-hover:inline text-sm transition duration-200">
      Live Demo
    </span>
  </a>

  {/* More Details Button (opens modal) */}
  <button
    onClick={() => openModal('whamBamBurgers')}
    className="text-white flex items-center space-x-2 group"
  >
    <FaInfoCircle className="text-white text-2xl" />
    <span className="hidden group-hover:inline text-sm transition duration-200">
      More Details
    </span>
  </button>

  {/* GitHub */}
  <a
    href="https://github.com/Ayesha-Iqbal-Codes/wham-bam-burgers.git"
    className="text-white flex items-center space-x-2 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="text-white text-2xl" />
    <span className="hidden group-hover:inline text-sm transition duration-200">
      GitHub
    </span>
  </a>
</div>

            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && <Modal onClose={() => setShowModal(false)} project={modalProject} />}
      </div>
    </div>
  );
};

export default Projects;


