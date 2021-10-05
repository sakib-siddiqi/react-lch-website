import React from "react";
import { NavLink } from "react-router-dom";
import ActionBtnSVG from "../../svg_img/ActionBtnSVG";

const ActionBtn = (props) => {
  return (
    <NavLink to={`/courses/${props.id}`}>
      <div
        className="position-absolute bottom-0 end-0 me-2 mb-2"
        id="actionBtn"
      >
        <ActionBtnSVG />
      </div>
    </NavLink>
  );
};

export default ActionBtn;
