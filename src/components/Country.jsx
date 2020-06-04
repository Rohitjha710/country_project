import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Box
} from "@chakra-ui/core";
class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <Box className="country-homepage"  w={["100%","45%","30%","20.7%",]} bg="hsl(0,0%,100%)" shadow="4px 4px hsl(0, 0%, 95%)" mb="100px" rounded="12px">
        <Link
          className="anchorTag"
          to={{ pathname: `/${country.alpha3Code}`, state: { countryData: country }}}
        >
          <img
            src={country.flag}
            className="country-image-homepage"
            alt="Country-Flag"
          />
          <p className="country-name-homepage">{country.name}</p>
          <div className="country-details-homepage">
            Population:<p style={{display:'inline'}}>{country.population}</p>
          </div>
          <div className="country-details-homepage">Region: <p style={{display:'inline'}}>  {country.region}</p></div>
          <div className="country-details-homepage">Capital: <p style={{display:'inline'}}>{country.capital}</p></div>
        </Link>
      </Box>
    );
  }
}

export default Country;
