// import { useEffect } from "react";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import Content from "./components/Content";
import Toggle from "./components/Toggle";

const App = () => {
  const root = document.getElementById("root");

  //DARKMODE THEME
  const userTheme = localStorage.getItem("theme");
  const systemThemeIsDark = window.matchMedia(
    "(prefers color-scheme: dark)"
  ).matches;

  const [darkmode, setDarkmode] = useState(false);
  function themeCheck(setBoolean) {
    //Update classList of #root depending on userTheme and sestemPreferences.
    if (userTheme === "dark" || (!userTheme && systemThemeIsDark)) {
      root.classList.add("dark");
      //Synchronise userTheme and darkmode useState-Boolean.
      setBoolean(true);
    }
  }

  themeCheck();

  function themeSwitch(aBoolean, setBoolean) {
    if (aBoolean) {
      root.classList.remove("dark");
      userTheme && userTheme.at("light");
      setBoolean(false);
    } else if (!aBoolean) {
      root.classList.add("dark");
      userTheme && userTheme.at("light");
      setBoolean(true);
    }
  }

  return (
    <div
      id="wrapper"
      className="px-2 ssm-px-8 sm:px-12 md:px-14 lg:px-20 xl:px-28"
    >
      <NavBar
        children={
          <Toggle
            toggleFunction={themeSwitch}
            aBoolean={darkmode}
            setBoolean={setDarkmode}
          />
        }
      />
      <Splash />
      <Content colNumber={{ gridVar: 3 }} />
    </div>
  );
};

export default App;