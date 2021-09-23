import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="container">
      <img
        className="Image"
        src={props.imgUrl}
        alt=""
      />
      <div className="textContainer">
        <span className="Text1">{props.Text1}</span>
        <span className="Text2">{props.Text2}</span>
      </div>
    </div>
  );
};

export default Card;
