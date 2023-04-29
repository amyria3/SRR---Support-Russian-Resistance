import { useState } from "react";
import clsx from "clsx";
import { Links } from "./Links";
import { isMobile } from "react-device-detect";
import Keywords from "./Keywords.jsx";
import ClapOut from "../assets/icons/ClapOut.jsx";

const Card = ({ id, name, description, allLinkedKeywords, allResources }) => {
  // console.log("RENDERING CARD : ", " id : ", id, " name : ", name, " allLinkedKeywords : ", JSON.stringify(allLinkedKeywords))

  const [isOpened, setIsOpened] = useState(false);

  console.log("isOpened : " + isOpened);
  console.log("isMobile : " + isMobile);

  return (
    <div
      key={id}
      className={clsx(
        "w-full min-w-[260px] max-w-[360px]",
        "flex-col gap-0 rounded-[10px]",
        isOpened ? "h-auto py-10" : "min-h-[240px] max-h-[340px] pt-10 pb-0",
        "px-8",
        "bg-white-card dark:bg-dt-background-card",
        "relative",
        "grow-0"
      )}
    >
      <div
        id="top_wrapper"
        className="flex flex-col justify-start gap-[10px] mb-10"
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
        <Keywords keywords={allLinkedKeywords} entryId={id} />
      </div>
      <div
        key={"clapWrapper/" + id}
        className={clsx(
          !isOpened ? "absolute bottom-0" : "relative bottom-4",
          "w-full flex flex-row-reverse", //calculate w-100 - padding instead
          isOpened ? "mt-6 mb-4" : "pr-16 mb-6"
        )}
      >
        <ClapOut
          color={"rgba(37, 37, 37, 1)"}
          colorOnHover={"rgba(0, 85, 212, 1)"}
          fillOnHover={"rgba(192, 208, 234, 1)"}
          setState={setIsOpened}
          state={isOpened}
        />
      </div>
      <div id="bottom_frame" className={clsx(isOpened ? "block" : "hidden")}>
        {Links(allResources, isOpened, id)}
      </div>
    </div>
  );
};

export default Card;
