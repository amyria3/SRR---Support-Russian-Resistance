import clsx from "clsx";
import Crypto from "../assets/icons/Crypto";
import Creditcard from "../assets/icons/Creditcard";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Paypal from "../assets/icons/Paypal";
import Telegram from "../assets/icons/Telegram";
import Webpage from "../assets/icons/Webpage";
import YouTube from "../assets/icons/YouTube";
import Apple from "../assets/icons/Apple";

//consists of Icon, line, link, linkDivKey will be passed as prop, added to "LinkWrapper/" => key
const Link = ({ linkDivKey, url, description, usedTags }) => {
  const firstTag = usedTags[0]?.name;

  const Icon = ({ firstTag }) => {
    if (firstTag === "Crypto") {
      return <Crypto />;
    }
    if (firstTag === "Credit card") {
      return <Creditcard />;
    }
    if (firstTag === "Facebook") {
      return <Facebook />;
    }
    if (firstTag === "Instagram") {
      return <Instagram />;
    }
    if (firstTag === "PayPal") {
      return <Paypal />;
    }
    if (firstTag === "Telegram") {
      return <Telegram />;
    }
    if (firstTag === "Webpage") {
      return <Webpage />;
    }
    if (firstTag === "YouTube") {
      return <YouTube />;
    }
    if (firstTag === "ApplePay") {
      return <Apple />;
    }
  };

  return (
    <div
      key={"LinkWrapper/"+linkDivKey}
      className="link_wrapper w-full border-none rounded-md hover:bg-interactive-week"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="link_wrapper_a flex flex-row items-center py-3 px-6
        rounded-md cursor-pointer border-none parent"
      >
        <div key={"firstDiv/"+linkDivKey} className="icon_wrapper w-6 h-6 child">
          <Icon firstTag={firstTag} />
        </div>
        <div
          key={"secondDiv"+linkDivKey}
          className={clsx(
            "line h-[1px] flex-grow bg-typo dark:bg-dt-typo ml-8 mr-7 mt-1"
          )}
        ></div>
        <div key={"thirdDiv"+linkDivKey} className="text-base hover:underline child">
          {description ? description : firstTag}
        </div>
      </a>
    </div>
  );
};

const Links = (resources, hovered, cardId) => {
  return (
    <LinksDiv
      linksDivKey={"LinksDiv/"+cardId}
      resources={resources}
      hovered={hovered}
      cardId={cardId}
    />
  );
};

const LinksDiv = ({ resources, hovered, linksDivKey }) => {
  return (
    <div
      key={linksDivKey}
      className={clsx(
        "pr-1 pb-3 flex-col justify-end gap-4 w-full z-99",
        hovered ? "flex" : "hidden"
      )}
    >
      {resources &&
        resources.map((element) => {
          const { id, url, description, usedTags } = element;
          return (
            <Link
              linkDivKey={"LinkId/" + id}
              url={url}
              description={description}
              usedTags={usedTags}
            />
          );
        })}
    </div>
  );
};

export { Links };