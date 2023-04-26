import { useState } from "react";
import Cards from "./Cards.jsx";
import Search from "./Search.jsx";
import { useContext } from "react";
import { contextData } from "../main.jsx"

const Content = () => {

  const [notSearching, setNotSearching] = useState(true);

  const [searchResults, setSearchReasults] = useState(undefined);

  const data = useContext(contextData)

return (
    <section id="content" className="flex flex-col gap-6 min-h-screen h-2/3 w-full"
    >
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

