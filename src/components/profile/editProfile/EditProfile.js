import React, { useState, useEffect } from "react";
import { Image, Row, Col, Button, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import TestModal from "../../../utilities/TestModal";
import {withRouter} from 'react-router-dom'

import user from "../../../assets/images/user.svg";
import "./EditProfile.css";

const initialData = {
  name: "",
  email: "",
  contact: "",
};

const initialError = {
  nameError: "form-text-hide",
  contactError: "form-text-hide",
};

function EditProfile(props) {
  const [saveDisable, setSaveDisable] = useState(true);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({});
  const [userData, setUserData] = useState(initialData);
  const [initialUserData, setInitialUserData] = useState(initialData);
  const [errorClass, setErrorClass] = useState(initialError);

  const handleOnChange = (data) => {
    console.log(data);

    setUserData({
      ...userData,
      ...data,
    });
  };

  const showModal = (msg) => {
    setMessage(msg);
    setShow(!show);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
    axios
      .post("http://localhost:8080/users/user", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "POST",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("AXIOS", response.data);
        setInitialUserData({ ...response.data });
        setUserData({ ...response.data });
        // setSaveDisable(true)
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      props.history.push('/login')
    }
  }, []);

  useEffect(() => {
    let flag = true;
    let error = {
      nameError: "form-text-hide",
      contactError: "form-text-hide",
    };

    if (userData.name.trim() === "") {
      error.nameError = "";
      flag = false;
    }
    if (
      userData.contact.trim() === "" ||
      userData.contact.length !== 10 ||
      isNaN(userData.contact)
      ) {
        flag = false;
      error.contactError = "";
    }
    if (flag)
    {
      setSaveDisable(false)
      setErrorClass(initialError);
    }
    else {
      setSaveDisable(true)
      setErrorClass({ ...error });
    }
  }, [userData.name, userData.contact]);

  const handleCancel = () => {
    setUserData(initialUserData)
  };

  const handleSave = () => {
    if(initialUserData.name !== userData.name || initialUserData.contact !== userData.contact){
    const token = localStorage.getItem('token')
    axios
      .post("http://localhost:8080/users/edit", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "POST",
          Authorization: token,
        },
        data:{
          "name": userData.name,
          "contact": userData.contact
        }
      })
      .then((response) => {
        console.log("AXIOS", response.data);
        setInitialUserData({ ...response.data });
        setUserData({ ...response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <Container className="ml-5">
      <Row>
        <Col
          className="mb-3 personal-detail-col"
          xs={12}
          sm={{ offset: 1, span: 5 }}
          md={{ offset: 2 }}
          lg={{ offset: 2 }}
        >
          <Row className="">
            <Image
              src={user}
              alt="Profile"
              roundedCircle
              className="upload-image"
            />
            <button
              className="btn m-2 btn-warning"
              onClick={() =>
                showModal({
                  title: "Great!",
                  body: "Profile Picture has been changed!",
                  show: true,
                })
              }
            >
              Upload
            </button>
          </Row>
          <Row className=" mt-3">
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={userData.name}
                type="name"
                placeholder="Enter Fullname"
                onChange={(e) => handleOnChange({ name: e.target.value })}
              />
              <Form.Text className={errorClass.nameError}>
                <FontAwesomeIcon icon="exclamation-circle" color="#ff0000" />{" "}
                Enter Valid Name!
              </Form.Text>
            </Form.Group>
          </Row>
          <Row className="">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={userData.email}
                type="email"
                placeholder="Enter email"
                readOnly
              />
            </Form.Group>
          </Row>
          <Row className="">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                value={userData.contact}
                type="contact"
                placeholder="Contact No."
                onChange={(e) => handleOnChange({ contact: e.target.value })}
              />
              <Form.Text className={errorClass.contactError}>
                <FontAwesomeIcon icon="exclamation-circle" color="#ff0000" />{" "}
                Enter Valid Contact Detail!
              </Form.Text>
            </Form.Group>
          </Row>
          <Row className="">
            <Button
              variant="secondary"
              type="submit"
              style={{ marginRight: "3vw" }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="success"
              type="submit"
              onClick={handleSave}
              disabled={saveDisable}
            >
              Save
            </Button>
          </Row>
        </Col>
      </Row>
      {show && <TestModal message={message} renderComponent={showModal} />}
    </Container>
  );
}

export default withRouter(EditProfile);
