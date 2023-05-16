import Search from "./Search.jsx";
import { useState } from "react";
import RenderAllCards from "./renderCards.jsx";
import clsx from "clsx";

const Content = () => {
  ////get data
  const [notSearching, setNotSearching] = useState(true);
  const [currentInput, setCurrentInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchTermLength, setSearchTermLength] = useState(0);
  const [keywordSearchTerm, setKeywordSearchTerm] = useState("");

  const searchUnsuccessful =
    (filteredData === null ||
      (filteredData && filteredData.length === 0) ||
      !filteredData) &&
    !notSearching;

  return (
    <section
      id="content"
      className="flex flex-col gap-6 min-h-screen h-2/3 w-full"
    >
      <div className="h-[1px] bg-line w-full"></div>
      {/*Search dates the filtered data array up */}
      <Search
        notSearching={notSearching}
        setterNotSearching={setNotSearching}
        setterSynchronizedInput={setCurrentInput}
        synchronizedInput={currentInput}
        keywordStringAsProp={keywordSearchTerm}
        setterResults={setFilteredData}
        setterTermLength={setSearchTermLength}
      />

      {/*console.log("CONTENT.jsx, line 22, FILTERED DATA: " + JSON.stringify(filteredData))*/}
      {/*console.log(searchTermLength)*/}
      <div
        className={clsx(
          "statusFeedback",
          searchUnsuccessful && searchTermLength < 4 ? "block" : "hidden"
        )}
      >
        No search results yet
      </div>
      <div
        className={clsx(
          "statusFeedback",
          searchUnsuccessful && searchTermLength >= 4 ? "block" : "hidden"
        )}
      >
        Please try another term
      </div>
      <RenderAllCards
        defaultState={notSearching}
        searchResults={filteredData}
        keywordSearchSetter={setKeywordSearchTerm}
      />
    </section>
  );
};

export default Content;
