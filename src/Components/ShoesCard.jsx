import React from 'react'
import cat1 from "../assets/Images/cat1.jpg"
import { Link } from 'react-router-dom';

const ShoesCard = (props) => {

  const { img, category,link } = props;

  return (
    <div className=''>
      <Link to={link}>
        <figure>
          <img src={img} className='shoe-img mw-100' alt="Mountains" />
          <figcaption>{category}</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default ShoesCard