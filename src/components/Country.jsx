import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text,useColorMode } from "@chakra-ui/core";

function Country(props) {
  const { colorMode } = useColorMode();
const BOXbg={"light":"hsl(0,0%,100%)","dark":"hsl(209, 23%, 22%)"}
const BOXShadow={"light":"4px 4px hsl(0, 0%, 95%)","dark":"4px 4px hsl(209, 23%, 26%)"};
const boxColorName = {"light":"black","dark":"hsl(0,0%,100%)"}
const boxColorTitle = {"light":"hsl(200, 15%, 8%)","dark":"hsl(0,0%,100%)"}
const boxColorText = {"light":"hsl(0, 0%, 40%)","dark":"hsl(0,0%,80%)"}

const { country } = props;
    return (
      <Box
        w={["90%", "45%", "30%", "20.7%"]}
        bg={BOXbg[colorMode]}
        shadow={BOXShadow[colorMode]}
        mb="100px"
        rounded="12px"
        pb="1rem"
      >
        <Link
          className="anchorTag"
          to={{
            pathname: `/${country.alpha3Code}`,
            state: { countryData: country }
          }}
        >
          <Image
            w="100%"
            h="50%"
            objectFit="cover"
            src={country.flag}
            alt="Country-Flag"
            borderTopLeftRadius="12px"
            borderTopRightRadius="12px"
          />
          <Text
            fontWeight="600"
            ml="1.5rem"
            wordBreak="break-word"
            fontSize="1rem"
            
            color={boxColorName[colorMode]}
          >
            {country.name}
          </Text>
          <Box
            color={boxColorTitle[colorMode]}
            mb="4px"
            fontSize="0.8rem"
            fontWeight="300"
            ml="1.5rem"
            wordBreak="break-word"
          >
            Population:
            <Text
              color={boxColorText[colorMode]}
              ml="2px"
              style={{ display: "inline" }}
            >
              {country.population}
            </Text>
          </Box>
          <Box
            color={boxColorTitle[colorMode]}
            mb="4px"
            fontSize="0.8rem"
            fontWeight="300"
            ml="1.5rem"
            wordBreak="break-word"
          >
            Region:{" "}
            <Text
              color={boxColorText[colorMode]}
              ml="2px"
              style={{ display: "inline" }}
            >
              {" "}
              {country.region}
            </Text>
          </Box>
          <Box
            color={boxColorTitle[colorMode]}
            mb="4px"
            fontSize="0.8rem"
            fontWeight="300"
            ml="1.5rem"
            wordBreak="break-word"
          >
            Capital:{" "}
            <Text
              color={boxColorText[colorMode]}
              ml="2px"
              style={{ display: "inline" }}
            >
              {country.capital}
            </Text>
          </Box>
        </Link>
      </Box>
    );
  }


export default Country;
