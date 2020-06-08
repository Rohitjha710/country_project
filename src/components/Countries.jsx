import React from "react";
import Country from "./Country";
import {
  Flex
} from "@chakra-ui/core";

function Countries (props){
 
    return (
      <Flex mx={["5.3%","2.3%","3.3%","2.3%"]} wrap="wrap" justify="space-evenly"  >
        { props.countries.map(country => (
          <Country key={country.name} country={country} />
        ))}
      </Flex>
    );
  
}

export default Countries;
