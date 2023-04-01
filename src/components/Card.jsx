import { useState } from "react";
import Link from "./Link";

//width should grow breakpoint: 360px * 2 + margin-x + gap
const Card = ({ id, ngo_name, ngo_description, img_url, resources }) => {
  const [imgIsHidden, setImgIsHidden] = useState(false);
  console.log(imgIsHidden);

  return (
    <div
      key={id}
      onMouseEnter={() => {
        setImgIsHidden(true);
      }}
      onMouseLeave={() => {
        setImgIsHidden(false);
      }}
      className="h-[480px] min-w-[360px] bg-white-card text-typo text-sm font-light card-text p-[1px] hover:p-0 flex flex-col content-between border-none hover:border-solid border-interactive-hover border-[1px] hover:shadow-transparent"
    >
      <div id="top" className="flex grow flex-col py-10 px-7 gap-5">
        <h3 className="text-base font-semibold">{ngo_name}</h3>
        <p>{ngo_description}</p>
      </div>

      <div id="bottom_frame" className="h-[250px] flex flex-row">
        {imgIsHidden && (<div
          id="links"
          className="px-[26px] pt-[26px] pb-7 flex flex-col justify-end gap-2 w-full z-99"
        >
          {resources
            ? resources.map((element) => {
                return <Link {...element} />;
              })
            : {}}
        </div>)}
        {!imgIsHidden && (
          <img
            src={img_url}
            alt=""
            className="object-cover place-self-end z-99"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
