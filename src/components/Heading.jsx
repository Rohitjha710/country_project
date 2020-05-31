import React, { Component } from "react";
class Heading extends Component {
  state = {};
  render() {
    return (
        <div className="container heading">
          <p className="heading-message">Where in the world?</p>

          <p className="heading-theme">
            {" "}
            <i className="fa fa-moon-o" style={{ fontSize: 14 }}></i> Dark Mode
          </p>
        </div>
    );
  }
}

export default Heading;
