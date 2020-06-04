import React, { Component } from "react";
import { Flex, Text, Box,Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";
class Country extends Component {
  render() {
    return (
      <Box
        className="country-details-main-section"
        pt="3rem"
        borderTop="4px outset hsl(0, 0%, 96%)"
      >
        <Box mx="5.3%">
          <Link className="back" to={{ pathname: "/" }}>
            <Box
              w="fit-content"
              p="11px 30px 10px 21px"
              fontSize="14px"
              border="1px solid #ccc"
              rounded="4px"
              bg="hsl(0, 0%, 100%)"
              shadow="2px 2px hsl(0, 0%, 95%)"
            >
              {" "}
              <i className="fa fa-long-arrow-left" style={{marginRight:"5px"}}></i> Back
            </Box>
          </Link>
        </Box>
        <Box mx="5.3%" className="flag-and-details">
          <Image
            className="countryFlag-detailsPage"
            src={this.props.country.flag}
            alt="Country"
          />
          <Box className="country-name-details">
            <p className="countryDetails-countryName">
              {this.props.country.name}
            </p>
            <Box className="country-detailsPage-details">
              <Box className="country-detailsPage-detailsTitle">
                Native Name :
                <p style={{ display: "inline" }}>
                  {this.props.country.nativeName}
                </p>
              </Box>
              <Box className="country-detailsPage-detailsTitle">
                Population:
                <p style={{ display: "inline" }}>
                  {this.props.country.population}
                </p>
              </Box>
              <Box className="country-detailsPage-detailsTitle">
                Region:
                <p style={{ display: "inline" }}>{this.props.country.region}</p>
              </Box>
              <Box className="country-detailsPage-detailsTitle">
                Sub Region:
                <p style={{ display: "inline" }}>
                  {this.props.country.subregion}
                </p>
              </Box>
              <Box className="country-detailsPage-detailsTitle capital">
                {" "}
                Capital:
                <p style={{ display: "inline" }}>
                  {this.props.country.capital}
                </p>
              </Box>
              <Box className="country-detailsPage-detailsTitle">
                Top Level Domain:
                <p style={{ display: "inline" }}>
                  {this.props.country.topLevelDomain[0]}
                </p>
              </Box>
              <Box className="country-detailsPage-detailsTitle">
                Currencies:
                <p style={{ display: "inline" }}>
                  {this.props.country.currencies[0].name}
                </p>
              </Box>
              <Box className="country-detailsPage-Languages">
                <Box className="country-detailsPage-detailsTitle">
                  Languages:
                </Box>{" "}
                <ul className="languages">
                  {this.props.country.languages.map(language => (
                    <li key={language.name}>{language.name}</li>
                  ))}
                </ul>
              </Box>
            </Box>
            <Box className="border-countries-section">
              <p>Border Countries</p>
              <ul className="border-countries">
                {this.props.country.borders.map(borderCountry => (
                  <li className="border-country">
                    <a
                      className="border-country-link"
                      href={"/" + borderCountry}
                    >
                      {borderCountry}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Country;
