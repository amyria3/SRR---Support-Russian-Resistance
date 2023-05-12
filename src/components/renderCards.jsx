import Card from "./Card.jsx";
import { contextData } from "../main.jsx";
import { useState, useContext, useEffect } from "react";
import clsx from "clsx";

function RenderAllCards({ defaultState, searchResults }) {
  const data = useContext(contextData);

  console.log("RENDER.jsx, line 9: search results : " + JSON.stringify(searchResults))

  const windowWidth = window.innerWidth;

  const [gridVar, setGridVar] = useState("");
  useEffect(() => {
    setGridVar(setColsNumber());
  }, []);

  //manually added Breakpoints

  // const setColsNumber = () => {
  //   if (windowWidth <= 700) return 1;
  //   if (windowWidth > 823 && windowWidth < 1200) return 2;
  //   if (windowWidth <= 1200) return 3;
  // };

  const setColsNumber = () => {
    if (windowWidth <= 700) return 1;
    if (windowWidth > 700 && windowWidth <= 1000) return 2;
    if (windowWidth > 1000) return 3;
  };

  window.addEventListener("resize", () => {
    setGridVar(setColsNumber());
  });

  console.log("searchResults " + JSON.stringify(searchResults));
  console.log("data" + JSON.stringify(data));

  const defaultCardsSet = data.map((element, index) => {
    return <Card {...element} />;
  });

  const filteredCardsSet = searchResults.map((element, index) => {
    return <Card {...element} />;
  });

  console.log(filteredCardsSet);

  const oneColumn = () => {
    return (
      <>
        <div
          key="cardsWrapper"
          id="cardsWrapper"
          className={clsx(
            "flex flex-col gap-8 justify-start",
            !defaultState && "hidden"
          )}
        >
          {defaultCardsSet}
        </div>
        <div
          key="filteredCardsWrapper"
          id="filteredCardsWrapper"
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
          key="cardsWrapper"
          id="cardsWrapper"
          className={clsx("grid grid-cols-2 gap-8", !defaultState && "hidden")}
        >
          <div className="flex flex-col justify-start gap-8">
            {defaultCardsSet.filter((_, i) => i % 2 === 1)}
          </div>
          <div className="flex flex-col justify-start gap-8">
            {defaultCardsSet.filter((_, i) => i % 2 === 0)}
          </div>
        </div>
        {/*this will render on search and will be hidden as soon as not searching*/}
        <div
          key="filteredCardsWrapper"
          id="filteredCardsWrapper"
          className={clsx("grid grid-cols-2 gap-8", defaultState && "hidden")}
        >
          <div className="flex flex-col justify-start gap-8">
            {filteredCardsSet.filter((_, i) => i % 2 === 1)}
          </div>
          <div className="flex flex-col justify-start gap-8">
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
          key="cardsWrapper"
          id="cardsWrapper"
          className={clsx("grid grid-cols-3 gap-8", !defaultState && "hidden")}
        >
          <div className="flex flex-col justify-start gap-8">
            {defaultCardsSet.filter((_, i) => i % 3 === 0)}
          </div>
          <div className="flex flex-col justify-start gap-8">
            {defaultCardsSet.filter((_, i) => i % 3 === 1)}
          </div>
          <div className="flex flex-col justify-start gap-8">
            {defaultCardsSet.filter((_, i) => i % 3 === 2)}
          </div>
        </div>
        {/*this will render on search and will be hidden as soon as not searching*/}
        <div
          key="filteredCardsWrapper"
          id="filteredCardsWrapper"
          className={clsx("grid grid-cols-3 gap-8", defaultState && "hidden")}
        >
          <div className="flex flex-col justify-start gap-8">
            {filteredCardsSet.filter((_, i) => i % 3 === 1)}
          </div>
          <div className="flex flex-col justify-start gap-8">
            {filteredCardsSet.filter((_, i) => i % 3 === 2)}
          </div>
          <div className="flex flex-col justify-start gap-8">
            {filteredCardsSet.filter((_, i) => i % 3 === 0)}
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

  return threeColumns()
}

export default RenderAllCards;
