import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { useProductContext } from '../Context/ProductContext';
import { useCart } from '../Context/CartContext';
import { useNavigate, useParams } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { ToastContainer, toast } from 'react-toastify';
import sizeChart from "../assets/Images/sizeChart.jpg"
import womenSize from "../assets/Images/sizechartW.png"
import kidsize from "../assets/Images/sizechartK.jpg"
const SingleProduct = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const { id } = useParams();

  const { singleProduct, isSingleLoading, getSingleProduct } = useProductContext();


  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  const handleSizeChange = (size) => {
    const index = selectedSizes.indexOf(size);
    if (index === -1) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      const newSelectedSizes = [...selectedSizes];
      newSelectedSizes.splice(index, 1);
      setSelectedSizes(newSelectedSizes);
    }

    // Toggle the 'checked' class on the li element
    const liElement = document.querySelector(`li[data-size="${size}"]`);
    if (liElement) {
      liElement.classList.toggle('checked');
    }
  };

  const handleAddToCart = () => {
    const isLogged = localStorage.getItem('isLogged'); // Check if user is logged in
    if (isLogged === 'true') {
      console.log('Selected sizes:', selectedSizes);
      addToCart({ id: singleProduct.id, name: singleProduct.name, size: selectedSizes });
      toast.info('Item Added to Cart Successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/cart");
    } else {
      setShowAlert(true); 
    }
  };
  const customSort = (a, b) => {
    const sizesOrder = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    return sizesOrder.indexOf(a) - sizesOrder.indexOf(b);
  };

  const handleLikeClick = (event) => {
    if (event.target.checked) {
      // Increment like count if checkbox is checked
      setLikeCount(prevCount => prevCount + 1);
    } else {
      // Decrement like count if checkbox is unchecked
      setLikeCount(prevCount => prevCount - 1);
    }
  }
  const [activeDiv, setActiveDiv] = useState('prod-div-1');

  const handleClick = (div) => {
    setActiveDiv(div);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <Layout>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="colored"
        />
        <section className='main-product'>
  {isSingleLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="container">
      <div className="row pt-2 pb-5 align-items-center">
        <div className="col-6 border-end">
          <div className="row">
            <div className="col-4 py-5 px-3 d-flex flex-column align-items-end justify-content-center prod-img-main">
              <div className={activeDiv === 'prod-div-1' ? 'active1' : ''} onClick={() => handleClick('prod-div-1')}>
                <img src={singleProduct.variation_0_thumbnail} className='img-fluid my-2' alt="" />
              </div>
              <div className={activeDiv === 'prod-div-2' ? 'active1' : ''} onClick={() => handleClick('prod-div-2')}>
                <img src={singleProduct.variation_1_thumbnail} className='img-fluid my-2' alt="" />
              </div>
            </div>
            <div className="col-8 prod-img d-flex justify-content-center align-items-center p-5">
              <div className={activeDiv === 'prod-div-1' ? 'prod-img-1' : 'prod-img-2'}>
                <img src={activeDiv === 'prod-div-1' ? singleProduct.variation_0_image : singleProduct.variation_1_image} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 px-4">
          <div className=''>
            <div>
            <h2>{singleProduct.subcategory}</h2>
              <p>{singleProduct.name}</p>
            </div>
            <div className='d-flex pt-4 align-items-center'>
              
              <h3 className='pe-3 '>${singleProduct.current_price}</h3>
              <p className='fs-6 m-0 pb-1 pe-3 text-black-50'>MRP <span className='p-old fs-6'>{singleProduct.raw_price}</span></p>
              <h4 className='dis-price fw-bold'>{singleProduct.discount}% off</h4>
            </div>
            <p className='tax-color'>inclusive of all Taxes</p>
            <button onClick={handleShow} className='size-chart'>Size Chart:</button>
          </div>
          <div className=''>
            {singleProduct.size && singleProduct.size.length > 0 ? (
              <div className='prod-size border'>
                <p className='m-0 p-3'>Available Sizes:</p>
                <ul className='m-0 p-3'>
                  {singleProduct.size.map((size, index) => (
                    <label key={index}>
                      <li className={selectedSizes.includes(size) ? 'checked' : ''}>
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => handleSizeChange(size)}
                          disabled={!singleProduct.size || singleProduct.size.length === 0}
                          className='prod-check visually-hidden'
                        />
                        <span className="checkbox-label" onClick={() => handleSizeChange(size)}>{size}</span>
                      </li>
                    </label>
                  ))}
                </ul>
              </div>
            ) : (
              <div className='prod-size border'>
                <p>Out Of Stock</p>
              </div>
            )}
          </div>
          <div className='add-to-cart py-3'>
            <button className="CartBtn" onClick={handleAddToCart} disabled={!singleProduct.size || singleProduct.size.length === 0}>
              <span className="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="white" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
              </span>
              <p className="text mb-0">Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</section>

      </Layout>
      <Offcanvas show={show} placement='top' onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Size Chart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex justify-content-center'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12">
              <img src={sizeChart} className='img-fluid' alt="" />
              </div>
              <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
                <img src={womenSize} className='img-fluid' alt="" />
              </div>
              <div className="col-lg-6 col-12 m-auto">
                <img src={kidsize} className='img-fluid' alt="" />
              </div>
            </div>
          </div>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SingleProduct;
