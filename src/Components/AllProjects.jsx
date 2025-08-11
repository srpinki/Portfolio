import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import { motion } from "framer-motion";

import {
  FaFolderOpen,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
} from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

// Icon mapping for categories
const categoryIcons = {
  "All Projects": <FaFolderOpen />,
  Frontend: <FaLaptopCode />,
  Fullstack: <FaServer />,
  Backend: <FaServer />,
  Mobile: <FaMobileAlt />,
};

const AllProjects = () => {
  const projects = useLoaderData();
  const [activeTab, setActiveTab] = useState("All Projects");

  // Get unique categories from JSON
  const categories = [
    "All Projects",
    ...new Set(projects.map((p) => p.category)),
  ];

  // Calculate dynamic counts
  const categoryCounts = categories.map((cat) => ({
    label: cat,
    count:
      cat === "All Projects"
        ? projects.length
        : projects.filter((p) => p.category === cat).length,
  }));

  // Filter projects by active category
  const filteredProjects =
    activeTab === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="w-11/12 mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="leading-[60px] text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          About <span>Projects</span>
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        <p className=" text-center text-sm text-gray-400 mt-4">
          Explore my complete portfolio of projects spanning various
          technologies and domains. Each project represents a unique challenge
          and learning experience.
        </p>
      </div>
      {/* Tabs */}
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-3 gap-3 mb-10 overflow-x-auto md:overflow-visible">
        {categoryCounts.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
              activeTab === tab.label
                ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white border-none"
                : "bg-base-200 border-gray-700 hover:bg-base-300"
            }`}
          >
            {categoryIcons[tab.label] || <FaFolderOpen />}
            {tab.label}
            <span className="badge badge-sm">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="card bg-base-200 shadow-lg rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <figure>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p className="text-sm opacity-80">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.stack.map((tag, i) => (
                  <span key={i} className="badge badge-outline">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-actions mt-4 gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                >
                  Live
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  Code
                </a>
                <Link
                  to={`/project-details/${project.id}`}
                  className="btn btn-sm btn-outline border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center ">
        <Link to={"/"} className="flex items-center btn btn-outline border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-4 mt-12 rounded-full">
          <IoIosArrowRoundBack size={24} />
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default AllProjects;
