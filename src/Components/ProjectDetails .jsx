import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaCode,
  FaGithub,
  FaCheckCircle,
  FaLightbulb,
  FaBullseye,
} from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";

const ProjectDetails = () => {
  const projects = useLoaderData();
  console.log(projects);

  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center text-white mt-20">
        <p>Project not found.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="w-11/12 mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center text-gray-300 hover:text-white mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back to Portfolio
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-6">
          {project.title}
        </h1>

        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </a>

          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gray-800 border border-gray-600 hover:bg-gray-700 text-white"
          >
            <FaGithub className="mr-2" />
            View Code
          </a>
        </div>

        {/* Project overview */}
        <div className="flex flex-col lg:flex-row gap-10 mt-12">
          {/* Left content */}
          <div className="flex-1 space-y-10">
            {/* Overview */}
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <span className="">📘 Project Overview</span>
              </h2>
              <p className="mt-2 text-gray-300">
                {project.description}
              </p>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaBullseye className="text-red-400" /> Challenges Faced
              </h2>
              <div className="mt-4 space-y-2">
                {project.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1E293B] border border-gray-600 rounded-md p-3 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Future Plans */}
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaLightbulb className="text-yellow-400" /> Future Improvements
                & Plans
              </h2>
              <div className="mt-4 space-y-2">
                {project.plans.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1E293B] border border-gray-600 rounded-md p-3 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar - Tech Stack */}
          <aside className="w-full lg:w-80 sticky top-20 h-fit">
            <div className="bg-[#1E293B] rounded-lg border border-gray-700 p-5">
              <h2 className="text-lg font-semibold text-purple-400 mb-4">
                🛠️ Tech Stack
              </h2>
              <ul className="space-y-2">
                {project.stack.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-md text-sm flex items-center justify-between"
                  >
                    {tech}
                    <FaCheckCircle className="text-blue-400" />
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
