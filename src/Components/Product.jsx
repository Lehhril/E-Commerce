import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import ProductCard from './ProductCard';
import cat1 from "../assets/Images/cat1.jpg"
import Slider from 'react-slick';
import cat2 from "../assets/Images/cat2-min.jpg"
import cat3 from "../assets/Images/cat3.jpg"

import cat4 from "../assets/Images/cat4-min.jpg"
import catw1 from "../assets/Images/catw1-min.jpg"
import catw2 from "../assets/Images/catw7.jpg"
import catw3 from "../assets/Images/catw3-min.jpg"

import catw5 from "../assets/Images/catw6.jpg"
const Product = () => {


  // Filter products until id 4
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  autoplay: true,
  lazyload:true,
 
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
    
    <>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center" data-aos="fade-up">
          <div className="col-6 text-center pb-5 nine">
            <h1>Categories <span>Browse by Category</span></h1>
          </div>
          <Slider {...settings}>
      <div>
      <div className="d-flex justify-content-evenly align-items-center">
        <ProductCard img={cat1} category={"T-Shirts"}/>
        <ProductCard img={cat2} category={"Pantaloon"}/>
        <ProductCard img={cat3} category={"Overcoats"}/>
        <ProductCard img={cat4} category={"Shirts"}/>
        </div>
      </div>
      <div>
      <div className="d-flex justify-content-evenly align-items-center">
        <ProductCard img={catw1} category={"T-Shirts"}/>
        <ProductCard img={catw2} category={"Corsets"}/>
        <ProductCard img={catw3} category={"Vestes"}/>
        <ProductCard img={catw5} category={"Blouses"}/>
        </div>
      </div>
      
    </Slider>
          
        </div>
      </div>
      
    </>
  );
};

export default Product;