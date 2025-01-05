import React, { createContext, useContext, useState } from "react";
import { LocalStorageContext } from "./LocalStorageContext";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { setLocalStorage, updateLocalStorage } =
    useContext(LocalStorageContext);

  const [theme, setTheme] = useState(setLocalStorage("theme", "light"));

  const handleThemeChange = () => {
    const body = document.querySelector("body");
    if (theme === "light") {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    }
    updateLocalStorage("theme", theme === "light" ? "dark" : "light");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
