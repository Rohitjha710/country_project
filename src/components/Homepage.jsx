import React, { Component } from "react";
import Heading from "./Heading";
import SearchFilter from "./SearchFilter";
import Countries from "./Countries";
class Homepage extends Component {
  state = {countries:[]};
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(countriesResponseObject => countriesResponseObject.json())
      .then(countries => {
        console.log(countries);
        this.setState({countries:countries})
      });
  }
  render() {
    return (
      <React.Fragment>
        <Heading />
        <SearchFilter />
        <Countries countries={this.state.countries}/>
      </React.Fragment>
    );
  }
}

export default Homepage;
