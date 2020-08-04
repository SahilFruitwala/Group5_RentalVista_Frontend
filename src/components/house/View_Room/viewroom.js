//Author1: Krupa Patel - B00828120
//Author2: Harshitha M.S. - B00838019
import React from "react";
import { Carousel, Col, Row, ListGroup, Button } from "react-bootstrap";
import room1 from "../../../assets/images/room-1.jpg";
import room2 from "../../../assets/images/room-2.jpg";
import room3 from "../../../assets/images/room-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import Comments from "./comments";

class ViewRoom extends React.Component {
  state = {};
  render() {
    var id = this.props.match.params.roomID;
    var rent = this.props.match.params.rent;
    var date = this.props.match.params.date;
    var bedroom = this.props.match.params.bedroom;
    var bathroom = this.props.match.params.bathroom;
    var description = this.props.match.params.description;

    return (
      <div className="container-fluid">
        <Row>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={room1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={room2} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={room3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Col sm={4}></Col>
          <Col sm={8}>
            <a href="/appointment-book">
              <Button variant="warning" style={{ marginLeft: "35rem" }}>
                Book Appointment
              </Button>
            </a>
          </Col>
        </Row>
        <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item style={{ border: "none" }}>
                <FontAwesomeIcon icon={faDollarSign} color="#F7A231" /> {rent} /
                Month
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <FontAwesomeIcon icon={faCalendarCheck} color="#F7A231" />{" "}
                Available From: {date}
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <FontAwesomeIcon icon={faBed} color="#F7A231" /> {bedroom}{" "}
                Bedrooms
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <FontAwesomeIcon icon={faBath} color="#F7A231" /> {bathroom}{" "}
                Bath
              </ListGroup.Item>
              {/* <ListGroup.Item style={{ border: "none" }}>
                    <FontAwesomeIcon icon={faPaw} color="#F7A231" /> Yes, Pet friendly
                  </ListGroup.Item> */}
            </ListGroup>
          </Col>
          <Col sm={8}>{description}</Col>
        </Row>
        <Comments />
      </div>
    );
  }
}

export default ViewRoom;
