import React from "react";
import Gallery from "react-photo-gallery";
import photos from "../assets/photos";

const TheGallery = ({ direction }) => {
  return <Gallery photos={photos} direction={direction} />;
};

export default TheGallery;
