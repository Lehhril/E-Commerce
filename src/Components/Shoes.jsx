import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ShoesCard from './ShoesCard';
import shoe1 from "../assets/Images/shoes2.jpg"
import shoe2 from "../assets/Images/shoe2.jpg"
import shoe3 from "../assets/Images/shoe3.jpg"
import womenShoe from "../assets/Images/womenshoe.avif"
import womenShoe2 from "../assets/Images/womenshoe2.avif"
import womenShoe3 from "../assets/Images/womenshoe3.avif"
import kid from "../assets/Images/kidShoe.avif"
import kid2 from "../assets/Images/kidShoe2.avif"
import kid3 from "../assets/Images/kidShoe3.avif"
import kid4 from "../assets/Images/kidShoe4.avif"
import kid5 from "../assets/Images/kidShoe5.avif"

import ShoeCard from './ShoesCard';



const Shoes = () => {
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5 text-center mb-5 nine" data-aos="fade-up">
        <h1 className='shoe-title'>New Arrivals<span>Trending</span></h1>
          
        </div>
        <div className="col-12" data-aos="fade-right">
        <Tabs
      defaultActiveKey="men"
      id="justify-tab-example"
      className="mb-5"
      justify
      data-aos="fade-up"
    >
      <Tab eventKey="men" title="Men's">
        <div className="row d-flex justify-content-evenly">
          <div className="col-3">
          <ShoesCard link="/newMen" img="https://source.unsplash.com/two-men-standing-on-red-flower-in-front-of-gray-metal-wall-iuqcmC4NVNo" category="T-Shirts"/>
          </div>
          <div className="col-3">
          <ShoesCard link="/newMen" img="https://source.unsplash.com/man-leaning-on-red-muscle-car-in-street-6UEyVsw_1lU" category="Jackets"/>
          </div>
          <div className="col-3">
          <ShoesCard link="/newMen" img="https://source.unsplash.com/man-walking-outside--m3g8UAsWQk" category="OverCoats"/>
          </div>
        </div>
      </Tab>
      <Tab eventKey="women" title="Women's">
      <div className="row d-flex justify-content-evenly">
      <div className="col-3">
          <ShoesCard link="/newWomen" img="https://source.unsplash.com/woman-in-white-and-black-polka-dot-sleeveless-dress-n2-NM8z8w0w" category="Dresses"/>
          </div>
          <div className="col-3">
          <ShoesCard link="/newWomen" img="https://source.unsplash.com/woman-in-white-tank-top-and-blue-denim-jeans-wearing-black-sunglasses-sitting-on-yellow-leather-JoM9rbc_Rxg" category="Tops"/>
          </div>
          <div className="col-3">
          <ShoesCard link="/newWomen" img="https://source.unsplash.com/person-in-pink-pants-and-white-shoes-5raPrOhbKQo" category="Pants"/>
          </div>
        </div>
      </Tab>
      <Tab eventKey="kid" title="Kid's">
      <div className="row d-flex justify-content-evenly">
      <div className="col-3">
          <ShoesCard link="/newKid" img="https://source.unsplash.com/baby-seating-on-white-textile-C4rXIFSzEXk" category="Dresses"/>
          </div>
          <div className="col-3">
          <ShoesCard link="/newKid" img="https://source.unsplash.com/boy-standing-holding-his-pocket-during-daytime-fwJMG9zm3dI" category="Tshirts"/>
          </div>
          <div className="col-3">
          <ShoesCard link="/newKid" img="https://source.unsplash.com/boy-standing-beside-plants-6s9I_g2B8w8" category="Pants"/>
          </div>
        </div>
      </Tab>
      
    </Tabs>
        </div>
      </div>
    </div>
    
  )
}

export default Shoes