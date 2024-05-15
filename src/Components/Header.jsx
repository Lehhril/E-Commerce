import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaRegUser } from "react-icons/fa";
import logo from "../assets/Images/profile.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [isTokenAvailable, setIsTokenAvailable] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsTokenAvailable(true);
      getUser();
      
    }
  }, [])

  const getUser = () => {
    axios.get('https://mock-api.binaryboxtuts.com/api/user', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then((response) => {
        setUser(response.data);
        // Store user name in local storage after setting the user state
        localStorage.setItem("UserName", response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  const logoutAction = () => {
    axios.post('https://mock-api.binaryboxtuts.com/api/logout', {}, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then((r) => {
        localStorage.removeItem('token');
        localStorage.removeItem('type');
        localStorage.removeItem('user');
        setIsTokenAvailable(false);
        localStorage.setItem("isLogged",false)
        setUser("");
        alert("You have Successfully Signed-Out");
        navigate("/");
      })
      .catch((e) => {
        console.log(e)
      });
  }

  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <div className="container">
        <Navbar.Brand href="#"><Link to={"/"}><img src={logo} className='logo-img' alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto main-nav">

            <CustomDropdown title="Womens" className="">
              <div className='d-flex dropdown-div'>
                <div>
                  <h6>Top Wear</h6>
                  <NavDropdown.Item href="#"><Link to={"/women/Chemises"}>Chemises</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/women/Blouses & Chemises"}>Blouses-Chemises</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/women/T-shirts"}>T-shirts</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/women/Combinaisons-Grenouillères"}>Combinaisons-Grenouillères</Link></NavDropdown.Item>
                </div>
                <NavDropdown.Divider />
                <div>
                  <h6>Bottom Wear</h6>
                  <NavDropdown.Item href="#"><Link to={"/women/Pulls & Cardigans"}>Pulls & Cardigans</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/women/Culotte haute"}>Culotte haute</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/women/Pantalons & Shorts"}>Pantalons & Shorts</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/women/Pajama Sets"}>Pajama Sets</Link></NavDropdown.Item>
                </div>
                <div>
                  <h6>Others</h6>
                  <NavDropdown.Item href="#"><Link to={"/women/Robes imprimées"}>Printed dresses</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/women/Robes décontractées"}>Robes décontractées</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/women/Soutiens-gorge"}>Soutiens-gorge</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/women/Bikinis &Tankinis"}>Bikinis & Tankinis</Link></NavDropdown.Item>
                 
                 
                  
                </div>
              </div>
            </CustomDropdown>
            <CustomDropdown title="Mens" className="">
            <div className='d-flex dropdown-div'>
                <div>
                  <h6>Top Wear</h6>
                  <NavDropdown.Item href="#"><Link to={"/men/T-Shirts"}>T-SHIRT</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/men/Shirts"}>Shirts</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/men/Hoodies"}>HOODIE AND SWEATSHIRT</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/men/OVERCOAT"}>OVERCOAT</Link></NavDropdown.Item>
                </div>
                <NavDropdown.Divider />
                <div>
                  <h6>Bottom Wear</h6>
                  <NavDropdown.Item href="#"><Link to={"/men/JEANS"}>JEANS</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/men/Boxers"}>Boxers</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/men/Doudounes & Parkas"}>PUFFER JACKET</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/men/Cardigans"}>Cardigans</Link></NavDropdown.Item>
                </div>
                <div>
                  <h6>Others</h6>
                  <NavDropdown.Item href="#"><Link to={"/men/Golf Shirts"}>Golf Shirts</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/men/HENLEY-SHIRT"}>HENLEY-SHIRT</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/men/Pyjama"}>Pyjama</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/men/Suit Jackets"}>Suit Jackets</Link></NavDropdown.Item>
                </div>
              </div>
            </CustomDropdown>
            <CustomDropdown title="Kids" className="">
            <div className='d-flex dropdown-div'>
                <div>
                  <h6>Kids Wear</h6>
                  <NavDropdown.Item href="#"><Link to={"/kid/Robes"}>Robes</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/kid/Salopettes & Combinaisons"}>Salopettes & Combinaisons</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/kid/Costume & Jupe-culotte"}>Costume & Jupe-culotte</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/kid/Costumes pour bébé"}>Costumes pour bébé</Link></NavDropdown.Item>
                </div>
                <NavDropdown.Divider />
                <div>
                  <h6>Kids Wear</h6>
                  <NavDropdown.Item href="#"><Link to={"/kid/Chaussures pour fille"}>Chaussures pour fille</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/kid/Coutumes & Co-ords"}>Coutumes & Co-ords</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/kid/Sweaters & Hoodies"}>Sweaters & Hoodies</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#"><Link to={"/kid/Cardigans"}>Cardigans</Link></NavDropdown.Item>
                </div>
                
              </div>
            </CustomDropdown>
           
          </Nav>
          <Nav className='ms-auto'>
          
          <Nav.Item >
              <Nav.Link ><Link to={"/cart"}><FaCartShopping className='cart-svg cart-con'/></Link></Nav.Link>
            </Nav.Item>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <FaRegUser /><p className='m-0 px-2'>{user.name}</p> <IoIosArrowDown />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><Link to={"/login"}>Login /Sign Up</Link></Dropdown.Item>
                {isTokenAvailable && (
                  <Dropdown.Item>
                    <button onClick={logoutAction}>LogOut</button>
                  </Dropdown.Item>
                )}
                
              </Dropdown.Menu>
            </Dropdown>
           
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

const CustomDropdown = ({ title, children }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <div className="custom-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className='px-0 px-lg-4'>{title}</span>
      {showDropdown && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Header;
