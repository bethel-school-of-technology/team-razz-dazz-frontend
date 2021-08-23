import React from "react";
import TheGallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <div style={{padding: "20px"}}>
    <h1 align="center">Check out previous orders from our happy customers!</h1>
      <TheGallery />
    </div>
  );
};

export default GalleryPage;
