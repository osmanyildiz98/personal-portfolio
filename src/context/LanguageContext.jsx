import React, { createContext, useContext, useState } from "react";
import { LocalStorageContext } from "./LocalStorageContext";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { updateLocalStorage, setLocalStorage } =
    useContext(LocalStorageContext);
  const [language, setLanguage] = useState(() =>
    setLocalStorage("language", "en")
  );

  const handleLanguageChange = () => {
    updateLocalStorage("language", language === "en" ? "tr" : "en");
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
