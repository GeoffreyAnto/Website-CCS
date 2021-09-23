import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

import Logo from "./Logo.png";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = (props) => {
  return (
    <div className="navbar-Container">
      <div className="navbar-Elements">
        <img className="Image_Logo" src={Logo} alt="" />
      </div>

      <div className="navbar-Elements-Links">
        <div>
          <Link to="/" className="NavBarText">
            Home
          </Link>
        </div>
        <div>
          <span className="NavBarText">About Us</span>
        </div>
        <div>
          <span className="NavBarText">Services</span>
        </div>
        <div>
          <span className="NavBarText">Product</span>
        </div>
        <div>
          <span className="NavBarText">
            Contact Us
          </span>
        </div>
      </div>
      <div className="navbar-Elements-hamburger">
        <MenuIcon className="icon" onClick={() => {}} size="large" />
      </div>
    </div>
  );
};

export default Navbar;
