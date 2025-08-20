import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Download } from "lucide-react";
import imgProfile from "../../assets/owner.jpg";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-white dark:bg-gray-950 flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16"
    >
      {/* Image Section (Left) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <img
          src={imgProfile}
          alt="About"
          className="w-full max-w-md h-[400px] mx-auto rounded-xl shadow-lg"
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
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          I am a passionate <span className="text-primary">Full-Stack</span>{" "}
          developer skilled in building modern web apps using React, Node.js,
          and Tailwind CSS. I focus on creating clean, efficient, and
          user-friendly interfaces with a strong backend structure.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-50} // Optional: adjust for fixed navbar
          >
            <Button className="bg-primary text-white hover:bg-primary">
              Contact Me
            </Button>
          </ScrollLink>

          <Button
            asChild
            variant="outline"
            className="text-black border border-primary dark:text-white"
          >
            <a href="https://drive.google.com/uc?export=download&id=1kyclBgM6ngQ4z4iFT1R3CabIqBYfN_cT">
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
