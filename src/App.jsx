import React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import Cards from "./components/Cards";
import Toggle from "./components/Toggle";
import { cards_data } from "./assets/DummyData";
import Search from "./components/Search";
import { FunctionComponent } from "./assets/ScrollFunctions";
// import all from "../query"; not to be run in fronend

const App = () => {

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

  // const response = getDataFromServer()
  // console.log("response : " + response)

  function themeSwitch(aBoolean, setBoolean) {
    if (aBoolean) {
      root.classList.remove("dark");
      userTheme.at("light");
      setBoolean(false);
    } else if (!aBoolean) {
      root.classList.add("dark");
      userTheme.at("dark");
      setBoolean(true);
    }
  }

  return (
    <div id="wrapper">
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
        <Search />
        <div className="h-[1px] bg-line w-full"></div>
      </section>
      <Cards cards_data={cards_data} />
      <FunctionComponent />
    </div>
  );
};

export default App;
