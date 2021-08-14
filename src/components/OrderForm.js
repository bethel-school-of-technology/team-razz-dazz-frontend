import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { MDBBtn } from "mdb-react-ui-kit";
import { withRouter } from "react-router";
import "../components/SignupForm.css";
import {
  MDBInput,
  MDBCol,
  MDBRow
} from "mdb-react-ui-kit";
import "../components/OrderForm.css";

const OrderForm = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [orderSummary, setOrderSummary] = useState("");

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
        .post("https://cookienoble.herokuapp.com/", req, {
          headers: {
            Authorization: token,
          },
        })
        .then((result) => {
          console.log(result.data);
          history.push("/ordersubmission");
        });
      
      axios.post("https://cookienoble.herokuapp.com/", req).then((result) => {
        console.log(result.data);
      });
      
    }
  };

  return (
    <div className="">
      <Form onSubmit={Order} align="center">
        <MDBRow>
          <MDBCol>
            <MDBInput
              label="First Name"
              id="form1"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              label="Last Name"
              id="form1"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol>
            <MDBInput
              label="Account Email"
              id="form1"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              label="Mobile"
              id="form1"
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol>
            <MDBInput
              label="Address"
              id="form1"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol>
            <MDBInput
              label="Whatcha having?"
              id="textAreaExample"
              textarea
              rows={4}
              onChange={(e) => setOrderSummary(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBBtn
          onSubmit={Order}
          id="loginbutton"
          className="btn btn-outline-light btn-lg m-2"
        >
          Submit
        </MDBBtn>
      </Form>
    </div>
  );
};

export default withRouter(OrderForm);
