import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const projectImages = [
  "https://i.ibb.co/ZRxbspcV/Screenshot-2025-06-29-225915.png",
  "https://i.ibb.co/XkCDYxZK/Screenshot-2025-06-29-225946.png",
  "https://i.ibb.co.com/wxN6cRz/Screenshot-2025-08-19-222434.png",
];

const Project2 = () => {
  const sliderContainer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  useEffect(() => {
    if (!slider.current) return;

    let mouseOver = false;

    const interval = setInterval(() => {
      if (!mouseOver) slider.current.next();
    }, 3000);

    const el = sliderContainer.current;
    if (!el) return;

    const handleMouseOver = () => (mouseOver = true);
    const handleMouseOut = () => (mouseOver = false);

    el.addEventListener("mouseover", handleMouseOver);
    el.addEventListener("mouseout", handleMouseOut);

    return () => {
      clearInterval(interval);
      el.removeEventListener("mouseover", handleMouseOver);
      el.removeEventListener("mouseout", handleMouseOut);
    };
  }, [slider]);

  return (
    <>
      <section
        ref={sliderContainer}
        className="w-[98%] mx-auto rounded-lg border border-blue-500 bg-white dark:bg-gray-950 flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-8"
      >
        {/* Project Overview - left Side */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white text-primary">
            Book Shelf
          </h2>
          <p className="mb-6 leading-relaxed">
            Book Shelf is a dynamic web application designed for book lovers to
            organize, browse, and manage their personal library. Users can add
            books, categorize them by genre or status (e.g., "Reading",
            "Completed", "Wishlist"), and search through their collection with
            ease. The platform supports user authentication, personalized
            dashboards, and real-time updates. Built with React for the
            frontend, Node.js and Express for the backend, and MongoDB for data
            storage, Book Shelf offers a seamless and intuitive reading
            management experience.
          </p>

          {/* 💡 Frontend & Backend Stack Section */}
          <div className="mb-6 space-y-3">
            {/* Frontend */}
            <div className="flex items-center gap-2">
              <h4 className="text-md font-semibold mb-1 text-blue-500">
                Frontend:
              </h4>
              <ul className="flex flex-wrap gap-2 text-sm text-white">
                {[
                  "React.js",
                  "React Router",
                  "Firebase",
                  "JavaScript",
                  "TailwindCSS",
                ].map((tech) => (
                  <motion.li
                    key={tech}
                    className="bg-blue-600 text-xs px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-semibold mb-1 text-green-500">
                Backend
              </h4>
              <ul className="flex flex-wrap gap-2 text-sm text-white">
                {["Node.js", "Express.js", "MongoDB"].map((tech) => (
                  <motion.li
                    key={tech}
                    className="bg-green-600 text-xs px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://book-shelf-web.web.app/" target="blank">
              <Button className="bg-primary text-white text-xl hover:bg-primary">
                Live Site
              </Button>
            </a>
            <a
              href="https://github.com/mdrasel97/book-shelf-frontend"
              target="blank"
            >
              <Button
                variant="outline"
                className="text-black border border-primary dark:text-white text-lg flex items-center gap-2"
              >
                <FaGithub />
                Frontend Repo
              </Button>
            </a>
            <a href="">
              <Button
                variant="outline"
                className="text-black border border-primary dark:text-white text-lg flex items-center gap-2"
              >
                <FaGithub />
                Backend Repo
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Carousel - right Side */}
        <motion.div
          ref={sliderRef}
          className="keen-slider flex-1 rounded-xl overflow-hidden shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {projectImages.map((img, i) => (
            <div className="keen-slider__slide number-slide" key={i}>
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full max-h-[400px] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Project2;
