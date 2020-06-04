import React, { Component } from "react";
import CountryDetailsComponent from "./CountryDetailsComponent";
import {fetchCountry} from '../actions/countriesActions';
import { connect } from "react-redux";
class CountryDetails extends Component {
  componentDidMount() {
    console.log("inside component did mount of countrydetails")
    const { countryName } = this.props.match.params;
    this.props.fetchCountry(countryName);
  }
  render() {
    console.log("printing props")
    console.log(this.props.country);
    return (
      <React.Fragment>
        {Object.keys(this.props.country).length && (
          <CountryDetailsComponent country={this.props.country} />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  country: state.countries.countryDetails
});
export default connect(mapStateToProps,{fetchCountry})(CountryDetails);
