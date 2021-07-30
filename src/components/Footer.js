import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./Footer.css";
import { MDBIcon } from "mdb-react-ui-kit";

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

       

        <button type="button" class="btn btn-primary btn-lg btn-floating">
  <i class="fab fa-facebook-f"></i>
</button>


</button>


        <MDBIcon fab icon="instagram" href="instagram.com" id="insta" />
        <MDBIcon fab icon="twitter" href="instagram.com" id="insta" />
      </div>
    </MDBFooter>
  );
}





export default Footer;



