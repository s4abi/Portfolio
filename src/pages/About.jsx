export default function About() {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "Node.js",
    "C++",
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-800 text-white flex flex-col justify-between"
    >
      {/* Upper Half */}
      <div className="flex-1 flex items-center px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a Computer Science student passionate about building modern,
            responsive and interactive web applications. I enjoy turning
            complex problems into simple and beautiful user experiences.
          </p>

          <p className="text-gray-400 mt-6">
            My focus is frontend development with React and Tailwind CSS,
            while continuously learning backend technologies to grow as a
            full-stack developer.
          </p>
        </div>
      </div>

      {/* Moving Skills Strip */}
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
