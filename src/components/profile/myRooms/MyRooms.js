// Author: Gaurav Anand - B00832139
import React, { useState, useEffect } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SuccessModal from '../../../utilities/SuccessModal'
import axios from "axios";

function MyRooms() {
    const [rooms, setRooms] = useState([]);
    const [display, setDisplay] = useState(false);
    const handleModal = (msg) => {
      setDisplay(!display);
    };

    useEffect(() => {
      axios
      .get("https://rentalvista-api.herokuapp.com/post/get", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "GET",
          "Authorization": localStorage.getItem("token")
        },
      })
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const handleDelete = (roomID) => {
    axios
      .delete("https://rentalvista-api.herokuapp.com/post/delete", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "DELETE",
          "Authorization": localStorage.getItem("token")
        },
        data: {
          roomID: roomID,
        },
      })
      .then((response) => {
        console.log(response)
        var array = [...rooms];
        let obj = array.find(x => x.roomID === roomID);
        let index = array.indexOf(obj);
        if (index !== -1) {
          array.splice(index, 1);
          setRooms(array)
        }
        handleModal()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
      <>
    <Row className="container-fluid">
        {
        rooms.map((room) => {
          return (
            <Card
              key={room.roomID}
              className="col-lg-4 mb-5 mr-auto"
              style={{ border: "none"}}
            >
              <Card.Img
                variant="top"
                src={room.image}
                style={{ borderRadius: "10%" }}
              />
              <Card.Body>
                <Card.Subtitle className="pt-2" style={{ color: "#000000" }}>
                  <Row>
                    <center><b>{room.title}</b></center>
                  </Row>
                </Card.Subtitle>
                <Card.Subtitle className="pt-2" style={{ color: "#696969" }}>
                  <Row>
                    <FontAwesomeIcon icon="star" color="#F7A231" />
                    {room.rating} / 5
                  </Row>
                </Card.Subtitle>
                
                
                <Card.Text className="justify-data pt-1">
                  {room.description}
                </Card.Text>
                <Card.Text className="pt-1">
                  <strong>${room.rent}</strong>/Month
                </Card.Text>
                <Button variant="warning" onClick={(e)=>handleDelete(room.roomID)}>
                  Delete Room
                </Button>
              </Card.Body>
            </Card>
          );
        })
    }
    </Row>
    {
        display && (
        <SuccessModal
          message={{
            title: "Success!",
            body: "Room has been deleted from your account!",
            show: true
          }}

          renderComponent={handleModal}
        />
      )}
      </>
  );
}

export default MyRooms;