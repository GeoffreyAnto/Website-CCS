import React from "react";
import "./Services.css";

import AndroidSharpIcon from "@material-ui/icons/AndroidSharp";
import CodeIcon from "@material-ui/icons/Code";
import CloudIcon from "@material-ui/icons/Cloud";
import WorkIcon from "@material-ui/icons/Work";

const Services = (props) => {
  return (
    <div className="main_Container">
      <div onClick={()=>{}} className="cards">
        <div className="HeaderText">
          <CodeIcon fontSize="large" />
          <span className="TitleText">WEB DEVELOPMENT</span>
        </div>
        <div className="Text">
          We are providing a best web development in various languages.
        </div>
      </div>
      <div onClick={()=>{}} className="cards">
        <div className="HeaderText">
          <AndroidSharpIcon fontSize="large" />
          <span className="TitleText">MOBILE APPLICATIONS</span>
        </div>
        <div className="Text">
          We provide design engagement, interaction and brand loyalty mobile
          applications.
        </div>
      </div>
      <div onClick={()=>{}} className="cards">
        <div className="HeaderText">
          <CloudIcon fontSize="large" />
          <span className="TitleText"> CLOUD DEVELOPMENT</span>
        </div>
        <div className="Text">
          We provide great outsourcing with affordable cost and minimal time.
        </div>
      </div>
      <div onClick={()=>{}} className="cards">
        <div className="HeaderText">
          <WorkIcon fontSize="large" />
          <span className="TitleText">DATABASE MANAGEMENT</span>
        </div>
        <div className="Text">
          We help to building a world-class people and organisational
          capabilities as a source of competitive advantage.
        </div>
      </div>
    </div>
  );
};

export default Services;