import React from "react";
import "./teacher.css";
const Teacher = (props) => {
  const { teacher, teacher_img } = props.teacher;
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-3">
      <article className="rounded-3 pe-3 ps-2 py-2 fw-bold teacher">
        <img
          src={`./Images/Teachers/${teacher_img}.jpg`}
          id="teachersImg"
          className="me-3"
          alt={teacher}
        />
        {"   "}
        <span className="d-inline-block h5 text-primary">{teacher}</span>
      </article>
    </div>
  );
};

export default Teacher;
