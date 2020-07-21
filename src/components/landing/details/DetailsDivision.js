import React from "react";
import moving from "../../../assets/images/moving.svg";
import budget from "../../../assets/images/budget.svg";
import confused from "../../../assets/images/confused.svg";
import rent from "../../../assets/images/rent.svg";

import "./DetailsDivision.css";

function DetailsDivision() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6 illustration order-last order-sm-last order-lg-first">
          <img src={moving} alt="Moving Person" />
        </div>
        <div className="col-12 col-lg-6 information order-first order-sm-first">
          <h3>Moving to new place?</h3>
          <span>
            Occaecat eu non culpa incididunt. Cupidatat excepteur cupidatat
            dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur. Occaecat eu non culpa incididunt. Cupidatat excepteur
            cupidatat dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur. Occaecat eu non culpa incididunt. Cupidatat excepteur
            cupidatat dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur.
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 illustration order-last order-sm-last order-md-last order-lg-last">
          <img src={budget} alt="Budget Problem" />
        </div>
        <div className=" col-12 col-lg-6 information order-first order-sm-first order-md-first order-lg-first">
          <h3>Worried about budget?</h3>
          <span className="">
            Occaecat eu non culpa incididunt. Cupidatat excepteur cupidatat
            dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur. Occaecat eu non culpa incididunt. Cupidatat excepteur
            cupidatat dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur. Occaecat eu non culpa incididunt. Cupidatat excepteur
            cupidatat dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur.
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 illustration order-last order-sm-last order-md-last order-lg-first">
          <img src={confused} alt="Budget Problem" />
        </div>
        <div className="col-12 col-lg-6 information order-first order-sm-first order-md-first order-lg-last">
          <h3>Confused between options?</h3>
          <span>
            Occaecat eu non culpa incididunt. Cupidatat excepteur cupidatat
            dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur. Occaecat eu non culpa incididunt. Cupidatat excepteur
            cupidatat dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur. Occaecat eu non culpa incididunt. Cupidatat excepteur
            cupidatat dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur.
          </span>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-lg-6 illustration order-last order-sm-last order-md-last order-lg-last">
          <img src={rent} alt="Rent a Room" />
        </div>
        <div className="col-12 col-lg-6 information order-first order-sm-first order-md-first order-lg-first">
          <h3>Want to rent apartment/room?</h3>
          <span>
            Occaecat eu non culpa incididunt. Cupidatat excepteur cupidatat
            dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur. Occaecat eu non culpa incididunt. Cupidatat excepteur
            cupidatat dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur. Occaecat eu non culpa incididunt. Cupidatat excepteur
            cupidatat dolor dolor in est enim officia. Non aliqua eu aliqua sint
            consectetur.
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetailsDivision;
