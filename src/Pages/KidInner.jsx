import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom'; 
import { useProductContext } from '../Context/ProductContext';
import { useParams } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import NewArrivalCard from '../Components/NewArrivalCard';
import Accordion from 'react-bootstrap/Accordion';
import Checkbox from '../Components/Checkbox';
import Layout from "../Components/Layout.jsx";
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowDown } from "react-icons/md";

const KidInner = () => {
  const { subcat } = useParams();
  const { isLoading, products } = useProductContext();
  const itemsPerPage = 40;
  const [activePage, setActivePage] = useState(0);
  const [selectedOption, setSelectedOption] = useState('relevant');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedDiscountRanges, setSelectedDiscountRanges] = useState([]);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  if (isLoading) {
    return <div>...is Loading</div>;
  }


  const filteredProducts = products.filter(prod => prod.category === 'kids' && prod.subcategory === subcat && prod.variation_0_thumbnail);

  let sortedProducts = [...filteredProducts];
  switch (selectedOption) {
    case 'popularity':
      sortedProducts.sort((a, b) => b.likes_count - a.likes_count);
      break;
    case 'new':
      sortedProducts = filteredProducts.filter(prod => prod.is_new);
      break;
    case 'discount':
      sortedProducts.sort((a, b) => b.discount - a.discount);
      break;
    case 'highToLow':
      sortedProducts.sort((a, b) => b.current_price - a.current_price);
      break;
    case 'lowToHigh':
      sortedProducts.sort((a, b) => a.current_price - b.current_price);
      break;
    default:
      break;
  }



  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleBrandCheckboxChange = (brandName, isChecked) => {
    if (isChecked) {
      setSelectedBrands([...selectedBrands, brandName]);
    } else {
      setSelectedBrands(selectedBrands.filter(brand => brand !== brandName));
    }
  };

  const handleSizeCheckboxChange = (size, isChecked) => {
    if (isChecked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    }
  };

  const handleDiscountCheckboxChange = (range, isChecked) => {
    if (isChecked) {
      setSelectedDiscountRanges([...selectedDiscountRanges, range]);
    } else {
      setSelectedDiscountRanges(selectedDiscountRanges.filter(r => r !== range));
    }
  };

  let filteredByBrandProducts = [...sortedProducts];
  if (selectedBrands.length > 0) {
    filteredByBrandProducts = sortedProducts.filter(prod => selectedBrands.includes(prod.brand));
  }

  let filteredBySizeProducts = [...filteredByBrandProducts];
  if (selectedSizes.length > 0) {
    filteredBySizeProducts = filteredByBrandProducts.filter(prod => {
      return prod.size.some(size => selectedSizes.includes(size));
    });
  }

  let filteredProductsByDiscount = [...filteredBySizeProducts];
  if (selectedDiscountRanges.length > 0) {
    filteredProductsByDiscount = filteredBySizeProducts.filter(prod => {
      return selectedDiscountRanges.some(range => {
        switch (range) {
          case 'More than 30%':
            return prod.discount >= 30;
          case 'More than 45%':
            return prod.discount >= 45;
          case 'More than 60%':
            return prod.discount >= 60;
          case 'More than 80%':
            return prod.discount >= 80;
          default:
            return false;
        }
      });
    });
  }
  // Pagination
  const pageCount = Math.ceil(filteredProductsByDiscount.length / itemsPerPage);
  const offset = activePage * itemsPerPage;
  const currentPageProducts = filteredProductsByDiscount.slice(offset, offset + itemsPerPage);

  // Pagination event handler
  const handlePageChange = ({ selected }) => {
    setActivePage(selected);
  };


  const brands = [...new Set(products.map(prod => prod.brand))];
  const sizes = [...new Set(products.flatMap(prod => prod.size))];
  const discountRanges = ['More than 30%', 'More than 45%', 'More than 60%', 'More than 80%'];

  return (
    <Layout>
      <section className='main-men'>
        <div className="container">
          <div className="row pe-0 ps-0 justify-content-between border-top border-bottom border-start py-2">
            <div className="col-2 d-flex align-items-center border-end m-0">
              <h5 className='m-0 ps-2'>Filters</h5>
            </div>
            <div className="col-3 position-relative">
              <select className="form-control selectpicker " value={selectedOption} onChange={handleSelectChange}>
                
                <option value="relevant">Relevant</option>
                <option value="popularity">Popularity</option>
                <option value="new">Whats New..</option>
                <option value="discount">Better Discount</option>
                <option value="highToLow">Price High to Low</option>
                <option value="lowToHigh">Price Low to High</option>
              </select>
              <span className='down-arrow'><MdKeyboardArrowDown /></span>
            </div>
          </div>
          <div className="row">
            <div className='col-2 border-end border-start mt-2'>
              <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header><span className='fw-bold'>Brand</span></Accordion.Header>
                  <Accordion.Body>
                    {brands.map((brand, index) => (
                      <div className="checkbox-wrapper" key={index}>
                        <Checkbox
                          id={`brand${index + 1}`}
                          name={brand}
                          onChange={handleBrandCheckboxChange}
                        />
                      </div>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><span className='fw-bold'>Size</span></Accordion.Header>
                  <Accordion.Body>
                    {sizes.map((size, index) => (
                      <div className="checkbox-wrapper" key={index}>
                        <Checkbox
                          id={`size${index + 1}`}
                          name={size}
                          onChange={handleSizeCheckboxChange}
                        />
                      </div>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header><span className='fw-bold'>Discount</span></Accordion.Header>
                  <Accordion.Body>
                    {discountRanges.map((range, index) => (
                      <div className="checkbox-wrapper" key={index}>
                        <Checkbox
                          id={`discount${index + 1}`}
                          name={range}
                          onChange={handleDiscountCheckboxChange}
                        />
                      </div>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-10">
              <div className="row justify-content-evenly">
                {filteredProductsByDiscount.slice(offset, offset + itemsPerPage).map(prod => (
                  <div className='col-3 my-2 d-flex justify-content-center align-items-center' key={prod.id}>
                    
                    <NewArrivalCard
                      id={prod.id}
                      link={`/women/:subcat/${prod.id}`}
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

export default KidInner;
