import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom'; 
import { useProductContext } from '../Context/ProductContext';
import Pagination from 'react-bootstrap/Pagination';
import NewArrivalCard from '../Components/NewArrivalCard';
import Accordion from 'react-bootstrap/Accordion';
import Checkbox from '../Components/Checkbox';
import Layout from "../Components/Layout.jsx";
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowDown } from "react-icons/md";

const NewKid = () => {
  const { isLoading, products } = useProductContext();
  const itemsPerPage = 40;
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  if (isLoading) {
    return <div>...is Loading</div>;
  }

  // Filter new arrival kids' items
  const filteredProducts = products.filter(prod => prod.category === 'kids' && prod.is_new);

  // Pagination
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const offset = activePage * itemsPerPage;
  const currentPageProducts = filteredProducts.slice(offset, offset + itemsPerPage);

  // Pagination event handler
  const handlePageChange = ({ selected }) => {
    setActivePage(selected);
  };

  return (
    <Layout>
      <section className='main-kids'>
        <div className="container">
          <div className="row">
            <div className='col-12 text-center nine'>
              <h2>New Arrival <span>Kids' Items</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row justify-content-evenly">
                {currentPageProducts.map(prod => (
                  <div className='col-3 my-2 d-flex justify-content-center align-items-center' key={prod.id}>
                    <NewArrivalCard
                      id={prod.id}
                      link={`/kids/:subcat/${prod.id}`}
                      img={prod.variation_0_image}
                      name={prod.name}
                      brand={prod.brand}
                      price={prod.current_price}
                      oldPrice={prod.raw_price}
                      discount={prod.discount}
                      img2={prod.variation_1_image}
                      initialLikes={prod.likes_count}
                    />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="d-flex justify-content-center mt-3">
                <ReactPaginate
                  previousLabel={'Previous'}
                  nextLabel={'Next'}
                  breakLabel={'...'}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewKid;
