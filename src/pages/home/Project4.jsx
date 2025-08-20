import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const projectImages = [
  "https://i.ibb.co.com/k6x67kNf/Screenshot-2025-08-10-222824.png",
  "https://i.ibb.co.com/tWbQTSt/Screenshot-2025-08-10-222841.png",
  "https://i.ibb.co.com/YFpxSh4G/Screenshot-2025-08-10-223246.png",
  "https://i.ibb.co.com/3m19bFtG/Screenshot-2025-08-10-223159.png",
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
      <h2 className="text-3xl font-bold text-center my-6">My Projects</h2>
      <section
        ref={sliderContainer}
        className="w-[98%] mx-auto rounded-lg border border-blue-500 bg-white dark:bg-gray-950 flex flex-col md:flex-row items-center gap-10 px-6 py-8"
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
            Bazaar Track
          </h2>
          <p className="mb-6 leading-relaxed">
            BazaarTrack is a powerful and user-friendly web application designed
            to help users monitor daily price updates of essential items in
            local markets. With contributions from verified vendors, shoppers
            can stay informed about price trends, compare past rates, and make
            smart purchasing decisions. Our goal is to bring transparency and
            market awareness to everyday buyers, empowering them to shop with
            confidence. Whether you’re a vendor looking to share accurate prices
            or a user trying to stay within budget.
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
            <a href="https://bazaar-track.web.app/" target="blank">
              <Button className="bg-primary text-white text-xl hover:bg-primary">
                Live Site
              </Button>
            </a>
            <a
              href="https://github.com/mdrasel97/bazaar-track-client-site"
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
            <a href="https://github.com/mdrasel97/bazaar-track-server-site">
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
                className="w-full h-[300px] object-fit"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Project2;
