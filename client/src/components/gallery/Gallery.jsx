import React from "react";
import "./gallery.css"; // Create this CSS file later for styling
import { all } from "./data";

const Gallery = () => {
  return (
    <div className="gallery">
      {all?.map((all, index) => (
        <div className="gallery-item" key={index}>
          <img src={all} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
