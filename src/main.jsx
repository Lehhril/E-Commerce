import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { AppProvider } from './Context/ProductContext.jsx';
import axios from 'axios';
import { CartProvider } from './Context/CartContext.jsx';

// Define the API key directly in your main.jsx file
const API_KEY = "binarybox_api_key_VzO8M31mfzUAW58MBuDkyVX68IWufWJWW7m5BqqSi3FSXHHwKeHjuXQzOC7QdACzffplQ93npFb6Q3sMQLeImXxkz3IHQDkWy1yt";

// Log the API key to the console
console.log('API Key:', API_KEY);

// Add axios interceptor for API key
axios.interceptors.request.use(function (config) {
  // Add the API key to the headers
  config.headers['X-Binarybox-Api-Key'] = API_KEY;
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
