import React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Splash from "./components/Splash";
import Cards from "./components/Cards";
import Toggle from "./components/Toggle";
import { cards_data } from "./assets/DummyData";

function App() {
  const root = document.getElementById("root");
  const userTheme = localStorage.getItem("theme");
  const systemThemeIsDark = window.matchMedia("(prefers color-scheme: dark)").matches;
  const [darkmode, setDarkmode] = useState(false)

  //update classList of #root
  //synchronbise userTheme and darkmode useState Boolean
  function themeCheck(setBoolean) {
    if (userTheme === "dark" || (!userTheme && systemThemeIsDark)) {
      root.classList.add("dark");
      setBoolean(true);
    }
  }
  themeCheck()

  //write an onClick function for the toggle
  //it will

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

  // const returnData = GetCards()
  // console.log(returnData)

  return (
    <div id="wrapper">
      <NavBar
        children={
          <Toggle toggleFunction={themeSwitch} aBoolean={darkmode} setBoolean={setDarkmode} />
        }
      />
      <Splash />
      <section id="SearchComponent">
        <Button function={() => {}} label="GO!" />
      </section>
      <Cards cards_data={cards_data} />
    </div>
  );
}

export default App;
