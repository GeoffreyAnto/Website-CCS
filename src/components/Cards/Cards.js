import React from "react";
import "./Cards.css";

import Card from "./Card/Card";

const Technologies = (props) => {
  return (
    <div className="Container">    
      <div className="Card-Size">
        <Card />
      </div>
      <div className="Card-Size">
        <Card />
      </div>
      <div className="Card-Size">
        <Card />
      </div>
      <div className="Card-Size">
        <Card />
      </div>
      <div className="Card-Size">
        <Card />
      </div>
      <div className="Card-Size">
        <Card />
      </div>
    </div>
  );
};

export default Technologies;
