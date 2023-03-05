// import clsx from "clsx";

function Button(props) {
  return (
    <button
      onClick={props.function}
      className={
        "text-typo-default hover:text-white bg-interactive hover:bg-interactive-hover text-xl font-[400] leading-[26px] flex flex-row justify-center items-center content-center py-4 px-14 rounded-[10px] shadow-transparent"
      }
    >
      {props.label}
    </button>
  );
}

export default Button;
