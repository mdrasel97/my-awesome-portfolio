import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Download } from "lucide-react";
import imgProfile from "../../assets/profile .png";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16">
      {/* ✅ Image Section (Left) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <img
          src={imgProfile} // 👉 replace with your own image path
          alt="About"
          className="w-full max-w-md mx-auto rounded-xl shadow-lg"
        />
      </motion.div>

      {/* ✅ Text Section (Right) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          About <span className="text-pink-500">Me</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          I am a passionate <span className="text-pink-400">Full-Stack</span>{" "}
          developer skilled in building modern web apps using React, Node.js,
          and Tailwind CSS. I focus on creating clean, efficient, and
          user-friendly interfaces with a strong backend structure.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <Link to="/contact">
            <Button className="bg-pink-500 text-white hover:bg-pink-600">
              Contact Me
            </Button>
          </Link>

          <Button variant="outline" className="text-black dark:text-white">
            <Download className="mr-2 w-5 h-5" />
            Download CV
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
