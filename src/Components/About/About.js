import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="my-5">
      <div className="header container">
        <div className="row g-5">
          {/* Meet Our teachers  text*/}
          <div className="col-12 col-sm-12 col-md-6 text-box-center">
            <p className="text-dark">All you need to know about !</p>
            <h1 className="text-primary fst-italic fw-bold">LCH</h1>
            <p className="text-dr-secondary w-75 text-justify p-3 bg-lt-secondary text-primary rounded-2 mb-4 lh">
              We are a developer team . We teach programming at low cost. We
              have more thene 2000k students.
              <p>
                We teach programming for minimum of cost. We have Worlds most
                populer programmer in our tea.
              </p>
            </p>

            <NavLink
              to="/courses"
              className="my-btn"
              style={{ fontWeight: 600 }}
            >
              <i className="far fa-arrow-alt-circle-right"></i> Courses
            </NavLink>
          </div>
          {/* Meet Our teachers  text*/}
          <div className="col-12 col-sm-12 col-md-6">
            <img
              src="./images/404_&_About_images/about_img.svg"
              alt="teachers page"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
