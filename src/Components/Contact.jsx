import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const Contact = () => {
  return (
    <motion.section
    initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    id="contact" className="scroll-mt-22 bg-[#111827] text-white py-16">
      <div>
          <h2 className="leading-[60px] text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Let's Work Together
          </h2>
          <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          <p className=" text-center text-sm text-gray-400 mt-4">
            Have a project in mind? Let’s discuss how we can bring your ideas to
            life
          </p>
        </div>
      <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-10 mt-10">
        {/* Left Side - Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">
            Get In Touch
          </h3>
          <p className="mb-6 text-gray-400">
            I'm always open to discussing new opportunities, creative projects,
            or potential collaborations. Whether you need a complete website,
            want to improve an existing project, or just want to chat about
            tech, feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaEnvelope size={25} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p>pinkibiswasit@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <FaPhoneAlt size={25}/>
              </div>
              <div>
                <p className="text-sm text-gray-400">Whats app</p>
                <p>+88 01766745260</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt size={25} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p>Available for remote work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
          <form className="space-y-4">
            <div>
              <label className="label text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="label text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="label text-sm font-medium">Message</label>
              <textarea
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                rows="4"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer gap-2">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
