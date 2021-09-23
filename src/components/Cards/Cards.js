import React from "react";
import "./Cards.css";

import Card from "./Card/Card";

import DATA from "./Data";
// import Detail from "../../screens/Detail/Detail";

const Technologies = (props) => {
  return (
    <div className="Container">
      {DATA.map((data) => {
        return (
          <div className="Card-Size">
            <Card
              onClick={() => {}}
              imgUrl={data.imgUrl}
              Text1={data.Title}
              Text2={data.Paragraph}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
