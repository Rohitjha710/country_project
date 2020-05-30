import React, { Component } from "react";
import Heading from "./Heading";
import CountryDetailsComponent from "./CountryDetailsComponent";
class CountryDetails extends Component {
  state = {
    country:
      this.props.location.state === undefined
        ? ""
        : this.props.location.state.countryData
  };
  componentDidMount() {
    // if (this.props.location.state === undefined) {
      const { countryName } = this.props.match.params;
      fetch("https://restcountries.eu/rest/v2/alpha/" + countryName)
        .then(countryDetailsResponse => countryDetailsResponse.json())
        .then(countryDetails => {
          this.setState({ country: countryDetails });
        });
    // }
  }
  render() {
      console.log(this.state.country)
    return (
      <React.Fragment>
        <Heading />
        { this.state.country && <CountryDetailsComponent country={this.state.country}/>}
      </React.Fragment>
    );
  }
}

export default CountryDetails;
