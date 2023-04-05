import clsx from "clsx";

function NavLink(props) {
  const language = props.language
  const hide = props.hide
  return (
    <div className={clsx("text-typo dark:text-dt-interactive bg-interactive dark:bg-dt-background text-base font-[300] leading-[18px] justify-center content-start underline tracking-[0.11em] w-[120px] h-7 box-border hover:box-border hover:border-[1px] hover:border-interactive-hover dark:border-dt-interactive hover:text-interactive-hover dark:hover:text-dt-interactive hover:shadow-transparent dark:hover:shadow-dt-transparent",
    (language === "true" ? "w-[38px]" : "w-[110px]"), (hide === "true" ? "hidden" : "inline-flex"))}>
     <a className="pb-3" href={props.to}>{props.label}</a>/
    </div>
  );
}

export default NavLink;