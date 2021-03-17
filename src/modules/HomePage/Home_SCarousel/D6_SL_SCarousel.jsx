import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SkinImage from '../../../assets/Images/SkinImage1.jpg'
import './D6_SL_SC_CSS.css'

const Div1 = {
    marginTop:"0px"
}
export default function D6_SL_SCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
      <div style={Div1} className="D6_SL_SC_Slider_Div">
    <Slider {...settings}>
      <div>
          <img src={SkinImage} alt="Image1"/>
        </div>
        <div >
          <img src={SkinImage} alt="Image1"/>
        </div>
    </Slider>
    </div>
  );
}