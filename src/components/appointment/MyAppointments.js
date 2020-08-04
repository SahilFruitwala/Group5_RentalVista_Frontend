//Author: Krupa Patel - B00828120
import React, { useState, useEffect, Component } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SuccessModal from "../../utilities/SuccessModal";
import axios from "axios";
import Loader from "react-loader-spinner";

function MyAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [display, setDisplay] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const handleModal = (msg) => {
    setDisplay(!display);
    window.location.reload(false);
  };

  useEffect(() => {
    axios
      .get("https://rentalvista-api.herokuapp.com/myappointment/get", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "GET",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setAppointments(response.data);
        setDataFetched(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (appointmentid) => {
    axios
      .delete("https://rentalvista-api.herokuapp.com/appointment/delete", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          appointmentid: appointmentid,
        },
      })
      .then((response) => {
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!dataFetched ? (
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader type="ThreeDots" color="#1d8ba6" height="100" width="100" />
        </div>
      ) : (
        <>
          <div style={{ height: "27rem" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
              My appointments{" "}
            </h1>
            <Row className="container-fluid">
              {appointments.map((appointment) => {
                return (
                  <Card key={appointment.id} className="col-lg-4 mb-5 mr-auto">
                    <Card.Body>
                      <Card.Subtitle
                        className="pt-2"
                        style={{ color: "#000000" }}
                      >
                        <Row>
                          <center>
                            Date: &nbsp;
                            <b>{appointment.date}</b>
                          </center>
                        </Row>
                        <Row>
                          <center>
                            Time: &nbsp;
                            <b>{appointment.time} PM</b>
                          </center>
                        </Row>
                        <Row>
                          <center>
                            Your email: &nbsp;
                            <b>{appointment.email} </b>
                          </center>
                        </Row>
                      </Card.Subtitle>
                      <br></br>
                      <Card.Text>
                        <Link to={`/appointment-reschedule/${appointment.id}`}>
                          <Button
                            variant="warning"
                            style={{ marginRight: "1rem" }}
                          >
                            Reschedule
                          </Button>
                        </Link>
                        <span></span>
                        <Button
                          variant="warning"
                          onClick={(e) => handleDelete(appointment.id)}
                        >
                          Delete
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </Row>
          </div>
          {display && (
            <SuccessModal
              message={{
                title: "Success!",
                body: "Appointment has been cancelled from your account!",
                show: true,
              }}
              renderComponent={handleModal}
            />
          )}
        </>
      )}
    </>
  );
}

export default MyAppointment;
