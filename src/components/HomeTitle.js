import React from "react";
import "../components/HomeTitle.css";
import { MDBBtn, MDBTypography } from "mdb-react-ui-kit";



const HomeTitle = () => {
  return (
    <div id="intro-example" className="p-5 text-center bg-image">
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <MDBTypography tag='h1' className="mb-3">The Noble Cookie</MDBTypography>
            <MDBTypography tag="h1" className="mb-4">
              Beautifully designed, carefully crafted custom cookies so good, they'd make your grandma weep with jealousy!
            </MDBTypography>

            <MDBBtn id="homebutton1" className="btn btn-outline-light btn-lg m-2" href="/login">
              Already A Noble Cookie Addict? Click to Login
            </MDBBtn>

            <MDBBtn id="homebutton2" className="btn btn-outline-light btn-lg m-2" href="/signup">
              New to The Noble Cookie Experience? Sign Up Here!
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomeTitle;
