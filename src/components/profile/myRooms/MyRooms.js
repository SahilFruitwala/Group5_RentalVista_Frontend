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

  const handleDisable = (roomID) => {

  }

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
          rooms.length !== 0 ? (
            rooms.map((room) => {
              return (
                <Card
                  key={room.roomID}
                  className="col-lg-4 mt-5 mr-auto"
                  style={{ border: "none"}}
                >
                  <Card.Img
                    variant="top"
                    src={room.image}
                    style={{ borderRadius: "10%" }}
                  />
                  <Card.Body>
                    <Card.Subtitle className="pt-2 mb-2 " style={{ color: "#000000" }}>
                      <h5>
                        <center><b>{room.title}</b></center>
                      </h5>
                    </Card.Subtitle>                
                    <Card.Text className="justify-data mt-1">
                      {room.description}
                    </Card.Text>
                    <Card.Text className="mt-1" style={{ color: "#000000" }}>
                      <b>Included Amenities:</b>
                    </Card.Text>
                    <Card.Subtitle className="mt-1 mb-1" style={{ color: "#696969" }}>
                      {
                        room.amenities.map((amenity, index) => {
                            return (
                              <div key={index}>
                                  {amenity}
                              </div>
                            );
                          }
                        )
                      }
                    </Card.Subtitle>
                    <Card.Text className="pt-1">
                      <strong>${room.rent}</strong>/Month
                    </Card.Text>
                    <Button variant="warning" onClick={(e)=>handleDisable(room.roomID)}>
                      Disable
                    </Button>
                    <Button className="btn ml-2" variant="danger" onClick={(e)=>handleDelete(room.roomID)}>
                      Delete Property
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
          ) :
          (
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