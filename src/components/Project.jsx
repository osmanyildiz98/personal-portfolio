import React from "react";

function Project({ project }) {
  return (
    <div className="flex flex-col gap-5">
      <img className="w-[350px]" src={project.image} alt="Image of Project" />
      <h3 className="text-2xl text-headersColor">{project.title}</h3>
      <p className="w-[350px] h-[150px] text-paragraphsColor break-words">
        {project.desc}
      </p>
      <div className="flex gap-5">
        {project.toolsArray.map((tool, index) => {
          return (
            <p
              className="w-20 bg-footerButtonBackgroundColor text-footerButtonColor text-center py-1 rounded-sm font-medium border border-footerButtonBorderColor"
              key={index}
            >
              {tool}
            </p>
          );
        })}
      </div>
      <div className="flex justify-between">
        <a
          className="underline text-footerLinksColor font-medium"
          href={project.githubLink}
        >
          {project.github}
        </a>
        <a
          className="underline text-footerLinksColor font-medium"
          href={project.viewLink}
        >
          {project.view}
        </a>
      </div>
    </div>
  );
}

export default Project;
