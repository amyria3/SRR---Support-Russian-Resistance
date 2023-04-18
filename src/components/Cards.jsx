import Card from "./Card";
import { useState, useEffect } from "react";

const Cards = ({ cards_data }) => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // getData()
    setCardsData(cardsData)
  }, []);

  // console.log(cardsData);

  return (
    <div
      id="cards"
      className="grid ssm:grid-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-6 w-full"
    >
      {cards_data
        ? cards_data.map((element) => {
            return <Card {...element} />;
          })
        : console.log("No Data Found to feed Cards.jsx")}
    </div>
  );
};

export default Cards;
