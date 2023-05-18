import clsx from "clsx";

function Button({onClick, label}) {
  return (
    <button
      onClick={onClick}
      className={
        clsx(
        "text-typo-default hover:text-white",
        "bg-interactive hover:bg-interactive-hover",
        "dark:hover:bg-interactive dark:hover:border-solid dark:hover:border-[1px] dark:hover:border-dt-interactive",
        "text-xl font-[200] leading-[26px]",
        "relative bottom-1 right-1 h-12",
        "flex flex-row justify-center items-center content-center py-4 px-8 w-80 rounded-md"
  )}
    >
      {label}
    </button>
  );
}

export default Button;
