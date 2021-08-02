import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { MDBBtn } from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom";
import "../components/SignupForm.css";

const OrderForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [orderSummary, setOrderSummary] = useState("");
  const history = useHistory();

  const Order = (event) => {
    event.preventDefault();

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      address !== "" &&
      orderSummary !== ""

    ) {
      const req = {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        orderSummary
      };

      const token = localStorage.getItem("myJWT");

      axios
        .post("http://localhost:3000/api/order/ordersubmit", req, {
          headers: {
            Authorization: token,
          },
        })
        .then((result) => {
          console.log(result.data);
          history.push("/ordersubmit");
        });
    }
  };

  return (
    <div className="App container py-3">
      <Form onSubmit={Order}>
        <Form.Group controlId="firstName" size="lg">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="lastName" size="lg">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email" size="lg">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="phonenumber" size="lg">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="address" size="lg">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="ordersummary" size="lg">
          <Form.Label>Order Summary</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setOrderSummary(e.target.value)}
          />
        </Form.Group>
        <br />
        <div align="center">
          <MDBBtn
            onSubmit={Order}
            id="signupbutton"
            className="btn btn-outline-light btn-lg m-2"
          >
            Order
          </MDBBtn>
        </div>
      </Form>
    </div>
  );
};

export default OrderForm;
