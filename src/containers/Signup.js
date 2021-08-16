import React from "react";
import SignupForm from "../components/SignupForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Signup = () => {
  return (
    <div className="App container py-3">
      <Row className="justify-content-center">
        <Col md="8" align="center">
        <h1>Please Signup below</h1>
          <SignupForm/>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
