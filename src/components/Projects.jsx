import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import data from "../data";
import Project from "./Project";

function Projects() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col gap-20 desktop:w-5/6 tablet:w-[450px] phone:w-[350px]">
      <h2 className="text-mainHeadersColor font-semibold phone:text-3xl tablet:text-4xl desktop:text-5xl">
        {data[language].project.header}
      </h2>
      <div className="flex flex-col phone:gap-20 tablet:gap-20 desktop:justify-between desktop:flex-row">
        {data[language].project.projectsArray.map((project, index) => {
          return <Project key={index} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
