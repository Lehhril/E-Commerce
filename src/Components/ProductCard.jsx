import React from 'react'
import cat1 from "../assets/Images/cat1.jpg"

const ProductCard = (props) => {

  const{img,category} = props;

  return (
    <div className=''>
      <figure>
    <img src={img} className='product-img mw-100' alt="Mountains"/>
    <figcaption>{category}</figcaption>
</figure>
    </div>
  )
}

export default ProductCard