import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Cookie from "../assets/cookielogo.png";
import "./Footer.css";

export default function App() {
  return (
    // <div className="footbody">
    //   <main>
    <MDBFooter
      style={{ backgroundColor: "lightseagreen" }}
      className="text-white text-center text-lg-left"
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">
              <img src={Cookie} alt="cookie" id="cookie" href="/" />
            </h5>

            <p>
              “And above all, watch with glittering eyes the whole world around
              you because the greatest secrets are always hidden in the most
              unlikely places. Those who don't believe in magic will never find
              it.” ― Roald Dahl
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 id="navheader">MENU</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" id="footerlink">
                  Home
                </a>
              </li>
              <br />
              <li>
                <a href="/gallery" id="footerlink">
                  Gallery
                </a>
              </li>
              <br />
              <li>
                <a href="/contactpage" id="footerlink">
                  Contact Us
                </a>
              </li>
              <br />
              <li>
                <a href="/signup" id="footerlink">
                  Signup
                </a>
              </li>
              <br />
              <li>
                <a href="/login" id="footerlink">
                  Login
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 id="navheader">SOCIALS</h5>

            <a href="https://www.facebook.com/" className="text-white">
              <MDBIcon
                fab
                icon="facebook-square"
                size="`1.5x"
                href="https://www.facebook.com/"
                style={{ padding: "5px" }}
              />
            </a>

            <a href="https://twitter.com/" className="text-white">
              <MDBIcon fab icon="twitter-square" size="1.5x" />
            </a>

            <a
              href="https://www.instagram.com/explore/tags/thenoblecookie/?hl=en"
              className="text-white"
            >
              <MDBIcon
                fab
                icon="instagram"
                size="1.5x"
                style={{ padding: "5px" }}
              />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="/">
          The Noble Cookie
        </a>
      </div>
    </MDBFooter>
      /* </main>
    </div> */
  );
}