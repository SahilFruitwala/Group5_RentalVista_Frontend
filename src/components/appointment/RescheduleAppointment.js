import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export default class RescheduleAppointment extends Component {
  state = {
    date: null,
    time: null,
    id: null,
  };

  handleSubmit = () => {
    axios.post("http://localhost:5000/appointment/reschedule", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "POST",
        Authorization: localStorage.getItem("token"),
      },
      data: {
        date: this.state.date,
        time: this.state.time,
        id: this.props.match.params.id,
      },
    });

    this.props.history.push("/house");
  };

  Date = (date) => {
    this.setState({ date: date });
  };
  Time = (time) => {
    this.setState({ time: time });
  };
  Id = (id) => {
    this.setState({ id: id });
  };
  render() {
    var id = this.props.match.params.id;
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
          <h1> Reschedule Appointment </h1>
          <form>
            <Form.Group controlId="id">
              <Form.Label>Appointment ID</Form.Label>
              <Form.Control type="text" name="id" value={id} readOnly />
            </Form.Group>
            <Form.Label>Date</Form.Label>
            <br></br>
            <Form.Group controlId="date" name="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => this.Date(e.target.value)}
              >
                <option selected>Select Date</option>
                <option value="6">Aug 6</option>
                <option value="7">Aug 7</option>
                <option value="8">Aug 8</option>
                <option value="9">Aug 9</option>
                <option value="10">Aug 10</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="time" name="time">
              <Form.Label>Time</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => this.Time(e.target.value)}
              >
                <option selected>Select time</option>
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
