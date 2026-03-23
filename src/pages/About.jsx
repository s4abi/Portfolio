import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind",
    "Node.js",
    "MongoDB",
    "Git",
    "C++",
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-800 text-white flex flex-col justify-between"
    >
      {/* Upper Content */}
      <motion.div
        className="flex-1 flex items-center px-6 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a Computer Science student passionate about building modern,
            scalable and real-world web applications.
          </p>

          <p className="text-gray-400 mt-6">
            I specialize in the MERN stack and enjoy working on backend systems,
            APIs, and real-time applications.
          </p>

          {/* 🔥 Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-400">300+</h3>
              <p className="text-gray-400 text-sm">DSA Problems</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-400">10+</h3>
              <p className="text-gray-400 text-sm">Projects Built</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-400">MERN</h3>
              <p className="text-gray-400 text-sm">Tech Stack</p>
            </div>

          </div>
        </div>
      </motion.div>

      {/* 🔥 Moving Skills Strip */}
      <div className="w-full overflow-hidden bg-gray-900 py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {skills.concat(skills).map((skill, index) => (
            <span
              key={index}
              className="mx-8 text-xl font-semibold text-cyan-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}