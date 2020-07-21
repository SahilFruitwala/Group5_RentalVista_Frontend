import React from "react";

import CabinImage from "../../assets/images/about-us.svg";
import UserImage from "../../assets/images/user.svg";
import "./index.css";

function About() {

  return (
    <>
      <div className="jumbotron text-center">
        <h3>
          We Are <strong>RentalVista</strong>
        </h3>
        <p>Provide a solution to find a house of your desire.</p>
        <div className="row root-info">
          <div className="col-12 col-lg-6 about-illustration">
            <img src={CabinImage} alt="house" />
          </div>
          <div className="col-12 col-lg-6 about-information">
            <h3>Our Mission</h3>
            <span>
              Enim et irure excepteur eu labore eiusmod deserunt esse amet. Ad
              id sit esse minim veniam duis nostrud enim ullamco do ex laboris
              consectetur. Aliquip voluptate aliquip elit id ipsum nostrud non
              nostrud ipsum non sunt. Quis dolore sint non veniam veniam velit
              esse. Irure non cupidatat Lorem ut reprehenderit in non.
            </span>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-2">
        <h3 className="text-center">Meet Our Team</h3>
        <div className="row text-center">
          <div className="col-12 col-lg-3">
            <img
              src={UserImage}
              alt="Profile"
              className="custom-team-image"
            />
            <br />
            <p className="mt-2">John Doe</p>
          </div>
          <div className="col-12 col-lg-3">
            <img
              src={UserImage}
              alt="Profile"
              className="custom-team-image"
            />
            <br />
            <p className="mt-2">Jane Doe</p>
          </div>
          <div className="col-12 col-lg-3">
            <img
              src={UserImage}
              alt="Profile"
              className="custom-team-image"
            />
            <br />
            <p className="mt-2">John Doe</p>
          </div>
          <div className="col-12 col-lg-3">
            <img
              src={UserImage}
              alt="Profile"
              className="custom-team-image"
            />
            <br />
            <p className="mt-2">Jane Doe</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 col-lg-6">
            <img
              src={UserImage}
              alt="Profile"
              className="custom-team-image"
            />
            <br />
            <p className="mt-2">John Doe</p>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src={UserImage}
              alt="Profile"
              className="custom-team-image"
            />
            <br />
            <p className="mt-2">Jane Doe</p>
          </div>
          </div>
      </div>
    </>
  );
}

export default About;
