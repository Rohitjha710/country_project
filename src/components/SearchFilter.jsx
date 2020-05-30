import React, { Component } from "react";
class SearchFilter extends Component {
  render() {
    return (
      <div className="search-filter">
        <div className="container search-filter-container">
          <div className="search-box">
            {" "}
            <i className="fa fa-search"></i>
            <input
              className="search-input"
              placeholder="Search For a Country.."
              onChange={this.props.inputQuery}
            />
          </div>

          <select className="region-options" onChange={this.props.onRegionSelect}>
            <option value="" selected>Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>{" "}
      </div>
    );
  }
}

export default SearchFilter;
