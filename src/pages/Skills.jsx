import React from "react";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaGitAlt },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title Animation */}
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-cyan-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}