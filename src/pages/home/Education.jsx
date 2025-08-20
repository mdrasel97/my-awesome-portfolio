// Education.jsx
import React from "react";
import Lottie from "lottie-react";
import { Laptop } from "lucide-react";
import educationImg from "../../assets/education.jpg";
// import educationAnimation from "../assets/education.json"; // make sure you have a Lottie JSON here

export default function Education() {
  const educationData = [
    {
      degree: "Masters is islamic studies",
      institute: "Jamia madania baridhara, Dhaka",
      duration: "2019 - 2021",
    },
    {
      degree: "Complete Web Development Course",
      institute: "Programming Hero, Dhaka",
      duration: "2024 - 2025",
    },
    {
      degree: "Alim (Equivalent to HSC)",
      institute: "Jamia Islamia Darul Uloom, Dhaka",
      board: "Befaqul Madarisil Arabia Bangladesh",
      duration: "2018 – 2020",
    },
  ];

  return (
    <section id="education" className="py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-center">
        {/* Left: Education Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow rounded-lg p-5 border-l-4 border-primary"
              >
                <div className="flex items-center gap-5">
                  <div>
                    <Laptop />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="">{edu.institute}</p>
                    <p className="">{edu.board}</p>
                    <p className=" italic">{edu.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Lottie Animation */}
        <div className="flex-1">
          <img src={educationImg} alt="" />
          {/* <Lottie animationData={educationAnimation} loop={true} /> */}
        </div>
      </div>
    </section>
  );
}
