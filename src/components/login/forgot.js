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
import axios from 'axios';


const regex = RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");

const ModalExample = (props) => {
  const { show, handleShowModal } = props;

  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    regex.test(email) ? setHidden(true) : setHidden(false);
  }, [email]);

  const handleSubmit = () => {
    axios
    .post("http://localhost:8080/users/forgot", { email: email }, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "POST",
        'Authorization':"HEY"
      }
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <Modal isOpen={show} toggle={() => handleShowModal()} centered={true}>
        <ModalHeader toggle={() => handleShowModal()}>
          Forgot Password
        </ModalHeader>
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
            <span className="errorMessage pb-3" hidden={hidden}>Enter Valid Email!</span>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit} disabled={!hidden}>Do Something</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
