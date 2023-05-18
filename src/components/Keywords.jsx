import React from "react";
import { useContext } from "react";
import { searchTermHandler } from "../main.jsx";
import clsx from "clsx";

const Keyword = ({ keyword, keyProp }) => {
  const { term, setter } = useContext(searchTermHandler);
  const keywordBinding = keyword.toString();

  return (
    <div
      onMouseDown={() => {
        setter(`"${keywordBinding}"`);
      }}
      key={keyProp}
      className={clsx(
        "flex items-center gap-[6px] py-2 pl-3 pr-[18px] rounded-[20px]",
        "cursor-pointer",
        "font-normal text-xs",
        "dark:font-light dark:text-sm",
        "border-solid border-[1px]",
        term && term === `"${keywordBinding}"`
          ? clsx(
              /*BACKGROUND properties when selected, light theme: */
              "bg-interactive",
              /*BORDER properties w. selected, l. t. */
              "border-interactive-hover",
              /*SHADOW p. w. selected ... l. t. */
              "shadow-default",
              /*BACKGROUND properties ... dark theme: */
              "dark:bg-dt-interactive dark:text-typo",
              /*BORDER properties ... d. t. */
              "dark:border-dt-interactive",
              /*SHADOW p. w. selected ... d. t. */
              "dark:shadow-none"
            )
          : clsx(
              /*BORDER properties light theme: */
              "border-line",
              /*SHADOW properties light theme: */
              "shadow-none hover:shadow-default",
              /*BORDER properties dark theme */
              "dark:border-none" /*must be like background*/,
              /*SHADOW properties dark theme: */
              "dark:hover:shadow-none",
              /*BACKGROUND p. default, light theme: */
              "bg-none hover:bg-interactive",
              /*TYPO p. default, light theme: */
              "text-typo",
              /*BORDER p. default, l. t. */
              "border-line hover:border-interactive-hover",
              /*SHADOW p. default l. t. */
              "shadow-none hover:shadow-default",
              /*BACKGROUND p. default dark theme: */
              "dark:bg-dt-background-card dark:hover:bg-dt-background-input dark:text-dt-typo",
              /*TYPO p. default, light theme: */
              "dark:text-dt-typo hover:text-bg-dt-typo",
              /*BORDER p. default d. t. */
              "dark:border-none dark:hover:border-dt-interactive",
              /*SHADOW p. default ... d. t. */
              "shadow-none dark:hover:shadow-none"
            )
      )}
    >
      <div className="h-[5px] w-[5px] rounded-full bg-typo dark:bg-dt-typo"></div>
      <div className="flex-none">{keyword}</div>
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
