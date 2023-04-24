import { useState } from "react";
import Cards from "./Cards.jsx";
import Search from "./Search.jsx";
import { useContext } from "react";
import { contextData } from "../main.jsx"



const Content = () => {

    //Cards Component will render the cards from default data, if true,
  //to implement: cards component must render cards from search-Scripts respond, if false.
  const [notSearching, setNotSearching] = useState(true);

  const [searchResults, setSearchReasults] = useState(undefined);

  const data = useContext(contextData)

return (
    <section>
        <div className="h-[1px] bg-line w-full"></div>
        <Search
          setNotSearching={setNotSearching} //to control input-fields UI-behavior & to control, if cards render with searchResults or normal data
          setterResults={setSearchReasults} //const[...] must be at App-lavel to be accessable by Cards & Search
        />
        <Cards

        data={data}
        filteredData={searchResults}
        searching={!notSearching}
        />
    </section>
)
}

export default Content

