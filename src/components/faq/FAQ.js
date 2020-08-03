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
        <h4>1. What is the pricing for RentalVista?</h4>
        <p className="styleanswer">
          We are not charging users who want to view available rooms
          and post their rooms. But we do charge a 10$ fee for people we
          want to promote their room postings.
        </p>
        <h4>2. How do I recover my password?</h4>
        <p className="styleanswer">
          To recover your password go to the <Link to="/login">Login</Link> page and
          click on forgot password link. Enter your registered email id,
           if email exists, the new password will be sent to your mail.
        </p>
        <h4>3. How do I post a room?</h4>
        <p className="styleanswer">
          To post a room, you need to either create an account or login.
          After successful Login, you can access the Add post button from the navigation bar. 
          Once you fill the required details, you will be able to post the room.
        </p>
        <h4>4. How do I check if pets are allowed in a room?</h4>
        <p className="styleanswer">
          To check if pets are allowed, users can use the room filters or
          go to the specific room and view the details.
        </p>
        <h4>5. How do I check reviews and user ratings of the listed rooms?</h4>
        <p className="styleanswer">
          We have a blog forum where users add their experiences using the platform and specfic topics.
          Each room also has comments and ratings provided to help you make your decision.
        </p>
        <h4>6. How do I edit my profile details?</h4>
        <p className="styleanswer">
          You can navigate to the Profile section in the navigation bar, 
          select "Edit Profile" and then make the profile changes you want.
        </p>
        <h4>7. How do I delete a room posting that I do not require?</h4>
        <p className="styleanswer">
          You can navigate to the Profile section in the navigation bar, 
          select My Properties and then delete the property you do not require.
        </p>


      </Container>
    </>
  );
}

export default FAQ;
