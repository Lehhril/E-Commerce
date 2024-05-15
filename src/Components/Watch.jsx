import React from 'react'
import Slider from 'react-slick';
const Watch = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "100px",
    centerMode: false,
 
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
    <Slider {...settings}>
      <div >
        <div className="">
        <div className='watch-main container '>
        <div className="row inner-watch">
        <div className="col-4 ms-5 d-flex justify-content-center flex-column align-items-center">
          <div className='d-flex justify-content-center align-items-start flex-column ' data-aos="fade-up">
          <h1 className='watch-title'>Exclusive <span >Womens<br/>Watch Collection.</span><br/>Now Availabe at upto 65% Off</h1>
          <a class="fancy mt-3" href="#">
                  <span class="top-key"></span>
                  <span class="text">Shop Here</span>
                  <span class="bottom-key-1"></span>
                  <span class="bottom-key-2"></span>
                </a>
          </div>
          
        </div>
      </div>
        </div>
        </div>
      
      </div>
      <div >
      <div className='watch-main-1 container'>
        <div className="row inner-watch">
        <div className="col-4 ms-5 d-flex justify-content-center flex-column align-items-center">
          <div className='d-flex justify-content-center align-items-start flex-column' data-aos="fade-up">
          <h1 className='watch-title'>Premium <span >Mens<br/>Watch Collection.</span><br/>Now Availabe at upto 70% Off</h1>
          <a class="fancy mt-3" href="#">
                  <span class="top-key"></span>
                  <span class="text">Shop Here</span>
                  <span class="bottom-key-1"></span>
                  <span class="bottom-key-2"></span>
                </a>
          </div>
          
        </div>
      </div>
        </div>
      </div>
    </Slider>
    </div>
    
    </>
  )
}

export default Watch