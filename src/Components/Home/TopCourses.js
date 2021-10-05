import React from "react";
import Course from "../Courses/Course";
import useCourses from "../Hooks/useCourses";
import ActionBtn from "./ActionBtn";

const TopCourses = () => {
  const courses = useCourses();
  let TopCourses = courses ? courses.slice(0, 4) : [];

  return (
    <section className="mb-5" style={{ marginTop: "120px" }}>
      <div className="container">
        <div className="text-center">
          <h3 className="text-center mb-5 d-inline-block heading">
            <i className="fas fa-th-large text-primary"></i>{" "}
            <span className="text-dark fw-medium">Top Courses</span>
          </h3>
        </div>
        <div className="row g-3">
          {TopCourses.map((course) => (
            <Course course={course} key={course.id} />
          ))}
        </div>
        <div className="text-center mt-5">
          <ActionBtn>See All Courses</ActionBtn>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
