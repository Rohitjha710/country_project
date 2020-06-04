import React, { Component } from "react";
import { Flex,Text} from "@chakra-ui/core";
class Heading extends Component {
  state = {};
  render() {
    return (
      <Flex justify="space-between" px="5.3%" bg=" hsl(0, 0%, 99.5%)">
          <Text  fontWeight="800" fontSize="1.2rem">Where in the world?</Text>

          <Text fontWeight="600" fontSize="0.8rem" pt="0.8rem" onClick={this.props.changeTheme}>
            {" "}
            <i className="fa fa-moon-o" style={{ fontSize: 14 }}></i> Dark Mode
          </Text>
        </Flex>
    );
  }
}

export default Heading;
