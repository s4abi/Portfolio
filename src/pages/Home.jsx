import About from "./About";
import Hero from "../components/Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="pt-20 bg-black text-white">

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}