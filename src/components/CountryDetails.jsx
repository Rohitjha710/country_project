import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
class CountryDetails extends Component {
  state = {};

  render() {
    const country = this.props.location.state.countryData;
    return (
      <React.Fragment>
        <Heading />
        <div className="country-details-main-section">
          <div className="container">
            {" "}
            <Link className="back" to={{ pathname: "/" }}>
              <div className="back-button">
                {" "}
                <i className=" back-icon fa fa-long-arrow-left"></i> Back
              </div>
            </Link>
          </div>
          <div className="container flag-and-details">
            <img
              className="countryFlag-detailsPage"
              src={country.flag}
              alt="Country"
            />
            <div className="country-name-details">
              <p className="countryDetails-countryName">{country.name}</p>
              <div className="country-detailsPage-details">
                <p>Native Name :{country.nativeName}</p>
                <p>Population:{country.population}</p>
                <p>Region:{country.region}</p>
                <p>Sub Region:{country.subregion}</p>
                <p> Capital:{country.capital}</p>
                <p>Top Level Domain:{country.topLevelDomain[0]}</p>
                <p>Currencies:{country.currencies[0].name}</p>
                <p>
                  Languages:
                  <ul className="languages">
                    {country.languages.map(language => (
                      <li>{language.name}</li>
                    ))}
                  </ul>
                </p>
              </div>
              <div className="Border-Countries">
                <p>Border Countries</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CountryDetails;
