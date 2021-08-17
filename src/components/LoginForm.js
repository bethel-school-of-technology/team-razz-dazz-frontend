import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { withRouter } from 'react-router';
import "../components/LoginForm.css";
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBInput
} from "mdb-react-ui-kit";


const LoginForm = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    if (username !== "" && password !== "") {
      const req = {
        username,
        password,
      };
      axios
        .post("http://localhost:3000/api/user/login", req)
        .then((result) => {
          console.log(result);
          if (result.data.status === 200) {
            const token = result.data.token;
            localStorage.setItem("myJWT", token);
            history.push("/profile");
            window.location.reload();
          } else {
           setIncorrectPassword("Incorrect Username or Password")
           console.log(result.data.message)
          }
        });
    }
  };


  return (
        <Form onSubmit={signIn} align="center">
          <br />
          <MDBRow>
            <MDBCol>
            {incorrectPassword !== "" && <div style={{color: "red"}}>{incorrectPassword}</div>}
              <MDBInput
                label="Username"
                id="form1"
                type="text"
                style={{ color: "black" }}
                onChange={(e) => setUsername(e.target.value)}
              />
            </MDBCol>
          </MDBRow>
          <br />
          <MDBRow>
            <MDBCol>
              <MDBInput
                label="Password"
                id="form1"
                type="password"
                style={{ color: "black" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </MDBCol>
          </MDBRow>
          <br />
          <MDBBtn
            onSubmit={signIn}
            id="signupbutton"
            className="btn btn-outline-light btn-lg m-2"
          >
            Submit
          </MDBBtn>
        </Form>
  );
};

export default withRouter(LoginForm);
