import React from 'react';
import NoSir from "../assets/dancingcookie.gif";

const Boohoo = () => {
  return (
    <div align="center" style={{padding: "30px"}}>
    <h1>You are not authorized to view this page.</h1>
    <br/>
      <img
        src={NoSir}
        alt="loading..."
        style={{ height: "auto", maxWidth: "300px" }}
      />
    </div>
  );
};

export default Boohoo;