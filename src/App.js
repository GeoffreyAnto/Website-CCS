import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Services from "./components/Services/Services";
import Infobar from "./components/Infobar/Infobar";


import Technologies from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Infobar />
      <Navbar />
      <Header />
      <Services />
      <Technologies />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
