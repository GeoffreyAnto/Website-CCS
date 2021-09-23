import React from "react";

import "./Home.css";

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";
// import Services from "../../components/Services/Services";
import Infobar from "../../components/Infobar/Infobar";
import Technologies from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Infobar />
      <Navbar />
      <Header />
      <Technologies />
      {/* <Services /> */}
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
