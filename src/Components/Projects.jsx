import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaFolderOpen,
} from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  const projects = useLoaderData();

  return (
    <motion.section
      id="projects"
      className="bg-[#0F172A] text-white py-16 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4 mb-10 max-w-xl mx-auto">
          Explore some of my highlighted work, showcasing skills across
          full-stack web development.
        </p>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{ nextEl: ".next", prevEl: ".prev" }}
            pagination={false}
            className="relative"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col md:flex-row gap-10 items-center bg-[#1E293B] p-6 rounded-lg shadow-md">
                  <div className="flex-shrink-0 w-full md:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-left">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link to={`/project-details/${project.id}`}>
                        <button className="btn btn-outline border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-4">
                          View Details <FaEye />
                        </button>
                      </Link>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-4"
                      >
                        Live
                        <FaExternalLinkAlt className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom navigation arrows with spacing */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="prev cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 border border-gray-300 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md ">
              <IoChevronBack className="text-base" />
            </div>

            <div className="custom-pagination flex gap-2 items-center justify-center"></div>

            <div className="next cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              <IoChevronForward className="text-base" />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Link to={"/all-projects"}>
            <button className=" py-5 px-8 btn rounded-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition-transform">
              <FaFolderOpen className="w-5 h-5" />
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
