import React from 'react'
import { Link } from 'react-router-dom';

const MainPageCatCard = (props) => {
  const{img,category,discount,link} = props;
  return (
    <>
    <div className="col-3 py-3">
      <Link to={link}>
      <div className='cat-main-body d-flex flex-column justify-content-center align-items-center'>
        <div className="cat-main-img">
          <img src={img} alt="" />
        </div>
        <div className="cat-main-content d-flex justify-content-center align-items-center flex-column text-center">
          <h6>{category}</h6>
          <h4>{discount}</h4>
          <p>Shop Now</p>
        </div>
      </div>
      </Link>
    </div>
    </>
  )
}

export default MainPageCatCard