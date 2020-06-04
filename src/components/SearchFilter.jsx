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
      // <div className="search-filter">
      <Flex
        bg="hsl(0, 0%, 98%)"
        justify="space-between"
        px="5.3%"
        // h="100px"
        borderTop="4px outset hsl(0, 0%, 96%)"
      >
        {/* <Box
          
          minW="28%"
          p="12px 20px"
          m="25px 0"
          border="1px solid #ccc"
          borderRadius="4px"
          boxSizing="border-box"
          bg="hsl(0, 0%, 100%)"
        > */}{" "}
        <InputGroup my="22px" minW="28%">
          <InputLeftElement children={<i className="fa fa-search"></i>} />

          <Input
            border="1px solid #ccc"
            borderColor="#ccc"
            bg="hsl(0,0%,100%)"
            variant="filled"
            placeholder="Search For a Country.."
            onChange={this.props.inputQuery}
          />
        </InputGroup>
        {/* </Box> */}
        <Select
          variant="filled"
          minW="13%"
          rounded="4px"
          boxShadow="2px 2px hsl(0, 0%, 95%)"
          w="fit-content"
          border="1px solid #ccc"
          borderColor="#ccc"
          bg="hsl(0,0%,100%)"
          my="22px"
          pr="0px"
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
      // </div>
    );
  }
}

export default SearchFilter;
