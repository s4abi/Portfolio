import React from "react";

export default function ProjectCards({
  title,
  description,
  tech,
  image,
  liveLink,
  githubLink,
}) {
  return (
    <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:-translate-y-4 hover:shadow-cyan-500/20">
      
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-sm font-medium transition"
          >
            Live
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black rounded-md text-sm font-medium transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
