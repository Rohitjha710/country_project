import React, { Component } from "react";
import CountryDetailsComponent from "./CountryDetailsComponent";
class CountryDetails extends Component {
  state = {
    country:
      this.props.location.state === undefined
        ? ""
        : this.props.location.state.countryData
  };
  componentDidMount() {
    const { countryName } = this.props.match.params;
    fetch("https://restcountries.eu/rest/v2/alpha/" + countryName)
      .then(countryDetailsResponse => countryDetailsResponse.json())
      .then(countryDetails => {
        this.setState({ country: countryDetails });
      });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.country && (
          <CountryDetailsComponent country={this.state.country} />
        )}
      </React.Fragment>
    );
  }
}

export default CountryDetails;
