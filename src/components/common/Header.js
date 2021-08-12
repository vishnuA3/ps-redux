import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const activestyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activestyle} exact>
        HOME
      </NavLink>
      {"|"}
      <NavLink to="/courses" activeStyle={activestyle}>
        Courses
      </NavLink>
      {"|"}
      <NavLink to="/about" activeStyle={activestyle}>
        About
      </NavLink>
    </nav>
  );
};
export default Header;
