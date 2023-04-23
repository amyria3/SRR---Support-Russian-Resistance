// import { useEffect } from "react";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import Cards from "./components/Cards";
import Toggle from "./components/Toggle";
import Search from "./components/Search";
// import cards_data from "./assets/getData/DummyData";

const App = ({ cards_data }) => {
  //Cards Component will render the cards from default data, if true,
  //to implement: cards component must render cards from search-Scripts respond, if false.
  const [notSearching, setNotSearching] = useState(true);

  //Const to keep Track of what the user is typing over the whole App component.
  const [currentUserInput, setCurrentUserInput] = useState("");

  const [searchResults, setSearchResults] = useState(undefined);

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
      <section
        id="SearchSection"
        className="w-full flex flex-col col-start-1 col-end-4 gap-[30px]"
      >
        <div className="h-[1px] bg-line w-full"></div>
        <Search
          setNotSearching={setNotSearching} //to control input-fields UI-behavior & to control, if cards render with searchResults or normal data
          currentInput={currentUserInput} //const[...] must be at App-lavel to be accessable by Cards & Search
          setterFunctionInput={setCurrentUserInput} //const[...] must be at App-lavel to be accessable by Cards & Search
        />
        <div className="h-[1px] bg-line w-full"></div>
      </section>
      <section>
        <Cards />
      </section>
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
