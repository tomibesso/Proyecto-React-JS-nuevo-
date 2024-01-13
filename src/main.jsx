import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAshAZA7i1CbECGxNsEGipYU_rJe7H07hI",
  authDomain: "proyecto-react-js-besso.firebaseapp.com",
  projectId: "proyecto-react-js-besso",
  storageBucket: "proyecto-react-js-besso.appspot.com",
  messagingSenderId: "235719528568",
  appId: "1:235719528568:web:bff602e972947380eedd8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)