import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/Homepage';
import CountryDetails from './components/CountryDetails';
import { ThemeProvider} from 'styled-components';
import './style.css';
import GlobalStyle from './Themes';
class App extends Component {
    state = {  }
    render() { 
        return (
        <Router>
            <ThemeProvider theme={{mode:'dark'}}>
            <GlobalStyle/>
            <Route exact path="/">
            
            <HomePage/>
            </Route>
            <Route exact path="/:countryName" component={CountryDetails}>


            </Route>
            </ThemeProvider>
        </Router>
         
        );
    }
}
 
export default App;