//Author: Naitik Prajapati - B00856835
import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Card, Row, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import TestModal from "../../../utilities/TestModal";

import "./HouseList.css";

function HouseList() {
  const [display, setDisplay] = useState(false);
  const [rooms, setRooms] = useState([]);
  const handleModal = (msg) => {
    setDisplay(!display);
  };
  useEffect( () => {
    fetch('http://rentalvista-api.herokuapp.com/api/getrooms').then(response =>
      response.json().then(data => {
        //console.log(data);
        setRooms(data.Data)
      })
    )
  }, []);

//  console.log(rooms);
  return (
    <>
      <Row className="container-fluid">        
      <section class="card1">
      { rooms.length !== 0 ? (
          rooms.map(room => {
            return (
              <>
              {room.isPromoted ? (
              
              <div class="card1--content">
              <Card
                key={room.roomID}
                className="card1"
                style={{ border: "none" }}
              > 
              <Card.Img
                  variant="top"
                  src={room.image}
                  style={{ borderRadius: "10%", width: "200px" }}
                />
                
                <Card.Body>
                  <Card.Title>
                      <Badge variant="danger">Promoted {room.isPromoted}</Badge>
                    </Card.Title>
               
                    <Badge>
                      <strong></strong>
                    </Badge>
                 
                  <Card.Subtitle className="pt-2" style={{ color: "#696969" }}>
                    <Row>
                      <FontAwesomeIcon icon="star" color="#F7A231" />
                      {room.rating} / 5, 
                    </Row>
                  </Card.Subtitle>
                  <Card.Text className="justify-data pt-1">
                    {room.description}
                  </Card.Text>
                  <Card.Text className="pt-1">
                    <strong>${room.rent}</strong>/Month
                  </Card.Text>
                  <Button variant="warning" onClick={handleModal}>
                    Save Room
                  </Button>
                  <a href="/view-room">
                    <Button variant="warning" style={{ marginLeft: "15px" }}>
                      View Room
                    </Button>
                  </a>
                </Card.Body>                
              </Card>
              </div>             
              ) : ( <></>
                )}                
              </>
            )
          })
        ) : (
          <center className="container m-5">
            <h2>
              No Result found!
            </h2>
          </center>
        )
        }
        </section>
        
      </Row>
      <Row className="container-fluid">
        { rooms.length !== 0 ? (
          rooms.map(room => {
            return (
              <Card
                key={room.roomID}
                className="col-lg-3 mb-5 ml-5 mr-auto"
                style={{ border: "none" }}
              >
                <Card.Img
                  variant="top"
                  src={room.image}
                  style={{ borderRadius: "10%" }}
                />
                <Card.Body>
                  {room.isPromoted ? (
                    <Card.Title>
                      <Badge variant="danger">Promoted {room.isPromoted}</Badge>
                    </Card.Title>
                  ) : (
                    <Badge>
                      <strong></strong>
                    </Badge>
                  )}
                  <Card.Subtitle className="pt-2" style={{ color: "#696969" }}>
                    <Row>
                      <FontAwesomeIcon icon="star" color="#F7A231" />
                      {room.rating} / 5, 
                    </Row>
                  </Card.Subtitle>
                  <Card.Text className="justify-data pt-1">
                    {room.description}
                  </Card.Text>
                  <Card.Text className="pt-1">
                    <strong>${room.rent}</strong>/Month
                  </Card.Text>
                  <Button variant="warning" onClick={handleModal}>
                    Save Room
                  </Button>
                  <a href="/view-room">
                    <Button variant="warning" style={{ marginLeft: "15px" }}>
                      View Room
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            )
          })
        ) : (
          <center className="container m-5">
            <h2>
              <FontAwesomeIcon
                icon="exclamation-circle"
                color="#f7a231"
                size="2x"
              />{" "}
              No Result found!
            </h2>
          </center>
        )

        }

      </Row>
      {/* <Row className="container-fluid">
        {props.houses.length !== 0 ? (
          props.houses.map((room) => {
            return (
              <Card
                key={room.id}
                className="col-lg-3 mb-5 ml-5 mr-auto"
                style={{ border: "none" }}
              >
                <Card.Img
                  variant="top"
                  src={room.image}
                  style={{ borderRadius: "10%" }}
                />
                <Card.Body>
                  {room.promoted ? (
                    <Card.Title>
                      <Badge variant="danger">Promoted</Badge>
                    </Card.Title>
                  ) : (
                    <Badge>
                      <strong></strong>
                    </Badge>
                  )}
                  <Card.Subtitle className="pt-2" style={{ color: "#696969" }}>
                    <Row>
                      <FontAwesomeIcon icon="star" color="#F7A231" />
                      {room.rating} / 5, Reviews: {room.reviews}
                    </Row>
                  </Card.Subtitle>
                  <Card.Text className="justify-data pt-1">
                    {room.description}
                  </Card.Text>
                  <Card.Text className="pt-1">
                    <strong>${room.rent}</strong>/Month
                  </Card.Text>
                  <Button variant="warning" onClick={handleModal}>
                    Save Room
                  </Button>
                  <a href="/view-room">
                    <Button variant="warning" style={{ marginLeft: "2rem" }}>
                      View Room
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <center className="container m-5">
            <h2>
              <FontAwesomeIcon
                icon="exclamation-circle"
                color="#f7a231"
                size="2x"
              />{" "}
              No Result found!
            </h2>
          </center>
        )}
      </Row> */}
      {display && (
        <TestModal
          message={{
            title: "Success!",
            body: "Room has been saved in your account!",
            show: true,
          }}
          renderComponent={handleModal}
        />
      )}
    </>
  );
}

export default HouseList;
