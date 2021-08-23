import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBIcon
} from "mdb-react-ui-kit";
import "./Orders.css";
import sesame from "../assets/sesame.gif";


const Orders = () => {
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("myJWT");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/order/usersubmission", {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        console.log(result);
        setOrders(result.data.bakedGoods);
      });
  }, [token]);


  return (
    <div>
      <ul style={{padding: "0px"}}>
        {orders.map((order) => (
          <li key={order._id} style={{ padding: "10px" }}>
            <MDBCard style={{ maxWidth: "22rem", backgroundColor: "beige" }}>
              <MDBCardImage
                src={sesame}
                position="top"
                alt="..."
              />
              <MDBCardBody align="center">
                <MDBCardTitle style={{ fontSize: "14px" }}>
                  Order #: {order._id}
                </MDBCardTitle>
                <MDBCardText>
                  <MDBIcon fas icon="user" /> {order.firstName} {order.lastName}
                </MDBCardText>
                <MDBCardText>
                  <MDBIcon fas icon="envelope" /> {order.email}
                </MDBCardText>
                <MDBCardText>
                  <MDBIcon fas icon="mobile-alt" /> {order.phoneNumber}
                </MDBCardText>
                <MDBCardText>
                  <MDBIcon fas icon="map-marker-alt" /> {order.address}
                </MDBCardText>
                <MDBCardText>
                  {" "}
                  <MDBIcon fas icon="comment" /> {order.orderSummary}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
