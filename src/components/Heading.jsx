import React from "react";
import { Flex, Text, useColorMode } from "@chakra-ui/core";
const Heading = (props)=> {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {"light" : "hsl(0, 0%, 99.5%)" ,"dark":"hsl(209, 23%, 22%)"}
  const color = {"lght" :"black" ,"dark": "hsl(0,0%,100%)"}
  
  const bodyBackground={"light":"hsl(0, 0%, 98%)","dark":"hsl(207, 26%, 17%)"}
  document.querySelector("body").style.backgroundColor=bodyBackground[colorMode];
  return (
    <Flex justify="space-between" px="5.3%"  bg={bgColor[colorMode]} color={color[colorMode]} >
      <Text fontWeight="800" fontSize="1.2rem" >
        Where in the world?
      </Text>

      <Text
        fontWeight="600"
        fontSize="0.8rem"
        pt="0.8rem"
        onClick={toggleColorMode}
      >
        {" "}
        <i className="fa fa-moon-o" style={{ fontSize: 14 }}></i> Dark Mode
      </Text>
    </Flex>
  );
}

export default Heading;
