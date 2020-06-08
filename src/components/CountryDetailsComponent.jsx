import React from "react";
import { Flex, Text, Box, Image, List, ListItem } from "@chakra-ui/core";
import { Link } from "react-router-dom";
function Country(props){
 
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
              <i
                className="fa fa-long-arrow-left"
                style={{ marginRight: "5px" }}
              ></i>{" "}
              Back
            </Box>
          </Link>
        </Box>
        <Flex
          mx="5.3%"
          className="flag-and-details"
          wrap="wrap"
          direction={["column", "row"]}
          mt="3rem"
          justify="space-between"
        >
          <Image
            w={["100%", "43%"]}
            src={props.country.flag}
            alt="Country"
          />
          <Box className="country-name-details" w={["100%", "45%"]}>
            <Text
              className="countryDetails-countryName"
              h="44px"
              pt="2rem"
              fontSize="1.3rem"
              fontWeight="800"
            >
              {props.country.name}
            </Text>
            <Flex
              className="country-detailsPage-details"
              direction="column"
              wrap="wrap"
              alignContent="space-between"
              fontSize="0.9rem"
              height={["fit-content", "fit-content", "172px"]}
            >
              <Box
                className="country-detailsPage-detailsTitle"
                mb="9px"
                w="fit-content"
                wordBreak="break-all"
              >
                Native Name :
                <Text
                  style={{ display: "inline" }}
                  color="hsl(0, 0%, 30%)"
                  mr="0px"
                  w="45%"
                  wordBreak="break-all"
                >
                  {props.country.nativeName}
                </Text>
              </Box>
              <Box
                className="country-detailsPage-detailsTitle"
                mb="9px"
                w="fit-content"
                wordBreak="break-all"
              >
                Population:
                <Text
                  color="hsl(0, 0%, 30%)"
                  mr="0px"
                  w="45%"
                  wordBreak="break-all"
                  style={{ display: "inline" }}
                >
                  {props.country.population}
                </Text>
              </Box>
              <Box
                className="country-detailsPage-detailsTitle"
                mb="9px"
                w="fit-content"
                wordBreak="break-all"
              >
                Region:
                <Text
                  style={{ display: "inline" }}
                  color="hsl(0, 0%, 30%)"
                  mr="0px"
                  w="45%"
                  wordBreak="break-all"
                >
                  {props.country.region}
                </Text>
              </Box>
              <Box
                className="country-detailsPage-detailsTitle"
                mb="9px"
                w="fit-content"
                wordBreak="break-all"
              >
                Sub Region:
                <Text
                  color="hsl(0, 0%, 30%)"
                  mr="0px"
                  w="45%"
                  wordBreak="break-all"
                  style={{ display: "inline" }}
                >
                  {props.country.subregion}
                </Text>
              </Box>
              <Box
                className="country-detailsPage-detailsTitle capital"
                mb="9px"
                w="fit-content"
                wordBreak="break-all"
              >
                {" "}
                Capital:
                <Text
                  color="hsl(0, 0%, 30%)"
                  mr="0px"
                  w="45%"
                  wordBreak="break-all"
                  style={{ display: "inline" }}
                >
                  {props.country.capital}
                </Text>
              </Box>
              <Box
                className="country-detailsPage-detailsTitle"
                mb="9px"
                w="fit-content"
                wordBreak="break-all"
              >
                Top Level Domain:
                <Text
                  color="hsl(0, 0%, 30%)"
                  mr="0px"
                  w="45%"
                  wordBreak="break-all"
                  style={{ display: "inline" }}
                >
                  {props.country.topLevelDomain[0]}
                </Text>
              </Box>
              <Box
                className="country-detailsPage-detailsTitle"
                mb="9px"
                w="fit-content"
                wordBreak="break-all"
              >
                Currencies:
                <Text
                  color="hsl(0, 0%, 30%)"
                  mr="0px"
                  w="45%"
                  wordBreak="break-all"
                  style={{ display: "inline" }}
                >
                  {props.country.currencies[0].name}
                </Text>
              </Box>
              <Flex className="country-detailsPage-Languages">
                <Box
                  className="country-detailsPage-detailsTitle"
                  mb="9px"
                  w="fit-content"
                  wordBreak="break-all"
                >
                  Languages:
                </Box>{" "}
                <ul className="languages">
                  {props.country.languages.map(language => (
                    <li
                      mr="0px"
                      w="45%"
                      wordBreak="break-all"
                      key={language.name}
                    >
                      {language.name}
                    </li>
                  ))}
                </ul>
              </Flex>
            </Flex>
            <Flex>
              <Text w="30%">Border Countries</Text>
              <List
                m="0px"
                p="0px"
                w="70%"
                display="flex"
                justify="space-evenly"
                flexWrap="wrap"
                pl="2px"
                alignItems="space-evenly"
                pb="15px"
              >
                {props.country.borders.map(borderCountry => (
                  <ListItem
                  ml={["5px","5px","5px"]}
                  mb="5px"
                    h="41px"
                    p="10px 18px 18px 10px"
                    style={{ display: "inline-block" }}
                    border="1px solid #ccc"
                    rounded="4px"
                    boxSizing="border-box"
                    bg="hsl(0, 0%, 100%)"
                    shadow="2px 2px hsl(0, 0%, 95%)"
                    w={["55px"]}
                  >
                    <a
                      className="border-country-link"
                      href={"/" + borderCountry}
                    >
                      {borderCountry}{" "}
                    </a>
                  </ListItem>
                ))}
              </List>
            </Flex>
          </Box>
        </Flex>
      </Box>
    );
  
}

export default Country;
