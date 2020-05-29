import React, { Component } from "react";
import Heading from "./Heading";
import SearchFilter from "./SearchFilter";
import Countries from "./Countries";
class Homepage extends Component {
  state = {};
  componentDidMount(){
      alert("hi");
  }
  render() {
    return (
      <React.Fragment>
        <Heading />
        <SearchFilter />
        <Countries />
      </React.Fragment>
    );
  }
}

export default Homepage;
