import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router";
import { MDBBtn, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import "../components/SignupForm.css";
import { validEmail, validPassword } from "../regex";


const SignupForm = ({history}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
  };


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
      


      axios
        .post("http://localhost:3000/api/user/register", req)
        .then((result) => {
          const token = result.data.jwt;
          localStorage.setItem("myJWT", token);
          console.log(result.data);
          history.push("/login");
        });
    }
  };

  return (
    <Form onSubmit={signUp} align="center">
      <br />
      <MDBRow>
        {emailErr && <div style={{ color: "red" }}>Email is invalid</div>}
        {pwdError && <div style={{ color: "red" }}>Password is invalid</div>}
        <MDBCol>
          <MDBInput
            label="First Name"
            id="form1"
            type="text"
            style={{ color: "black" }}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            label="Last Name"
            id="form1"
            type="text"
            style={{ color: "black" }}
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
            style={{ color: "black" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </MDBCol>
      </MDBRow>
      <br />
      <MDBRow>
        <MDBCol>
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
        onSubmit={signUp}
        onClick={validate}
        id="signupbutton"
        className="btn btn-lg m-2"
      >
        Submit
      </MDBBtn>
      <br />
      <br />
      <br />
      <br />
      <br/>
    </Form>
  );
};


export default withRouter(SignupForm);
