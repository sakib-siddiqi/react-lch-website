import React from "react";
import Rating from "react-rating";
import "./course.css";
const Course = (props) => {
  const { title, cover, teacher, ratting } = props.course;
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-3">
      <article className="card p-2 border-0 bg-primary" id="course">
        <img
          src={`./Images/Courses_images/${cover}.png`}
          className="card-img-top"
          alt=""
        ></img>
        <div className="card-body">
          <h5 className="mb-2 text-white">
            <i className="fas fa-hand-point-right"></i> {title}{" "}
            <i className="fas fa-hand-point-left"></i>
          </h5>
          <p className="mb-1 text-lt-secondary">{teacher}</p>
          <Rating
            readonly
            initialRating={ratting}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            style={{ color: "gold" }}
          ></Rating>
        </div>
      </article>
    </div>
  );
};

export default Course;