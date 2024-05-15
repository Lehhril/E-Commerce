import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { useCart } from '../Context/CartContext';
import { useProductContext } from '../Context/ProductContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import UPI from "../assets/Images/UPI.jpg"
import GPAY from "../assets/Images/GPAY.jpg"
import CC from "../assets/Images/CC.jpg"
import COD from "../assets/Images/COD.jpg"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();
  const { products } = useProductContext();
  const [totalItems, setTotalItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const deliveryCharges = 4.99; // Delivery charges constant
  useEffect(() => {
    // Calculate total items and subtotal
    let total = 0;
    cartItems.forEach(item => {
      const product = products.find(prod => prod.id === item.id);
      if (product && !isNaN(product.current_price)) {
        total += parseFloat(product.current_price);
      }
    });
    setTotalItems(cartItems.length);
    setSubTotal(total);
  }, [cartItems, products]);

  // Calculate total amount including delivery charges
  const totalAmount = subTotal + deliveryCharges;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form data is valid, you can proceed with payment
      props.onHide(); // Close the modal
      // Add logic to handle payment here
    } else {
      // Set validation errors to display to the user
      setErrors(validationErrors);
    }
  };

  const validateFormData = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
    // Add more validation rules as needed
    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handlePay = () => {
    alert("Payment Successfull! Please Buy Again");
    navigate("/"); // Use navigate here directly
    
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Payement Portal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">


            <div className="col-4 border-end">
              <h3 className='text-bold'>Summary</h3>
              <div className='col-12  d-flex flex-column'>
                <div className='d-flex justify-content-between border-bottom'>
                  <p>Total Items</p>
                  <p>{totalItems}</p>
                </div>
                <div className='d-flex justify-content-between border-bottom'>
                  <p>Sub Total</p>
                  <p>${subTotal.toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between border-bottom'>
                  <p>Delivery Charges</p>
                  <p>${deliveryCharges.toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between border-bottom'>
                  <p>Total Amount:</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>

              </div>
            </div>
            <div className="col-4 d-flex flex-column align-items-center border-end">
              <form onSubmit={handleSubmit}>
                <div className="coolinput">
                  <label htmlFor="name" className="text">Name:</label>
                  <input
                    type="text"
                    placeholder="Write here..."
                    id="name"
                    name="name"
                    className="input"
                    onChange={handleInputChange}
                    required
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="coolinput">
                  <label htmlFor="email" className="text">Email:</label>
                  <input
                    type="text"
                    placeholder="Write here..."
                    id="email"
                    name="name"
                    className="input"
                    onChange={handleInputChange}
                    required
                  />
                  {errors.name && <p className="error">{errors.email}</p>}
                </div>
                <div className="coolinput">
                  <label htmlFor="name" className="text">Mobile Number:</label>
                  <input
                    type="text"
                    placeholder="Write here..."
                    id="name"
                    name="name"
                    className="input"
                    onChange={handleInputChange}
                    required
                  />
                  {errors.name && <p className="error">Required</p>}
                </div>
                <div className="coolinput">
                  <label htmlFor="name" className="text">Address:</label>
                  <input
                    type="text"
                    placeholder="Write here..."
                    id="name"
                    name="name"
                    className="input"
                    onChange={handleInputChange}
                    required
                  />
                  {errors.name && <p className="error">Required</p>}
                </div>
                <Button type="submit mt-4 sub-btn" onClick={handleSubmit}>Submit</Button>
              </form>
            </div>
            <div className='col-4'>
              <h3>Payment Methods</h3>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header > <div className='d-flex pay-acc justify-content-between align-items-center'>
                    <div><img src={UPI} className='payment-img'></img></div>
                    <div>
                      <p className='lead text-black-50 fw-bold'>UPI</p></div>
                  </div></Accordion.Header>

                  <Accordion.Body>
                    <button class="Btn" onClick={handlePay}>
                      Pay
                      <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header > <div className='d-flex pay-acc justify-content-between align-items-center'>
                    <div><img src={GPAY} className='payment-img'></img></div>
                    <div>
                      <p className='lead text-black-50 fw-bold'>Google Pay</p></div>
                  </div></Accordion.Header>
                  <Accordion.Body>
                    <button class="Btn">
                      Pay
                      <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header > <div className='d-flex pay-acc justify-content-between align-items-center'>
                    <div><img src={CC} className='payment-img'></img></div>
                    <div>
                      <p className='lead text-black-50 fw-bold'>Credit Card</p></div>
                  </div></Accordion.Header>
                  <Accordion.Body>
                    <button class="Btn">
                      Pay
                      <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header > <div className='d-flex pay-acc justify-content-between align-items-center'>
                    <div><img src={COD} className='payment-img'></img></div>
                    <div>
                      <p className='lead text-black-50 fw-bold'>Cash on Delivery</p></div>
                  </div></Accordion.Header>
                  <Accordion.Body>
                    <button class="Btn">
                      Order Now
                      <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const { products } = useProductContext();
  const [totalItems, setTotalItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const deliveryCharges = 4.99; // Delivery charges constant
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    // Calculate total items and subtotal
    let total = 0;
    cartItems.forEach(item => {
      const product = products.find(prod => prod.id === item.id);
      if (product && !isNaN(product.current_price)) {
        total += parseFloat(product.current_price);
      }
    });
    setTotalItems(cartItems.length);
    setSubTotal(total);
  }, [cartItems, products]);

  // Calculate total amount including delivery charges
  const totalAmount = subTotal + deliveryCharges;

  // Function to handle item removal
  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <>
      <Layout>
        <section className='main-class container py-5'>
          <div className="row justify-content-start">
            <div className="col-8 border-end">
              <div className="row">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom">
                  <div>
                    <h3>Shopping Cart</h3>
                  </div>
                  <div>
                    <p>Item Numbers: {totalItems}</p>
                  </div>
                </div>

              </div>
              {cartItems.length === 0 ? (
                <div className="col-12 my-2 border-bottom">
                  <p>Cart is Empty</p>
                </div>
              ) : (
                // Iterate through cart items and render product details
                cartItems.map((item) => {
                  const product = products.find(prod => prod.id === item.id); // Get product details
                  if (!product) return null; // Handle if product is not found
                  return (
                    <div key={product.id} className='item-added col-12 my-2 d-flex justify-content-between align-items-center border-bottom'>
                      <div><img src={product.variation_0_image} className='cart-img' alt="" /></div> {/* Render product image here */}
                      <div>
                        <p className='m-0 text-uppercase'>{product.category}</p>
                        <p className='m-0 pink-text'>{product.subcategory}</p>
                        <p className='m-0'>Size: {item.size}</p>
                      </div>
                      <div>Sub total<br />
                        <p>${product.current_price}</p>
                      </div>
                      <div><button onClick={() => handleRemoveItem(item.id)} className='button'>
                        <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                      </button></div> {/* Add onClick event to remove item */}
                    </div>
                  );
                })
              )}
            </div>
            {cartItems.length > 0 && ( // Conditionally render the summary section
              <div className="col-4">
                <div className='col-12 '>
                  <h3>Cart Summary</h3>
                </div>
                {/* Summary Section */}
                <div className='col-12  d-flex flex-column'>
                  <div className='d-flex justify-content-between border-bottom'>
                    <p>Total Items</p>
                    <p>{totalItems}</p>
                  </div>
                  <div className='d-flex justify-content-between border-bottom'>
                    <p>Sub Total</p>
                    <p>${subTotal.toFixed(2)}</p>
                  </div>
                  <div className='d-flex justify-content-between border-bottom'>
                    <p>Delivery Charges</p>
                    <p>${deliveryCharges.toFixed(2)}</p>
                  </div>
                  <div className='d-flex justify-content-between border-bottom'>
                    <p>Total Amount:</p>
                    <p>${totalAmount.toFixed(2)}</p>
                  </div>
                  <div className='d-flex justify-content-center align-items-center'>
                    <a class="fancy mt-3" onClick={() => setModalShow(true)} href="#">
                      <span class="top-key"></span>
                      <span class="text">Checkout</span>
                      <span class="bottom-key-1"></span>
                      <span class="bottom-key-2"></span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </Layout>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};


export default Cart;
