import React, { useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TestModal from '../../../utilities/TestModal'
import SavedRoomsData from './SavedRoomsData'

function SavedRooms() {
    const [display, setDisplay] = useState(false);

  const handleModal = (msg) => {
    setDisplay(!display);
  };
  return (
      <>
    <Row className="container-fluid">
        {
        SavedRoomsData.map((room) => {
          return (
            <Card
              key={room.id}
              className="col-lg-4 mb-5 mr-auto"
              style={{ border: "none" }}
            >
              <Card.Img
                variant="top"
                src={room.image}
                style={{ borderRadius: "10%" }}
              />
              <Card.Body>
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
                  Unsave Room
                </Button>
              </Card.Body>
            </Card>
          );
        })
    }
    </Row>
    {
        display && (
        <TestModal
          message={{
            title: "Success!",
            body: "Room has been unsaved from your account!",
            show: true
          }}

          renderComponent={handleModal}
        />
      )}
      </>
  );
}

export default SavedRooms;
