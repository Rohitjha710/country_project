import React, { Component } from "react";
import { Link } from "react-router-dom";
class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <div className="country-homepage">
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
      </div>
    );
  }
}

export default Country;
