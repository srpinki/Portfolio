import { FaCode, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript (ES6+)", level: 60 },
  { name: "React.js", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Responsive Design", level: 90 },
];

const ToolsDesignSkills = [
  { name: "Git & GitHub", level: 75 },
  { name: "Vs Code", level: 90 },
  { name: "Figma", level: 75 },
  { name: "UI/UX Design", level: 80 },
];

const technologies = [
  { name: "Html5", color: "text-blue-500" },
  { name: "Css3", color: "text-purple-400" },
  { name: "Tailwind css", color: "text-pink-400" },
  { name: "Daisy Ui", color: "text-violet-400" },
  { name: "React js", color: "text-blue-400" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "Node.js", color: "text-green-400" },
  { name: "MongoDB", color: "text-green-500" },
  { name: "Tailwind", color: "text-cyan-400" },
  { name: "Firebase", color: "text-orange-400" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Skills = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      id="skills"
      className="scroll-mt-22 bg-[#0d0f1a] text-white py-16 px-6"
    >
      <div className="w-11/12 mx-auto text-center">
        <h2 className="leading-[60px] text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Skills & Expertise
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        <p className="text-gray-400 mb-10 mt-4">
          A comprehensive toolkit for building modern web applications from
          concept to deployment
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:border-scale-105 animate-fade-in backdrop-blur-sm mt-4"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-400 text-xl font-semibold">
              <div className=" w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <FaCode color="white" />
              </div>
              Frontend Development
            </div>

            {frontendSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-base mb-3">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tools & Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className=" bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:border-scale-105 animate-fade-in backdrop-blur-sm mt-4"
          >
            <div className="flex items-center gap-3 mb-4 text-white text-xl font-semibold">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <FaServer color="white" />
              </div>
              Tools & Design
            </div>

            {ToolsDesignSkills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between text-base mb-3">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* technologies */}
      <div className="bg-[#0d0f1a] text-white pt-12 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm text-center"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-2xl">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`border border-gray-600 px-6 py-2 rounded-md font-semibold ${tech.color} 
              transition-transform transform hover:scale-105 hover:bg-[#1c1f2e]`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
