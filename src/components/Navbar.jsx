import { useState, useEffect } from "react";
import { Link } from "react-scroll";

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

  return (
    <nav
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          Sahib<span className="text-cyan-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["home", "about", "projects", "skills", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-cyan-400"
                  className="cursor-pointer capitalize hover:text-cyan-400 transition"
                >
                  {section}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-900/90 backdrop-blur-md rounded-lg p-6 space-y-4 text-white">
          {["home", "about", "projects", "skills", "contact"].map(
            (section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer capitalize hover:text-cyan-400"
              >
                {section}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}