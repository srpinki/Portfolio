import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="relative min-h-screen  overflow-hidden w-full inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30"
    >
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center pt-24 w-11/12 mx-auto">
        {/* Text Section */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br></br>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Pinki Biswas
            </span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-4xl font-light text-gray-300 animate-pulse">
            <Typewriter
              words={["Web Developer", "Frontend Engineer", "React Expert"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 max-w-lg text-gray-400">
            A passionate developer who loves building clean, responsive,
            user-centric digital experiences. I specialize in creating sleek,
            high-performance frontends that feel as good as they look.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 flex items-center gap-2">
              <FaDownload /> Download Resume
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black rounded-full px-6 py-2">
              View My Work
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-4 text-xl text-gray-300">
            <a
              className="cursor-pointer w-12 h-12 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-400 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 group"
              href="https://github.com/srpinki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="group-hover:rotate-12 transition-transform" />
            </a>

            <a
              className="cursor-pointer w-12 h-12 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-400 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 group"
              href="https://www.linkedin.com/in/srpinki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="group-hover:rotate-12 transition-transform" />
            </a>

            <a
              href="mailto:pinkibiswasit@gmail.com"
              className="cursor-pointer w-12 h-12 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-400 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 group"
            >
              <FaEnvelope className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-10 text-center text-sm text-blue-300 absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            Scroll Down
            <div className="animate-bounce text-blue-300 flex items-center justify-center mt-5 ">
              <FaChevronDown size={25} />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="animate-fade-in delay-300 flex justify-center lg:justify-end ">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-700 hover:border-blue-400 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>

            {/* bubble animation */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-100"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-1/4 -left-6 w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
