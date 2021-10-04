import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
      <li className="nav-item">
        <NavLink
          className="nav-link text-white ms-3 text-center rounded-2"
          activeStyle={{ background: "#ffffff25" }}
          aria-current="page"
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link text-white ms-3 text-center rounded-2"
          activeStyle={{ background: "#ffffff25" }}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link text-white ms-3 text-center rounded-2"
          activeStyle={{ background: "#ffffff25" }}
          to="/courses"
        >
          Courses
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link text-white ms-3 text-center rounded-2"
          activeStyle={{ background: "#ffffff25" }}
          to="/teachers"
        >
          Teachers
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
