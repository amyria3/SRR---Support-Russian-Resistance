import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Links } from "./Links";
import Keywords from "./Keywords.jsx";
import ClapOut from "../assets/icons/ClapOut.jsx";

const Card = ({ id, name, description, allLinkedKeywords, allResources }) => {
  const [isOpened, setIsOpened] = useState(false);
  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(288);

  useEffect(() => {
    if (isOpened) {
      const height = cardRef.current.getBoundingClientRect().height;
      setCardHeight(height);
    }
  }, [isOpened]);

  return (
    <div
      key={id}
      ref={cardRef}
      className={clsx(
        "card",
        "w-full",
        "flex-col gap-0 rounded-[6px]",
        isOpened ? "h-auto py-10" : "h-72 pt-10 pb-0",
        "px-8",
        "bg-white-card dark:bg-dt-background-card",
        "relative",
        // !isOpened? "row-span-8" : ""
        // `row-span-${
        //   Math.ceil(cardHeight / 32)
        // }`
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
          {description + "height : " + cardHeight}
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
