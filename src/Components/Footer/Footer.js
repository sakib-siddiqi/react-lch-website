import React from "react";
import Menu from "../Header/Menu";
import Contacts from "./Contacts";
import "./footer.css";
// =========================
// =======footer==========
// =========================
const Footer = () => {
  return (
    <footer className="py-5 bg-dark sticky-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <h1 className="fw-bold fst-italic text-light">LCH</h1>
            <div className="text-light">Learn Code from Home</div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Menu />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Contacts />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
