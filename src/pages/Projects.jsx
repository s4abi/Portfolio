import React from "react";
import ProjectCards from "../components/ProjectCards";
// 🖼️ Import Images (add these in src/assets/)
import chat from "../assets/chat.png";
import crypto from "../assets/crypto.png";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "Real-Time Chat App",
    description:
      "Built using MERN + Socket.io with real-time messaging and authentication.",
    githubLink: "https://github.com/s4abi/mern-chat-app",
    liveLink: "",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: chat,
  },
  {
    title: "CryptoPulse",
    description:
      "Crypto data visualization app with real-time API integration.",
    githubLink: "https://github.com/s4abi/cryptopulse",
    liveLink: "",
    tech: ["React", "API", "Tailwind"],
    image: crypto,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects and skills.",
    githubLink: "https://github.com/s4abi/Portfolio",
    liveLink: "",
    tech: ["React", "Tailwind"],
    image: portfolio,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400">
          My Projects
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCards
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              image={project.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}