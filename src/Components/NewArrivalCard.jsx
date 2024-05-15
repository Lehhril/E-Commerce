import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const NewArrivalCard = (props) => {
 
  const { img, name, price, oldPrice, discount, img2, initialLikes,brand,link } = props;
  const [likeCount, setLikeCount] = useState(initialLikes);

  // Function to handle like button click
  const handleLikeClick = (event) => {
    if (event.target.checked) {
      // Increment like count if checkbox is checked
      setLikeCount(prevCount => prevCount + 1);
    } else {
      // Decrement like count if checkbox is unchecked
      setLikeCount(prevCount => prevCount - 1);
    }
  }
  const notify =()=>{toast.info('Item Added to Cart Successfully!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    
    })};
    const navigate = useNavigate();
  return (
    
    <Card style={{ width: '14rem' }} className='position-relative'>
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
      {/* Main image */}
      
      <Card.Img variant="top" src={img}  className='p-img' />

{/* Secondary image displayed on hover */}
<Card.Img variant='top' src={img2} className='p-img-2' />
      

      <Card.Body>
        <Card.Text className='text-ellipsis text-start'>
        <Link to={link}>
          <span className='fw-bold'>{brand}</span><br/>
          {name}
          </Link>
        </Card.Text>
        <div className='d-flex flex-column '>
          <div className='d-flex justify-content-between align-items-start'>
            <div className='price-div'>
              <div className='d-flex align-items-center'>
                <h6 className='mb-0 fs-5'>${price} </h6>
                <p className='mb-0 dis-p'>({discount}% off)</p>
              </div>
              <p className='p-old'>${oldPrice}</p>
            </div>
            <div className='like-div'>
              <div title="Like" className="heart-container">
                <input id="like-counter" className="checkbox" type="checkbox" onChange={handleLikeClick} />
                <div className="svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                  </svg>

                  <div className='like-counter'><p>{likeCount}</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='shop-btn d-flex justify-content-center align-items-center'>
        <button className="CartBtn" onClick={() => navigate(link)}>
            <span className="IconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="white" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
            </span>
            <p className="text mb-0">View Item</p>
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}
{/* <div class="svg-container">

</div>
<span class="IconContainer">
 
</span> */}

export default NewArrivalCard