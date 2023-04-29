import { useState } from "react";
import clsx from "clsx";
import { Links } from "./Links";
import { isMobile } from "react-device-detect";
import ClapOut from "../assets/icons/ClapOut.jsx";

const Card = ({ id, name, description, img_url, keywords, allResources }) => {
  const [isOpened, setIsOpened] = useState(false);

  console.log("isOpened : " + isOpened);
  console.log("isMobile : " + isMobile);

  return (
    <div
      key={id}
      className={clsx(
        "w-full min-w-[360px]",
        "flex-col gap-0 rounded-[10px]",
        isOpened ? "py-10" : "pt-10 pb-0",
        "px-8",
        "bg-white-card dark:bg-dt-background-card"
      )}
    >
      <div
        id="top_wrapper"
        className="flex flex-col
      content-between space-between min-h-[300px] gap-[10px]"
      >
        <h3 className="text-base font-semibold">{name}</h3>
        <p
          className={clsx(
            !isOpened &&
              "text-ellipsis whitespace-normal line-clamp-2 overflow-hidden",
            "mb-4"
          )}
        >
          {description}
        </p>
        <div className="w-full flex flex-row-reverse pr-3">
          <ClapOut
            color={"rgba(37, 37, 37, 1)"}
            colorOnHover={"rgba(0, 85, 212, 1)"}
            fillOnHover={"rgba(192, 208, 234, 1)"}
            isHover={true}
          />
        </div>
      </div>



      <div id="bottom_frame" className={clsx("hidden")}>
        {" "}
        {/*isOpened?"flex":"hidden"*/}
        {Links(allResources, isOpened, id)}
      </div>
    </div>
  );
};

export default Card;
