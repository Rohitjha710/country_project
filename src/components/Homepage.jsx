import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchCountries } from "../actions/countriesActions";

import SearchFilter from "./SearchFilter";
import Countries from "./Countries";
class Homepage extends Component {
  state = { countries: [], searchQuery: "" };
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
      fetch("https://restcountries.eu/rest/v2/name/" + countrySearchQuery)
        .then(countryResponse => countryResponse.json())
        .then(countriesBySearchQuery => {
          this.setState({
            searchQuery: countrySearchQuery,
            countries: countriesBySearchQuery
          });
        });
    }
  };
  onRegionSelect = e => {
    let region = e.target.value;
    if (region !== "") {
      fetch("https://restcountries.eu/rest/v2/region/" + region)
        .then(countriesByRegionResponse => countriesByRegionResponse.json())
        .then(countriesByRegion => {
            this.setState({countries:countriesByRegion})
        });
    }
    else{
        this.displayAllCountries();
    }
  };
  render() {
    return (
      <React.Fragment>
        <SearchFilter
          inputQuery={this.inputQuery}
          onRegionSelect={this.onRegionSelect}
        />
        <Countries countries={this.props.posts} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect(mapStateToProps, { fetchCountries })(Homepage);


