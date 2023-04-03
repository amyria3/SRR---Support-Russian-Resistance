import clsx from "clsx";
import { userTheme } from "../App";
import root from "../App";
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
          themeSwitch(props.darkmodeBoolean, props.darkModeToggleFunction);
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

export function themeSwitch(aBoolean, setBoolean) {
  console.log("theme is set to :  " + userTheme)
  //if darkmode === true
  if (aBoolean === true) {
    localStorage.setItem("theme", "light");
    setBoolean(false);
    root.classList.contains("dark") && root.classList.remove("dark");
  }
  //if darkmode === false
  if (aBoolean === false) {
    localStorage.setItem("theme", "dark");
    setBoolean(true);
    !root.classList.contains("dark") && root.classList.add("dark");
  } else {
    console.log("nothing works");
  }
}
