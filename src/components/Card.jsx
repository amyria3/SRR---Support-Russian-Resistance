import { useState } from "react";
import clsx from "clsx";
import { Links } from "./Links";
import { isMobile, isDesktop } from "react-device-detect";

const Card = ({ id, name, description, img_url, allResources }) => {
  const [imgIsHidden, setImgIsHidden] = useState(false);

  console.log("imgIsHidden : " + imgIsHidden);
  console.log("isMobile : " + isMobile);

  return (
    <div
      key={id}
      // keywords={[{...allLinkedKeywords}]}
      onMouseEnter={() => {
        if (!isMobile) {
          setImgIsHidden(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setImgIsHidden(false);
        }
      }}
      className={clsx(
        isDesktop&&"h-[480px] lg:min-w-[320px] lg:max-w-[400px]",
        isMobile&&"h-auto w-full p-4",
        "p-0 flex flex-col content-between",
        "bg-white-card dark:bg-dt-background-card",
        "text-typo dark:text-dt-typo",
        "text-sm",
        "font-light dark:font-extralight",
        "border-solid dark:border-none dark:hover:border-solid dark:p-[1px] dark:hover:p-0 rounded-md border-line",
        "hover:shadow-default hover:shadow-default dark:hover:shadow-none",
        "hover:border-interactive-hoverdark:border-dt-interactive border-[1px]",
        "mb-4 lg:mb-8 xl:mb-12"
      )}
    >
      <div id="top" className="flex grow flex-col py-10 px-7 gap-5">
        <h3 className="text-base font-semibold">{name}</h3>
        <p>{description}</p>
      </div>

      <div id="bottom_frame" className="h-auto flex flex-row">
        {isMobile && Links(allResources, imgIsHidden, id)}
        {isDesktop && !imgIsHidden && (
          <img
            src={img_url}
            alt=""
            className="object-cover place-self-end z-99"
          />
        )}
        {isDesktop && imgIsHidden && Links(allResources, imgIsHidden, id)}
      </div>
    </div>
  );
};

export default Card;
