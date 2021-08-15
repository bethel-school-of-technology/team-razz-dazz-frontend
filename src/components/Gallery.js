import React from "react";
import "./Gallery.css";
import {
  MDBCol, MDBRow
} from "mdb-react-ui-kit";

const Gallery = () => {
  return (
    <div>
      <h1>Doth thoust like cookies?</h1>
      <div class="d-flex align-items-start mb-3">
        <MDBRow>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie1.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie2.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie3.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
        </MDBRow>
      </div>
      <div class="d-flex align-items-start bg-light mb-3">
        <MDBRow>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie4.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie5.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie6.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
        </MDBRow>
      </div>
      <div class="d-flex align-items-start bg-light mb-3">
        <MDBRow>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie7.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie8.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie9.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
        </MDBRow>
      </div>
      <div class="d-flex align-items-start bg-light mb-3">
        <MDBRow>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie10.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie11.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
          <MDBCol>
            <img
              src={"https://noblecookie.s3.amazonaws.com/cookie12.jpg"}
              className="img-fluid shadow-4"
              alt="..."
              id="galleryimage"
            />
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}

export default Gallery;
