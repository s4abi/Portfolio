import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["home", "about", "projects", "skills", "contact"];

  return (
    <nav
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">

        {/* Logo with animation */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold cursor-pointer"
        >
          Sahib<span className="text-cyan-400">.</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {sections.map((section, index) => (
            <motion.li
              key={section}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-cyan-400"
                className="cursor-pointer capitalize hover:text-cyan-400 transition relative group"
              >
                {section}

                {/* Underline hover animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-gray-900/90 backdrop-blur-md rounded-lg p-6 space-y-4 text-white"
          >
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer capitalize hover:text-cyan-400 transition"
              >
                {section}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}