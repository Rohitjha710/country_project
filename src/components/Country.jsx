import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/core";
function Country(props) {
    const { country } = props;
    return (
      <Box
        w={["90%", "45%", "30%", "20.7%"]}
        bg="hsl(0,0%,100%)"
        shadow="4px 4px hsl(0, 0%, 95%)"
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
          >
            {country.name}
          </Text>
          <Box
            color="hsl(200, 15%, 8%)"
            mb="4px"
            fontSize="0.8rem"
            fontWeight="300"
            ml="1.5rem"
            wordBreak="break-word"
          >
            Population:
            <Text
              color="hsl(0, 0%, 40%)"
              ml="2px"
              style={{ display: "inline" }}
            >
              {country.population}
            </Text>
          </Box>
          <Box
            color="hsl(200, 15%, 8%)"
            mb="4px"
            fontSize="0.8rem"
            fontWeight="300"
            ml="1.5rem"
            wordBreak="break-word"
          >
            Region:{" "}
            <Text
              color="hsl(0, 0%, 40%)"
              ml="2px"
              style={{ display: "inline" }}
            >
              {" "}
              {country.region}
            </Text>
          </Box>
          <Box
            color="hsl(200, 15%, 8%)"
            mb="4px"
            fontSize="0.8rem"
            fontWeight="300"
            ml="1.5rem"
            wordBreak="break-word"
          >
            Capital:{" "}
            <Text
              color="hsl(0, 0%, 40%)"
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
