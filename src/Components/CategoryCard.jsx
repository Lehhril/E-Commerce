import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = (props) => {
  const {img,cat,link} = props
  return (
    <>
    <Link to={link}>
    <div className=' cat-card m-3'>
      <div className='cat-img d-flex justify-content-center align-items-center'>
      <img src={img}  alt="" />
      </div>
      <div className='cat-des text-center pt-2 d-flex justify-content-center align-items-center'>
        <p className='fs-5 fw-bold'><a href="">{cat}</a></p>
      </div>
    </div>
    </Link>
    </>
  )
}

export default CategoryCard