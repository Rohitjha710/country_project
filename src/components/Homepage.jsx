import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCountries,
  fetchCountriesByQuery,
  fetchCountriesByRegion,
  updateQuery,
  updateRegion
} from "../actions/countriesActions";
import { debounce } from "lodash";
import SearchFilter from "./SearchFilter";
import Countries from "./Countries";
class Homepage extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }
  inputQuery = e => {
    e.persist();
    if (!this.debounced) {
      this.debounced = debounce(() => {
        let countrySearchQuery = e.target.value;

        if (countrySearchQuery !== "" && countrySearchQuery !== undefined) {
          this.props.updateQuery(countrySearchQuery);
          this.props.fetchCountriesByQuery(
            countrySearchQuery,
            this.props.regionProps
          );
        } else if (this.props.regionProps !== "") {
          this.props.updateQuery("");
          this.props.fetchCountriesByRegion(this.props.regionProps);
        } else {
          this.props.updateQuery("");
          this.props.fetchCountries();
        }
      }, 300);
    }
    this.debounced();
  };
  onRegionSelect = e => {
    let region = e.target.value;
    if (region !== "" && region !== undefined) {
      this.props.updateRegion(region);
      this.props.fetchCountriesByRegion(region, this.props.queryProps);
    } else if (
      this.props.queryProps !== "" &&
      this.props.queryProps !== undefined
    ) {
      this.props.updateRegion("");
      this.props.fetchCountriesByQuery(this.props.queryProps);
    } else {
      this.props.updateRegion("");
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
        {this.props.countriesProps.length !== 0 && (
          <Countries countries={this.props.countriesProps} />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  countriesProps: state.countries.countryList,
  regionProps: state.countries.region,
  queryProps: state.countries.query
});
export default connect(mapStateToProps, {
  fetchCountries,
  fetchCountriesByQuery,
  fetchCountriesByRegion,
  updateRegion,
  updateQuery
})(Homepage);
