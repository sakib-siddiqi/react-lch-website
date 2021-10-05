import React from "react";
import Rocket from "../../svg_img/Rocket";
import ActionBtn from "../Home/ActionBtn";

const Orders = () => {
  return (
    <section>
      <div className="text-center container">
        <h3 className="text-primary bg-lt-secondary p-2 mb-5">Enrolled</h3>
        <Rocket />
        <div className="text-center mt-5">
          <ActionBtn>All Curses</ActionBtn>
        </div>
      </div>
    </section>
  );
};

export default Orders;
