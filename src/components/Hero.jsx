import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Passport_size from "../assets/Passport_size.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyan-400 text-lg mb-2">Hello, I'm</h2>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sahib Thakur
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1500,
              "Backend Developer",
              1500,
              "Full Stack Developer",
              1500,
              "Problem Solver",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl text-cyan-400 font-semibold mb-6 block"
          />

          <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
            I build scalable web applications and real-time systems using
            React, Node.js, and modern technologies.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-lg font-semibold cursor-pointer inline-block hover:scale-105"
            >
              View Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-6 py-3 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition rounded-lg font-semibold cursor-pointer inline-block hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">

            {/* Glow effect */}
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

            {/* Image with hover animation */}
            <motion.img
              src={Passport_size}
              alt="Profile"
              className="w-64 md:w-80 rounded-full relative z-10 border-4 border-cyan-400 shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;