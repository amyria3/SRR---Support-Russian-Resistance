import Card from "./Card.jsx";
import { contextData } from "../main.jsx";
import { useState, useContext } from "react";

function RenderCards() {
  const data = useContext(contextData);

  const windowWidth = window.innerWidth;

  const [gridVar, setGridVar] = useState(3);
  //manually added Breakpoints

  const setColsNumber = () => {
    if (windowWidth <= 768) return 1;
    if (windowWidth <= 823) return 2;
    if (windowWidth > 823) return 3;
  };

  window.addEventListener("resize", () => {
    setGridVar(setColsNumber());
  });

  const cards = data.map((element, index) => {
    return <Card {...element} />;
  });

  const oneColumn = () => {
    return (
      <div
        key="cardsWrapper"
        id="cardsWrapper"
        className={"flex flex-col gap-8 justify-start"}
      >
        {cards}
      </div>
    );
  };
  const twoColumns = () => {
    return (
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

  if (gridVar === 3) {
    return threeColumns();
  }
  if (gridVar === 2) {
    return twoColumns();
  }
  if (gridVar === 1) {
    return oneColumn();
  }
}

export default RenderCards;
