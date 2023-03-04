import NavLink from "./NavBarElements";

function NavBar() {
  return (
    <>
      <div className="mt-0 ml-0 mr-0 w-full px-8 pt-7 pb-6 flex justify-between">
        <div id="left_side_wrapper">
          <NavLink to="/" label="Welcome"/>
          <NavLink to="/" label="Search"/>
          <NavLink to="/" label="Collection"/>
          <NavLink to="/" label="About us"/>
        </div>
        <div id="right_side_wrapper">
          <NavLink to="/" label="Ru" language="true"/>
          <NavLink to="/" label="De" language="true"/>
          <NavLink to="/" label="En" language="true"/>
          <div id="toggle_theme_wrapper"></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
