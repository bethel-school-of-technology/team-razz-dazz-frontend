import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./Footer.css";

const Footer = () => {
  return (
    <MDBFooter className="text-center text-lg-left" id="footer">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="/">
          The Noble Cookie
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
