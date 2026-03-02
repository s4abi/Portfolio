import React from "react";

export default function SkillCard({ icon, name }) {
  const IconComponent = icon;
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center 
                    transition duration-300 transform hover:-translate-y-3 
                    hover:shadow-lg hover:shadow-cyan-500/20 group">
      
      <IconComponent className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition duration-300" />
      
      <h3 className="text-white font-medium text-lg">
        {name}
      </h3>
    </div>
  );
}
