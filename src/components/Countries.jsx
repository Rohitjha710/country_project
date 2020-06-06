import React, { Component } from "react";
import Country from "./Country";
import {
  Flex
} from "@chakra-ui/core";
class Countries extends Component {
  render() {
    return (
      <Flex mx={["5.3%","2.3%","3.3%","2.3%"]} wrap="wrap" justify="space-evenly"  >
        { this.props.countries.map(country => (
          <Country key={country.name} country={country} />
        ))}
      </Flex>
    );
  }
}

export default Countries;
