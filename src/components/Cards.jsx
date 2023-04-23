import Card from "./Card";

import { useContext } from "react";
import { contextData, filteredResults } from "../main.jsx"

const Cards = () => {
  const data = useContext(contextData)
  const searchResults = useContext(filteredResults);
  {console.log("IMPORTANT TEST 1 " + JSON.stringify(data))}
  return (
    <div
      id="cards"
      className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 xl:auto-cols-auto xl:gap-12 w-full"
    >
        {console.log("IMPORTANT TEST 2 " + JSON.stringify(searchResults))}
        {data.map((element) => {
          return <Card {...element} />;
        })}
    </div>
  );
};

export default Cards;
