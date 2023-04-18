import clsx from "clsx";
import Bitcoin from "../assets/icons/Bitcoin";
import Creditcard from "../assets/icons/Creditcard";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Paypal from "../assets/icons/Paypal";
import Telegram from "../assets/icons/Telegram";
import Webpage from "../assets/icons/Webpage";
// import { useState } from "react";

//Type:
// {typeOfResourceNames: [{…}]

const Link = ({ id, url, typeOfResourceName, description }) => {

  const Icon = ({ typeOfResourceName }) => {
    if (typeOfResourceName === "Bitcoin") {
      return <Bitcoin />;
    }
    if (typeOfResourceName === "Credit card") {
      return <Creditcard />;
    }
    if (typeOfResourceName === "Facebook") {
      return <Facebook />;
    }
    if (typeOfResourceName === "Instagram") {
      return <Instagram />;
    }
    if (typeOfResourceName === "PayPal") {
      return <Paypal />;
    }
    if (typeOfResourceName === "Telegram") {
      return <Telegram />;
    }
    if (typeOfResourceName === "Webpage") {
      return <Webpage />;
    }
  };

  return (
    <div
      id="link_wrapper"
      key={id + "/" + typeOfResourceName}
      className="flex flex-row justify-between w-full py-2 h-[30px] border-none"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="flex flex-row justify-between w-full py-1 h-[34px] my-1 border-none cursor-pointer parent"
      >
        <div id="icon_wrapper" className="w-6 h-6 child">
          <Icon typeOfResourceName={typeOfResourceName} />
        </div>
        <div className="mt-1 text-base hover:underline child">{description}</div>
      </a>
    </div>
  );
};

const Links = (allResources, hidden, cardId) => {
  return <LinksDiv allResources={allResources} hidden={false} cardId={"00000000"}/>
};

const LinksDiv = ({allResources, hidden, cardId: key}) => {
  console.log(JSON.stringify(allResources))
  return (
    <div
      id="links"
      key={"links of " + key}
      className={clsx("pl-[26px] pr-10 pt-[26px] pb-9 flex-col justify-end gap-4 w-full z-99", (!hidden ? "flex" : "hidden"))}
    >
      {(allResources).map((element) => {
          console.log("this should become a link" + element);
          return <Link {...element} />;
        })}
    </div>
  );
}

export { Links, LinksDiv };
