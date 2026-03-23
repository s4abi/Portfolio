import { motion } from "framer-motion";

const ProjectCards = ({
  title,
  description,
  tech,
  githubLink,
  liveLink,
  image,
}) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition"
      whileHover={{ scale: 1.05 }}
    >
      {/* 🖼️ Project Image (placeholder for now) */}
      <div className="h-40 bg-gray-700 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-40 w-full object-cover"
          />
        ) : (
          <div className="h-40 bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-cyan-400">
          {title}
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech?.map((t, i) => (
            <span
              key={i}
              className="bg-gray-700 px-2 py-1 rounded text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              className="text-sm px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
            >
              GitHub
            </a>
          )}

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              className="text-sm px-3 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCards;