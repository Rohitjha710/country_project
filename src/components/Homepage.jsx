import React, { useEffect } from "react";
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
function inputQuery(e, props) {
  e.persist();
  // let debounced;
//   if (debounced) {
//  debounced = debounce(() => {
  let countrySearchQuery = e.target.value;

  if (countrySearchQuery !== "" && countrySearchQuery !== undefined) {
    props.updateQuery(countrySearchQuery);
    props.fetchCountriesByQuery(countrySearchQuery, props.regionProps);
  } else if (props.regionProps !== "") {
    props.updateQuery("");
    props.fetchCountriesByRegion(props.regionProps);
  } else {
    props.updateQuery("");
    props.fetchCountries();
  }
  // }, 300);
  // }
  // debounced();
}
function onRegionSelect(e, props) {
  let region = e.target.value;
  if (region !== "" && region !== undefined) {
    props.updateRegion(region);
    props.fetchCountriesByRegion(region, props.queryProps);
  } else if (
   props.queryProps !== "" &&
   props.queryProps !== undefined
  ) {
   props.updateRegion("");
   props.fetchCountriesByQuery(props.queryProps);
  } else {
   props.updateRegion("");
   props.fetchCountries();
  }
}

function Homepage(props) {
  useEffect(() => {
    console.log("calledd")
    props.fetchCountries();
  }, []);
  return (
    <div>
      <SearchFilter
        inputQuery={e => inputQuery(e, props)}
        onRegionSelect={e => onRegionSelect(e, props)}
      />
      {props.countriesProps.length !== 0 && (
        <Countries countries={props.countriesProps} />
      )}
    </div>
  );
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
