import React from "react";
import { useContext } from "react";
import { searchTermHandler } from "../main.jsx";
import clsx from "clsx";

const Keyword = ({ keyword, keyProp }) => {
  const { term, setter } = useContext(searchTermHandler);
  const keywordBinding = keyword.toString();
  const selected = (term && term === `"${keywordBinding}"`)

  function handleClick(){
    if (selected){setter("")}
    else setter(`"${keywordBinding}"`)}

  return (
    <div
      onMouseDown={handleClick}
      key={keyProp}
      className={clsx(
        "flex items-center gap-[6px] py-2 pl-3 pr-[18px] rounded-[20px]",
        "cursor-pointer",
        "font-normal text-xs",
        "dark:font-light dark:text-sm",
        "border-solid border-[1px]",
        selected
          ? clsx(
              /*BACKGROUND when selected, light theme: */
              "bg-interactive",
              /*BORDER  w. s., l. t. */
              "border-interactive-hover hover:border-dt-typo hover:bg-interactive-hover hover:text-dt-typo",
              /*SHADOW p. w. s.  ... l. t. */
              "shadow-default",
              /*BACKGROUND w. s. ... dark theme: */
              "dark:bg-dt-interactive dark:hover:bg-interactive-week dark:text-typo dark:hover:text-dt-typo",
              /*BORDER w. s. ... d. t. */
              "dark:border-dt-interactive dark:hover:border-interactive-hover",
              /*SHADOW w. s. ... d. t. */
              "dark:shadow-none"
            )
          : clsx(
              /*BORDER properties w.s. light theme: */
              "border-line",
              /*SHADOW. l. t.: */
              "shadow-none hover:shadow-default",
              /*BORDER l. t.; */

              /*SHADOW l. t.: */
              "dark:hover:shadow-none",
              /*BACKGROUND d. t.: */
              "bg-none hover:bg-interactive",
              /*TYPO l. t.: */
              "text-typo",
              /*BORDER l. t. */
              "border-line hover:border-interactive-hover",
              /*SHADOW l. t. */
              "shadow-none hover:shadow-default",
              /*BACKGROUND d. t.: */
              "dark:bg-dt-background-card dark:hover:bg-interactive-week dark:text-dt-typo",
              /*TYPO d. t.: */
              "dark:text-dt-typo hover:text-bg-dt-typo",
              /*BORDER d. t. */
              "dark:hover:border-interactive-hover",
              /*SHADOW d. t. */
              "shadow-none dark:hover:shadow-none"
            )
      )}
    >
      <div className={clsx("h-[5px] w-[5px] rounded-full bg-typo dark:bg-dt-typo", selected&&"hidden")}></div>
      <div className="flex-none">{keyword}</div>
      <div className={clsx("relative left-[5px] font-light", selected?"flex-none":"hidden")}>x</div>
    </div>
  );
};

//must receive data.element.keywords & data.element.id as props
//every keyword receives it's own unique Id as prop to set the key.
const Keywords = ({ keywords, entryId }) => {
  return (
    <div
      id="keywords_wrapper"
      key={"keywords/" + entryId}
      className="flex flex-wrap flex-shrink gap-2 mb-6"
    >
      {keywords.map((element) => {
        return <Keyword keyProp={element.id} keyword={element.name} />;
      })}
    </div>
  );
};

export default Keywords;
