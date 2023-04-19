// import { useEffect } from "react";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import Cards from "./components/Cards";
import Toggle from "./components/Toggle";
import SearchBar from "./components/SearchBar";

const App = ({ cards_data }) => {
  const root = document.getElementById("root");
  const userTheme = localStorage.getItem("theme");
  const systemThemeIsDark = window.matchMedia(
    "(prefers color-scheme: dark)"
  ).matches;
  const [darkmode, setDarkmode] = useState(false);

  //update classList of #root
  //synchronbise userTheme and darkmode useState Boolean
  function themeCheck(setBoolean) {
    if (userTheme === "dark" || (!userTheme && systemThemeIsDark)) {
      root.classList.add("dark");
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
      <section
        id="SearchSection"
        className="w-full flex flex-col col-start-1 col-end-4 gap-[30px]"
      >
        <div className="h-[1px] bg-line w-full"></div>
        <SearchBar />
      </section>
      <Cards cards_data={cards_data} />
    </div>
  );
};

export default App;
