import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { CartContextProvider } from './Components/context/cartContext';

// Configuracion Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbkJfH6iHBrQRz7UqLOgL9vwcgqKtpJA0",
  authDomain: "harmania-bab63.firebaseapp.com",
  projectId: "harmania-bab63",
  storageBucket: "harmania-bab63.appspot.com",
  messagingSenderId: "959338784929",
  appId: "1:959338784929:web:7f5be938c5d0e00048a8e0"
};

// Inicia app
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <CartContextProvider>
    <App />
  </CartContextProvider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
