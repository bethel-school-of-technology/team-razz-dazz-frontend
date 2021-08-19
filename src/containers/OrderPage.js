import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OrderForm from "../components/OrderForm";

const OrderPage = () => {
  return (
    <div className="App container py-3">
      <h1 align="center">New Order</h1>
      <br/>
      <Row className="justify-content-center">
        <Col md="8">
        <OrderForm />
        </Col>
      </Row>
    </div>
  );
};

export default OrderPage;
