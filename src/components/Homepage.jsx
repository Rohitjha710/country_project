import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchCountries,fetchCountriesByQuery,fetchCountriesByRegion } from "../actions/countriesActions";

import SearchFilter from "./SearchFilter";
import Countries from "./Countries";
class Homepage extends Component {
  componentDidMount() {
    // if (this.state.searchQuery === "") {
    //   this.displayAllCountries();
    // }
    this.props.fetchCountries();
  }
  displayAllCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(countriesResponseObject => countriesResponseObject.json())
      .then(countries => {
        this.setState({ countries: countries });
      });
  };
  inputQuery = e => {
    let countrySearchQuery = e.target.value;
    if (countrySearchQuery !== "") {
      this.props.fetchCountriesByQuery(countrySearchQuery);
    }
    else{
      this.props.fetchCountries();
    }
  };
  onRegionSelect = e => {
    let region = e.target.value;
    if (region !== "") {
      this.props.fetchCountriesByRegion(region);
    }
    else{
        this.props.fetchCountries();
    }
  };
  render() {
    return (
      <React.Fragment>
        <SearchFilter
          inputQuery={this.inputQuery}
          onRegionSelect={this.onRegionSelect}
        />
        <Countries countries={this.props.countriesProps} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  countriesProps: state.countries.countryList
});
export default connect(mapStateToProps, { fetchCountries,fetchCountriesByQuery,fetchCountriesByRegion })(Homepage);


