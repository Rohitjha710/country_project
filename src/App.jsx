import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/Homepage';

import Heading from "./components/Heading";
import CountryDetails from './components/CountryDetails';
import { ThemeProvider} from 'styled-components';
import './style.css';
import GlobalStyle from './Themes';
class App extends Component {
    state = { theme:'light' }
    changeTheme =()=>{
    this.setState({theme:this.state.theme === 'light'?'dark':'light'})


    }
    render() { 
        return (
        <Router>
            <ThemeProvider theme={{mode:this.state.theme}}>
            <GlobalStyle/>
            <Heading changeTheme={this.changeTheme}/>
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