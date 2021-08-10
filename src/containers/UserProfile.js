import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";
import "./UserProfile.css";

const UserProfile = () => {
  const [profile, setProfile] = useState([]);

  const token =  localStorage.getItem("myJWT");

 useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/profile", {
        headers: {
          Authorization: token
        },
      })
      .then((result) => {
        setProfile(result.data.currentUser);
      });
  }, [token]);

  console.log(profile.firstName);

  return (
    <div className="App container py-3" id="profilecontainer">
      <MDBCol md="12">
        <MDBCard alignment="center">
          <MDBCardHeader id="userheader">
            {profile.firstName} {profile.lastName}
          </MDBCardHeader>
          <MDBRow>
            <MDBCol>
              <MDBCardBody>
                <MDBCardTitle>Email</MDBCardTitle>
                <MDBCardTitle>Username</MDBCardTitle>
              </MDBCardBody>
            </MDBCol>
            <MDBCol>
              <MDBCardBody>
                <MDBCardText>{profile.email}</MDBCardText>
                <MDBCardText>{profile.username}</MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          <MDBCardFooter>Orders</MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default UserProfile;
