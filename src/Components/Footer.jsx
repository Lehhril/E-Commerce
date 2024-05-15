import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareSnapchat } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
      <div className="container pt-5 border-bottom">
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-3 text-start">
           <div><h1>Vogue Vault</h1></div>
           <div className='foot-icons'>
            <FaInstagram/>
            <FaFacebook/>
            <FaSquareTwitter/>
            <FaSquareSnapchat/>
           </div>
          </div>
          <div className="col-md-9 col-sm-12 d-flex justify-content-center align-items-center">
            {/* Solutions */}
            <div className="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
              <h5 className="mb-4 font-weight-bold text-uppercase">Mens</h5>
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#"><Link to={"/men/T-Shirts"}>T-Shirt</Link></a></li>
                <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#"><Link to={"/men/Shirts"}>Shirts</Link></a></li>
                {/* Other list items */}
              </ul>
            </div>
            {/* Developers */}
            <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
              <h5 className="mb-4 font-weight-bold text-uppercase">Women</h5>
              <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#"><Link to={"/women/Chemises"}>Chemises</Link></a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#"><Link to={"/women/T-shirts"}>T-shirts</Link></a></li>
                {/* Other list items */}
              </ul>
            </div>
            {/* Company */}
            <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
              <h5 className="mb-4 font-weight-bold text-uppercase">Kids</h5>
              <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#"><Link to={"/kid/Robes"}>Robes</Link></a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#"><Link to={`/kid/${encodeURIComponent("Salopettes & Combinaisons")}`}>Salopettes & Combinaisons</Link></a></li>
                {/* Other list items */}
              </ul>
            </div>
            {/* Connect */}
            
          </div>
          <div className="col-md-12">
            <div className="py-4 d-flex justify-content-center align-items-center">
              <a className="mr-4" href="../privacy.html">Privacy & terms</a>
              <a href="../sitemap.xml">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
