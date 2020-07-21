import React from "react";
import { Carousel, Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import room1 from "../../../assets/images/room-1.jpg";
import room2 from "../../../assets/images/room-2.jpg";
import room3 from "../../../assets/images/room-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";

function ViewRoom(props) {
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
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item style={{ border: "none" }}>
              <FontAwesomeIcon icon={faDollarSign} color="#F7A231" /> 700
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>
              <FontAwesomeIcon icon={faCalendarCheck} color="#F7A231" /> July
              2020 - January 2021
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>
              <FontAwesomeIcon icon={faBed} color="#F7A231" /> 2 bedroom
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>
              <FontAwesomeIcon icon={faBath} color="#F7A231" /> 1 Bath
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>
              <FontAwesomeIcon icon={faPaw} color="#F7A231" /> Yes, Pet friendly
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nunc ut maximus dapibus, eros erat aliquet arcu, vitae semper
          metus magna vel orci. Etiam eu massa at arcu ullamcorper tristique
          eget sed urna. Vivamus tristique arcu vel massa faucibus, vel
          efficitur turpis aliquam. Sed et suscipit mauris. Nam lorem sem,
          pellentesque nec leo sit amet, auctor interdum urna. Fusce pretium
          consectetur ipsum, ut placerat nulla efficitur non. Nulla nulla
          mauris, malesuada a enim eu, interdum tempus est. Maecenas iaculis
          tempor sapien, quis tincidunt sem condimentum sit amet. Integer
          cursus, sapien eget pulvinar eleifend, sapien sem imperdiet ligula, at
          blandit mi massa eget nisi. Suspendisse aliquet nisl sed eros ornare
          varius. Pellentesque at egestas ligula, eu maximus enim. Donec
          vulputate, erat id hendrerit sodales, nibh nisl tempus enim, vel
          fermentum velit massa a urna. Vestibulum pulvinar elit arcu.
        </Col>
      </Row>
    </div>
  );
}

export default ViewRoom;
