import React, { Component } from 'react';
import './Quote.css';



class Quote extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="quote-main-container">
          <p className="quote">"A learner by nature, a developer at heart."</p>
      </div>
    );
  }
}

export default Quote;