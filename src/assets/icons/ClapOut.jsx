import React from "react";
import { useState } from "react";

const Svg = () => {
  return (
    <svg
      width="30"
      height="8"
      viewBox="0 0 30 8"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}

    >
      <rect x="0" y="0" width="30" height="8" fill="transparent" />
      <path
        d="M4,0.5c1.933,0,3.5,1.567,3.5,3.5s-1.567,3.5-3.5,3.5S0.5,5.933,0.5,4S2.067,0.5,4,0.5zM15,0.5c1.933,0,3.5,1.567,3.5,3.5s-1.567,3.5-3.5,3.5S11.5,5.933,11.5,4S13.067,0.5,15,0.5zM26,0.5c1.933,0,3.5,1.567,3.5,3.5s-1.567,3.5-3.5,3.5s-3.5-1.567-3.5-3.5S24.067,0.5,26,0.5z"
        className="clapOutSvg"
      />
    </svg>
  );
};

const ClapOut = ({  setState, state }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={()=>{state?setState(false):setState(true)}}
      className="flex w-10 p-3 mr-2 justify-center items-center cursor-pointer svgClapOutWrapper"
    >
      <Svg isHover={isHover} />
    </div>
  );
};

export default ClapOut;
