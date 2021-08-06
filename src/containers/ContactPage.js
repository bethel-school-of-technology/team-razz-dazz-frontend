import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="App container py-3">
      <h1 align="center">Give us a holler!</h1>
      <br />
      <Row className="justify-content-center">
        <Col md="6">
        <ContactForm/>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
