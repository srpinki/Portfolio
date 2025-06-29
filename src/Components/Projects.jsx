import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Plant management web application",
    description:
      "A full-stack plant management web application  that allows users to log, track, and manage care tasks for their houseplants. Users can add their plants, log watering/fertilizing dates, set reminders, and track plant health. The platform will support user authentication and personal plant data management. ",
    image: "https://via.placeholder.com/400x200", // Replace with real image URLs
    stack: ["React", "Daisy Ui", "Firebase", "Node.js", "Express js", "MongoDB"],
    tag: "Full-Stack",
    codeUrl: "https://github.com/srpinki/plantera-client",
    liveUrl: "https://elaborate-twilight-a1f44d.netlify.app/",
  },
  {
    title: "Task Management App",
    description:
      "A responsive web application for project management with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "https://via.placeholder.com/400x200", // Replace with real image URLs
    stack: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    tag: "Frontend",
    codeUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#18212F] text-white py-16">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="leading-[60px] text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Featured Projects</h2>
         <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        <p className="text-gray-400 mb-10 mt-4">A showcase of my recent work, demonstrating various skills and technologies</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, idx) => (
            <div key={idx} className="card bg-[#151c2b] shadow-md rounded-lg overflow-hidden">
              <figure className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <span className="absolute top-3 right-3 bg-blue-600 text-xs text-white px-3 py-1 rounded-full">{project.tag}</span>
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="badge badge-outline badge-sm text-gray-300 border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 text-sm text-gray-300">
                  <a href={project.codeUrl} className="flex items-center gap-1 hover:text-purple-400">
                    <FaCode /> Code
                  </a>
                  <a href={project.liveUrl} className="flex items-center gap-1 hover:text-purple-400">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
