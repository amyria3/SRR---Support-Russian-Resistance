import React from "react";

const Keyword = ({ keyword, keyProp, synchronizeInput }) => {
  return (
    <div
      onClick={()=>{()=>{document.getElementById("searchInput").value("")};synchronizeInput(`"${keyword}"`)}}
      key={keyProp}
      className="flex items-center gap-[6px] py-2 px-3
      rounded-[20px] border-solid border-[1px]
      cursor-pointer
      border-line hover:border-interactive-hover
      dark:border-dt-typo dark:hover:border-dt-interactive
      bg-white-card hover:bg-interactive
      dark:bg-transparent dark:hover:bg-dt-background-input
      hover:text-border-interactive-hover
      dark:hover:text-border-dt-interactive text-typo dark:text-dt-typo opacity-90 dark:opacity-70 text-xs font-normal dark:text-sm dark:font-light"
    >
      <div className="h-[5px] w-[5px] rounded-full bg-typo dark:bg-dt-typo"></div>
      <div className="flex-none">{keyword}</div>
    </div>
  );
};

//must receive data.element.keywords & data.element.id as props
//every keyword receives its own unique Id as prop to set the key.
const Keywords = ({ keywords, entryId, synchronizeInput }) => {
  return (
    <div
      id="keywords_wrapper"
      key={"keywords/" + entryId}
      className="flex flex-wrap flex-shrink gap-2 mb-6"
    >
      {keywords.map((element) => {
        return <Keyword keyProp={element.id} keyword={element.name} synchronizeInput={synchronizeInput} />;
      })}
    </div>
  );
};

export default Keywords;
