// ✅ src/utils/iconMap.js
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
// ✅ src/components/TechnicalSkills.jsx
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
// import { iconMap } from "@/utils/iconMap";

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJs: FaJs,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
};

const TechnicalSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skillsData.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  const categories = ["All", "Frontend", "Backend"];

  const filteredSkills = (category) =>
    category === "All" ? skills : skills.filter((s) => s.category === category);

  return (
    <div className="py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Technical Skills</h2>
        <p className="mt-2">
          Here's a showcase of my technical expertise with proficiency levels
        </p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="flex justify-center gap-2 flex-wrap mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 rounded-full"
            >
              {category} Skills
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent value={category} key={category}>
            <motion.div
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {filteredSkills(category).map((skill) => {
                const Icon = iconMap[skill.icon];
                return (
                  <Card key={skill.name} className="border-[#0c1a38]">
                    <CardContent className="flex flex-col items-center justify-center gap-4 py-6">
                      <Icon className={`text-5xl ${skill.color}`} />
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TechnicalSkills;
