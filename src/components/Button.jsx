// import clsx from "clsx";

function Button({onClick, label}) {
  return (
    <button
      onClick={onClick}
      className={
        "text-typo-default relative bottom-0 right-0 h-12 hover:text-white hover:mb-1 hover:mr-1 bg-interactive hover:bg-interactive-hover text-xl font-[200] leading-[26px] flex flex-row justify-center items-center content-center py-4 px-8 w-80 rounded-[10px] shadow-transparent hover:shadow-default"
      }
    >
      {label}
    </button>
  );
}

export default Button;
