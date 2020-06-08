import React from "react";
import {
  Input,
  Select,
  Flex,
  InputGroup,
  InputLeftElement,
  useColorMode
} from "@chakra-ui/core";
function SearchFilter(props) {
  const { colorMode} = useColorMode();
  const border = {"light":"4px outset hsl(0, 0%, 96%)","dark":"4px outset hsl(209, 23%, 22%)" }
  const inputBorder={"light":"1px solid #ccc","dark": "1px solid hsl(209, 23%, 27%)"}
  const inputBorderColor={"light":"#ccc","dark":"hsl(209, 23%, 27%)"}
  const inputBg={"light":"hsl(0,0%,100%)","dark":"hsl(209, 23%, 22%)"}
  const inputColor ={"light": "","dark":"hsl(0,0%,100%)"}
    return (
      <Flex
        justify="space-between"
        px="5.3%"
        borderTop={border[colorMode]}
        direction={["column", "row"]}
      >
        <InputGroup my="22px" minW="28%" 
            color={inputColor[colorMode]}>
          <InputLeftElement children={<i className="fa fa-search"></i>} />

          <Input
            border={inputBorder[colorMode]}
            borderColor={inputBorderColor[colorMode]}
            bg={inputBg[colorMode]}
            variant="filled"
            placeholder="Search For a Country.."
            onChange={props.inputQuery}
            fontSize="0.8rem"
            color={inputColor[colorMode]}
          />
        </InputGroup>
        <Select
          variant="filled"
          minW="13%"
          w={["50%", "fit-content"]}
          rounded="4px"
          boxShadow={colorMode ==='light'? "2px 2px hsl(0, 0%, 95%)":"2px 2px hsl(209, 23%, 27%"}
          border={colorMode ==='light'?"1px solid #ccc":"1px solid #ccc"}
          borderColor={inputBorderColor[colorMode]}
          bg={inputBg[colorMode]}
          color={inputColor[colorMode]}
          my="22px"
          pr="2rem"
          fontSize={["0.7rem", "0.8rem"]}
          onChange={props.onRegionSelect}
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


export default SearchFilter;
