import { useState } from "react";
import search from "../assets/search/search.js";
import Button from "./Button.jsx";
import clsx from "clsx";
import { useContext } from "react";
import { contextData, currentIndexa } from "../main.jsx";

const Search = ({
  setterNotSearching,
  synchronizedInput,
  setterSynchronizedInput,
  setterResults,
  setterTermLength,
}) => {
  const data = useContext(contextData);
  const currentIndex = useContext(currentIndexa);

  function handleReset() {
    //console.log("handleReset triggered.");
    setterSynchronizedInput("");
    setterResults([]);
    setterNotSearching(true);
  } //works

  function handleInputChange(input) {
    //input: HTML property
    //synchronizedInput: my binding
    if (
      (synchronizedInput &&
        synchronizedInput.length === 0 &&
        input.length === 1) || //start typing
      (!synchronizedInput && input.length > 0) || //insert a term
      (synchronizedInput && synchronizedInput.length > 0 && input.length > 0) //exchange or change a term
    ) {
      synchronizedInput.length === 0 &&
        input.length > 0 &&
        setterNotSearching(false); // set notSearching to false only if first character entered
      setterSynchronizedInput(input);
      setterResults(search(data, currentIndex, input));
      setterTermLength(input.length);
    }
    //deleting last character backspace (character-Index === 0):
    //deleting term (CMD-X)
    if (synchronizedInput.length > 0 && input.length === 0) {
      setterSynchronizedInput("");
      handleReset();
      // console.log("Deleted last character or deleted everything", inputField resetted);
    }
  }

  function handlePaste(event) {
    if (
      (event.key === "v" && (event.metaKey || event.ctrlKey)) ||
      (synchronizedInput.length > 3 && input.length > 0)
    ) {
      // "Cmd+V" (Mac) or "Ctrl+V" (Windows) was pressed
      // Retrieve the pasted text
      const pastedText = event.clipboardData.getData("text");
      setterNotSearching(false); // set notSearching to false only if first character entered
      setterSynchronizedInput(pastedText);
      setterResults(search(data, currentIndex, input));
    }
  }

  return (
    <div className="relative w-full">
      <div
        id="searchWrapper"
        className={clsx(
          "sticky",
          "h-12 p-[1px] hover:p-0 rounded-sm dark:rounded-md w-full flex",
          "border border-line dark:border-none",
          "dark:hover:border-solid dark:hover:border-[1px]",
          "hover:border-interactive-hover dark:border-dt-interactive focus:border-interactive",
          "bg-none hover:bg-interactive dark:bg-dt-background-card dark:hover:bg-dt-background-input",
          "text-typo dark:text-dt-typo",
          "font-extralight",
          "hover:shadow-default focus:shadow-default dark:shadow-none",
          "placeholder:text-xl placeholder:text-line dark:placeholder:text-dt-typo",
          synchronizedInput.length >= 1
            ? "border-interactive shadow-default bg-interactive dark:bg-dt-interactive dark:hover:bg-dt-interactive dark:border-bg-dt-interactive dark:text-typo dark:hover:text-typo dark:font-light"
            : null
        )}
      >
        <style>{`
        input[type="search"]::-webkit-search-cancel-button {
          display: none;
        }
      `}</style>
        <input
          id="searchInput"
          className="h-12 rounded-lg border w-full flex pl-8
          border-none bg-transparent
          appearance-none focus:outline-none
          form-control"
          type="search"
          placeholder="Search"
          onInput={(event) => {
            handleInputChange(event.target.value);
          }}
          onKeyDown={handlePaste}
          value={synchronizedInput}
        />

        {synchronizedInput !== "" && (
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
