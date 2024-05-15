import React from 'react'
import womenAcc from "../assets/Images/accWomen2.jpg"
import menAcc from "../assets/Images/accMen3.jpg"

const AccCard = (props) => {
  const { title, womenImg, menImg } = props;
  return (
    <div className="row">
      <div className="col-12 text-center">
        <h3 className='py-2 pb-4 fs-2 acc-sub-head'>{title}</h3>
      </div>
      <div className="col-12">
        <div className="row p-5">
          
            <div className="col-6 women-acc p-0 d-flex justify-content-center align-items-center positon-relative">
              <img src={womenImg} className='acc-img acc-img-1' alt="" />
              <div className='acc-btn'>
                <a class="fancy mt-3" href="#">
                  <span class="top-key"></span>
                  <span class="text">Shop Here</span>
                  <span class="bottom-key-1"></span>
                  <span class="bottom-key-2"></span>
                </a>
              </div>
            </div>
            <div className="col-6 men-acc p-0  d-flex justify-content-center align-items-center positon-relative">
              <img src={menImg} className='acc-img acc-img-2' alt="" />
              <div className='acc-btn'>
                <a class="fancy mt-3" href="#">
                  <span class="top-key"></span>
                  <span class="text">Shop Here</span>
                  <span class="bottom-key-1"></span>
                  <span class="bottom-key-2"></span>
                </a>
              </div>
            </div>
          

        </div>
      </div>
    </div>
  )
}

export default AccCard