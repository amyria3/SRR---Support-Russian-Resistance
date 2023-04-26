import clsx from "clsx";
import Bitcoin from "../assets/icons/Bitcoin";
import Creditcard from "../assets/icons/Creditcard";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Paypal from "../assets/icons/Paypal";
import Telegram from "../assets/icons/Telegram";
import Webpage from "../assets/icons/Webpage";

const Link = ({ id, url, resourceType, description }) => {

  const Icon = ({ resourceType }) => {
    if (resourceType === "Bitcoin") {
      return <Bitcoin />;
    }
    if (resourceType === "Credit card") {
      return <Creditcard />;
    }
    if (resourceType === "Facebook") {
      return <Facebook />;
    }
    if (resourceType === "Instagram") {
      return <Instagram />;
    }
    if (resourceType === "PayPal") {
      return <Paypal />;
    }
    if (resourceType === "Telegram") {
      return <Telegram />;
    }
    if (resourceType === "Webpage") {
      return <Webpage />;
    }
  };

  return (
    <div
      id="link_wrapper"
      key={id + "/" + resourceType}
      className="flex flex-row justify-between w-full py-2 h-[30px] border-none"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="flex flex-row justify-between w-full py-1 h-[34px] my-1 border-none cursor-pointer parent"
      >
        <div id="icon_wrapper" className="w-6 h-6 child">
          <Icon resourceType={resourceType} />
        </div>
        <div className="mt-1 text-base hover:underline child">{description? description : resourceType}</div>
      </a>
    </div>
  );
};

const Links = (allResources, hovered, cardId) => {
  return <LinksDiv allResources={allResources} hovered={hovered} cardId={cardId}/>
};

const LinksDiv = ({allResources, hovered, cardId}) => {
  // console.log(JSON.stringify(allResources))
  return (
    <div
      key={"links of " + cardId}
      className={clsx("pl-[26px] pr-10 pt-[26px] pb-9 flex-col justify-end gap-4 w-full z-99", (hovered ? "flex" : "hidden"))}
    >
      {(allResources).map((element) => {
          // console.log("this should become a link" + element);
          return <Link {...element} />;
        })}
    </div>
  );
}

export { Links, LinksDiv };
