import clsx from "clsx";//This function takes as props:
//setDarkmodeFunction: a setFunction
//darkmodeIsOn: and a boolean that is to be set
//and calls this function onClick

export default function Toggle(props) {
  return (
    <div
      id="theme-toggle"
      className={clsx(
        "w-9 h-4 border-solid box-content border-[1px] bg-interactive hover:bg-interactive-hover dark:bg-none border-typo dark:border-dt-interactive rounded-[100px] flex cursor-pointer",
        props.aBoolean && "flex-row-reverse"
      )}
      onClick={() => {
        props.toggleFunction(props.aBoolean, props.setBoolean);
      }}
    >
      <button
        id="theme-toggle"
      >
        <div>
          <div className="h-[16px] w-[16px] border-solid box-border border-[1px] bg-yellow dark:bg-card dark:bg-none border-typo dark:border-dt-interactive rounded-[100px]" />
        </div>
      </button>
    </div>
  );
}