import React from "react";
import "../../App.css";
import ImageCard from "../ImageCard";
import "./Certificates.css";

export default function Certificates() {
  return (
    <div className="certificates-container">
      <div className="image-row">
        <ImageCard
          image="images/jetpackcomposeudemysertifikasi.jpg"
          text="certificate"
        />
        <ImageCard image="images/fluttercert.png" text="certificate" />
      </div>
      <div className="image-row">
        <ImageCard image="images/android.png" text="certificate" />
        <ImageCard image="images/image.png" text="certificate" />
      </div>
    </div>
  );
}
