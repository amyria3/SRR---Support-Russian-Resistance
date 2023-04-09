import clsx from "clsx";
import Bitcoin from "./icons/Bitcoin";
import Creditcard from "./icons/Creditcard";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Paypal from "./icons/Paypal";
import Telegram from "./icons/Telegram";
import Webpage from "./icons/Webpage";
// import { useState } from "react";

const Link = ({ id, url, keyword, description }) => {

  console.log("rendering Link")
  // const [hover, setHover] = useState(false)

  const Icon = ({ keyword }) => {
    if (keyword === "bitcoin") {
      return <Bitcoin />;
    }
    if (keyword === "creditcard") {
      return <Creditcard />;
    }
    if (keyword === "facebook") {
      return <Facebook />;
    }
    if (keyword === "instagram") {
      return <Instagram />;
    }
    if (keyword === "paypal") {
      return <Paypal />;
    }
    if (keyword === "telegram") {
      return <Telegram />;
    }
    if (keyword === "webpage") {
      return <Webpage />;
    }
  };

  return (
    <div
      id="link_wrapper"
      key={id}
      className="flex flex-row justify-between w-full py-2 h-[30px] border-none"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="flex flex-row justify-between w-full py-1 h-[34px] my-1 border-none cursor-pointer parent"
      >
        <div id="icon_wrapper" className="w-6 h-6 child">
          <Icon keyword={keyword} />
        </div>
        <div className="mt-1 text-base hover:underline child">{description}</div>
      </a>
    </div>
  );
};

const Links = (resources, hidden, cardId) => {
  return <LinksDiv resources={resources} hidden={false} cardId={"00000000"}/>
};

const LinksDiv = ({resources, hidden, cardId}) => {
  console.log(resources)
  return (
    <div
      id="links"
      key={"links of " + cardId}
      className={clsx("pl-[26px] pr-10 pt-[26px] pb-9 flex-col justify-end gap-4 w-full z-99", (!hidden ? "flex" : "hidden"))}
    >
      {(resources).map((element) => {
          console.log("this should become a link" + element);
          return <Link {...element} />;
        })}
    </div>
  );
}

export { Links, LinksDiv };
