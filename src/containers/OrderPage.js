import React from "react";
import S3Upload from "../components/S3Upload";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OrderPage = () => {
  return (
    <div className="App container py-3">
      <h1 align="center">Insert Order Form</h1>
      <Row className="justify-content-center">
        <Col md="4">
          <S3Upload />
        </Col>
      </Row>
    </div>
  );
};

export default OrderPage;
