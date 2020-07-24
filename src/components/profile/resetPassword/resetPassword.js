import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./resetPassword.css";
import { Container, Col, Row, Button, Form } from "react-bootstrap";

const initialData = {
  password: "",
  new_password: "",
  re_password: "",
};

const initialError = {
  passwordError: "form-text-hide",
  new_passwordError: "form-text-hide",
  re_passwordError: "form-text-hide",
};

function ResetPassword(props) {
  const [changeDisable, setChangeDisable] = useState(true);
  const [userData, setUserData] = useState(initialData);
  const [errorClass, setErrorClass] = useState(initialError);

  const handleOnChange = (data) => {
    console.log(data);

    setUserData({
      ...userData,
      ...data,
    });
  };

  useEffect(() => {
    let flag = true;
    let error = {
      passwordError: "form-text-hide",
      new_passwordError: "form-text-hide",
      re_passwordError: "form-text-hide",
    };

    if (validatePassword(userData.password)) {
      error.passwordError = "";
      flag = false;
    }
    if (validatePassword(userData.new_password)) {
      error.new_passwordError = "";
      flag = false;
    }
    if ( userData.new_password !== userData.re_password)
    {
      error.re_passwordError = "";
      flag = false;
    }
    if (flag)
    {
      setChangeDisable(false)
      setErrorClass(initialError);
    }
    else {
      setChangeDisable(true)
      setErrorClass({ ...error });
    }

  }, [userData.password, userData.new_password, userData.re_password]);

  const validatePassword = (password) => {
    if (password.length < 6) {
      return true;
    } else if (!/\d/.test(password)) {
      return true;
    } else if (!/[!@#$%^&*_]/.test(password)) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:8080/users/change", {
        "password": userData.password,
        "new_password": userData.new_password
      }, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "POST",
          "Authorization": token,
        }
      })
      .then((response) => {
        console.log("AXIOS", response.data)
        setUserData(initialData)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container className="mt-5 ml-5">
      <Row>
        <Col
          className="mb-3 personal-detail-col"
          xs={12}
          sm={{ offset: 1, span: 5 }}
          md={{ offset: 2 }}
          lg={{ offset: 2 }}
        >
          <Row className="password">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                value={userData.password}
                type="password"
                placeholder="Enter Current Password."
                onChange={(e) => handleOnChange({ password: e.target.value })}
              />
              <Form.Text className={errorClass.passwordError}>
                <FontAwesomeIcon icon="exclamation-circle" color="#ff0000" />{" "}
                Enter Valid Password!
              </Form.Text>
            </Form.Group>
          </Row>
          <Row className="password">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                value={userData.new_password}
                type="password"
                placeholder="Enter New Password"
                onChange={(e) =>
                  handleOnChange({ new_password: e.target.value })
                }
              />
              <Form.Text className={errorClass.new_passwordError}>
                <FontAwesomeIcon icon="exclamation-circle" color="#ff0000" />{" "}
                Enter Valid Password!
              </Form.Text>
            </Form.Group>
          </Row>
          <Row className="password">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                value={userData.re_password}
                type="password"
                placeholder="Re-enter Password"
                onChange={(e) =>
                  handleOnChange({ re_password: e.target.value })
                }
              />
              <Form.Text className={errorClass.re_passwordError}>
                <FontAwesomeIcon icon="exclamation-circle" color="#ff0000" />{" "}
                Password does not match!
              </Form.Text>
            </Form.Group>
          </Row>
          <Row className="password-button">
            <Button
              variant="success"
              type="submit"
              onClick={handleSubmit}
              disabled={changeDisable}
            >
              Change Password
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ResetPassword;
