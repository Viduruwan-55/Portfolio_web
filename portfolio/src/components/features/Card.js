import React from "react";

const Card = ({ title, icon }) => {
  return (
    <div className="w-full px-6 py-2 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="flex items-center gap-3">
        {icon ? (
          <span className="text-2xl text-designColor">{icon}</span>
        ) : null}
        <h2 className="text-sm font-titleFont font-bold text-gray-300">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
