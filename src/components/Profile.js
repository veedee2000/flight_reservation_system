import React from "react";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
 import DefaultUserPic from "../images/team-male.jpg";
function Profile() {
    return (
      <Container>
      <Row>
      <Col>
      <img src={DefaultUserPic} alt="profils pic" />
      </Col>
      <Col>
        <h1>User Profile</h1>
        <Form className="form">     
      <p>dummy message</p>
      <Form.Group controlId="formCategory1">
      <Form.Label>Username</Form.Label>
      <Form.Control disabled type="text" defaultValue='John Doe'/>

      </Form.Group>
      <Form.Group controlId="formCategory2">
      <Form.Label>Email</Form.Label>
      <Form.Control disabled type="email" defaultValue='dummyemail@gmail.com' />

      </Form.Group>

      <Form.Group controlId="formCategory4">
      <Form.Label>Profile Image</Form.Label>
      <Form.Control type="file" name="profileImage"/>
      </Form.Group>
      <Button variant="primary">Update Profile</Button>
      </Form>
      </Col>

      </Row>
      </Container>
      )
}

export default Profile;
