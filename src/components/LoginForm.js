import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    if (username !== "" && password !== "") {
      const req = {
        username,
        password,
      };

      axios.post("http://localhost:3000/api/user/login", req).then((result) => {
        const token = result.data.jwt;
        localStorage.setItem("myJWT", token);
        console.log(result.data);
      });
    }
  };

  return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
        <Button onSubmit={signIn} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
};

export default LoginForm;