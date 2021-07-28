import React from "react";
import LoginForm from "../components/LoginForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md="4">
          <h1>Insert Login banner</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
