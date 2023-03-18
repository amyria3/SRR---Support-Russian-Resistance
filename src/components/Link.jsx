const Link = ({ link_id, link_name, link_url, link_keyword }) => {
  return (
    <div
      id="link_wrapper"
      key={link_id}
      className="flex flex-col w-full justify-between border-none hover:border-solid border-interactive-hover border-[1px]"
    >
      <div id="icon_wrapper" className="w-6 h-6"></div>
      {link_keyword === "Telegram" &&
        {
          /*icon goes here*/
        }}
      <div id="link_wrapper">
        <a href={link_url}>{link_name}</a>
      </div>
    </div>
  );
};

export default Link