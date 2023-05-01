import CardsWrapper from "./CardsWrapper.jsx";
import Search from "./Search.jsx";
import { useContext } from "react";
import { contextData } from "../main.jsx";

const Content = (
  notSearching,
  setNotSearching,
  searchResults,
  setSearchResults,
  colNumber
) => {
  //GET DATA, handle data supply
  const data = useContext(contextData);

  return (
    <section
      id="content"
      className="flex flex-col gap-6 min-h-screen h-2/3 w-full"
    >
      <div className="h-[1px] bg-line w-full"></div>
      <Search
        setNotSearching={setNotSearching} //to control input-fields UI-behavior & to control, if cards render with searchResults or normal data
        setterResults={setSearchResults} //const[...] must be at App-lavel to be accessable by Cards & Search
      />

      {/* <CardsWrapper does not need any data */}
      {notSearching && <CardsWrapper data={data} colNumber={colNumber} />}
      {!notSearching && (
        <CardsWrapper data={searchResults} colNumber={colNumber} />
      )}
    </section>
  );
};

export default Content;
