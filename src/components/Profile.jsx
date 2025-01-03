import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import data from "../data";

function Profile() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <h2>{data[language].profile.header}</h2>
      <div>
        <div>
          <h3>{data[language].profile.header}</h3>
          {data[language].profile.infoArray.map((info, index) => {
            return (
              <div key={index}>
                <p>{info.title}:</p>
                <p>{info.value}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h3>{data[language].profile.aboutMe}</h3>
          <p>{data[language].profile.aboutMeDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
