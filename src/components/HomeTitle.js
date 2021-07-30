import React from "react";
import "../components/HomeTitle.css";
import { MDBBtn } from "mdbreact";


const HomeTitle = () => {
  return (
    <div>
      <h1>Home stuffssss goes here</h1>
      <MDBBtn gradient="blue">Already A Noble Cookie Addict? Click to Login</MDBBtn>
      <MDBBtn gradient="peach">New to The Noble Cookie Experience? Sign Up Here!</MDBBtn>
    </div>
  );
};


export default HomeTitle;
