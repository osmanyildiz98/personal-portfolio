import React, { useContext } from "react";
import data from "../data.js";
import Skill from "./Skill";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

function Skills() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col gap-10 phone:w-[350px] tablet:w-[450px] desktop:w-5/6">
      <h2 className="text-mainHeadersColor font-semibold phone:text-3xl tablet:text-4xl desktop:text-5xl">
        {data[language].skills.header}
      </h2>
      <div className="flex gap-10 phone:flex-col desktop:flex-wrap desktop:items-center desktop:justify-between">
        {data[language].skills.array.map((skill, index) => (
          <Skill
            key={index}
            icon={skill.Icon}
            title={skill.Title}
            description={skill.Desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
