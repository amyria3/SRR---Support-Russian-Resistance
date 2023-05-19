import clsx from "clsx";

function Button({onClick, label}) {
  return (
    <button
      onClick={onClick}
      className={
        clsx(
        "button",
        "text-typo-default hover:text-dt-typo",
        "bg-interactive hover:bg-interactive-hover",
        "dark:hover:border-dt-interactive",
        "hover:border-solid hover:border-[1px]",
        "text-xl font-[200] leading-[26px]",
        "relative bottom-2 right-1 h-[50px]",
        "flex flex-row justify-center items-center content-center py-4 px-8 w-80 rounded-md"
  )}
    >
      {label}
    </button>
  );
}

export default Button;
