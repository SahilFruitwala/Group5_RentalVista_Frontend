import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class MyAppointment extends Component {
  constructor(props) {
    super(props);

    const token = localStorage.access_token;

    this.state = {
      userId: "krupa1711@gmail.com",
      items: [],
    };
  }

  async componentDidMount() {
    const url = "https://rentalvista-api.herokuapp.com/myappointment/";
    const response = await fetch(url + this.state.userId);
    const data = await response.json();

    this.setState({ items: data });

    console.log(data);
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            marginTop: "5rem",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "5rem",
            marginRight: "5rem",
            marginBottom: "5rem",
          }}
        >
          <h1>My Appointments</h1>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Post ID</th>
                <th>Email </th>
                <th>Date</th>
                <th>Time</th>
                <th>Owner Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.postid}</td>
                  <td>{item.email}</td>
                  <td>{item.date}</td>
                  <td>{item.time}:00 PM</td>
                  <td>{item.owneremail}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}