import React from "react";
import Container from "react-bootstrap/Container";
import SignupForm from "../components/SignupForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Signup = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md="4">
          <h1>Insert Signup banner</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4">
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
