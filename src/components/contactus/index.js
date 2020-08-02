// 1. Author: Sahil Fruitwala - B00844489
import React, { useState, useEffect } from "react";
import { Form, Button, Container, Jumbotron, Alert } from "react-bootstrap";
import axios from 'axios';

function Contact() {
  const [data, setData] = useState({ email: "", question: "" });
  const [disabled, setDisabled] = useState(true);
  const [show, setShow] = useState(false);
  const [error, setError] = useState({ email: "", question: "" });

  useEffect(() => {
    let flag = 0;
    let error = { email: "", question: "" };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      error.email = "Enter valid email!";
      flag = 1;
    } else {
      error.email = "";
    }
    if (data.question.trim().length < 31) {
      error.question = "Enter at least 30 characters.";
      flag = 1;
    } else {
      error.question = "";
    }
    setError(error);
    flag === 0 ? setDisabled(false) : setDisabled(true);
  }, [data]);

  const handleOnSubmit = () => {
    axios({
      url: "https://rentalvista-api.herokuapp.com/feedback",
      method: "POST",
      data: {
        email: data.email,
        message: data.question
      }}
    )
    .then((response) => {
        console.log("PASS",response);
        setShow(true)
    })
    .catch(({response}) => {
        console.log("ERROR",response);
        setShow(false)
    });
  }

  return (
    <>
      <Jumbotron className="text-center">
        <h1>Contact Us</h1>
        <p>Please fill the form shown below! We will contact you soon.</p>
      </Jumbotron>
      <Container className="p-5">
          { show ? <Alert variant={"success"}>Feedback Received!</Alert> : null}
        <Form.Group controlId="formHorizontalEmail">
          <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            {error.email !== "" ? <Form.Text>{error.email}</Form.Text> : null}
        </Form.Group>
        <Form.Group controlId="formHorizontalPassword">
          <Form.Label>Question</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write your questions here..."
              onChange={(e) => setData({ ...data, question: e.target.value })}
            />
            {error.question !== "" ? (
              <Form.Text>{error.question}</Form.Text>
            ) : null}
        </Form.Group>
        <Form.Group>
            <Button type="submit" disabled={disabled} onClick={handleOnSubmit}>
              Submit
            </Button>
        </Form.Group>
      </Container>
    </>
  );
}

export default Contact;
