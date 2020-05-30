import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/Homepage';
import CountryDetails from './components/CountryDetails';
import './style.css';
class App extends Component {
    state = {  }
    render() { 
        return (
        <Router>
            <Route exact path="/">

            <HomePage/>
            </Route>
            <Route exact path="/:countryName" component={CountryDetails}>


            </Route>
        </Router>
         
        );
    }
}
 
export default App;