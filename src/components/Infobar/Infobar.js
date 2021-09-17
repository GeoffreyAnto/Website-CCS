import React from "react";
import "./Infobar.css";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const Infobar = () => {
  return (
    <div className="infobar">
      <div className="icons">
        <InstagramIcon className="icon" onClick={() =>{}}/>
        <FacebookIcon className="icon" onClick={() =>{}}/>
        <InstagramIcon className="icon" onClick={() =>{}}/>
        <FacebookIcon className="icon" onClick={() =>{}}/>
      </div>
    </div>
  );
};

export default Infobar;
