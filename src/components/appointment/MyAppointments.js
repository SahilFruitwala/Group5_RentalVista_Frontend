//Author: Krupa Patel - B00828120
import React, { useState, useEffect, Component } from "react";
import { Card, Row, Button } from "react-bootstrap";

import SuccessModal from "../../utilities/SuccessModal";
import axios from "axios";

function MyAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [display, setDisplay] = useState(false);
  const handleModal = (msg) => {
    setDisplay(!display);
    window.location.reload(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/myappointment/get", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "GET",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (appointmentid) => {
    axios
      .delete("http://localhost:5000/appointment/delete", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "DELETE",
          Authorization: localStorage.getItem("token"),
        },
        data: {
          appointmentid: appointmentid,
        },
      })
      .then((response) => {
        console.log(response);
        var array = [...appointments];
        let obj = array.find((x) => x.appointmentid === appointmentid);
        let index = array.indexOf(obj);
        if (index !== -1) {
          array.splice(index, 1);
          setAppointments(array);
        }
        handleModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Row className="container-fluid">
        {appointments.map((appointment) => {
          return (
            <Card key={appointment.id} className="col-lg-4 mb-5 mr-auto">
              <Card.Body>
                <Card.Subtitle className="pt-2" style={{ color: "#000000" }}>
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
                  <Row>
                    <center>
                      Owner email: &nbsp;
                      <b>{appointment.owneremail} </b>
                    </center>
                  </Row>
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  <Button
                    variant="warning"
                    style={{ marginRight: "1rem" }}
                    onClick={(e) => handleDelete(appointment.id)}
                  >
                    Reschedule Appointment
                  </Button>
                  <span></span>
                  <Button
                    variant="warning"
                    onClick={(e) => handleDelete(appointment.id)}
                  >
                    Delete Appointment
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
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
  );
}

export default MyAppointment;
