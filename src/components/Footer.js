import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Cookie from "../assets/cookielogo.png";

export default function App() {
  return (
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
              Beautifully designed, carefully crafted custom cookies so good,
              they'd make your grandma weep with jealousy!
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">menu</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contactpage" className="text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/signup" className="text-white">
                  Signup
                </a>
              </li>
              <li>
                <a href="/login" className="text-white">
                  Login
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">socials</h5>

            <a href="https://www.facebook.com/" className="text-white">
              <MDBIcon
                fab
                icon="facebook-square"
                size="`1x"
                href="https://www.facebook.com/"
                style={{ padding: "5px" }}
              />
            </a>

            <a href="https://twitter.com/" className="text-white">
              <MDBIcon fab icon="twitter-square" size="1x" />
            </a>

            <a href="https://www.instagram.com/" className="text-white">
              <MDBIcon
                fab
                icon="instagram"
                size="1x"
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
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}