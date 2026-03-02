import React from "react";
import ProjectCards from '../components/ProjectCards'

const projects = [
  {
    title: "Task Manager App",
    description:
      "A responsive task management app with add, delete, and filter functionality.",
    tech: ["React", "Tailwind", "LocalStorage"],
    image: "https://via.placeholder.com/500x300",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Weather App",
    description:
      "Weather application using API to fetch real-time weather data by city.",
    tech: ["React", "API", "Tailwind"],
    image: "https://via.placeholder.com/500x300",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Notes App",
    description:
      "Full CRUD notes app with authentication and cloud storage integration.",
    tech: ["React", "Firebase", "Tailwind"],
    image: "https://via.placeholder.com/500x300",
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCards
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
