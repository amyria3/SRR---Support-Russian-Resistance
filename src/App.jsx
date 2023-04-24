// import { useEffect } from "react";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import Content from "./components/Content";
import Toggle from "./components/Toggle";
// import cards_data from "./assets/getData/DummyData";

const App = () => {
  const root = document.getElementById("root");
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
      <Content /> {//gets data from useContext
      }
    </div>
  );
};

export default App;

//GENERAL IDEA:
//its a one-pager with several Sections.

//Functionality:

// I am having a searchIsInactive prop in my <Cards />-Component.
// I am rendering this component on a higher level in my <App /> component,
// where I am passing to <Cards /> the useState Variable notSearching for the searchIsInactive prop.
// Additionally, I am passing the setter Function setNotSearching and setCurrentUserInput
// to the <Search /> Component, so that the <Search />-Component can change it.
// It is supposed to update currentUserInput whenever the user is Typing, and it is supposed to
// set notSearching to false, if there is any input typed in by user.
// The <Cards>-Component then is supposed to render the Cards if there are cards-data passed.
// Therefore, after the user typed in the first Character, no cards should be rendered.
