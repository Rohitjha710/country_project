import React ,{useEffect} from "react";
import CountryDetailsComponent from "./CountryDetailsComponent";
import { fetchCountry } from "../actions/countriesActions";
import { connect } from "react-redux";
function CountryDetails(props) {
 useEffect(()=>{
  let { countryName } = props.match.params;
    props.fetchCountry(countryName);
  
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])
    let { countryName } = props.match.params;
    return (
      <React.Fragment>
        {Object.keys(props.country).length !== 0 &&
          props.country.alpha3Code.toLowerCase() ===
            countryName.toLowerCase() && (
            <CountryDetailsComponent country={props.country} />
          )}
      </React.Fragment>
    );
  }

const mapStateToProps = state => ({
  country: state.countries.countryDetails
});
export default connect(mapStateToProps, { fetchCountry })(CountryDetails);
