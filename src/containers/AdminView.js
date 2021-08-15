import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCardImage
} from "mdb-react-ui-kit";
import "./UserProfile.css";

const AdminView = () => {
  const [admin, setAdmin] = useState([]);
  const [adminOrders, setAdminOrder] = useState ([]);

  const token = localStorage.getItem("myJWT");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/admin", {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        console.log(result)
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
      <ul>
        {admin.map((admin) => (
          <li key={admin._id} style={{ padding: "10px" }}>
            <MDBCard style={{ maxWidth: "20rem", backgroundColor: "beige" }}>
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle style={{ fontSize: "14px" }}>
                  Order #: {admin._id}
                </MDBCardTitle>
                <MDBCardText>
                  <MDBIcon fas icon="user" /> {admin.firstName} {admin.lastName}
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
      <h1>Orders</h1>
      <ul>
        {adminOrders.map((adminOrder) => (
          <li key={adminOrder._id} style={{ padding: "10px" }}>
            <MDBCard style={{ maxWidth: "20rem", backgroundColor: "beige" }}>
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle style={{ fontSize: "14px" }}>
                  Order #: {adminOrder._id}
                </MDBCardTitle>
                <MDBCardText>
                  <MDBIcon fas icon="user" /> {adminOrder.firstName} {adminOrder.lastName}
                </MDBCardText>
                <MDBCardText>
                  <MDBIcon fas icon="envelope" /> {adminOrder.orderSummary}
                </MDBCardText>
                <MDBCardText>
                  <MDBIcon fas icon="mobile-alt" /> {admin.username}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminView;
