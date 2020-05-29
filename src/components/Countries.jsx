import React, { Component } from "react";
import Country from "./Country";
class Countries extends Component {
  render() {
    return (
        <div className="countries">
      <div className="container countries-container">
        {this.props.countries.map(country=>(
        <Country country={country}/>            
        ))}
      </div></div>
    );
  }
}

export default Countries;
