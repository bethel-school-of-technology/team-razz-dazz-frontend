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
  MDBCol,
} from "mdb-react-ui-kit";
import "./UserProfile.css";
import Orders from "../components/Orders";

const UserProfile = () => {
  const [profile, setProfile] = useState([]);

  const token = localStorage.getItem("myJWT");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        setProfile(result.data.currentUser);
      }, (error) => {
        console.log("error")
      });
  }, [token]);


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
            <Orders/>
        </MDBCard>
      </MDBCol>
    </div>
  );
};


  /* <ul>
              {orders.map((order) => (
                <li key={order._id}>{order.address}</li>
              ))}
            </ul> */


export default UserProfile;

