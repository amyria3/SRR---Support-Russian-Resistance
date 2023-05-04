import clsx from "clsx";
import Crypto from "../assets/icons/Crypto";
import Creditcard from "../assets/icons/Creditcard";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Paypal from "../assets/icons/Paypal";
import Telegram from "../assets/icons/Telegram";
import Webpage from "../assets/icons/Webpage";

//0: {id: '73ba5733-31b3-472b-97bc-8b06177843c0', url: 'https://www.instagram.com/novayagazeta/', description: '', ngoId: '3c3f1ac0-ed02-4123-b605-a84324d91d61'}
//1: {id: '6e3a868a-e268-42b8-ab9a-80e22a73d6e0', url: 'https://t.me/novaya_pishet', description: '', ngoId: '3c3f1ac0-ed02-4123-b605-a84324d91d61'}

const Link = ({ id, url, description, usedusedTag }) => {
  const firstTag = usedusedTag[0]?.name;

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
  };

  return (
    <div key={id} className="link_wrapper w-full py-2 h-[30px] border-none">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="flex flex-row items-center w-full py-1 h-[34px] my-1 border-none cursor-pointer parent"
      >
        <div id="icon_wrapper" className="w-6 h-6 child">
          <Icon firstTag={firstTag} />
        </div>
        <div
          className={clsx(
            "h-[1px] w-full bg-typo dark:bg-dt-typo child child ml-6 mr-3"
          )}
        ></div>
        <div className="text-base hover:underline child">
          {description ? description : firstTag}
        </div>
      </a>
    </div>
  );
};

const Links = (resources, hovered, cardId) => {
  return (
    <LinksDiv
      resources={resources}
      hovered={hovered}
      cardId={cardId}
    />
  );
};

const LinksDiv = ({ resources, hovered, cardId }) => {
  return (
    <div
      key={cardId}
      className={clsx(
        "pr-1 pb-3 flex-col justify-end gap-4 w-full z-99",
        hovered ? "flex" : "hidden"
      )}
    >
      {resources.map((element) => {
        const { id, url, description, usedusedTag } = element;
        return (
          <Link
            key={id}
            url={url}
            description={description}
            usedusedTag={usedusedTag}
          />
        );
      })}
    </div>
  );
};

export { Links, LinksDiv };
