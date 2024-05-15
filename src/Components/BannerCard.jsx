import React from 'react'

import { Link } from 'react-router-dom';



const BannerCard = (props) => {
  const { title, img1, img2, slogan,button,customClass,link} = props;
  
  
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='banner-1'>
          <img src={img1} className='banner-img ' alt="" />
          
        </div>
        <div className={`d-flex justify-content-center align-items-center flex-column mx-4 ${customClass}`} data-aos="fade-left">
          <h1>{title}</h1>
          <p className='mb-3'>{slogan}</p>
          <Link to={link}>
          <a class="fancy mt-3" href="">
            <span class="top-key"></span>
            <span class="text">{button}</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </a>
          </Link>
        </div>
        <div className='banner-2'>
          <img src={img2} className='banner-img' alt="" />
        </div>
      </div>
    </>
  )
}

export default BannerCard