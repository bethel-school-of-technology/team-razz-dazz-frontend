import React from "react";
import "../components/HomeTitle.css";
import { MDBBtn } from "mdb-react-ui-kit";


const HomeTitle = () => {
  return (
    <div id="intro-example" className="p-5 text-center bg-image">
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">The Noble Cookie</h1>
            <h5 className="mb-4">
              Best &amp; free guide of responsive web design
            </h5>

            <MDBBtn id="homebutton1" className="btn btn-outline-light btn-lg m-2">
              Already A Noble Cookie Addict? Click to Login
            </MDBBtn>

            <MDBBtn id="homebutton2" className="btn btn-outline-light btn-lg m-2">
              New to The Noble Cookie Experience? Sign Up Here!
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>Home stuffssss goes here</h1>
    //   <MDBBtn gradient="blue">Already A Noble Cookie Addict? Click to Login</MDBBtn>
    //   <MDBBtn gradient="peach">New to The Noble Cookie Experience? Sign Up Here!</MDBBtn>
    // </div>
  );
};


export default HomeTitle;
