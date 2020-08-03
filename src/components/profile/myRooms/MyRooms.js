// Author: Gaurav Anand - B00832139
import React, { useState, useEffect } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuccessModal from '../../../utilities/SuccessModal'
import axios from "axios";
import Loader from 'react-loader-spinner';

function MyRooms() {
    const [rooms, setRooms] = useState([]);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [roomsFetched, setRoomsFetched] = useState(false);

    const handleModal = () => {
      setShow(!show);
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
        setRoomsFetched(true);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [show])

  const handleDisable = (roomID, disabled) => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://rentalvista-api.herokuapp.com/post/update",
        {
          roomID: roomID,
          disabled: disabled,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Method": "POST",
            Authorization: token,
          },
        }
      )
      .then((response) => {
        setMessage("Property status changed successfully!");
        setShow(true);
      })
      .catch(({ response }) => {
        setMessage("Some error occurred while disabling property. Please, try again later.");
        setShow(true);
      });
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
        // console.log(response)
        var array = [...rooms];
        let obj = array.find(x => x.roomID === roomID);
        let index = array.indexOf(obj);
        if (index !== -1) {
          array.splice(index, 1);
          setRooms(array)
        }
        setMessage("Property Deleted Successfully!");
        setShow(true);
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  return (
    <>
    { !roomsFetched ? 
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
                              (index < (room.amenities.length - 1) ? amenity+', ': amenity)
                            );
                          }
                        )
                      }
                    </Card.Subtitle>
                    <Card.Text className="pt-1">
                      <strong>${room.rent}</strong>/Month
                    </Card.Text>
                    <Button variant="warning" onClick={(e)=>handleDisable(room.roomID, !room.disabled)}>
                      {
                        room.disabled ? 'Enable' : 'Disable'
                      }
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
    }
    {
        show && (
        <SuccessModal
          message={{
            title: "Success!",
            body: {message},
            show: true
          }}
          renderComponent={handleModal}
        />
      )}
    </>
  );
}

export default MyRooms;