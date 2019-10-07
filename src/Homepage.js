import React, { Component } from "react";
import "./Homepage.css";
import Navbar from "./Navbar.js";
import Quote from "./Quote.js";

import Maincontent from "./Maincontent.js";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-main-container">
        <Navbar />
        <Maincontent />
        <Quote />
      </div>
    );
  }
}

export default Homepage;
