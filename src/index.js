import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Login from './pages/Login.js';
import VistaPrincipal from './pages/vistaPrincipal';
//import Header from './components/header';
//import SelectBox from './components/selectbox';
//import * as serviceWorker from './serviceWorker';
//import firebaseConfig from './Access/firebase';



ReactDOM.render((
    <VistaPrincipal />
), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
