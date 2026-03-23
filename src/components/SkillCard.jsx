const SkillCard = ({ name, icon: Icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center 
                    hover:scale-110 hover:bg-gray-700 transition duration-300 shadow-lg">

      <Icon className="text-4xl text-cyan-400 mb-3" />

      <p className="text-gray-300 font-medium">{name}</p>
    </div>
  );
};

export default SkillCard;