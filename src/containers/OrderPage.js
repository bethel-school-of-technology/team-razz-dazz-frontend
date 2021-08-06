import React from "react";
import S3Upload from "../components/S3Upload";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OrderForm from "../components/OrderForm";

const OrderPage = () => {
  return (
    <div className="App container py-3">
      <h1 align="center">Place an order below! :)</h1>
      <br/>
      <Row className="justify-content-center">
        <Col md="6">
        <OrderForm />
          <S3Upload />
        </Col>
      </Row>
    </div>
  );
};

export default OrderPage;
