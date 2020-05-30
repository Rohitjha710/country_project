import React, { Component } from "react";

import { Link } from "react-router-dom";
class Country extends Component {
  state = {};
  render() {
    return (
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
            src={this.props.country.flag}
            alt="Country"
          />
          <div className="country-name-details">
            <p className="countryDetails-countryName">{this.props.country.name}</p>
            <div className="country-detailsPage-details">
              <p>Native Name :{this.props.country.nativeName}</p>
              <p>Population:{this.props.country.population}</p>
              <p>Region:{this.props.country.region}</p>
              <p>Sub Region:{this.props.country.subregion}</p>
              <p> Capital:{this.props.country.capital}</p>
              <p>Top Level Domain:{this.props.country.topLevelDomain[0]}</p>
              <p>Currencies:{this.props.country.currencies[0].name}</p>
              <p>
                Languages:
                <ul className="languages">
                  {this.props.country.languages.map(language => (
                    <li key={language.name}>{language.name}</li>
                  ))}
                </ul>
              </p>
            </div>
            <div className="border-countries-section">
              <p>Border Countries</p>
              <ul className="border-countries">
                {this.props.country.borders.map(borderCountry => (
                  <li className="border-country">
                    <a
                      className="border-country-link"
                      href={'/'+borderCountry}
                    >
                      {borderCountry}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Country;
