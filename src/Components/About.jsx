import React from "react";
import {
  FaCode,
  FaHeart,
  FaGamepad,
  FaLightbulb,
  FaUserSecret,
  FaPaintBrush,
} from "react-icons/fa";
import { MdEmojiObjects } from "react-icons/md";
import { PiBowlSteamBold } from "react-icons/pi";

const About = () => {
  return (
    <section id="about" className=" pt-16 pb-16 text-gray-300 bg-[#151d2c]">
      <div className="w-11/12 mx-auto">
        <h2 className="leading-[60px] text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          About <span>Me</span>
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        <p className=" text-center text-sm text-gray-400 mt-4">
          Get to know the person behind the code
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-10">
          {/* Left Side - Text */}
          <div className="lg:w-2/3 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                <FaCode /> My Programming Journey
              </h3>
              <p className="mt-2 text-gray-400">
                My journey into web development started with curiosity and has
                evolved into a passionate career. I began by tinkering with HTML
                and CSS, creating simple static pages, and was amazed by how
                code could bring ideas to life on the screen.
              </p>
              <p className="mt-2 text-gray-400">
                I'm also comfortable behind the scenes with Firebase, Node.js and mongoDB allowing me to bring full-stack ideas to life when needed. Whether it’s a landing page or a dynamic web app, I build with scalability, speed, and user experience in mind.  I enjoy turning ideas into real-world solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <FaHeart /> What I Love About Development
              </h3>
              <p className="mt-2 text-gray-400">
                I enjoy creating smooth, user-friendly experiences that solve
                real problems. While my main focus is on the frontend, I also
                work with Firebase and Node.js to build out the backend when
                needed. What inspires me the most is the process: taking a rough
                idea, fleshing it out with code, and watching it transform into
                something real and useful. I'm always learning, always
                experimenting, and always up for a challenge.
              </p>
              <p className="mt-2 text-gray-400">
                I'm particularly passionate about frontend development because
                it's where creativity meets functionality. Creating smooth
                animations, responsive layouts, and intuitive user interfaces is
                where I feel most in my element.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2">
                <FaGamepad /> Beyond the Code
              </h3>
              <p className="mt-2 text-gray-400">
                When I'm not coding, I'm probably dabbling with side projects, learning something new in technology, or just enjoying a cup of coffee.
              </p>
            </div>
          </div>

          {/* Right Side - Traits */}
          <div className="lg:w-1/3 space-y-4">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center ">
                <FaUserSecret size={25} />
              </div>
              <h4 className="text-lg font-semibold text-white">
                Clean Code Advocate
              </h4>
              <p className="text-sm text-gray-400">
                Writing maintainable, scalable, and efficient code that stands
                the test of time and collaboration.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <MdEmojiObjects size={25} />
              </div>
              <h4 className="text-lg font-semibold text-white">
                Creative Problem Solver
              </h4>
              <p className="text-sm text-gray-400">
                Turning complex challenges into elegant solutions through
                innovative thinking and design.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <PiBowlSteamBold size={25} />
              </div>
              <h4 className="text-lg font-semibold text-white">
                Continuous Learner
              </h4>
              <p className="text-sm text-gray-400">
                Always exploring new technologies, frameworks, and best
                practices to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Box */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto mt-12 text-center">
          <p className="text-lg italic text-blue-300">
            "Code is like humor. When you have to explain it, it's bad."
          </p>
          <p className="mt-2 text-sm text-gray-400">
            I believe in writing code that speaks for itself – clean, intuitive,
            and elegant. Every project is an opportunity to craft something
            beautiful and functional that makes a real difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
