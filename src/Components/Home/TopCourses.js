import React from "react";
import { NavLink } from "react-router-dom";
import Course from "../Courses/Course";
import useCourses from "../Hooks/useCourses";

const TopCourses = () => {
  const courses = useCourses();
  let TopCourses = courses ? courses.slice(0, 4) : [];

  return (
    <section className="mb-5" style={{ marginTop: "120px" }}>
      <div className="container">
        <div className="text-center">
          <h3 className="text-center mb-5 d-inline-block heading">
            <i className="fas fa-th-large text-primary"></i>{" "}
            <span className="text-dark">Top Courses</span>
          </h3>
        </div>
        <div className="row g-3">
          {TopCourses.map((course) => (
            <Course course={course} key={course.id} />
          ))}
        </div>
        <div className="text-center mt-5">
          <NavLink
            to="/courses"
            className="py-2 px-4 text-decoration-none text-primary border border-1 border-primary rounded-2 my-outline-btn"
            style={{ fontWeight: 600 }}
          >
            <i className="far fa-arrow-alt-circle-right"></i> Courses
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
