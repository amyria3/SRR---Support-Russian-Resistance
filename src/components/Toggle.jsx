import clsx from "clsx";
import { themeSwitch } from "../../darkmode";

//This function takes as props:
//setDarkmodeFunction: a setFunction
//darkmodeIsOn: and a boolean that is to be set
//and calls this function onClick

export default function Toggle(props) {
  return (
    <div
      id="theme-toggle"
      className={clsx(
        "w-9 h-4 border-solid box-content border-[1px] bg-interactive dark:bg-none border-typo dark:border-dt-interactive rounded-[100px] flex",
        props.darkmode && "flex-row-reverse"
      )}
    >
      <button
        onClick={() => {
          themeSwitch(props.darkmode, props.darkModeToggleFunction);
        }}
        id="theme-toggle"
      >
        <div>
          <div className="h-[16px] w-[16px] border-solid box-border border-[1px] bg-yellow dark:bg-interactive dark:bg-card dark:bg-none border-typo dark:border-dt-interactive rounded-[100px]" />
        </div>
      </button>
    </div>
  );
}

export function themeSwitch() {
  if (document.documentElement.classList.contains("dark")) {
    console.log("we are here" + document.documentElement)
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    console.log("CLICK");
    console.log(localStorage);
    props.darkModeToggleFunction(true)
  }
  if (!document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    console.log("CLICK");
  }
}
