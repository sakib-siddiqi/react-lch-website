import React from "react";

import Menu from "./Menu";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-sm">
      <div className="container">
        <div className="navbar-brand fw-bold fst-italic text-white">LCH</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
