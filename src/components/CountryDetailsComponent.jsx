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
              <div className="country-detailsPage-detailsTitle">Native Name :<p style={{display:'inline'}}>{this.props.country.nativeName}</p></div>
              <div className="country-detailsPage-detailsTitle">Population:<p style={{display:'inline'}}>{this.props.country.population}</p></div>
              <div className="country-detailsPage-detailsTitle">Region:<p style={{display:'inline'}}>{this.props.country.region}</p></div>
              <div className="country-detailsPage-detailsTitle">Sub Region:<p style={{display:'inline'}}>{this.props.country.subregion}</p></div>
              <div className="country-detailsPage-detailsTitle capital"> Capital:<p style={{display:'inline'}}>{this.props.country.capital}</p></div>
              <div className="country-detailsPage-detailsTitle">Top Level Domain:<p style={{display:'inline'}}>{this.props.country.topLevelDomain[0]}</p></div>
              <div className="country-detailsPage-detailsTitle">Currencies:<p style={{display:'inline'}}>{this.props.country.currencies[0].name}</p></div>
              <div className="country-detailsPage-Languages"><div className="country-detailsPage-detailsTitle">
                Languages:
                </div>  <ul className="languages">
                  {this.props.country.languages.map(language => (
                    <li key={language.name}>{language.name}</li>
                  ))}
                </ul>
                </div>
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
