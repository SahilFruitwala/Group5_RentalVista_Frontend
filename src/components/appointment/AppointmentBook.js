import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class RentalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      date: null,
      time: null,
      comments: null,
      postid: "1",
      owneremail: "krupa1711@gmail.com",
    };
  }
  Email = (email) => {
    this.setState({ email: email });
  };
  Date = (date) => {
    this.setState({ date: date });
  };
  Time = (time) => {
    this.setState({ time: time });
  };
  Postid = (postid) => {
    this.setState({ postid: postid });
  };
  Owneremail = (owneremail) => {
    this.setState({ owneremail: owneremail });
  };

  handleSubmit = () => {
    axios.post("https://rentalvista-api.herokuapp.com/appointment/book", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "POST",
      },
      data: {
        email: this.state.email,
        owneremail: this.state.owneremail,
        date: this.state.date,
        time: this.state.time,
        postid: this.state.postid,
      },
    });

    this.props.history.push("/house");
  };

  render() {
    return (
      <div>
        <div
          style={{
            marginTop: "1rem",
            marginLeft: "5rem",
            marginRight: "5rem",
            marginBottom: "2rem",
          }}
        >
          <h1> Book Appointment </h1>
          <form>
            <Form.Group controlId="owneremail">
              <Form.Label>Owner Email address</Form.Label>
              <Form.Control
                type="email"
                name="owneremail"
                placeholder="user@gmail.com"
                onLoad={(e) => this.Owneremail(e.target.value)}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="owneremail">
              <Form.Label>Post ID</Form.Label>
              <Form.Control
                type="text"
                name="postid"
                value="1"
                onLoad={(e) => this.Postid(e.target.value)}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="user@gmail.com"
                onChange={(e) => this.Email(e.target.value)}
              />
            </Form.Group>
            <Form.Label>Date</Form.Label>
            <br></br>
            <Form.Group controlId="date" name="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => this.Date(e.target.value)}
              >
                <option value="1">Aug 1</option>
                <option value="2">Aug 2</option>
                <option value="3">Aug 3</option>
                <option value="4">Aug 4</option>
                <option value="5">Aug 5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="time" name="time">
              <Form.Label>Time</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => this.Time(e.target.value)}
              >
                <option value="1">1:00 PM</option>
                <option value="2">2:00 PM</option>
                <option value="3">3:00 PM</option>
                <option value="4">4:00 PM</option>
                <option value="5">5:00 PM</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
