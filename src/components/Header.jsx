import React, { useContext } from "react";
import data from "../data.js";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <header className="w-full flex flex-col gap-4 phone:p-2 phone:text-[.6rem] tablet:p-2 tablet:text-[.8rem] desktop:w-5/6 desktop:p-4">
      <div className="flex self-end phone:gap-2 desktop:gap-4">
        <button className="flex items-center gap-2" onClick={handleThemeChange}>
          <img
            className="phone:w-6 tablet:w-8 desktop:w-10"
            src={
              theme === "dark"
                ? data[language].header.themeBtnDarkIcon
                : data[language].header.themeBtnLightIcon
            }
            alt="theme swithcer button"
          />
          {data[language].header.themeBtnDark}
        </button>
        <p>|</p>
        <button onClick={handleLanguageChange}>
          <span>{data[language].header.languageBtn}</span>
          {data[language].header.languageSwitch}
        </button>
      </div>
      <div className="flex justify-between items-center ">
        <div className="flex justify-center items-center rounded-full bg-logoBackgroundColor font-bold text-logoColor phone:w-10 phone:h-10 phone:text-[20px] tablet:w-12 tablet:h-12 tablet:text-[26px] desktop:w-14 desktop:h-14 desktop:text-[32px]">
          <p>O</p>
        </div>
        <nav className="flex desktop:gap-12 tablet:gap-8 phone:gap-4">
          {data[language].header.navArray.map((item, index) => {
            return (
              <a
                className="border border-[#fff] bg-navLinksBackgroundColor text-navLinksColor phone:p-1 phone:rounded-sm tablet:p-2 tablet:rounded-md desktop:p-3 desktop:rounded-md hover:border-navLinksBorderColor hover:border hover:text-navLinksHoverColor"
                key={index}
                href={item.link}
              >
                {item.title}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
