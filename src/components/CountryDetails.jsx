import React, { Component } from "react";
import CountryDetailsComponent from "./CountryDetailsComponent";
import { fetchCountry } from "../actions/countriesActions";
import { connect } from "react-redux";
class CountryDetails extends Component {
  componentDidMount() {
    let { countryName } = this.props.match.params;
    this.props.fetchCountry(countryName);
  }
  render() {
    let { countryName } = this.props.match.params;
    return (
      <React.Fragment>
        {Object.keys(this.props.country).length !== 0 &&
          this.props.country.alpha3Code.toLowerCase() ===
            countryName.toLowerCase() && (
            <CountryDetailsComponent country={this.props.country} />
          )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  country: state.countries.countryDetails
});
export default connect(mapStateToProps, { fetchCountry })(CountryDetails);
