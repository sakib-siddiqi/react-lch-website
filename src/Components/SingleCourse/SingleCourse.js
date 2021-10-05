import React from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import ActionBtn from "../Home/ActionBtn";
import useCourses from "../Hooks/useCourses";
import Teacher from "../Teachers/Teacher";

const SingleCourse = () => {
  const courses = useCourses();
  const { id } = useParams();
  let course = courses && courses[id - 1];
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row gy-5 flex-column-reverse flex-md-row">
            {/* Home Texts */}
            <div className="col-12 col-sm-12 col-md-7 text-box-center">
              <h1 className="text-primary fw-bold mb-4">{course?.title}</h1>
              <h3 className="text-primary mb-2 price fw-bold bg-lt-secondary px-4 py-2 rounded-3">
                $ {course?.price}
              </h3>

              {/* rating */}
              <Rating
                readonly
                initialRating={course?.ratting}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                style={{ color: "gold" }}
                className="mb-5"
              ></Rating>

              {/* teachers */}
              {course ? <Teacher teacher={course}></Teacher> : <></>}

              {/* enroll btn */}
              <NavLink
                to="/orders"
                className="my-btn mt-4"
                style={{ fontWeight: 600 }}
              >
                <i className="far fa-shopping-cart"></i>
                {"  "}
                Enroll Now
              </NavLink>
            </div>
            {/* home img */}
            <div className="col-12 col-sm-12 col-md-5">
              <img
                src={`/Images/Courses_images/${course?.cover}.png`}
                alt={course?.title}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="text-center mt-5">
            <ActionBtn>All Courses</ActionBtn>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleCourse;
