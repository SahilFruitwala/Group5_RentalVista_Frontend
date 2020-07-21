import React from "react";

import Image404 from "../../assets/images/404.svg";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="row container-fluid">
      <div className="col-12 col-sm-8 col-md-8 col-lg-8">
        <img
          src={Image404}
          alt="404"
          class="img-fluid"
          style={{ height: "auto", width: "100%" }}
        />
      </div>
      <div
        className="col-12 offset-1 col-sm-3 col-md-3 col-lg-3 mt-5 mb-5 justify-content-center"
        style={{ height: "50vh"}}
      >
        <h3 style={{marginTop:"20vh"}}>Sorry This page is not exists!</h3>
        <span className="nav nav-pills nav-fill">
          <Link to="/house" class="nav-link active">
            Back to Home
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Page404;
