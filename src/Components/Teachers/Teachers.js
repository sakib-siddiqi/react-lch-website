import React from "react";
import { NavLink } from "react-router-dom";
import useCourses from "../Hooks/useCourses";
import Teacher from "./Teacher";
const Teachers = () => {
  const courses = useCourses();
  return (
    <>
      <section className="my-5">
        <div className="header container">
          <div className="row g-5">
            {/* Meet Our teachers  text*/}
            <div className="col-12 col-sm-12 col-md-6 text-box-center">
              <h1 className="text-primary">MEET !</h1>
              <h3 className="text-dark">OUR TEACHERS</h3>
              <p className="text-dr-secondary">Wanna know more ?</p>
            </div>
            {/* Meet Our teachers  text*/}
            <div className="col-12 col-sm-12 col-md-6">
              <img
                src="./images/404_&_About_images/meet_team.png"
                alt="teachers page"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="text-center mt-5">
        <NavLink
          to="/courses"
          className="py-2 px-4 text-decoration-none text-primary border border-1 border-primary rounded-2 my-outline-btn"
          style={{ fontWeight: 600 }}
        >
          <i className="far fa-arrow-alt-circle-right"></i> Courses
        </NavLink>
      </div>
      <section id="teachers" className="my-5">
        <div className="container">
          <div className="row g-4">
            {courses?.map((teacherDetails) => (
              <Teacher teacher={teacherDetails} key={teacherDetails.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teachers;
