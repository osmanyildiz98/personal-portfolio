import React, { createContext, useState } from "react";

export const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
  const setLocalStorage = (key, value) => {
    const localData = localStorage.getItem(key);
    if (localData !== null) {
      return localData;
    } else {
      localStorage.setItem(key, value);
      return value;
    }
  };

  const updateLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  return (
    <LocalStorageContext.Provider
      value={{ setLocalStorage, updateLocalStorage }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};
