import React, { Component } from "react";
import Country from "./Country";
class Countries extends Component {
  render() {
    return (
        <div className="countries">
      <div className="container countries-container">
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
      </div></div>
    );
  }
}

export default Countries;
