import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./UserProfile.css";
import Boohoo from "../components/Boohoo";


const AdminView = () => {
  const [admin, setAdmin] = useState([]);
  const [adminOrders, setAdminOrder] = useState([]);

  const token = localStorage.getItem("myJWT");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/admin", {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        console.log(result);
        setAdmin(result.data.allUsers);
      });

    axios
      .get("http://localhost:3000/api/order/adminorderview", {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        console.log(result);
        setAdminOrder(result.data.allOrders);
      });
  }, [token]);

  return (
    <div>
      {admin && adminOrders ? (
        <>
          <br />
          <h1 align="center">Users</h1>
          <ul align="center" style={{ padding: "0px" }}>
            {admin.map((admin) => (
              <li key={admin._id} style={{ padding: "10px" }}>
                <MDBCard
                  style={{ maxWidth: "20rem", backgroundColor: "beige" }}
                >
                  <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: "14px" }}>
                      User ID: {admin._id}
                    </MDBCardTitle>
                    <MDBCardText>
                      <MDBIcon fas icon="user" /> {admin.firstName}{" "}
                      {admin.lastName}
                    </MDBCardText>
                    <MDBCardText>
                      <MDBIcon fas icon="envelope" /> {admin.email}
                    </MDBCardText>
                    <MDBCardText>
                      <MDBIcon fas icon="mobile-alt" /> {admin.username}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </li>
            ))}
          </ul>
          <h1 align="center">Orders</h1>
          <ul align="center" style={{ padding: "0px" }}>
            {adminOrders.map((adminOrder) => (
              <li key={adminOrder._id} style={{ padding: "10px" }}>
                <MDBCard
                  style={{ maxWidth: "20rem", backgroundColor: "beige" }}
                >
                  <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: "14px" }}>
                      Order #: {adminOrder._id}
                    </MDBCardTitle>
                    <MDBCardText>
                      <MDBIcon fas icon="user" /> {adminOrder.firstName}{" "}
                      {adminOrder.lastName}
                    </MDBCardText>
                    <MDBCardText>
                      <MDBIcon fas icon="envelope" /> {adminOrder.email}
                    </MDBCardText>
                    <MDBCardText>
                      <MDBIcon fas icon="mobile-alt" /> {adminOrder.phoneNumber}
                    </MDBCardText>
                    <MDBCardText>
                      <MDBIcon fas icon="map-marker-alt" /> {adminOrder.address}
                    </MDBCardText>
                    <MDBCardText>
                      <MDBIcon fas icon="comment" /> {adminOrder.orderSummary}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Boohoo/>
      )}
    </div>
  );
};

export default AdminView;
