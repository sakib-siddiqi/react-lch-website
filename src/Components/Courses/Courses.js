import React from "react";
import useCourses from "../Hooks/useCourses";
import Course from "./Course";

const Courses = () => {
  const courses = useCourses();
  return (
    <section className="my-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-center mb-5 d-inline-block heading">
            <i className="fas fa-th text-primary"></i>
            {"  "}
            <span className="text-dark fw-medium">
              {courses?.length} Courses
            </span>
          </h3>
        </div>
        {/* courses */}
        <div className="row g-4">
          {courses?.map((course) => (
            <Course course={course} key={course.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
