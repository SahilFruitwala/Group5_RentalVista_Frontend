// 1. Author: Sahil Fruitwala - B00844489
import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import axios from "axios";

const regex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const ModalExample = (props) => {
  const { show, handleShowModal } = props;

  const [hidden, setHidden] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? setHidden(true) : setHidden(false);
  }, [email]);

  const handleSubmit = () => {
    axios
      .post(
        "https://rentalvista-api.herokuapp.com/users/forgot",
        { email: email },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Method": "POST",
          },
        }
      )
      .then((response) => {
         // console.log(response.data["msg"]);
        setShowSuccess(true);
      })
      .catch((error) => {
         // console.log(error);
        setShowSuccess(true);
      });
  };

  return (
    <>
      <Modal isOpen={show} toggle={() => handleShowModal()} centered={true}>
        <ModalHeader toggle={() => handleShowModal()}>
          Forgot Password
        </ModalHeader>
        {showSuccess ? (
          <>
            <ModalBody>
              <Label>Password will be sent the given email, if user exists with the give email.</Label>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => handleShowModal()} disabled={!hidden}>
                Close
              </Button>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalBody>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  value={email}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email you registered with"
                />
                <span className="errorMessage pb-3" hidden={hidden}>
                  Enter Valid Email!
                </span>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={handleSubmit} disabled={!hidden}>
                Forgot
              </Button>
            </ModalFooter>
          </>
        )}
      </Modal>
    </>
  );
};

export default ModalExample;
