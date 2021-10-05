import React from "react";
import ActionBtn from "../Home/ActionBtn";
import useCourses from "../Hooks/useCourses";
import Teacher from "./Teacher";
// =========================
// =======teachers==========
// =========================
const Teachers = () => {
  const courses = useCourses();
  return (
    <>
      <section className="my-5">
        <div className="header container">
          <div className="row">
            {/* Meet Our teachers  text*/}
            <div className="col-12 col-sm-12 col-md-6 text-box-center">
              <h1 className="text-primary fw-bold">MEET !</h1>
              <h3 className="text-dark fw-bold">OUR TEACHERS</h3>
              <p className="text-muted ">Wanna know more ?</p>
              <p className="text-dark w-75">
                We are 10 programmers . We teach programming and other tech
                skills..
                <span className="fw-bold h4 text-primary"> WOW !!! </span>
              </p>
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
        <ActionBtn>See Dreams</ActionBtn>
      </div>
      <section id="teachers" className="my-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
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
