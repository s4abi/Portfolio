import React from "react";
import { Link } from "react-scroll";
import Passport_size from "../assets/Passport_size.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-cyan-400 text-lg mb-2">Hello, I'm</h2>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sahib Thakur
          </h1>

          <h3 className="text-xl md:text-2xl text-gray-300 mb-6">
            Full Stack Developer & CSE Student
          </h3>

          <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
            I build modern, responsive and user-friendly web applications
            using React, Tailwind and JavaScript.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-lg font-semibold cursor-pointer inline-block"
            >
              View Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-6 py-3 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition rounded-lg font-semibold cursor-pointer inline-block"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>
            
            <img
              src={Passport_size}
              alt="Profile"
              className="w-64 md:w-80 rounded-full relative z-10 border-4 border-cyan-400 shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
