import React, { lazy } from 'react'

import BannerCard from './BannerCard';

import bannerMen from "../assets/Images/bannerMen-min.jpg"

import bannerKid from "../assets/Images/bannerKid.jpg"
import bannerKid2 from "../assets/Images/bannerKid2-min.jpg"
import banImg12 from "../assets/Images/banImg12-min.jpg"
import banImg22 from "../assets/Images/banImg22-min.jpg"
import banMen1 from "../assets/Images/banMen1-min.jpg"
import Slider from "react-slick";
import accWomen from "../assets/Images/accWomen2.jpg"




const Banner2 = () => {
 
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
    lazyload:true,
    centerPadding: "105px",
   autoplay: true,
    autoplaySpeed: 4000,
      arrows: false,
      appendDots: dots => (
        <div
          style={{
            color: "#cdcdcd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "2px" }}> {dots} </ul>
        </div>
      )
    };
  return (
    <div className=" px-2 container-fluid">
      <div className="banner">
      <div className="slider-container">
      
      
    <Slider {...settings}>
      <div>
      <BannerCard title="Mens Clothing" button="Shop Men" link="/men" img1={bannerMen} customClass="mens-desc" img2={banMen1} slogan="Timeless Elegance: Men's Clothing, Refined"/>
      </div>
      <div>
      <BannerCard title="Womens Clothing" button="Shop Women" link="/women" img1={banImg12} img2={banImg22} customClass="mens-desc" slogan="Flaunt Your Flair: Unleash Your Signature Style"/>
      </div>
      <div>
      <BannerCard title="Kids Clothing" button="Shop Kid" link="/kid" img1={bannerKid} img2={bannerKid2} customClass="mens-desc" slogan="Playful Prints, Happy Kids: Fashion Fun for Little Ones"/>
      </div>
    </Slider>
    </div>
      </div>
    </div>
  )
}

export default Banner2