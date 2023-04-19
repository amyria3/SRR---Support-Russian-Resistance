import { useState } from "react";
import { Links } from "./Links";

//Type:
// {
  //allLinkedKeywords: [{…}]
// allResources: [{…}]
// description: ""
// id:""
// img_url: ""
// name: ""
//}

//width should grow breakpoint: 360px * 2 + margin-x + gap
const Card = ({ id, name, description, img_url, allResources }) => {
  const [imgIsHidden, setImgIsHidden] = useState(false);

  console.log(JSON.stringify(allResources))

  return (
    <div
      key={id}
      // keywords={[{...allLinkedKeywords}]}
      onMouseEnter={() => {
        setImgIsHidden(true);
      }}
      onMouseLeave={() => {
        setImgIsHidden(false);
      }}
      className="h-[480px] lg:min-w-[320px] lg:max-w-[400px]
      p-0 flex flex-col content-between
      bg-white-card dark:bg-dt-background-card
      text-typo dark:text-dt-typo
      text-sm
      font-light dark:font-extralight
      border-solid dark:border-none dark:hover:border-solid rounded-md border-line hover:border-interactive-hover dark:border-dt-interactive border-[1px]
      hover:shadow-default hover:shadow-default dark:hover:shadow-none"
    >
      <div id="top" className="flex grow flex-col py-10 px-7 gap-5">
        <h3 className="text-base font-semibold">{name}</h3>
        <p>{description}</p>
      </div>

      <div id="bottom_frame" className="h-[250px] flex flex-row">
        {imgIsHidden &&
            Links(allResources, imgIsHidden, id)}
        {!imgIsHidden && (
          <img
            src={img_url}
            alt=""
            className="object-cover place-self-end z-99"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
