import Search from "./Search.jsx";
import { useState } from "react";
import RenderCards from "./RenderCards.jsx";

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
      <RenderCards
        defaultState={notSearching}
        searchResults={filteredData}
      />
    </section>
  );
};

export default Content;
