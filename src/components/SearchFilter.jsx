import React, { Component } from "react";
class SearchFilter extends Component {
  render() {
    return (
      <div className="search-filter">
        <div className="container search-filter-container">
          <textarea className="search-box" placeholder="Search For a Country.."/>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>{" "}
      </div>
    );
  }
}

export default SearchFilter;
