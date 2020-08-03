// 1. Author: Sahil Fruitwala - B00844489
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
            We are RentalVista, we want to remove trouble people face when they try to find new place for rent. To find a place of our choice is difficult. We want to solve this problem, we want to help the people and wanted to give them a solution which get rid of <s style={{color: "#999999"}}>not all</s> some problems. We are trying daily our best to give you better solutions.
            </span>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-2">
        <h3 className="text-center">Meet Our Team</h3>
        <div className="row text-center">
          <div className="col-12 col-lg-3">
            <img src={UserImage} alt="Profile" className="custom-team-image" />
            <br />
            <p className="mt-2">Sahil Fruitwala<br/>Fullstack Developer</p>
          </div>
          <div className="col-12 col-lg-3">
            <img src={UserImage} alt="Profile" className="custom-team-image" />
            <br />
            <p className="mt-2">Amogh Adithya Bangalore<br/>Fullstack Developer</p>
          </div>
          <div className="col-12 col-lg-3">
            <img src={UserImage} alt="Profile" className="custom-team-image" />
            <br />
            <p className="mt-2">John Doe</p>
            <p className="mt-1"></p>
          </div>
          <div className="col-12 col-lg-3">
            <img src={UserImage} alt="Profile" className="custom-team-image" />
            <br />
            <p className="mt-2">Jane Doe</p>
            <p className="mt-1"></p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 col-lg-6">
            <img src={UserImage} alt="Profile" className="custom-team-image" />
            <br />
            <p className="mt-2">John Doe</p>
            <p className="mt-1"></p>
          </div>
          <div className="col-12 col-lg-6">
            <img src={UserImage} alt="Profile" className="custom-team-image" />
            <br />
            <p className="mt-2">Jane Doe</p>
            <p className="mt-1"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
