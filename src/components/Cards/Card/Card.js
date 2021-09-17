import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container">
      <img
        className="Image"
        src="https://www.datamatics.com/hubfs/App-Prototyping.svg"
        alt=""
      />
      <div className="textContainer">
        <span className="Text1">App Development</span>
        <span className="Text2"> Design thinking approach to maximize ROI</span>
      </div>
    </div>
  );
};

export default Card;
