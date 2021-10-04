import React from "react";
import { NavLink } from "react-router-dom";
import "./notFound.css";
const NotFound = () => {
  return (
    <section className="my-5">
      <div className=" container">
        <div className="row">
          {/* Meet Our teachers  text*/}
          <div className="col-12 col-sm-12 col-md-6">
            <img
              src="./images/404_&_About_images/404_img.svg"
              alt="teachers page"
              className="img-fluid"
            />
          </div>
          {/* Meet Our teachers  text*/}
          <div className="col-12 col-sm-12 col-md-6 text-box-center align-items-center">
            <h1 className="text-primary  fw-bold text-center">!!!</h1>
            <h1 className="text-dark  fw-bold text-center Text404">404</h1>
            <p className="text-dr-secondary text-center">
              This page does not exist !!!
            </p>
            <NavLink to="/home" className="my-btn" style={{ fontWeight: 600 }}>
              <i className="fas fa-home"></i> GO to Home
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
