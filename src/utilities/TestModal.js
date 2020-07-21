import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function TestModal(props) {
    console.log("TestModal -> props")
    return (
        <Modal
        show={props.message.show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {
          props.message.title === "Login Success" ?
          <React.Fragment>
          <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.message.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.message.body}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/edit">
            <Button variant="success" onClick={() => props.renderComponent({
                  title: "",
                  body: "",
                })}>Edit Profile
              </Button>
          </Link>
        </Modal.Footer>
        </React.Fragment>
          :
        <React.Fragment>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.message.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.message.body}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => props.renderComponent({
                  title: "",
                  body: "",
                })}>Close</Button>
        </Modal.Footer>
        </React.Fragment>
}
      </Modal>
    )
}

export default TestModal
