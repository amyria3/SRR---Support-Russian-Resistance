import React from "react";

const Keyword = ({ keyword }) => {
  return (
    <div className="flex items-center gap-[6px] py-2 px-3 rounded-[20px] bg-white-card border-solid border-[1px] border-line text-typo opacity-90">
      <div className="h-[5px] w-[5px] rounded-full bg-typo"></div>
      <div className="flex-none text-xs font-normal">
        {keyword}
      </div>
    </div>
  );
};

//must receive data.element.allLinkedKeywords as prop
const Keywords = ({ keywords, entryId }) => {
  return (
    <div id="keywords_wrapper" key={"keywords/"+entryId} className="flex flex-wrap flex-shrink gap-2 mb-6">
      {keywords.map((element) => {
        return <Keyword key={element.id} keyword={element.protoKeyword} />;
      })}
    </div>
  );
};

export default Keywords;
