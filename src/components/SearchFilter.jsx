import React, { Component } from "react";
import {
  Input,
  Select,
  Flex,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/core";
class SearchFilter extends Component {
  render() {
    return (
      <Flex
        bg="hsl(0, 0%, 98%)"
        justify="space-between"
        px="5.3%"
        borderTop="4px outset hsl(0, 0%, 96%)"
        direction={["column", "row"]}
      >
        <InputGroup my="22px" minW="28%">
          <InputLeftElement children={<i className="fa fa-search"></i>} />

          <Input
            border="1px solid #ccc"
            borderColor="#ccc"
            bg="hsl(0,0%,100%)"
            variant="filled"
            placeholder="Search For a Country.."
            onChange={this.props.inputQuery}
            fontSize="0.8rem"
          />
        </InputGroup>
        <Select
          variant="filled"
          minW="13%"
          w={["50%", "fit-content"]}
          rounded="4px"
          boxShadow="2px 2px hsl(0, 0%, 95%)"
          border="1px solid #ccc"
          borderColor="#ccc"
          bg="hsl(0,0%,100%)"
          my="22px"
          pr="2rem"
          fontSize={["0.7rem", "0.8rem"]}
          onChange={this.props.onRegionSelect}
        >
          <option value="" defaultValue>
            Filter By Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </Flex>
    );
  }
}

export default SearchFilter;
