import React from 'react';
import ReactDOM from 'react-dom';
//import Data from './components/data';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import VistaPrincipal from './pages/vistaPrincipal';
//import Login from './pages/Login';
//import Header from './components/header';
//import SelectBox from './components/selectbox';

ReactDOM.render(
    <React.StrictMode>
        <VistaPrincipal />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
