import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer footer-root">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 justify-content-center">
            <h5>RentalVista Inc.</h5>
            <ul className="list-unstyled">
              <NavLink to="/blog"> <li>Blog</li> </NavLink>
              <NavLink to="/aboutus"><li>About Us</li></NavLink>
              <li>Developrs</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 justify-content-center">
            <h5>More</h5>
            <ul className="list-unstyled">
            <NavLink to="/faq"><li>FAQ</li></NavLink>
              <li>Privacy</li>
              <li>Terms of Services</li>
            </ul>
          </div>
          <div className="col-12 col-sm col-md-4 justify-content-center">
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon="phone" className="icon-button" />{" "}
                +1 (123)-456-7890
              </li>
              <li>
              <a href="mailto:confusion@food.net">
                <FontAwesomeIcon icon="envelope" className="icon-button" /> Drop
                a mail
                </a>
              </li>
              <address>
                <li>121 Halifax Street</li>
                <li>Halifax NS, Canada</li>
              </address>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} RentalVista Inc. | All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
