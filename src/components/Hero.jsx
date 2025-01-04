import React, { useContext } from "react";
import data from "../data.js";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className="w-full flex justify-between items-center phone:flex-col phone:gap-4 tablet:flex-col tablet:gap-6 desktop:w-5/6">
      <div className="flex flex-col phone:gap-4 phone:w-[350px] tablet:gap-4 tablet:w-[450px] desktop:gap-6 desktop:w-1/2">
        <div className="flex items-center gap-2">
          <img
            className="w-24 h-[1px]"
            src={
              theme === "dark"
                ? data[language].hero.strokeDark
                : data[language].hero.strokeLight
            }
          />
          <h3 className="text-headersColor">{data[language].hero.name}</h3>
        </div>
        <div>
          <h1 className="text-mainHeadersColor font-bold phone:text-5xl tablet:text-6xl desktop:text-7xl">
            {data[language].hero.headerOne}
          </h1>
          <h1
            style={{ color: theme === "dark" ? "#aebccf" : "#1F2937" }}
            className="font-bold phone:text-5xl tablet:text-6xl desktop:text-7xl"
          >
            {data[language].hero.headerTwo}
          </h1>
        </div>
        <p
          style={{ color: theme === "dark" ? "#fff" : "#6B7280" }}
          className="phone:text-md tablet:text-lg desktop:text-xl"
        >
          {data[language].hero.description}
        </p>
        <div className="flex phone:gap-2 tablet:gap-4 desktop:gap-6">
          <a
            target="_blank"
            href={data[language].hero.hireMeLink}
            className="w-32 flex items-center justify-center bg-buttonBackgroundColor border border-buttonBorderColor text-buttonColor font-medium hover:bg-buttonHoverBackgroundColor hover:text-buttonHoverColor phone:p-1 phone:rounded-md phone:text-md tablet:p-2 tablet:rounded-lg tablet:text-lg desktop:p-3 desktop:rounded-lg desktop:text-xl"
          >
            {data[language].hero.hireMe}
          </a>
          <a
            target="_blank"
            href="https://github.com/OsmanYildiz98"
            className="w-32 gap-2 flex items-center justify-center bg-buttonBackgroundColor border border-buttonBorderColor text-buttonColor font-medium hover:bg-buttonHoverBackgroundColor hover:text-buttonHoverColor phone:p-1 phone:rounded-md phone:text-md tablet:p-2 tablet:rounded-lg tablet:text-lg desktop:p-3 desktop:rounded-lg desktop:text-xl"
          >
            <FaGithub className="text-3xl" />
            Github
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/osmany%C4%B1ld%C4%B1z98/"
            className="w-32 gap-2 flex items-center justify-center bg-buttonBackgroundColor border border-buttonBorderColor text-buttonColor font-medium hover:bg-buttonHoverBackgroundColor hover:text-buttonHoverColor phone:p-1 phone:rounded-md phone:text-md tablet:p-2 tablet:rounded-lg tablet:text-lg desktop:p-3 desktop:rounded-lg desktop:text-xl"
          >
            <FaLinkedinIn className="phone:text-2xl text-3xl" />
            Linkedin
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center phone:w-[400px] tablet:w-[500px] desktop:w-1/2 desktop:justify-end">
        <img
          className="phone:w-[350px] phone:rounded-xl tablet:w-[450px] tablet:rounded-2xl desktop:max-w-[800px] desktop:max-h-[500px] desktop:rounded-3xl"
          src={data[language].hero.image}
          alt="Profile Photo"
        />
      </div>
    </div>
  );
}

export default Hero;
