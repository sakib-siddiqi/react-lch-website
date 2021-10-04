import React from "react";
import { NavLink } from "react-router-dom";
import HomeImg from "./home_img.svg";
import TopCourses from "./TopCourses";
import "./home.css";
const Home = () => {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row g-5">
            {/* Home Texts */}
            <div className="col-12 col-sm-12 col-md-7 text-box-center">
              <h5 className="text-dark">Learn</h5>
              <h1 className="text-primary fw-bold">CODE</h1>
              <h3 className="text-dark mb-5">From Home</h3>
              <p className="text-dr-secondary m-0">Be an expart in Coding.</p>
              <p className="text-primary">#happyCoading</p>
              <NavLink
                to="/courses"
                className="my-btn"
                style={{ fontWeight: 600 }}
              >
                <i className="far fa-arrow-alt-circle-right"></i> Courses
              </NavLink>
            </div>
            {/* home img */}
            <div className="col-12 col-sm-12 col-md-5">
              <img src={HomeImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/*top 4 courses */}
      <TopCourses />
    </>
  );
};

export default Home;
