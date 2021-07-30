import React from "react";
import SignupForm from "../components/SignupForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Signup = () => {
  return (
    <div className="App container py-3">
      <h1 align="center">Insert Signup banner</h1>
      <Row className="justify-content-center">
        <Col md="4">
          <SignupForm/>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
