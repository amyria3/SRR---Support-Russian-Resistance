import clsx from "clsx";

function NavLink(props) {
  const language = props.language
  return (
    <div className={clsx("text-typo text-base font-[300] leading-[18px] justify-center content-start underline ${}tracking-[0.11em] inline-flex w-[120px] h-7 bg-interactive box-border hover:box-border hover:border-[1px] hover:border-interactive-hover hover:text-interactive-hover hover:shadow-default",
    language === "true" ? "w-[38px]" : "w-[110px]")}>
      <a className="pb-3" href={props.to}>{props.label}</a>
    </div>
  );
}

export default NavLink;