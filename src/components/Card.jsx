import { useState } from "react";
import clsx from "clsx";
import { Links } from "./Links";
import Keywords from "./Keywords.jsx";
import ClapOut from "../assets/icons/ClapOut.jsx";

const Card = ({ id, name, description, keywords, resources, cardKey }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div
      key={"CardKey/"+cardKey}
      className={clsx(
        "card",
        "w-full",
        "flex-col gap-0 rounded-sm dark:rounded-lg",
        isOpened ? "h-auto py-10" : "min-h-64 max-h-96 pt-10 pb-0",
        "px-8",
        "bg-white-card dark:bg-dt-background-card",
        "relative",
      )}
      onClick={()=>{isOpened?setIsOpened(false):setIsOpened(true)}}
    >
      <div
        key={"topWrapper/"+id}
        className="flex flex-col justify-start gap-[10px] mb-10"
      >
        <h3 className="text-base font-semibold mb-2">{name}</h3>
        <p
          className={clsx(
            !isOpened &&
              "text-ellipsis whitespace-normal line-clamp-2 overflow-hidden",
            "mb-4"
          )}
        >
          {description}
        </p>
        <Keywords keywords={keywords} entryId={id}/>
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
      <div key={"bottomFrame/"+id} className={clsx("mb-2",isOpened ? "block" : "hidden")}>
        {Links(resources, isOpened, id)}
      </div>
    </div>
  );
};

export default Card;
