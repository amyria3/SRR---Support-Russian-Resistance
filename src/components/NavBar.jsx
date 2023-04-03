import NavLink from "./NavBarElements";
import Toggle from "./Toggle";

function NavBar(props) {
  return (
    <>
      <div className="mt-0 ml-0 bg-white mr-0 w-full px-8 pt-6 pb-0 flex justify-between fixed top-0 left-0 right-0">
        <div id="left_side_wrapper">
          <NavLink to="/" label="Welcome"/>
          <NavLink to="/" label="Search"/>
          <NavLink to="/" label="Collection"/>
          <NavLink to="/" label="About us"/>
        </div>
        <div id="right_side_wrapper">
          <NavLink to="/" label="Ru" language="true" hide="true"/>
          <NavLink to="/" label="De" language="true" hide="true"/>
          <NavLink to="/" label="En" language="true" hide="true"/>
          <div id="toggle_theme_wrapper">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;