import React from "react";
import "../../App.css";
import ImageCard from "../ImageCard";
import Footer from "../Footer";

export default function Certificates() {
  return (
    <>
      <ImageCard
        image="images/jetpackcomposeudemysertifikasi.jpg"
        text="certificate"
      />
      <ImageCard image="images/fluttercert.png" text="certificate" />
    </>
  );
}
