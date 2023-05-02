import clsx from "clsx";
import Crypto from "../assets/icons/Crypto";
import Creditcard from "../assets/icons/Creditcard";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Paypal from "../assets/icons/Paypal";
import Telegram from "../assets/icons/Telegram";
import Webpage from "../assets/icons/Webpage";

const Link = ({ id, url, resourceType, description }) => {

  const Icon = ({ resourceType }) => {
    if (resourceType === "Crypto") {
      return <Crypto />;
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
      class="link_wrapper"
      key={id + "/" + resourceType}
      className="w-full py-2 h-[30px] border-none"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="flex flex-row items-center w-full py-1 h-[34px] my-1 border-none cursor-pointer parent"
      >
        <div id="icon_wrapper" className="w-6 h-6 child">
          <Icon resourceType={resourceType} />
        </div>
        <div className={clsx("h-[1px] w-full bg-typo dark:bg-dt-typo child child ml-6 mr-3")}></div>
        <div className="text-base hover:underline child">{description? description : resourceType}</div>
      </a>
    </div>
  );
};

const Links = (linkedResources, hovered, cardId) => {
  return <LinksDiv linkedResources={linkedResources} hovered={hovered} cardId={cardId}/>
};

const LinksDiv = ({linkedResources, hovered, cardId}) => {
  return (
    <div
      key={"links of " + cardId}
      className={clsx("pr-1 pb-3 flex-col justify-end gap-4 w-full z-99", (hovered ? "flex" : "hidden"))}
    >
      {(linkedResources).map((element) => {
          return <Link {...element} />;
        })}
    </div>
  );
}

export { Links, LinksDiv };
