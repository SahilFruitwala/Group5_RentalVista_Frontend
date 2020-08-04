//Author: Krupa Patel - B00828120
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
      postid: this.props.match.params.id,
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

  handleSubmit = () => {
    axios.post("https://rentalvista-api.herokuapp.com/appointment/book", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: {
        email: this.state.email,
        date: this.state.date,
        time: this.state.time,
        postid: this.state.postid,
      },
    });

    this.props.history.push("/house");
  };

  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.history.push("/login");
    }
  }

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
            <Form.Group controlId="postID">
              <Form.Label>Post ID</Form.Label>
              <Form.Control
                type="text"
                name="postid"
                value={this.props.match.params.id}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="your-email"
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
                <option value="5">Aug 5</option>
                <option value="6">Aug 6</option>
                <option value="7">Aug 7</option>
                <option value="8">Aug 8</option>
                <option value="9">Aug 9</option>
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
