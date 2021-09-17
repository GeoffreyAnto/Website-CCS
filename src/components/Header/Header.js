import React from "react";
// import "./Header.css";
import Slider from "react-slick";

import styled from "styled-components";

import Pic4 from "../../images/Pic4.jpg";
import Pic7 from "../../images/Pic7.jpg";
import Pic8 from "../../images/Pic8.jpg";
import Pic9 from "../../images/Pic9.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  fade: false,
  infinite: true,
  speed: 20,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
};

const Header = () => {
  return (
    <Carousel {...settings}>
      <Wrap>
        <img  src={Pic9} alt="" />
      </Wrap>
      <Wrap>
        <img src={Pic4} alt="" />
      </Wrap>
      <Wrap>
        <img src={Pic7} alt="" />
      </Wrap>
      <Wrap>
        <img src={Pic8} alt="" />
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  height: 65vh;
  width: 100%;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden; 

  img {
    height: 65vh;
    width: 100%;
    object-fit: fill;
  }
`;

export default Header;
