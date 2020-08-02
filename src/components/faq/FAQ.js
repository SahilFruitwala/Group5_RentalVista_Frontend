// Author2: Sahil Fruitwala - B00844489import React from "react";
import React from "react";
import FAQImage from "../../assets/images/faq.svg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function FAQ() {

  return (
    <>
      <div className="imageSet">
        <img src={FAQImage} className="img-fluid" alt="FAQ Image" />
      </div>
      <Container className="position m-2">
        <h4>1. What are pricing?</h4>
        <p className="styleanswer">
          We are not charging the people who wants to see the available rooms
          and wants to post their rooms. But we have some charges for people we
          wants to promote their rooms.
        </p>
        <h4>2. How to recover password?</h4>
        <p className="styleanswer">
          To recover password go to the <Link to="/login">Login</Link> page and
          click on forgot password link. Enter email id with you registered
          earlier, if email exist new password will be sent to your mail.
        </p>
        <h4>3. How to post a room?</h4>
        <p className="styleanswer">
          To post a room, one need to either create an account or login first.
          After Login you can access Add post from navigation bar. You need to
          feel some details to post a room.
        </p>
        <h4>4. How to check pets are allowed or not in a room?</h4>
        <p className="styleanswer">
          To check if pets are allowed or not, one can either use filers or can
          go to the specific room and check there as well.
        </p>
      </Container>
    </>
  );
}

export default FAQ;
