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
        console.log("we entered the div");
        setImgIsHidden(true);
      }}
      onMouseLeave={() => {
        console.log("we entered the div");
        setImgIsHidden(false);
      }}
      className="h-[480px] min-w-[360px] bg-white-card text-typo p-0 flex flex-col content-between border-none hover:border-solid border-interactive-hover border-[1px] hover:shadow-transparent"
    >
      <div id="top" className="flex grow flex-col py-10 px-7 gap-5">
        <h3 className="text-base font-semibold">{ngo_name}</h3>
        <p className="text-sm font-light">{ngo_description}</p>
      </div>

      <div id="links" className="flex flex-row gap-2 w-full z-99">
        {resources? resources.map((element)=>{
            console.log("Line 30")
            return <Link {...element} />
          }):{}}
      </div>

      <div id="bottom_frame" className="h-[250px] flex place-self-end">
        {!imgIsHidden && (
          <img
            src={img_url}
            alt=""
            className="object-cover bottom-0 place-self-end z-99"
          />
        )}
      </div>
    </div>
  );
};

export default Card