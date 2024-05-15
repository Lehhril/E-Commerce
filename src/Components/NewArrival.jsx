import React from 'react';
import { useProductContext } from '../Context/ProductContext';
import NewArrivalCard from './NewArrivalCard';

const NewArrival = () => {
  const { isLoading, newProducts } = useProductContext();

  if (isLoading) {
    return <div>...is Loading</div>;
  }

  return (
    <>
    <div>
    <div className="d-flex ">
      
      {newProducts.map(prod => (
        <NewArrivalCard key={prod.id} id={prod.id} img={prod.variation_0_thumbnail} name={prod.name} price={prod.current_price} />
      ))}
     
    </div>
    </div>
    
      
    </>
  );
};

export default NewArrival;
