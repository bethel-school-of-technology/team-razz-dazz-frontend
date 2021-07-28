import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { withRouter } from 'react-router';


const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const signUp = (event) => {
    event.preventDefault();

    if (username !== "" && password !== "" && firstName !== "" && lastName !== "" && email !== "") {
      const req = {
        username,
        password,
        firstName,
        lastName,
        email
      };


      axios.post("http://localhost:3000/api/user/register", req).then((result) => {
        const token = result.data.jwt;
        localStorage.setItem("myJWT", token);
        console.log(result.data);
      });
    }
  };

  return (
    <div className="App container py-3">
      <Form onSubmit={signUp}>
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
        <Form.Group controlId="username" size="lg">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password" size="lg">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br/>
        <Button onSubmit={signUp} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};


export default SignupForm;
