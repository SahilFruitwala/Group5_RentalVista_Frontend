//Author: Naitik Prajapati - B00856835
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { Card, Row, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TestModal from "../../../utilities/TestModal";
import Loader from 'react-loader-spinner';

import "./HouseList.css";

function HouseList(props) {
  const [display, setDisplay] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [roomsFetched, setRoomsFetched] = useState(false);
  const handleModal = (msg) => {
    setDisplay(!display);
  };
  useEffect(() => {
    fetch("https://rentalvista-api.herokuapp.com/api/getrooms")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setRooms(data.Data);
        setRoomsFetched(true);
      });
  }, []);  

  return (
    <>
    {
      !roomsFetched ? 
        <div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
        <Loader type="ThreeDots" color="#1d8ba6" height="100" width="100" />
        </div>
      :
      <>
      <h3 style={{ marginLeft: "50px" }}>Promoted Postings:</h3>
      <Row className="container-fluid">
        <section className="card1">
          {props.houses.length !== 0 ? (
            props.houses.map((room) => {
              return (
                <>
                  {room.isPromoted && !room.disabled ? (
                    <div className="card1--content">
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
                            <Badge variant="danger">
                              Promoted {room.isPromoted}
                            </Badge>
                          </Card.Title>

                          <Badge>
                            <strong></strong>
                          </Badge>

                          <Card.Subtitle
                            className="pt-2"
                            style={{ color: "#696969" }}
                          >
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
                          <Link to={`/view-room/${room.rent},${room.date},${room.bedrooms},${room.bathrooms},${room.description}`}>
                  <Button variant="warning" style={{ marginLeft: "15px" }}>
                      View Room
                    </Button>
                  </Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              );
            })
          ) : (
            <center className="container m-5">
              <h2>No Result found!</h2>
            </center>
          )}
        </section>
      </Row>
      <h3 style={{ marginLeft: "50px", marginTop: "20px" }}>
        All Room Postings:
      </h3>
      <Row className="container-fluid">
        {props.houses.length !== 0 ? (
          props.houses.map((room) => {
            return (
              <>
                {!room.disabled ? (
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
                      <Link to={`/view-room/${room.rent},${room.date},${room.bedrooms},${room.bathrooms},${room.description}`}>
                        <Button variant="warning" style={{ marginLeft: "15px" }}>
                          View Room
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                ) : (
                  <></>
                )}
              </>
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
      </Row>
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
    }
    </>
  );
}

export default HouseList;