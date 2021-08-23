import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import cookies from "../assets/cookies.gif";

const OrderSubmit = () => {
  const [profile, setProfile] = useState([]);

  const token = localStorage.getItem("myJWT");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then(
        (result) => {
          setProfile(result.data.currentUser);
        },
        (error) => {
          console.log("error");
        }
      );
  }, [token]);


  return (
    <div style={{ padding: "100px" }} align="center">
      <h1 align="center">Thank you for your order, {profile.firstName}!</h1>
      <h5 align="center">Please check your email for order details. We will be in touch with you shortly!</h5>
      <br/>
      <br/>
      <img src={cookies} alt="loading..." style={{borderRadius: "500px", height:"auto", maxWidth: "150px"}}/>
    </div>
  );
};

export default OrderSubmit;
