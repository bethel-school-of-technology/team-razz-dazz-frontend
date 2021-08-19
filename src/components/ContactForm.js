import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { MDBBtn } from "mdb-react-ui-kit";
import "../components/SignupForm.css";
import { MDBInput, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "../components/OrderForm.css";

const ContactForm = (props, { history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [orderSummary, setOrderSummary] = useState("");

  const Contact = (event) => {
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
        orderSummary,
      };

      axios
        .post("http://localhost:3000/api/order/contact", req)
        .then((result) => {
          console.log(result.data);
          history.push("/home");
        });
    }
  };

  return (
    <div className="">
      <Form onSubmit={Contact} align="center">
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
              label="Email"
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
              label="Message"
              id="textAreaExample"
              textarea
              rows={4}
              onChange={(e) => setOrderSummary(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <br/>
        <MDBBtn
          onSubmit={Contact}
          id="loginbutton"
          className="btn btn-lg m-2"
        >
          Submit
        </MDBBtn>
      </Form>
    </div>
  );
};

export default ContactForm;
