import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { MDBBtn } from "mdb-react-ui-kit";
import { withRouter } from 'react-router';
import "../components/LoginForm.css";


const LoginForm = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    if (username !== "" && password !== "") {
      const req = {
        username,
        password,
      };
      axios.post("http://localhost:3000/api/user/login", req).then((result) => {
        const token = result.data.token;
        localStorage.setItem('myJWT', token);
        history.push('/profile');
      });
    }
  };


  return (
    <div className="App container py-3">
      <Form onSubmit={signIn}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        <div align="center">
          <MDBBtn
            onSubmit={signIn}
            id="loginbutton"
            className="btn btn-outline-light btn-lg m-2"
          >
            Login
          </MDBBtn>
        </div>
      </Form>
    </div>
  );
};

export default withRouter(LoginForm);
