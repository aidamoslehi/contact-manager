import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


import "bootstrap";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/alert";
import "bootstrap/dist/css/bootstrap.min.css";


import "../src/fonts/Poppins-Regular.ttf";
import "../src/fonts/Roboto-Regular.ttf";
import "../src/fonts/OpenSans-Regular.ttf"
import "../src/fontawesome-free-5.15.3-web/css/all.css";

import Contact from './Components/contact/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
