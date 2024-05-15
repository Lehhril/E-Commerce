import React from 'react'
import Header from "../Components/Header.jsx"


import CategoryCard from '../Components/CategoryCard.jsx'
import Footer from '../Components/Footer.jsx'
import Layout from '../Components/Layout.jsx'
import kidBan from "../assets/Images/kidBanner.jpg"

const Kids = () => {
  return (
    <>
    <section className='men-main-banner'>
    <Header/>    
      <section className='kids-banner py-3'>
        <div className="container">
          <div className=" inner-kid">
            <img src={kidBan} alt="" />
          </div>
        </div>
      
    </section>
      <section className='mens-category  py-4'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 nine">
            <h1>Categories <span>Browse by Category</span></h1>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-evenly pt-4">
            <CategoryCard 
            img={"https://source.unsplash.com/girl-in-white-and-green-floral-tank-top-wearing-white-sun-hat-du2JnmcSvX0"}
            cat={"Robes"}
            link={"/kid/Robes"}
            />
            <CategoryCard 
            img={"https://source.unsplash.com/a-babys-clothes-and-a-teddy-bear-on-a-blanket-N1hHqgJg58A"}
            cat={"Salopettes & Combinaisons"}
            link={`/kid/${encodeURIComponent("Salopettes & Combinaisons")}`} // Pass the subcategory param
            />
            <CategoryCard 
            img={"https://source.unsplash.com/selective-focus-photo-of-boy-standing-on-grey-pavement-n9R0MN3XGvY"}
            cat={"Costume & Jupe-culotte"}
            link={"/kid/Costume & Jupe-culotte"}
            />
            <CategoryCard 
            img={"https://source.unsplash.com/a-small-child-sitting-on-some-steps-4RIAVeoHrEA"}
            cat={"Costumes pour bébé"}
            link={"/kid/Costumes pour bébé"}
            />
            
            {/* <CategoryCard 
            img={"https://source.unsplash.com/toddler-in-sweatsuit-TgJoOJGg3TE"}
            cat={"Blousons & Vestes"}
            link={`/kid/${encodeURIComponent("Blousons & Vestes")}`}
            /> */}
            <CategoryCard
            img={"https://source.unsplash.com/girl-sitting-on-bench-NV_IPwv0Saw"}
            cat={"Chaussures pour fille"}
            link={"/kid/Chaussures pour fille"}
            /><CategoryCard 
            img={"https://source.unsplash.com/girl-stand-near-ace-storefront-under-cloudy-sky-during-daytime-KKy7WGqvFdI"}
            cat={" Chaussures pour fille"}
            link={"/kid/Chaussures pour fille"}
            /><CategoryCard 
            img={"https://source.unsplash.com/matching-pair-of-boys-black-and-gray-floral-collared-shirt-and-shorts-standing-on-gray-concrete-area-PWcJ9t7Ne_Q"}
            cat={"Coutumes & Co-ords"}
            link={"/kid/Coutumes & Co-ords"}
            /><CategoryCard 
            img={"https://source.unsplash.com/boy-seating-on-rock-fragments-OPTW9ruQPyc"}
            cat={"Sweaters & Hoodies"}
            link={"/kid/Sweaters & Hoodies"}
            />
           
          </div>
        </div>
      </section>
      
   <Footer/>
   </section>
   </>
  )
}

export default Kids