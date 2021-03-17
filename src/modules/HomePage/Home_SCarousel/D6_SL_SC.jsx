import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkinImage from '../../../assets/Images/SkinImage1.jpg'
import './D6_SL_SC_CSS.css'

const D6_SL_SC_Slider = {
 /* marginTop: "120px", */
  width: "100%"
}
const D6_SL_SC_IDiv = {
/*  height: "400px" */
width: "100%",
backgroundColor: "orange"
}
export default function D6_SL_SC() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 0,
    swipeToSlide: false,
    autoplay: true
  };
  return (
    <div style={D6_SL_SC_Slider} className="D6_SL_SC_Slider_Div">
      <Slider {...settings} >
        <div style={D6_SL_SC_IDiv}>
          <img  src={SkinImage} alt="Image1"/>
          <div className="D6_SL_SC_TDiv">
            <h3>Heading1</h3>
            <h3>Heading2</h3>
          </div>
        </div>
        <div style={D6_SL_SC_IDiv}>
          <img src={SkinImage} alt="Image1"/>
        </div>
        <div style={D6_SL_SC_IDiv}>
          <img src={SkinImage} alt="Image1"/>
        </div>
      </Slider>
    </div>
  );
}