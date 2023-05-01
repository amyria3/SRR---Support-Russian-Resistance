import Card from "./Card.jsx";
import { contextData } from "../main.jsx";
import { useContext } from "react";

function RenderCards({colNumber}) {

  const data = useContext(contextData);

  const cards = data.map((element, index) => {
    return <Card {...element} />;
  });

  const twoColumns = () => {
    return (
      (
        <div
          key="cardsWrapper"
          id="cardsWrapper"
          className={`grid grid-cols-2 gap-8`}
        >
          <div className="flex flex-col justify-start gap-8">
            {cards.filter((_, i) => i % 2 === 0 || i % 2 === 1)}
          </div>
          <div className="flex flex-col justify-start gap-8">
            {cards.filter((_, i) => i % 2 === 1)}
          </div>
        </div>
      )
    );
  };
  const threeColumns = () => {
    return (
      <div
        key="cardsWrapper"
        id="cardsWrapper"
        className={"grid grid-cols-3 gap-8"}
      >
        <div className="flex flex-col justify-start gap-8">
          {cards.filter((_, i) => i % 3 === 0)}
        </div>
        <div className="flex flex-col justify-start gap-8">
          {cards.filter((_, i) => i % 3 === 1)}
        </div>
        <div className="flex flex-col justify-start gap-8">
          {cards.filter((_, i) => i % 3 === 2)}
        </div>
      </div>
    );
  };

  if (colNumber === 3) {
    return threeColumns();
  }
  if (colNumber === 2) {
    return twoColumns();
  }
}

export default RenderCards;
