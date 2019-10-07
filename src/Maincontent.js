import React, { Component } from "react";
import "./Maincontent.css";

class Maincontent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home" className="maincontent-main-container">
        <div className="git-linked-button-container">
          <a href="https://github.com/ZanderBE">Github</a>
          <a href="https://linkedin.com/in/zanderbrownlieedward">Linkedin</a>
        </div>
        <div className="full-stack-developer-container">
          <h1>Full</h1>
          <h1>Stack</h1>
          <h1>Developer</h1>
        </div>
        <div className="astronaut-image-container">
          <img
            src="https://cdn.glitch.com/7d9e80e5-cf2e-47b5-8b83-1a4dc62423e7%2Fastro_moon_rocket.svg?v=1569010028272"
            alt="Astronaut and Rocket on Moon"
          ></img>
        </div>
        <div className="quote-homepage-container"></div>
      </div>
    );
  }
}

export default Maincontent;
