import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import data from "../data";

function Footer() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="w-full bg-footerBackgroundColor flex justify-center py-10">
      <div className="flex flex-col desktop:gap-20 tablet:gap-16 phone:gap-10 desktop:w-5/6 tablet:w-[450px] phone:w-[350px]">
        <h1 className="text-mainHeadersColor break-words font-bold phone:w-[350px] tablet:w-[450px] desktop:w-[600px] phone:text-3xl tablet:text-4xl desktop:text-5xl">
          {data[language].footer.header}
        </h1>
        <div className="flex phone:flex-col phone:gap-5 desktop:justify-between">
          <a
            className="text-emailColor"
            target="_blank"
            href="mailto:example@example.com"
          >
            {data[language].footer.email}
          </a>
          <div className="flex gap-10">
            {data[language].footer.footerLinks.map((link, index) => (
              <a
                className={link.color}
                key={index}
                target="_blank"
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
