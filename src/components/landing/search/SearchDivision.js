// 1. Author: Sahil Fruitwala - B00844489
import React, { useState } from "react";

import "./SearchDivision.css";

import logo from "../../../assets/images/logo-dark.svg";
import illustration from "../../../assets/images/find-home.svg";

function SearchDivision() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6 search-root">
          <img src={logo} alt="logo" />
          <h4>Find a house of your choice.</h4>
        </div>
        <div className="co-12 col-lg-6 info-root">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default SearchDivision;
