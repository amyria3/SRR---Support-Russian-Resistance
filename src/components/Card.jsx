import { useState } from "react";
import clsx from "clsx";
import { Links } from "./Links";
import { isMobile, isDesktop } from "react-device-detect";

const Card = ({ id, name, description, img_url, allResources }) => {
  const [isHover, setHover] = useState(false);

  console.log("isHover : " + isHover);
  console.log("isMobile : " + isMobile);

  return (
    <div
      key={id}
      // keywords={[{...allLinkedKeywords}]}
      onMouseEnter={() => {
        if (!isMobile) {
          setHover(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setHover(false);
        }
      }}
      className={clsx(
        "w-full aspect-w-12 aspect-h-10",
        "mb-3 lg:mb-8 xl:mb-12",
        isDesktop &&
        "w-[360px] h-[470px] max-w-[432px] max-h-[564px] overflow-hidden",
        isDesktop && "p-0 flex flex-col content-between",
        isMobile && "h-[320px] hover:h-auto w-full p-4",
        "bg-white-card dark:bg-dt-background-card",
        "text-typo dark:text-dt-typo",
        "text-sm font-light dark:font-extralight",
        "dark:hover:border-solid dark:p-[1px] dark:hover:p-0 rounded-md border-line",
        "border-line dark:border-dt-interactive border-[1px]"
      )}
    >
      <div
        id="top"
        className="h-auto overflow-show
        flex flex-col py-10 px-7 gap-5"
        // onClick={} for mobile
      >
        <h3 className="text-base font-semibold">{name}</h3>
        <p className={clsx("flex-grow overflow-hidden text-ellipsis whitespace-pre-line", !isHover?"line-clamp-2":"line-clamp-6")}>
          {description}
        </p>
      </div>

      <div id="bottom_frame" className="grow flex flex-row">
        {isMobile && Links(allResources, isHover, id)}
        {isDesktop && !isHover && (
          <img
            src={
              !img_url || img_url === ""
                ? "src/assets/illustrations/placeholder.png"
                : img_url
            }
            alt=""
            className="object-cover origin-bottom place-self-end z-99 overflow-hidden transform scale-110 relative top-[2px]"
          />
        )}
        {isDesktop && Links(allResources, isHover, id)}
      </div>
    </div>
  );
};

export default Card;
