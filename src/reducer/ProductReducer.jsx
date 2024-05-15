import React, { useContext } from 'react'
import { AppContext } from '../Context/ProductContext';

const ProductReducer = (state, action) => {

  // if(action.type === "SET_LOADING"){
  //   return{
  //     ...state,
  //     isLoading: true
  //   }
  // }
  // if(action.type === "API_ERROR"){
  //   return{
  //     ...state,
  //     isLoading: false,
  //     isError: true
  //   }
  // }
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true
      }
    case "SET_API_DATA":
      const newProductData = action.payload.filter((curElem) => {
        return curElem.is_new === true;
      })
      return ({
        ...state,
        isLoading: false,
        products: action.payload,
        newProducts: newProductData
      })
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      }
      case "SINGLE_API_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true
      }
      case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        isError: false,
        singleProduct: action.payload 
      }
      case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
        isError: false
      }
    default:
      return state;
  }
  return state;
}



export default ProductReducer
