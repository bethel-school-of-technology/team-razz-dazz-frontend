import React from 'react';
import NoSir from "../assets/uthought.gif";

const Boohoo = () => {
  return (
    <div align="center" style={{padding: "30px"}}>
    <h1>You thought!</h1>
    <br/>
      <img
        src={NoSir}
        alt="loading..."
        style={{ height: "auto", maxWidth: "5900px" }}
      />
    </div>
  );
};

export default Boohoo;