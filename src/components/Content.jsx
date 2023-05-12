import Search from "./Search.jsx";
import { useState } from "react";
import RenderAllCards from "./RenderCards.jsx";
import clsx from "clsx";

const Content = () => {
  ////get data
  const [notSearching, setNotSearching] = useState(true);
  const [filteredData, setFilteredData] = useState([])
  const [searchTermLength, setSearchTermLength] = useState(0)
  return (
    <section
      id="content"
      className="flex flex-col gap-6 min-h-screen h-2/3 w-full"
    >
      <div className="h-[1px] bg-line w-full"></div>

      {/*Search dates the filtered data array up */}

      <Search
        setterNotSearching={setNotSearching}
        setterResults={setFilteredData}
        setterTermLength={setSearchTermLength}
      />

      {/*console.log("CONTENT.jsx, line 22, FILTERED DATA: " + JSON.stringify(filteredData))*/}

      <div className={clsx("searchFeedback", ((filteredData.length===0 || filteredData===null || !filteredData)&&!notSearching&&(searchTermLength<5))?"block":"hidden")}>No search results yet</div>
      <div className={clsx("searchFeedback", ((filteredData.length===0 || filteredData===null || !filteredData)&&!notSearching&&(searchTermLength>=5))?"block":"hidden")}>Please try another termt</div>
      <RenderAllCards
        defaultState={notSearching}
        searchResults={filteredData}
      />
    </section>
  );
};

export default Content;
