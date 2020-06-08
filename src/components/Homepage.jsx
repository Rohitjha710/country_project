import React, { useEffect,useCallback } from "react";
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
 

const Homepage = (props)=> {
  useEffect(() => {
    console.log("calledd")
    props.fetchCountries();
  }, []);
 const debounceFunction = useCallback(debounce((countrySearchQuery,regionSelected)=>{
  
  if (countrySearchQuery !== "" && countrySearchQuery !== undefined) {

    props.updateQuery(countrySearchQuery);
    props.fetchCountriesByQuery(countrySearchQuery,regionSelected);
  } else if (props.regionSelected !== "" && props.regionSelected !== undefined) {
    props.updateQuery("");
    props.fetchCountriesByRegion(props.regionSelected);
  } else {
    props.updateQuery("");
    props.fetchCountries();
  }

},300)
,[]);
const inputQuery = (e)=> {
  e.persist();

  let countrySearchQuery = e.target.value;
  
  debounceFunction(countrySearchQuery,props.regionProps);
  
}

const onRegionSelect =(e) => {
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
  return (
    <div>
      <SearchFilter
        inputQuery={e => inputQuery(e)}
        onRegionSelect={e => onRegionSelect(e)}
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
