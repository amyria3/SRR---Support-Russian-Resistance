import search from "../assets/search/search.js";
import Button from "./Button.jsx";
import clsx from "clsx";
import { useContext, useState, useEffect } from "react";
import { contextData, currentIndexa } from "../main.jsx";
import { searchTermHandler } from "../main.jsx";

const Search = ({
  setterNotSearching,
  notSearching,
  setterResults,
  setterTermLength,
  keywordStringAsProp,
}) => {
  const data = useContext(contextData);
  const currentIndex = useContext(currentIndexa);
  const { term, setter } = useContext(searchTermHandler);
  const [synchronizedTerm, setSynchronizedTerm] = useState(undefined);
  let htmlInputValue = document.getElementById("searchInput")?.value;
  const placeholderTest = ""

  console.log("Term : " + term, typeof term);
  console.log(
    "synchronizedTerm : " + synchronizedTerm,
    typeof synchronizedTerm
  );
  console.log("htmlInputValue : " + htmlInputValue, typeof htmlInputValue);

  ////reset if no input to prevent empty search results
  useEffect(() => {
    (term === "" || synchronizedTerm === "" || htmlInputValue === "") &&
      handleReset();
  }, [synchronizedTerm, term, htmlInputValue]);

  useEffect(() => {
    term&&notSearching&&setterNotSearching(false);
    term&&setSynchronizedTerm(term);
    term&&setterResults(search(data, currentIndex, term));
    term&&setterTermLength(term.length);
  }, [term]); //works

  function handleReset() {
    term&&setter(undefined);
    synchronizedTerm&&setSynchronizedTerm(undefined);
    if(htmlInputValue){htmlInputValue = undefined};
    setterResults([]);
    setterNotSearching(true);
  } //doesn't work

  function handleInputChange(input) {
    //input: HTML property
    //term: my binding
    if (
      (synchronizedTerm?.length === 0 && input.length === 1) || //start typing
      input?.length > 0 || //insert a term
      (synchronizedTerm?.length > 0 && input.length > 0)
      //exchange or change a term
    ) {
      notSearching && setterNotSearching(false); // set notSearching to false if true
      setSynchronizedTerm(input);
      setterResults(search(data, currentIndex, input));
      setterTermLength(input.length);
    }
    if (keywordStringAsProp) {
      //will it update if keywordStringAsProp will be updated?
      notSearching && setterNotSearching(false); // set notSearching to false if true
      setSynchronizedTerm(keywordStringAsProp);
      setterResults(search(data, currentIndex, input));
      setterTermLength(keywordStringAsProp.length);
    }
      //deleting last character backspace (character-Index === 0):
      //deleting term (CMD-X)
      if (synchronizedTerm.length > 0 && input.length === 0) {
        handleReset();
        // console.log("Deleted last character or deleted everything", inputField resetted);
      }
  }

  function handlePaste(event) {
    if (
      (event.key === "v" && (event.metaKey || event.ctrlKey)) ||
      term?.length > 3
    ) {
      // "Cmd+V" (Mac) or "Ctrl+V" (Windows) was pressed
      // Retrieve the pasted text
      try {
        const pastedText = event.clipboardData?.getData("text");
        setterNotSearching && setterNotSearching(false); // set notSearching to false only if first character entered
        pastedText && synchronizedTerm(pastedText);
      } catch (error) {
        console.log(error);
      }
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
          term?.length >= 1
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
          onChange={(event) => {
            handleInputChange(event.target.value);
          }}
          onKeyDown={handlePaste}

          value={synchronizedTerm}
        />

        {synchronizedTerm && synchronizedTerm !== "" && (
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
