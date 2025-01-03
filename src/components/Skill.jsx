import React from "react";

function Skill({ icon, title, description }) {
  return (
    <div className="flex flex-col gap-5 min-w-[300px] max-w-[350px]">
      <div className="flex items-center gap-4">
        <img src={icon} className="w-10 phone:w-8" />
        <h3 className="text-2xl text-headersColor">{title}</h3>
      </div>
      <p className="text-sm text-paragraphsColor">{description}</p>
    </div>
  );
}

export default Skill;
