import React from "react";
import "./Cards.css";

import Card from "./Card/Card";

import DATA from "./Data";

import { Link } from "react-router-dom";

// import Detail from "../../screens/Detail/Detail";

const Technologies = (props) => {
  return (
    <div className="Container">
      {DATA.map((data) => {
        return (
          <div key={data.id} className="Card-Size">
            <Link
              to={`/detail/${data.id}`}
              style={{ color: "black", textDecorationLine: "none" }}
            >
              <Card
                onClick={() => {}}
                imgUrl={data.imgUrl}
                Text1={data.Title}
                Text2={data.Paragraph}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
