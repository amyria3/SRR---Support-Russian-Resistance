import { useState } from "react";
import search from "../assets/search/search.js";
import Button from "./Button.jsx";
import clsx from "clsx";
import { useContext } from "react";
import { contextData, currentIndexa } from "../main.jsx";

const Search = ({ setNotSearching, setterResults }) => {
  const data = useContext(contextData);
  const currentIndex = useContext(currentIndexa);
  const [currentInput, setCurrentInput] = useState("");

  function handleReset() {
    console.log("handleReset triggered");
    setterResults(undefined);
    setNotSearching(true);
  }

  function handleInputChange(input) {
    //start typing (character-Index === 0):
    if (currentInput.length === 0 && input.length === 1) {
      setNotSearching(false);
      setCurrentInput(input);
      // console.log("1. current Input : " + currentInput);
      setterResults(search(data, currentIndex, currentInput));
    }

    //adding or deleting characters (character-Index >= 1):
    if (currentInput.length > 0 && input.length > 0) {
      setCurrentInput(input);
      // console.log("2. current Input : " + currentInput);
      setterResults(search(data, currentIndex, currentInput));
    }

    //backspace (character-Index === 0):
    if (currentInput.length === 1 && input.length === 0) {
      setCurrentInput("");
      // console.log("3. current Input : " + currentInput);
      // console.log("Deleted last character");
      handleReset();
    }
  }

  return (
    <div className="relative w-full">
      <div
        id="searchWrapper"
        className={clsx(
          "sticky",
          "h-12 p-[1px] hover:p-0 rounded-lg w-full flex",
          "border border-line dark:border-none",
          "dark:hover:border-solid dark:hover:border-[1px]",
          "hover:border-interactive-hover dark:border-dt-interactive focus:border-interactive",
          "bg-none hover:bg-interactive dark:bg-dt-background-input",
          "text-typo dark:text-dt-typo",
          "font-extralight",
          "hover:shadow-default focus:shadow-default dark:shadow-none",
          "placeholder:text-xl placeholder:text-line dark:placeholder:text-dt-typo",
          (currentInput.length >= 1)
            ? "border-interactive shadow-default bg-interactive dark:bg-dt-interactive dark:border-bg-dt-interactive dark:text-typo dark:font-light"
            : null
        )}
      >
        <style>{`
        input[type="search"]::-webkit-search-cancel-button {
          display: none;
        }
      `}</style>
        <input
          id="search"
          className="h-12 rounded-lg border w-full flex pl-8
          border-none bg-transparent
          appearance-none focus:outline-none
          form-control"
          type="search"
          placeholder="Search"
          onInput={(event) => handleInputChange(event.target.value)}
          value={currentInput}
        />

        {currentInput !== "" && (
          <Button
            className="absolute top-0 right-0"
            onClick={() => {
              handleReset();
            }}
            label="Reset"
          />
        )}
      </div>
    </div>
  );
};

export default Search;
