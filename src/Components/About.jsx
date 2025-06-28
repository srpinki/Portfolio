import React from "react";
import { FaCode, FaHeart, FaGamepad, FaLightbulb, FaUserSecret, FaPaintBrush } from "react-icons/fa";
import { MdEmojiObjects } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="w-11/12 mx-auto pt-24 pb-16 text-gray-300">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        About <span className="text-white">Me</span>
      </h2>
      <p className="text-center text-sm text-gray-400 mt-2">Get to know the person behind the code</p>

      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        {/* Left Side - Text */}
        <div className="lg:w-2/3 space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
              <FaCode /> My Programming Journey
            </h3>
            <p className="mt-2 text-gray-400">
              My journey into web development started with curiosity and has evolved into a passionate career. I began by tinkering with HTML and CSS, creating simple static pages, and was amazed by how code could bring ideas to life on the screen.
            </p>
            <p className="mt-2 text-gray-400">
              As I dove deeper, JavaScript opened up a whole new world of interactivity. Learning React was a game-changer — the component-based architecture and the ecosystem around it fascinated me. Today, I specialize in building modern, responsive websites that not only look great but also provide exceptional user experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
              <FaHeart /> What I Love About Development
            </h3>
            <p className="mt-2 text-gray-400">
              What inspires me the most is the problem-solving aspect of development. I love taking complex ideas and breaking them down into simple, elegant solutions. There’s something incredibly satisfying about writing clean, efficient code that not only works but is also maintainable and scalable.
            </p>
            <p className="mt-2 text-gray-400">
              I'm particularly passionate about frontend development because it's where creativity meets functionality. Creating smooth animations, responsive layouts, and intuitive user interfaces is where I feel most in my element.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2">
              <FaGamepad /> Beyond the Code
            </h3>
            <p className="mt-2 text-gray-400">
              When I’m not coding, you'll find me exploring various creative outlets. I enjoy playing video games — they inspire me with their interactive design and user experience. I also love sketching and digital art, which helps me think more creatively about UI/UX design.
            </p>
            <p className="mt-2 text-gray-400">
              I’m an avid coffee enthusiast (essential fuel for late-night coding sessions!), and I enjoy hiking and photography during weekends. These activities help me maintain a healthy work-life balance and often provide fresh perspectives for my projects.
            </p>
          </div>
        </div>

        {/* Right Side - Traits */}
        <div className="lg:w-1/3 space-y-4">
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800/40">
            <div className="text-purple-400 text-2xl mb-2"><FaUserSecret /></div>
            <h4 className="text-lg font-semibold text-white">Clean Code Advocate</h4>
            <p className="text-sm text-gray-400">Writing maintainable, scalable, and efficient code that stands the test of time and collaboration.</p>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800/40">
            <div className="text-pink-400 text-2xl mb-2"><MdEmojiObjects /></div>
            <h4 className="text-lg font-semibold text-white">Creative Problem Solver</h4>
            <p className="text-sm text-gray-400">Turning complex challenges into elegant solutions through innovative thinking and design.</p>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800/40">
            <div className="text-green-400 text-2xl mb-2"><FaLightbulb /></div>
            <h4 className="text-lg font-semibold text-white">Continuous Learner</h4>
            <p className="text-sm text-gray-400">Always exploring new technologies, frameworks, and best practices to stay ahead of the curve.</p>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800/40">
            <div className="text-pink-600 text-2xl mb-2"><FaPaintBrush /></div>
            <h4 className="text-lg font-semibold text-white">Gaming & Art Enthusiast</h4>
            <p className="text-sm text-gray-400">Drawing inspiration from interactive media and visual arts to enhance user experience design.</p>
          </div>
        </div>
      </div>

      {/* Quote Box */}
      <div className="mt-16 p-6 rounded-xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-center">
        <p className="text-lg italic text-blue-300">"Code is like humor. When you have to explain it, it's bad."</p>
        <p className="mt-2 text-sm text-gray-400">
          I believe in writing code that speaks for itself – clean, intuitive, and elegant. Every project is an opportunity to craft something beautiful and functional that makes a real difference.
        </p>
      </div>
    </section>
  );
};

export default About;
