import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import firebase from './Access/firebase';

import Form from './components/Form';
import Login from './components/Login';
import VistaPrincipal from './components/VistaPrincipal';
import Error from './Error';
//import Header from './components/header';

class Router extends Component {
    componentDidMount(){
        console.log('aqui');
        firebase.auth().onAuthStateChanged((user) => {
            if(user && window.location.pathname !== '/vista1') window.location = '/vista1';
            <Form />
        })
    }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/vista1" component={VistaPrincipal} />
                    <Route exact path="/form" component={Form} />
                    
                    <Route component ={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;