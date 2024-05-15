import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import LazyLoadSpinner from './LazyLoadSpinner';

// Define a lazy-loaded version of CategoryCard
const LazyCategoryCard = React.lazy(() => import('./CategoryCard'));

// Create a wrapper component to handle suspense
const SuspenseCategoryCard = (props) => (
  <Suspense fallback={<LazyLoadSpinner></LazyLoadSpinner>}>
    <LazyCategoryCard {...props} />
  </Suspense>
);

const CategoryCard = (props) => {
  const { img, cat, link } = props;
  return (
    <Link to={link}>
      <div className='cat-card m-3'>
        <div className='cat-img d-flex justify-content-center align-items-center'>
          <img src={img} alt="" />
        </div>
        <div className='cat-des text-center pt-2 d-flex justify-content-center align-items-center'>
          <p className='fs-5 fw-bold'><a href="">{cat}</a></p>
        </div>
      </div>
    </Link>
  );
};

export default SuspenseCategoryCard;