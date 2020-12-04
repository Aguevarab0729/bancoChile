import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Router from './Router';

export default class App extends Component {
  render(){  
    return(
      <div className="App">
        <Router />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}