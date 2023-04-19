import NavLink from "./NavBarElements";

function NavBar(props) {
  return (
    <>
      <div className="bg-white dark:bg-dt-background z-50 px-2 ssm-px-8 sm:px-12 md:px-14 lg:px-20 xl:px-28 flex justify-between w-full fixed top-0 left-0 right-0">
        <div id="left_side_wrapper">
          <NavLink id="#link_splash" to="#splash" label="Welcome" />
          <NavLink id="#link_search" to="" label="Search" onClick={(e)=>{e.preventDefault()}}/>
          <NavLink id="#link_cards" to="#cards" label="Collection" />
          <NavLink to="/" label="About us" />
        </div>
        <div id="right_side_wrapper flex flex-row items-center">
          <NavLink to="/" label="Ru" language="true" hide="true" />
          <NavLink to="/" label="De" language="true" hide="true" />
          <NavLink to="/" label="En" language="true" hide="true" />
          <div
            id="toggle_theme_wrapper"
            className="h-full flex flex-col justify-center"
          >
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;