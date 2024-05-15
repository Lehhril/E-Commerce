import React from 'react'
import Header from "../Components/Header.jsx"

import menBanner from "../assets/Images/menBanner2.jpg"
import CategoryCard from '../Components/CategoryCard.jsx'
import Footer from '../Components/Footer.jsx'
import Layout from '../Components/Layout.jsx'
import menBan from "../assets/Images/menBannerNew.png"
import SuspenseCategoryCard from '../Components/SuspenseCategoryCard.jsx'

const Mens = () => {
  return (
    <>
    <section className='men-main-banner'>
    <Header/>    
      <section className='mens-banner py-3'>
        <div className="container">
          <div className=" inner-men">
            <img src={menBan} alt="" />
          </div>
        </div>
      
    </section>
      <section className='mens-category section-spacing py-4'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 nine">
            <h1>Categories <span>Browse by Category</span></h1>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-evenly pt-4">
            <SuspenseCategoryCard 
            img={"https://source.unsplash.com/man-in-white-crew-neck-shirt-wearing-black-sunglasses-Z4rqvRpRj38"}
            cat={"T-SHIRT"}
            link={"/men/T-Shirts"}
            />
            <SuspenseCategoryCard 
            img={"https://source.unsplash.com/man-in-white-polo-shirt-9QW52RyBLao"}
            cat={"SHIRT"}
            link={"/men/Shirts"}
            />
            <SuspenseCategoryCard 
            img={"https://source.unsplash.com/man-in-gray-pullover-hoodie-closed-eyes-while-heads-up-umfpFoKxIVg"}
            cat={"HOODIE AND SWEATSHIRT"}
            link={"/men/Hoodies"}
            />
            <SuspenseCategoryCard 
            img={"https://source.unsplash.com/man-in-brown-coat-and-black-pants-iIjResyhhW0"}
            cat={"OVERCOAT"}
            link={"/men/Overcoats"}
            />
            <SuspenseCategoryCard 
            img={"https://source.unsplash.com/man-in-brown-jacket-and-blue-denim-jeans-sitting-on-brown-concrete-bench-during-daytime-d54wbtjedog"}
            cat={"JEAN"}
            link={"/men/JEANS"}
            />
            <SuspenseCategoryCard 
            img={"https://source.unsplash.com/woman-in-white-crew-neck-t-shirt-and-blue-denim-shorts-standing-on-road-during-daytime-pWTSPGQtyZY"}
            cat={"BOXER"}
            link={"/men/Boxers"}
            />
            <SuspenseCategoryCard
            img={"https://source.unsplash.com/man-in-red-jacket-wearing-black-sunglasses-3v976693QGs"}
            cat={"PUFFER JACKET"}
            link={"/men/Doudounes & Parkas"}
            /><SuspenseCategoryCard 
            img={"https://source.unsplash.com/man-standing-At__EKm5PGE"}
            cat={" CARDIGAN"}
            link={"/men/Cardigans"}
            /><CategoryCard 
            img={"https://source.unsplash.com/a-man-with-glasses-standing-in-front-of-a-wall-e1vqpBLgSOk"}
            cat={"GOLF-SHIRT"}
            link={"/men/Golf Shirts"}
            /><CategoryCard 
            img={"https://source.unsplash.com/man-smiling-while-facing-other-person-Tgf9HylKri4"}
            cat={"HENLEY-SHIRT"}
            link={"/men/Henley Shirts"}
            />
           <CategoryCard 
            img={"https://source.unsplash.com/person-in-black-and-white-pants-and-white-sneakers-sitting-on-gray-floor-tiles-9Ch-39ZNDk0"}
            cat={"PYJAMA"}
            link={"/men/Pyjama"}
            />
            <CategoryCard 
            img={"https://source.unsplash.com/man-in-black-tuxedo-AjJsc0hk9s0"}
            cat={"SUIT JACKETS"}
            link={"/men/Suit Jackets"}
            />
          </div>
        </div>
      </section>
      
   <Footer/>
   </section>
   </>
  )
}

export default Mens