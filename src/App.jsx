import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {Route,Routes,BrowserRouter} from "react-router-dom"
import Mens from './Pages/Mens';
import MenInner from './Pages/MenInner';
import 'react-toastify/dist/ReactToastify.css';
import SingleProduct from './Pages/SingleProduct';
import Womens from './Pages/Womens';
import WomenInner from './Pages/WomenInner';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Cart from './Pages/Cart';
import Kids from './Pages/Kids';
import KidInner from './Pages/KidInner';
import NewMen from './Pages/NewMen';
import NewWomen from './Pages/NewWomen';
import NewKid from './Pages/newKid';



const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Mens/>}/>
        <Route path='/men/:subcat' element={<MenInner/>}/>
        <Route path='/men/:subcat/:id' element={<SingleProduct/>}/>
        <Route path='/women' element={<Womens/>}/>
        <Route path='/women/:subcat' element={<WomenInner/>}/>
        <Route path='/women/:subcat/:id' element={<SingleProduct/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/kid' element={<Kids/>}/>
        <Route path='/kid/:subcat' element={<KidInner/>}/>
        <Route path='/newMen' element={<NewMen/>}/>
        <Route path='/newWomen' element={<NewWomen/>}/>
        <Route path='/newKid' element={<NewKid/>}/>
      </Routes>
      </BrowserRouter>
   
     
    </>
  )
}

export default App