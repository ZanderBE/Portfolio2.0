import React, { Component } from 'react';
import './Portfolio.css';
import Homepage from './Homepage.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="portfolio-main-container">
          <Homepage />
          <Projects />
          <Contact />
      </div>
    );
  }
}

export default Portfolio;