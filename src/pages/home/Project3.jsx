import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const projectImages = [
  "https://i.ibb.co/ZzMbnZVr/Screenshot-2025-06-30-153452.png",
  "https://i.ibb.co/YT0SKy4m/Screenshot-2025-06-30-153515.png",
  "https://i.ibb.co/233pTYCk/Screenshot-2025-06-30-153555.png",
  "https://i.ibb.co.com/pjzLQbGf/Screenshot-2025-08-19-222811.png",
];

const Project3 = () => {
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
      {/* <h2 className="text-3xl font-bold text-center my-6">My Projects</h2> */}

      <section
        ref={sliderContainer}
        className="w-[98%] mx-auto rounded-lg border border-blue-500 bg-white dark:bg-gray-950 flex flex-col-reverse md:flex-row mt-5 items-center gap-10 px-6 py-8"
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
            Job Track
          </h2>
          <p className="mb-6 leading-relaxed">
            Job Track is a streamlined web application designed to help users
            efficiently manage their job search process. Users can log job
            applications, track statuses like "Applied", "Interviewing", or
            "Rejected", and set reminders for follow-ups or deadlines. The
            platform offers a clean dashboard, filtering options, and progress
            visualization to keep the job hunt organized and stress-free. Built
            with React for the frontend, Express.js and Node.js for the backend,
            and MongoDB for persistent data storage, Job Track also integrates
            secure user authentication with Firebase to ensure personalized and
            protected access.
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
            <a href="https://jobtrack-auth.web.app/" target="blank">
              <Button className="bg-primary text-white text-xl hover:bg-primary">
                Live Site
              </Button>
            </a>

            <a
              href="https://github.com/mdrasel97/jobTrack-frontend"
              target="blank"
            >
              <Button
                variant="outline"
                className="text-black dark:text-white text-lg flex items-center gap-2"
              >
                <FaGithub />
                Frontend Repo
              </Button>
            </a>
            <a href="" target="blank">
              <Button
                variant="outline"
                className="text-black dark:text-white text-lg flex items-center gap-2"
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
                className="w-full h-[300px] object-fit"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Project3;
