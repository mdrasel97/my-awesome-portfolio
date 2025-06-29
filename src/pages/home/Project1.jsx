import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const projectImages = [
  "https://i.ibb.co/XfZTf2mr/Screenshot-2025-06-29-223836.png",
  "https://i.ibb.co/chTtfWtp/Screenshot-2025-06-29-223856.png",
  "https://i.ibb.co/XxBMbwZH/Screenshot-2025-06-29-223911.png",
];

const Project1 = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  // Autoplay logic
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.next();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [slider]);

  return (
    <section className="min-h-screen rounded-lg border border-blue-500 bg-white dark:bg-gray-950 flex flex-col md:flex-row items-center gap-10 px-6 py-16">
      {/* Carousel - Left Side */}
      <motion.div
        ref={sliderRef}
        className="keen-slider flex-1 rounded-xl overflow-hidden shadow-md"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projectImages.map((img, i) => (
          <div className="keen-slider__slide number-slide" key={i}>
            <img
              src={img}
              alt={`Project ${i + 1}`}
              className="w-full h-[300px] object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Project Overview - Right Side */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          Project Name: <span className="text-pink-500">proFast</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          proFast is a modern parcel delivery web app where users can book
          parcels, track them in real-time, and securely pay via multiple
          gateways. It uses React, Node.js, MongoDB, Firebase, and integrates
          Stripe/bKash for smooth user flow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button className="bg-pink-500 text-white hover:bg-pink-600">
            Live Site
          </Button>
          <Button
            variant="outline"
            className="text-black dark:text-white flex items-center gap-2"
          >
            <FaGithub />
            Frontend Repo
          </Button>
          <Button
            variant="outline"
            className="text-black dark:text-white flex items-center gap-2"
          >
            <FaGithub />
            Backend Repo
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Project1;
