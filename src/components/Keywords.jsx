import React from "react";

const Keyword = ({ keyword }) => {
  return (
    <div className="flex flex-row items-start gap-4 w-28 h-6">
      <div className="flex-none order-2 flex-grow-0 w-10 h-6 border border-line rounded-full">
        {keyword}
      </div>
    </div>
  );
};

const Keywords = ({ keywordArray, ngoId }) => {
  return (
    <div id="keywords_wrapper">
      {data.map((element) => {
        return <Keyword key={ngoId + "/" + element} keyword={element.name} />;
      })}
    </div>
  );
};

export default Keywords;
