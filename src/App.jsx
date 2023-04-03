import React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Splash from "./components/Splash";
import Cards from "./components/Cards";
import Toggle from "./components/Toggle";
import { cards_data } from "./assets/DummyData";



export const root = document.getElementById("root");
export const userTheme = localStorage.getItem("theme");

const systemTheme = window.matchMedia(
  "(prefers color-scheme: dark)"
).matches;

function themeCheck() {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    root.classList.add("dark");
    return;
  }
}

themeCheck();



function App() {
  const [darkmode, setDarkmode] = useState(false)
  (userTheme==="dark")&&setDarkmode(true)

  return (
    <div id="wrapper">
      <NavBar
        children={
          <Toggle
            darkModeToggleFunction={setDarkmode}
            darkmodeBoolean={darkmode}
          />
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
