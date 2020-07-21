import React, { useState } from "react";
import {
  Container,
  Jumbotron,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Blog from "./blogs/Blog";
import "./index.css";
import Model from "../../utilities/TestModal";

function BlogPage() {
  
  const [email, setEmail] = useState("");
  const [error, setErrorClass] = useState({display: "none"});
  const [showModel, setShowModel] = useState(false);

  const handleSubmitKey = (e) => {
    if(e.keyCode === 13 || e.which === 13){
      handleSubmitButton()
    }
    setEmail(e.target.value);
  };

  const handleSubmitButton = () => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
      setEmail("")
      setShowModel(showModel ? false : true);
    }
    else {
      setErrorClass({})
    }
  };

  return (
    <React.Fragment>
      <Jumbotron fluid>
        <Container>
          <h1>Blog</h1>
          <p>Learn about new place, food and culture.</p>
          
          <InputGroup className="mb-3">
            <FormControl
              value={email ? email : ""}
              placeholder="Email for subscribtion..."
              aria-label="Email for subscribtion..."
              aria-describedby="email-subscription"
              onChange={handleSubmitKey}
              onKeyUp={handleSubmitKey}
            />
            <InputGroup.Text id="email-subscription" onClick={handleSubmitButton}>
              <FontAwesomeIcon icon="envelope" color="#F7A231" size="lg"/>
            </InputGroup.Text>
          </InputGroup>
          <Form.Text style={error}><FontAwesomeIcon icon="exclamation-circle" color="#ff0000" /> Enter Valid Email!</Form.Text>
        </Container>
      </Jumbotron>
      <Blog city={""} />
      {showModel && (
        <Model
          message={{
            show: true,
            title: "Success!",
            body: "Email Subscription is successful!",
          }}
          renderComponent={handleSubmitButton}
        />
      )}
    </React.Fragment>
  );
}

export default BlogPage;

/*
 * code below is for taking city name as input
 */

// {<InputGroup className="justify-content-sm-start m-0 p-0">
//   <FormControl
//     value={city ? city : null}
//     placeholder="Enter City..."
//     aria-label="Enter City..."
//     onChange={(e) => setCity(e.target.value)}
//   />
//   <InputGroup.Append>
//     <Button>
//       <FontAwesomeIcon icon="search" />
//     </Button>
//   </InputGroup.Append>
// </InputGroup>;}
