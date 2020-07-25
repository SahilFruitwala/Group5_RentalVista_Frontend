import React from "react";

import UserImage from '../../../assets/images/user.svg'
import { Card, CardColumns } from "react-bootstrap";

function RequestedContacts() {
  return (
    <>
      <CardColumns className="container-fluid">
        <Card>
          <Card.Img variant="top" src={UserImage} />
          <hr/>
          <Card.Body>
            <Card.Title>John Doe</Card.Title>
          <hr/>
            <Card.Text>+1 123-456-789</Card.Text>
            <Card.Text>johndoe@jd.com</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={UserImage} />
          <hr/>
          <Card.Body>
            <Card.Title>Jane Doe</Card.Title>
          <hr/>
            <Card.Text>+1 123-456-789</Card.Text>
            <Card.Text>janedoe@jd.com</Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </>
  );
}

export default RequestedContacts;
