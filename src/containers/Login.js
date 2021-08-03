import React from "react";
import LoginForm from "../components/LoginForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  return (
    <div className="App container py-3 pt-5 pb-5">
      <Row className="justify-content-center"></Row>
      <Row className="justify-content-center">
        <Col md="4">
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
