import React from "react";
import { Button } from "@/components/ui/button";
// import apiAnimation from "../assets/api-animation.json";
import apiAnimation from "../../assets/animation-api.json";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import Lottie from "lottie-react";

const HeroBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-12 md:py-20">
      <div className="container h-[350px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 gap-10 md:w-[98%]">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-sm text-yellow-300 uppercase tracking-wider">
            Welcome to my world ✨
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Hi, I'm <span className="text-white">Md Rasel</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            <span className="text-pink-400">Full-Stack</span> Web Developer
          </h2>
          <p className="text-gray-200 max-w-md mx-auto md:mx-0">
            I am a passionate Full-Stack Web Developer with expertise in both
            frontend and backend technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <Button className="px-6 py-2 text-lg">My Projects</Button>
            <Button
              variant="outline"
              className="px-6 text-black dark:text-white py-2 text-lg"
            >
              Download CV
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-6 text-xl">
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-pink-300">
              <FaEnvelope />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Right Avatar */}
        <div className="md:w-1/2 flex justify-center">
          <Lottie
            animationData={apiAnimation}
            loop={true}
            className="w-[300px] md:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
