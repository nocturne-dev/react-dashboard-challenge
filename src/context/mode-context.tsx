import React, { createContext, useEffect, useState } from "react";

const localKey = "color-mode";

const getStorage = () => {
  const value = localStorage.getItem(localKey);
  return value ? value : getColorMode();
};

const setStorage = (value: string) => {
  localStorage.removeItem(localKey);
  localStorage.setItem(localKey, value);
};

const getColorMode = () => {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

// CONTEXT
type ModeContextType = {
  mode: string;
  switchMode: (value: string) => void;
};

export const ModeContext = createContext<ModeContextType>({
  mode: "",
  switchMode: () => {},
});

// PROVIDER
const ModeContextProvider: React.FC<{ children: JSX.Element }> = (props) => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const changeColorMode = () => {
      const color = getColorMode();
      switchModeHandler(color);
    };

    const matchMediaHandler = window.matchMedia(
      "(prefers-color-scheme: light)"
    );
    matchMediaHandler.addEventListener("change", changeColorMode);

    switchModeHandler(getStorage());

    return () =>
      matchMediaHandler.removeEventListener("change", changeColorMode);
  }, []);

  const switchModeHandler = (value: string) => {
    const doc = document.querySelector("body");
    if (doc) {
      doc.removeAttribute("class");
      doc.classList.add(value);
      setStorage(value);
      setMode(value);
    }
  };

  const contextValue: ModeContextType = {
    mode: mode,
    switchMode: switchModeHandler,
  };

  return (
    <ModeContext.Provider value={contextValue}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
