import React from 'react'
import Header from "../Components/Header.jsx"

import menBanner from "../assets/Images/menBanner2.jpg"
import CategoryCard from '../Components/CategoryCard.jsx'
import Footer from '../Components/Footer.jsx'
import Layout from '../Components/Layout.jsx'
import womenBan from "../assets/Images/womenBanner3.png"

const Womens = () => {
  return (
    <>
    <section className='men-main-banner'>
    <Header/>    
      <section className='mens-banner'>
        <div className="container">
          <div className=" inner-men">
            <img src={womenBan} alt="" />
          </div>
        </div>
      
    </section>
      <section className='mens-category py-4'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 nine">
            <h1>Categories <span>Browse by Category</span></h1>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-evenly pt-4">
            <CategoryCard 
            img={"https://source.unsplash.com/woman-wearing-black-crew-neck-tank-dress-7eDUHk7Jb_o"}
            cat={"Chemises"}
            link={"/women/Chemises"}
            />
            <CategoryCard 
            img={"https://source.unsplash.com/a-woman-in-a-crochet-top-poses-for-a-picture-FDGisyPaDCw"}
            cat={"Blouses-Chemises"}
            link={"/women/Blouses & Chemises"}
            />
            <CategoryCard 
            img={"https://source.unsplash.com/woman-wearing-dragon-graphic-t-shirt-leaning-on-door-frame-Kv5WiqG_3NA"}
            cat={"T-shirts"}
            link={"/women/T-shirts"}
            />
            <CategoryCard 
            img={"https://source.unsplash.com/a-black-and-white-photo-of-a-woman-sitting-on-a-bench-sBcv_qRnZG8"}
            cat={"Printed dresses"}
            link={"/women/Robes imprimées"}
            />
            <CategoryCard 
            img={"https://source.unsplash.com/woman-wearing-blue-coat-mfoH7-IPaBI"}
            cat={"PullsCardigans"}
            link={"/women/Pulls & Cardigans"}
            />
            <CategoryCard 
            img={"https://source.unsplash.com/woman-playing-basketball-Wi5VkZbvH7w"}
            cat={"Culotte haute"}
            link={"/women/Culotte haute"}
            />
            <CategoryCard
            img={"https://source.unsplash.com/woman-standing-near-open-door-Nt0hNFMGbxM"}
            cat={"Pantalons & Shorts"}
            link={"/women/Pantalons & Shorts"}
            /><CategoryCard 
            img={"https://source.unsplash.com/two-womens-wearing-polka-dot-dresses-holding-their-turban-headbands-zMn2MnEJGYY"}
            cat={"Robes décontractées"}
            link={"/women/Robes décontractées"}
            /><CategoryCard 
            img={"https://source.unsplash.com/a-person-standing-outside-SNkn3w4XpyI"}
            cat={"Soutiens-gorge"}
            link={"/women/Soutiens-gorge"}
            /><CategoryCard 
            img={"https://source.unsplash.com/woman-in-white-dress-standing-on-sea-water-during-daytime-SxG47lShsdw"}
            cat={"Bikinis &Tankinis"}
            link={"/women/Bikinis &Tankinis"}
            />
           {/* <CategoryCard 
            img={"https://source.unsplash.com/person-in-black-and-white-pants-and-white-sneakers-sitting-on-gray-floor-tiles-9Ch-39ZNDk0"}
            cat={"Combinaisons-Grenouillères"}
            link={"/women/Combinaisons-Grenouillères"}
            /> */}
            <CategoryCard 
            img={"https://source.unsplash.com/woman-wearing-white-and-black-track-suit-dNoGNxFGfIo"}
            cat={"Pajama Sets"}
            link={"/women/Pajama Sets"}
            />
          </div>
        </div>
      </section>
      
   <Footer/>
   </section>
   </>
  )
}

export default Womens