// 1. Author: Sahil Fruitwala - B00844489
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
            RentalVista offers a variety of options to search your perfect new 
            room to rent across locations in Canada. Start now by registering 
            with us and posting your room for rent as an owner or viewing available 
            rooms across Canada as a customer.
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
            We offer a majority of free services at RentalVista for users to view available rooms,
            post their own rooms, schedule appointments, create blogs, manage their postings and more.
            We offer a low-cost premium service to advertise your posting and promote it at the top sections for 
            viewers to see first. 
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
            Our FAQ section will help you answer common questions and 
            contact details for support team is present in the "Contact Us" 
            section where you can submit your email, query and our support 
            team will respond to you within 24 hrs.
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
            You can start the renting process by creating an account with us
            and selecting the houses section to view available rooms. The room
            details are available for your selection and an option to schedule
            an appointment with the owner.
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetailsDivision;
