import React from "react";
import { NavLink } from "react-router-dom";

const ActionBtn = (props) => {
  return (
    <NavLink to="/courses" className="my-btn" style={{ fontWeight: 600 }}>
      <i className="far fa-arrow-alt-circle-right"></i> {props.children}
    </NavLink>
  );
};

export default ActionBtn;
