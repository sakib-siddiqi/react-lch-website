import React from "react";
import TopCourses from "./TopCourses";
import "./home.css";
import HomeImg from "../../svg_img/HomeImg";
import ActionBtn from "./ActionBtn";
// =========================
// =======header==========
// =========================
const Home = () => {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row">
            {/* Home Texts */}
            <div className="col-12 col-sm-12 col-md-7 text-box-center">
              <h5 className="text-dark">Learn</h5>
              <h1 className="text-primary fw-bold">CODE</h1>
              <h3 className="text-dark mb-5">From Home</h3>
              <p className="text-dr-secondary">Be an expart in Coding.</p>
              <p className="text-primary mb-0">#happyCoading</p>
              <p className="text-primary">#LearnCode</p>
              <ActionBtn>Courses</ActionBtn>
            </div>
            {/* home img */}
            <div className="col-12 col-sm-12 col-md-5">
              <HomeImg />
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
