import Card from "./Card.jsx";
import { contextData } from "../main.jsx";
import { useState, useContext, useEffect } from "react";
import clsx from "clsx";

function RenderAllCards({ defaultState, searchResults, keywordSearchSetter }) {
  const data = useContext(contextData);

  // console.log("DEBUGGING " + JSON.stringify(searchResults));

  const windowWidth = window.innerWidth;

  const [gridVar, setGridVar] = useState("");
  useEffect(() => {
    setGridVar(setColsNumber());
  }, []);

  const setColsNumber = () => {
    if (windowWidth <= 700) return 1;
    if (windowWidth > 700 && windowWidth <= 1000) return 2;
    if (windowWidth > 1140) return 3;
  };

  window.addEventListener("resize", () => {
    setGridVar(setColsNumber());
  });

  const defaultCardsSet = data.map((element) => {
    return (
      <Card
        id={element.id}
        name={element.name}
        description={element.description}
        keywords={element.keywords}
        resources={element.resources}
        cardKey={element.id + "A"}
        passKeywordName={keywordSearchSetter}
      />
    );
  });

  const filteredCardsSet = searchResults?.map((element) => {
    return (
      <Card
        name={element.name}
        description={element.description}
        keywords={element.keywords}
        resources={element.resources}
        cardKey={element.id + "B"}
        passKeywordName={keywordSearchSetter}
      />
    );
  });

  const oneColumn = () => {
    return (
      <>
        <div
          key="cardsWrapperOneCol"
          className={clsx(
            "flex flex-col gap-8 justify-start",
            !defaultState && "hidden"
          )}
        >
          {defaultCardsSet}
        </div>
        <div
          key="filteredCardsWrapperOneCol"
          className={clsx(
            "flex flex-col gap-8 justify-start",
            defaultState && "hidden"
          )}
        >
          {filteredCardsSet}
        </div>
      </>
    );
  };

  const twoColumns = () => {
    return (
      <>
        {/*this will render once (i hope) but will be hidden when searching*/}
        <div
          key="cardsWrapperTwoColsFirst"
          className={clsx("grid grid-cols-2 gap-8", !defaultState && "hidden")}
        >
          <div
            key="TwoColsFirstColA"
            className="flex flex-col justify-start gap-8"
          >
            {defaultCardsSet.filter((_, i) => i % 2 === 1)}
          </div>
          <div
            key="TwoColsSecondColA"
            className="flex flex-col justify-start gap-8"
          >
            {defaultCardsSet.filter((_, i) => i % 2 === 0)}
          </div>
        </div>
        {/*this will render on search and will be hidden as soon as not searching*/}
        <div
          key="filteredCardsWrapperTwoColsSecond"
          className={clsx("grid grid-cols-2 gap-8", defaultState && "hidden")}
        >
          <div
            key="TwoColsFirstColB"
            className="flex flex-col justify-start gap-8"
          >
            {filteredCardsSet.filter((_, i) => i % 2 === 1)}
          </div>
          <div
            key="TwoColsSecondColB"
            className="flex flex-col justify-start gap-8"
          >
            {filteredCardsSet.filter((_, i) => i % 2 === 0)}
          </div>
        </div>
      </>
    );
  };

  const threeColumns = () => {
    return (
      <>
        <div
          key="cardsWrapperThreeCols"
          className={clsx("grid grid-cols-3 gap-8", !defaultState && "hidden")}
        >
          <div
            key="ThreeColsFirstColA"
            className="flex flex-col justify-start gap-8"
          >
            {defaultCardsSet.filter((_, i) => i % 3 === 0)}
          </div>
          <div
            key="ThreeColsSecondColA"
            className="flex flex-col justify-start gap-8"
          >
            {defaultCardsSet.filter((_, i) => i % 3 === 1)}
          </div>
          <div
            key="ThreeColsThirdColA"
            className="flex flex-col justify-start gap-8"
          >
            {defaultCardsSet.filter((_, i) => i % 3 === 2)}
          </div>
        </div>
        {/*this will render on search and will be hidden as soon as not searching*/}
        <div
          key="filteredCardsWrapperThreeCols"
          className={clsx("grid grid-cols-3 gap-8", defaultState && "hidden")}
        >
          <div
            key="ThreeColsFirstColB"
            className="flex flex-col justify-start gap-8"
          >
            {filteredCardsSet.filter((_, i) => i % 3 === 0)}
          </div>
          <div
            key="ThreeColsSecondColB"
            className="flex flex-col justify-start gap-8"
          >
            {filteredCardsSet.filter((_, i) => i % 3 === 1)}
          </div>
          <div
            key="ThreeColsThirdColB"
            className="flex flex-col justify-start gap-8"
          >
            {filteredCardsSet.filter((_, i) => i % 3 === 2)}
          </div>
        </div>
      </>
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

  return threeColumns();
}

export default RenderAllCards;
