import Bitcoin from "./icons/Bitcoin";
import Creditcard from "./icons/Creditcard";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Paypal from "./icons/Paypal";
import Telegram from "./icons/Telegram";
import Webpage from "./icons/Webpage";
// import { useState } from "react";

const Link = ({ id, link_keyword, link_url, link_text }) => {
  // const [hover, setHover] = useState(false)

  const Icon = ({ link_keyword }) => {
    if (link_keyword === "bitcoin") {
      return <Bitcoin />;
    }
    if (link_keyword === "creditcard") {
      return <Creditcard />;
    }
    if (link_keyword === "facebook") {
      return <Facebook />;
    }
    if (link_keyword === "instagram") {
      return <Instagram />;
    }
    if (link_keyword === "paypal") {
      return <Paypal />;
    }
    if (link_keyword === "telegram") {
      return <Telegram />;
    }
    if (link_keyword === "webpage") {
      return <Webpage />;
    }
  };

  return (
    <div id="link_wrapper" key={id}
    className="flex flex-row justify-between w-full py-1 h-[30px] border-none">
      <a
        href={link_url}
        className="flex flex-row justify-between w-full py-1 h-[30px] border-none cursor-pointer parent"
      >
        <div id="icon_wrapper" className="w-6 h-6 child">
          <Icon link_keyword={link_keyword} />
        </div>
        <div
          className="mt-1 hover:underline child"
        >
          {link_text}
        </div>
      </a>
    </div>
  );
};

export default Link;
