import React from "react";
import LoginForm from "../components/LoginForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  return (
    <div className="App container py-3">
      <Row className="justify-content-center"></Row>
      <Row className="justify-content-center">
        <Col md="8" align="center">
          <h1>Login</h1>
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
