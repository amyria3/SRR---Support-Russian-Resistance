import Search from "./Search.jsx";
import { useState } from "react";
import RenderAllCards from "./RenderCards.jsx";
import clsx from "clsx";

const Content = () => {
  ////get data
  const [notSearching, setNotSearching] = useState(true);
  const [filteredData, setFilteredData] = useState([])
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
      />

      {/*console.log("CONTENT.jsx, line 22, FILTERED DATA: " + JSON.stringify(filteredData))*/}

      <div className={clsx("statusReport", ((filteredData.length===0 || filteredData===null || !filteredData)&&!notSearching)?"block":"hidden")}>No search results yet</div>
      <RenderAllCards
        defaultState={notSearching}
        searchResults={filteredData}
      />
    </section>
  );
};

export default Content;
