import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const API = "/api/men";

const AppContext = createContext();
const initialState = {
  isLoading: true,
  isError: true,
  products: [],
  newProducts: [],
  isSingleLoading: false,
  singleProduct: {}
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (id) => {
    const singleAPI = `/api/men/?id=${id}`; // Dynamically generate the singleAPI URL
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(singleAPI);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
