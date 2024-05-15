import React from 'react'

import Slider from "react-slick";
import MainPageCatCard from './MainPageCatCard';
const Accessories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode: false,
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
    <div className="container">
      <div className="row justify-content-center section-padding">
        <div className="col-6 text-center nine">
          <h1>Browse By <span>Categories</span></h1>
        </div>
        <div className="row">
      
      <MainPageCatCard img={"https://source.unsplash.com/man-in-white-crew-neck-shirt-wearing-black-sunglasses-Z4rqvRpRj38"}
            category={"Men T-SHIRT"}
            link={"/men/T-Shirts"}
            discount="30% to 60% off"/>
            <MainPageCatCard 
            img={"https://source.unsplash.com/woman-wearing-blue-coat-mfoH7-IPaBI"}
            category={"Women PullsCardigans"}
            link={"/women/Pulls & Cardigans"}
            discount="30% to 60% off"
            />
      
      <MainPageCatCard 
            img={"https://source.unsplash.com/man-in-white-polo-shirt-9QW52RyBLao"}
            category={"Men SHIRT"}
            link={"/men/Shirts"}
            discount="30% to 60% off"
            />
            <MainPageCatCard 
            img={"https://source.unsplash.com/a-woman-in-a-crochet-top-poses-for-a-picture-FDGisyPaDCw"}
            category={"Women Blouses-Chemises"}
            link={"/women/Blouses & Chemises"}
            discount="Upto 50%"
            />
     
      <MainPageCatCard 
            img={"https://source.unsplash.com/man-in-brown-jacket-and-blue-denim-jeans-sitting-on-brown-concrete-bench-during-daytime-d54wbtjedog"}
            category={"Men JEAN"}
            link={"/men/JEANS"}
            discount="30% to 60% off"
            />
            <MainPageCatCard 
            img={"https://source.unsplash.com/woman-wearing-black-crew-neck-tank-dress-7eDUHk7Jb_o"}
            category={"Women Chemises"}
            link={"/women/Chemises"}
            discount="30% to 60% off"
            />
            <MainPageCatCard 
            img={"https://source.unsplash.com/man-in-black-tuxedo-AjJsc0hk9s0"}
            category={"Men SUIT JACKETS"}
            link={"/men/Suit Jackets"}
            discount="30% to 60% off"
            />
            <MainPageCatCard 
            img={"https://source.unsplash.com/two-womens-wearing-polka-dot-dresses-holding-their-turban-headbands-zMn2MnEJGYY"}
            category={"Robes décontractées"}
            link={"/women/Robes décontractées"}
            discount="40% OFF"
            />
            </div>
      </div>
    
      </div>
   
  )
}

export default Accessories