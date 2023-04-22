import strictSearch from "../assets/search/strictSearch.js";
import Button from "./Button.jsx";
import clsx from "clsx";

const Search = ({
  setNotSearching,
  currentInput,
  setterFunctionInput,
  setterFunctionResults,
  data,
}) => {
  function handleInputChange(event) {
    setNotSearching(false);
    const currentInput = event.target.value;
    //make current Input available to <App /> by using setCurrentInput useState binding that is defined in <App />
    setterFunctionInput(currentInput);
    const currentData = strictSearch(data, currentInput);
    console.log(currentData);
    //make current Input available to <App /> by using setSearchReasults useState binding that is defined in <App />
    setterFunctionResults(currentData);
  }
  function handleResetClick() {
    setterFunctionInput("");
    setterFunctionResults(undefined);
    setNotSearching(true);
  }

  return (
    <div className="relative">
      <div
        id="searchWrapper"
        className={clsx(
          "h-12 rounded-lg w-full flex",
          "border border-line dark:border-none",
          "dark:hover:border-solid dark:hover:border-[1px]",
          "hover:border-interactive-hover dark:border-dt-interactive focus:border-interactive",
          "bg-none hover:bg-interactive dark:bg-dt-background-input",
          "text-typo dark:text-dt-typo",
          "font-extralight",
          "hover:shadow-default focus:shadow-default dark:shadow-none",
          "placeholder:text-xl placeholder:text-line dark:placeholder:text-dt-typo",
          currentInput !== ""
            ? "border-interactive shadow-default bg-interactive dark:bg-dt-background-input"
            : null // the condition is fixed
        )}
      >
        <input
          id="search"
          className="h-12 rounded-lg border w-full flex pl-8
          border-none bg-transparent
          appearance-none focus:outline-none
          form-control"
          type="search"
          placeholder="Search"
          onInput={handleInputChange}
          value={currentInput}
        />

        {currentInput && (
          <Button
            className="absolute top-0 right-0"
            onClick={()=>{handleResetClick()}}
            label="Reset search"
          />
        )}
      </div>
    </div>
  );
};

export default Search;
