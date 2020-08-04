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
        <p>Provide solutions to find houses of your desire.</p>
        <div className="row root-info">
          <div className="col-12 col-lg-6 about-illustration">
            <img src={CabinImage} alt="house" />
          </div>
          <div className="col-12 col-lg-6 about-information">
            <h3>Our Mission</h3>
            <span>
            We at RentalVista, want to make it easier for people to find new places to rent. 
            Our mission is to continuously understand our user needs and grow individual profiles 
            that will help them find the best places for them to rent, or grow their business by
            allowing them to post rooms rentals for other users to join.
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
            <p className="mt-2">Amogh Adithya Bangalore<br/>Backend Developer</p>
          </div>
          <div className="col-12 col-lg-3">
            <img src={UserImage} alt="Profile" className="custom-team-image" />
            <br />
            <p className="mt-2">Naitik Prajapati<br/>Designer and Integrator</p>
            <p className="mt-1"></p>
          </div>
          <div className="col-12 col-lg-3">
            <img src={UserImage} alt="Profile" className="custom-team-image" />
            <br />
            <p className="mt-2">Gaurav Anand<br/>Software Developer</p>
            <p className="mt-1"></p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 col-lg-6">
            <img src={UserImage} alt="Profile" className="custom-team-image" />
            <br />
            <p className="mt-2">Harshitha M S<br/>Software Developer</p>
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
